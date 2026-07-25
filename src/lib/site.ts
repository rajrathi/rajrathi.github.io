/**
 * Loads and validates `content/site.yaml`.
 *
 * This is a single object rather than a list, so it does not fit the content
 * collection model — but it is loaded and schema-checked the same way, at build
 * time, so a mistake in the YAML fails the build with a clear message.
 */
import fs from 'node:fs';
import path from 'node:path';
import { load as parseYaml } from 'js-yaml';
import { z } from 'zod';

const navItem = z.object({
  label: z.string(),
  href: z.string(),
});

const ctaItem = navItem.extend({
  primary: z.boolean().default(false),
});

const siteSchema = z.object({
  name: z.string(),
  role: z.string(),
  tagline: z.string(),
  description: z.string(),
  url: z.url(),
  ogImage: z.string().default('/img/og-default.png'),
  avatar: z.string().optional(),
  avatarAlt: z.string().default(''),
  lang: z.string().default('en'),
  social: z
    .object({
      email: z.email().optional(),
      github: z.url().optional(),
      linkedin: z.url().optional(),
      twitter: z.url().optional(),
      huggingface: z.url().optional(),
      scholar: z.url().optional(),
      website: z.url().optional(),
    })
    .default({}),
  contactBlurb: z.string().optional(),
  nav: z.array(navItem).default([]),
  cta: z.array(ctaItem).default([]),
  resume: navItem.optional(),
});

export type SiteConfig = z.infer<typeof siteSchema>;

const raw = fs.readFileSync(path.join(process.cwd(), 'content', 'site.yaml'), 'utf8');

const parsed = siteSchema.safeParse(parseYaml(raw));

if (!parsed.success) {
  throw new Error(
    `content/site.yaml is invalid:\n${parsed.error.issues
      .map((i) => `  - ${i.path.join('.') || '(root)'}: ${i.message}`)
      .join('\n')}`
  );
}

export const site: SiteConfig = parsed.data;

/** Icon keys, in the order links should appear. */
export type SocialKey =
  'email' | 'github' | 'linkedin' | 'twitter' | 'huggingface' | 'scholar' | 'website';

export interface SocialLink {
  key: SocialKey;
  /** Accessible name for the icon-only variants. */
  label: string;
  href: string;
  /** True for anything that should open in a new tab with rel="noopener". */
  external: boolean;
}

const SOCIAL_LABELS: Array<[SocialKey, string]> = [
  ['email', 'Email'],
  ['github', 'GitHub'],
  ['linkedin', 'LinkedIn'],
  ['twitter', 'X / Twitter'],
  ['huggingface', 'Hugging Face'],
  ['scholar', 'Google Scholar'],
  ['website', 'Website'],
];

/**
 * Social links in display order. Only the keys actually present in site.yaml
 * appear, so deleting a line there removes the icon everywhere.
 */
export const socialLinks: SocialLink[] = SOCIAL_LABELS.flatMap(([key, label]) => {
  const value = site.social[key];
  if (!value) return [];
  const href = key === 'email' ? `mailto:${value}` : value;
  return [{ key, label, href, external: href.startsWith('http') }];
});

/** Profile URLs only (no mailto), for schema.org `sameAs`. */
export const socialProfileUrls: string[] = socialLinks
  .filter((link) => link.external)
  .map((link) => link.href);
