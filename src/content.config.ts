/**
 * Content collections.
 *
 * This file is the *only* bridge between the plain-text files in `content/` and
 * the rest of the site. It does two things:
 *
 *   1. Tells Astro where to find each kind of content.
 *   2. Validates it with a schema, so a typo in a YAML file fails the build with
 *      a readable error instead of rendering a broken page.
 *
 * You should not need to touch this to add a project, a job or a blog post.
 * You only touch it if you want a *new field* on one of those things.
 */
import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { file, glob } from 'astro/loaders';
import { load as parseYaml } from 'js-yaml';

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/** Turn arbitrary text into a URL/id-safe slug. */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Parser for our YAML list files.
 *
 * Astro's `file()` loader wants either an array of objects that each carry a
 * unique `id`, or an object keyed by id. Requiring you to hand-write an `id` in
 * every YAML entry would be exactly the kind of bookkeeping this site is
 * supposed to avoid, so we generate ids here instead.
 *
 * We also stamp each entry with `order`, its index in the file, so the site can
 * render entries in the order you wrote them. (Collection reads are not
 * order-guaranteed, so we sort by this downstream.)
 *
 * @param keyField which field to derive the id from
 */
function orderedYamlList(keyField: string) {
  return (text: string): Record<string, Record<string, unknown>> => {
    const parsed = parseYaml(text) ?? [];

    if (!Array.isArray(parsed)) {
      throw new Error(
        `Expected a YAML list (a file of "- " entries), got ${typeof parsed}.`
      );
    }

    const entries: Record<string, Record<string, unknown>> = {};

    parsed.forEach((item, index) => {
      if (item === null || typeof item !== 'object') {
        throw new Error(`Entry #${index + 1} is not a mapping of key: value pairs.`);
      }

      const record = item as Record<string, unknown>;
      const base = slugify(String(record[keyField] ?? `entry-${index + 1}`));
      // Prefix with the index so ids stay unique even if two entries share a
      // title, and so they remain stable when you reorder the file.
      const id = `${String(index).padStart(2, '0')}-${base}`;

      entries[id] = { ...record, order: index };
    });

    return entries;
  };
}

/** Shared shape for `{ label, href }` link lists. */
const linkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

/* -------------------------------------------------------------------------- */
/* Collections                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Blog posts — content/blog/*.md and *.mdx
 * Files beginning with `_` are ignored, which is how `_template.md` stays
 * unpublished.
 */
const blog = defineCollection({
  loader: glob({
    base: './content/blog',
    pattern: '**/[^_]*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    /** Drafts are excluded from the site, the feed and the sitemap. */
    draft: z.boolean().default(false),
    /** Optional override; defaults to the site owner. */
    author: z.string().optional(),
  }),
});

/**
 * Standalone Markdown blocks — content/*.md
 * Currently just `about.md`, which is rendered into the About section. Drop
 * another .md file next to it and you can pull it in the same way.
 */
const pages = defineCollection({
  loader: glob({ base: './content', pattern: '*.md' }),
  // No frontmatter required; these are plain prose.
  schema: z.object({ title: z.string().optional() }),
});

/** Work history — content/experience.yaml */
const experience = defineCollection({
  loader: file('./content/experience.yaml', { parser: orderedYamlList('role') }),
  schema: z.object({
    order: z.number(),
    role: z.string(),
    company: z.string(),
    // Coerced, so `start: 2019` (a bare year, which YAML reads as a number)
    // works just as well as `start: Sep 2020`.
    start: z.coerce.string(),
    end: z.coerce.string(),
    location: z.string().optional(),
    url: z.url().optional(),
    summary: z.string().optional(),
    bullets: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

/** Education — content/education.yaml */
const education = defineCollection({
  loader: file('./content/education.yaml', { parser: orderedYamlList('degree') }),
  schema: z.object({
    order: z.number(),
    degree: z.string(),
    institution: z.string(),
    start: z.coerce.string(),
    end: z.coerce.string(),
    url: z.url().optional(),
    note: z.string().optional(),
  }),
});

/** Portfolio projects — content/projects.yaml */
const projects = defineCollection({
  loader: file('./content/projects.yaml', { parser: orderedYamlList('title') }),
  schema: z.object({
    order: z.number(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    year: z.union([z.string(), z.number()]).optional(),
    links: z.array(linkSchema).default([]),
  }),
});

/** Skill groups — content/skills.yaml */
const skills = defineCollection({
  loader: file('./content/skills.yaml', { parser: orderedYamlList('group') }),
  schema: z.object({
    order: z.number(),
    group: z.string(),
    items: z.array(z.string()),
  }),
});

export const collections = { blog, pages, experience, education, projects, skills };
