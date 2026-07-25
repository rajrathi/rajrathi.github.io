---
# ---------------------------------------------------------------------------
# POST TEMPLATE — copy this file to start a new post.
#
#   cp content/blog/_template.md content/blog/my-new-post.md
#
# The file name becomes the URL: my-new-post.md -> /blog/my-new-post/
# Files starting with an underscore are ignored, so this one never publishes.
# ---------------------------------------------------------------------------

# REQUIRED. Shown as the <h1>, in the post list, in search results and RSS.
title: The title of your post

# REQUIRED. YYYY-MM-DD. Controls ordering and the displayed date.
date: 2026-07-25

# REQUIRED. One or two sentences. Used in the post list, the <meta
# description> and the RSS feed. Write it for someone deciding whether to read.
summary: A sentence or two that says what the reader will get out of this post.

# OPTIONAL. Free-form. Tags become filter buttons on /blog and get their own
# page at /blog/tags/<tag>/. Reuse existing tags where you can:
# AI, Machine Learning, Deep Learning, Data Science, Data Engineering, Cloud.
tags: [AI, Cloud]

# OPTIONAL. Header image, path inside /public. Also used for social sharing.
# cover: /img/my-cover.png
# coverAlt: Describe the image for people using a screen reader.

# OPTIONAL. true keeps the post out of the built site, the feed and the sitemap.
# Useful for work in progress. Defaults to false.
draft: true
---

Everything below the `---` is normal Markdown. Reading time is calculated
automatically — you never set it.

## Headings make the table of contents

Use `##` for sections and `###` for subsections. The first `#` is unnecessary:
the title above is already the page's `<h1>`.

Regular paragraphs, **bold**, _italic_, `inline code` and
[links](https://example.com) all work as you would expect.

> Blockquotes are styled as a neon-edged callout. Good for a warning, a caveat,
> or a note to yourself.

### Code blocks

Add the language after the opening fence to get syntax highlighting:

```python
def cosine_similarity(a: np.ndarray, b: np.ndarray) -> float:
    """Cosine similarity between two vectors."""
    return float(a @ b / (np.linalg.norm(a) * np.linalg.norm(b)))
```

```bash
uv run pytest -q --maxfail=1
```

### Lists and tables

1. Ordered lists work.
2. So do nested ones:
   - like this
   - and this

| Column | Meaning                          |
| ------ | -------------------------------- |
| `p50`  | median latency                   |
| `p99`  | the number people complain about |

### Images

Put the file in `public/img/` and reference it from the root. Always write alt
text.

![A dependency graph with services as nodes](/img/example.png)

---

That is the whole system. Write the file, save it, and it appears on `/blog`.
