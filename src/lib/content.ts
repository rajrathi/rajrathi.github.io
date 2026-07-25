/**
 * Typed accessors over the content collections.
 *
 * Pages import from here rather than calling `getCollection` directly, so that
 * sorting, draft filtering and reading-time calculation live in one place.
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import readingTime from 'reading-time';
import { tagSlug } from './url';

/* -------------------------------------------------------------------------- */
/* Blog                                                                       */
/* -------------------------------------------------------------------------- */

export type Post = CollectionEntry<'blog'>;

/** Drafts are visible while running `astro dev`, hidden in production builds. */
const includeDrafts = import.meta.env.DEV;

/** All publishable posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => includeDrafts || !data.draft);
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

/**
 * Estimated reading time, derived from the raw Markdown body.
 * Nothing to configure and nothing to keep in sync — it is recomputed at build.
 */
export function getReadingTime(post: Post): string {
  const stats = readingTime(post.body ?? '');
  const minutes = Math.max(1, Math.round(stats.minutes));
  return `${minutes} min read`;
}

/** Every tag in use, with how many posts carry it, most-used first. */
export async function getTags(): Promise<
  Array<{ label: string; slug: string; count: number }>
> {
  const posts = await getPosts();
  const counts = new Map<string, { label: string; count: number }>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = tagSlug(tag);
      const existing = counts.get(slug);
      if (existing) existing.count += 1;
      else counts.set(slug, { label: tag, count: 1 });
    }
  }

  return [...counts.entries()]
    .map(([slug, { label, count }]) => ({ slug, label, count }))
    .sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
}

/** Posts carrying a given tag (matched on the slug, so case does not matter). */
export async function getPostsByTag(slug: string): Promise<Post[]> {
  const posts = await getPosts();
  return posts.filter((post) => post.data.tags.some((t) => tagSlug(t) === slug));
}

/* -------------------------------------------------------------------------- */
/* Résumé data                                                                */
/* -------------------------------------------------------------------------- */

/** Sort helper: YAML entries render in the order they appear in the file. */
const byFileOrder = <T extends { data: { order: number } }>(a: T, b: T) =>
  a.data.order - b.data.order;

export async function getExperience() {
  return (await getCollection('experience')).sort(byFileOrder);
}

export async function getEducation() {
  return (await getCollection('education')).sort(byFileOrder);
}

export async function getSkills() {
  return (await getCollection('skills')).sort(byFileOrder);
}

/** Featured projects float to the top; the rest keep their file order. */
export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    return byFileOrder(a, b);
  });
}

/* -------------------------------------------------------------------------- */
/* Formatting                                                                 */
/* -------------------------------------------------------------------------- */

/** "22 May 2022" — unambiguous and locale-stable across build machines. */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** "2022-05-22" for <time datetime="..."> and structured data. */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0]!;
}
