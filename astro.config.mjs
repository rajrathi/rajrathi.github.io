// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  /**
   * Deployment target.
   *
   * This repo is `rajrathi/rajrathi.github.io`, a GitHub *user* site, so it is
   * served from the domain root and `base` stays "/".
   *
   * If you ever move this to a *project* repo (e.g. github.com/rajrathi/portfolio,
   * served at rajrathi.github.io/portfolio), change `base` to '/portfolio'. Every
   * internal link in this project is built with the `url()` helper in
   * src/lib/url.ts, so that one change is enough.
   *
   * If you add a custom domain, change `site` to it (e.g. https://rajrathi.tech)
   * and leave `base` as "/". See the Deployment section of the README.
   */
  site: 'https://rajrathi.github.io',
  base: '/',

  // Emit `/blog/my-post/index.html` so URLs work on GitHub Pages' static server.
  trailingSlash: 'ignore',
  build: { format: 'directory' },

  integrations: [
    // Lets you write posts as .mdx as well as .md.
    mdx(),
    // Generates /sitemap-index.xml. Drafts and 404 are excluded below.
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  markdown: {
    shikiConfig: {
      /**
       * Two themes so code blocks follow the site's light/dark toggle.
       * The dark variant is applied by CSS in src/styles/global.css.
       */
      themes: {
        light: 'github-light',
        dark: 'synthwave-84',
      },
      wrap: true,
    },
  },

  // Inline tiny stylesheets rather than emitting an extra request for them.
  vite: {
    build: {
      assetsInlineLimit: 2048,
    },
  },
});
