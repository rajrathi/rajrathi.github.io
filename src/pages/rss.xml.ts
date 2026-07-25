/**
 * RSS feed at /rss.xml.
 *
 * Nothing to maintain: every published (non-draft) post appears automatically,
 * newest first.
 */
import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '~/lib/content';
import { site } from '~/lib/site';
import { url } from '~/lib/url';

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: `${site.name} — Blog`,
    description: site.description,
    site: context.site ?? site.url,
    trailingSlash: true,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: url(`/blog/${post.id}/`),
      categories: post.data.tags,
      author: site.social.email
        ? `${site.social.email} (${post.data.author ?? site.name})`
        : (post.data.author ?? site.name),
    })),
    customData: `<language>${site.lang}</language>`,
    stylesheet: false,
  });
}
