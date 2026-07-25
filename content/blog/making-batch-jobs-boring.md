---
title: Making batch jobs boring
date: 2026-06-14
summary: >-
  Four habits that turned a nightly pipeline from something I dreaded getting
  paged about into something I stopped thinking about: idempotency, partition
  discipline, contract tests, and failing loudly.
tags: [Data Engineering, Cloud, Data Science]
---

> **STARTER DRAFT.** The structure and the arguments are here; the specific
> numbers and war stories are marked with `PLACEHOLDER`. Swap them for your own
> before publishing, or delete this file.

The best compliment a batch pipeline can receive is that nobody mentions it.
Nobody has an opinion about it. It runs at 02:00, it finishes, and the dashboards
are correct when people arrive in the morning.

Getting there is not about clever engineering. It is about removing every reason
the job might need a human. Four things did most of the work for me.

## 1. Make every run idempotent

The single highest-leverage property. If re-running a job with the same inputs
produces the same result, then recovery is always "run it again" — and "run it
again" is a thing an automated retry can do at 02:07 without waking anyone.

In practice that means killing append-only writes:

```python
# Fragile: a retry after a partial failure double-counts.
df.write.mode("append").parquet(f"{root}/events")

# Idempotent: the partition is replaced wholesale, so a retry is a no-op
# with respect to correctness.
(
    df.write
      .mode("overwrite")
      .option("partitionOverwriteMode", "dynamic")
      .partitionBy("event_date")
      .parquet(f"{root}/events")
)
```

The same idea in SQL is `DELETE` the target partition inside the same transaction
as the `INSERT`, or a `MERGE` keyed on something genuinely unique. What you are
buying is the right to be careless about retries.

## 2. Partition on the thing you filter by, and nothing else

Most slow Spark jobs I have looked at were not slow because of the compute. They
were slow because they read data they did not need, or because they were reading
forty thousand tiny files.

Two rules that cover almost every case:

- Partition by the column that appears in the `WHERE` clause of the queries that
  read the table. Usually a date. If nobody filters on it, it is not a partition
  key — it is a directory tax.
- Target file sizes in the low hundreds of megabytes. Below ~32 MB you are paying
  more in object-store listing and task scheduling than in actual work.

```python
# Coalesce to a sane file count before writing, based on estimated output size.
target_file_mb = 128
n = max(1, int(estimated_output_mb / target_file_mb))
df.repartition(n, "event_date").write...
```

> **PLACEHOLDER.** Insert the real example here — the job, the runtime before,
> the runtime after, and what specifically changed. Concrete numbers are what
> make this section worth reading.

## 3. Test the contract, not the transformation

Unit tests on transformation logic are fine and you should have them. But they
are not what breaks. What breaks is upstream: a column gets renamed, a currency
silently switches from minor to major units, a nullable field starts being null.
Your logic is perfect and your output is garbage.

So assert on the shape of the data as it arrives, before you compute anything:

```python
from typing import Sequence

def assert_contract(df, *, required: Sequence[str], non_null: Sequence[str]):
    missing = set(required) - set(df.columns)
    assert not missing, f"upstream dropped columns: {sorted(missing)}"

    for col in non_null:
        nulls = df.filter(df[col].isNull()).limit(1).count()
        assert nulls == 0, f"unexpected nulls in {col}"

    assert df.limit(1).count() > 0, "empty input — upstream probably failed"
```

Cheap, and it moves the failure from "wrong numbers in a dashboard, discovered
Thursday" to "job failed at 02:03, discovered by the job".

## 4. Fail loudly, and only once

The temptation when a job is flaky is to make it tolerant: catch the exception,
log a warning, carry on with partial data. This is the worst possible outcome. A
job that fails is a job somebody fixes. A job that quietly emits eighty percent
of the rows is a data quality incident with a three-week fuse.

Two things to get right:

- **Fail the whole run.** Do not let a task write partial output and exit zero.
- **Alert on the failure, not on the retries.** If the orchestrator retries three
  times, one alert should fire — after the last attempt — and it should say what
  the job was, which partition, and where the logs are. Three pages for one
  incident trains everyone to ignore pages.

In Airflow that is roughly:

```python
default_args = {
    "retries": 3,
    "retry_delay": timedelta(minutes=5),
    "retry_exponential_backoff": True,
    "email_on_retry": False,   # only the final failure is worth an alert
    "email_on_failure": True,
}
```

Then add an SLA or a freshness check so that a job which never _starts_ is as
visible as one that fails — the silent no-op is the failure mode monitoring
usually misses.

## What this adds up to

None of this is sophisticated. It is idempotent writes, sensible partitions,
input assertions and honest alerting. But together they change the question you
ask when something goes wrong from "what state is the warehouse in and how do I
repair it" to "did it retry successfully?"

> **PLACEHOLDER.** Close with your own before/after — page volume, or the number
> of manual backfills you used to run per month versus now.
