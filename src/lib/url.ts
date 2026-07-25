/**
 * URL helpers.
 *
 * Every internal link and asset path in this project goes through `url()`, so
 * that changing `base` in astro.config.mjs (for example, to move the site to
 * rajrathi.github.io/portfolio) is a single-line change.
 */

const BASE = import.meta.env.BASE_URL; // "/" for a user site, "/portfolio/" for a project site

/** Prefix a root-relative path with the configured base path. */
export function url(pathname: string): string {
  if (/^(https?:)?\/\//.test(pathname) || pathname.startsWith('mailto:')) {
    return pathname; // already absolute — leave it alone
  }
  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${path}` || '/';
}

/** Absolute URL, for canonical links, Open Graph and RSS. */
export function absoluteUrl(pathname: string, siteOrigin: string | URL): string {
  return new URL(url(pathname), siteOrigin).toString();
}

/** Permalink for a blog post. */
export function postUrl(id: string): string {
  return url(`/blog/${id}/`);
}

/** Permalink for a tag archive. */
export function tagUrl(tag: string): string {
  return url(`/blog/tags/${tagSlug(tag)}/`);
}

/** Tags are displayed as written but addressed in lowercase-dashed form. */
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-');
}
