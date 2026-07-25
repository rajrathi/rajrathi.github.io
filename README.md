# rajrathi.github.io

My personal site: portfolio plus a blog about AI, data science and cloud.
Built with [Astro](https://astro.build), deployed free on GitHub Pages.

**Live:** https://rajrathi.github.io

---

## The one thing to know

**All content lives in the `content/` folder as plain text.** You never have to
open a component, edit JSX, or touch CSS to publish something.

```
content/
├── site.yaml          ← your name, tagline, socials, nav links
├── about.md           ← the About section (plain Markdown)
├── experience.yaml    ← jobs
├── education.yaml     ← degrees
├── projects.yaml      ← project cards
├── skills.yaml        ← the "Toolkit" chips
└── blog/
    ├── _template.md   ← copy this to start a post (never published)
    └── *.md           ← one file = one blog post
```

Edit a file, save, and the site updates. Every file is commented, so the file
itself tells you what each field does.

If you make a mistake — a missing field, a malformed date — **the build fails
with a plain-English error naming the file and the field.** It will not silently
publish a broken page.

---

## Running it locally

You need [Node.js](https://nodejs.org) 22 or newer (`node --version` to check).

```bash
npm install      # once, after cloning
npm run dev      # start the dev server
```

Open <http://localhost:4321>. Edits to anything in `content/` appear
immediately — no restart needed.

Other commands:

| Command           | What it does                                            |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`     | Live-reloading dev server on port 4321                  |
| `npm run build`   | Type-check, then build the production site into `dist/` |
| `npm run preview` | Serve `dist/` exactly as GitHub Pages will              |
| `npm run check`   | Type-check and validate all content, without building   |
| `npm run format`  | Reformat the source with Prettier                       |

Run `npm run build` before pushing if you want to catch problems locally rather
than in CI.

---

## How to edit things

### Change the summary / About section

Open [`content/about.md`](content/about.md) and write. It is ordinary Markdown —
paragraphs, `**bold**`, `[links](https://example.com)`, lists. There is no
frontmatter and nothing to configure.

### Change your name, tagline, or social links

Everything global is in [`content/site.yaml`](content/site.yaml): your name, the
role line, the hero tagline, the SEO description, the nav bar, the hero buttons,
and every social link.

To remove a social link, delete its line. To add your CV, drop the PDF in
`public/` and uncomment the `resume:` block at the bottom of the file.

### Add a job

Open [`content/experience.yaml`](content/experience.yaml), copy any block, and
paste it at the **top** of the list (newest first). Only `role`, `company`,
`start` and `end` are required.

```yaml
- role: Senior Machine Learning Engineer
  company: Some Company
  start: Jan 2027
  end: Present
  location: Pune, India
  url: https://example.com # optional — links the company name
  summary: One line describing the role. # optional
  bullets: # optional
    - What you built and what it changed.
    - A second accomplishment, ideally with a number in it.
  tags: [Python, PyTorch, AWS] # optional — small chips
```

Use `end: Present` for your current role; it gets the live accent dot on the
timeline. Education works the same way in `content/education.yaml`.

### Add a project

Open [`content/projects.yaml`](content/projects.yaml), copy a block, paste it
where you want it in the grid.

```yaml
- title: My New Project
  year: 2027 # optional
  featured: true # optional — bigger card, pinned to the top
  description: >-
    Two or three sentences. What it does, and why it was worth building.
  image: /project-thumb/08.png # optional — see below
  imageAlt: Describe the image for screen readers.
  tags: [Python, PyTorch] # optional
  links: # optional
    - label: Source # "Source"/"Live"/"Demo"/"Paper" pick their own icon
      href: https://github.com/rajrathi/my-project
    - label: Demo
      href: https://example.com
```

**Images:** put the file in `public/project-thumb/` and reference it with a
leading slash — `/project-thumb/08.png`. Cards crop to 16:9, so a landscape
image around 1200×675 looks best. Always write `imageAlt`.

### Publish a blog post

Copy the template and edit it:

```bash
cp content/blog/_template.md content/blog/my-new-post.md
```

The file name becomes the URL: `my-new-post.md` → `/blog/my-new-post/`.

A minimal post looks like this:

````markdown
---
title: Why our feature store kept lying to us
date: 2027-03-14
summary: >-
  A training/serving skew bug that took three weeks to find, and the one
  assertion that would have caught it on day one.
tags: [Machine Learning, Data Engineering]
---

Open with the problem, not the background. Then explain what you tried.

## A heading

Ordinary Markdown. Code blocks get syntax highlighting — put the language
after the opening fence:

```python
def leak_check(train_ts, serve_ts):
    assert train_ts <= serve_ts, "feature computed after the label"
```

> Blockquotes render as a neon callout.
````

Frontmatter fields:

| Field      | Required | Notes                                                     |
| ---------- | -------- | --------------------------------------------------------- |
| `title`    | yes      | The `<h1>`, the list entry, and the SEO title             |
| `date`     | yes      | `YYYY-MM-DD`. Sorts the blog, newest first                |
| `summary`  | yes      | Shown in the list, the meta description, and the RSS feed |
| `tags`     | no       | Become filter buttons and their own archive pages         |
| `cover`    | no       | Header + social image, e.g. `/img/my-cover.png`           |
| `coverAlt` | no       | Alt text for the cover                                    |
| `draft`    | no       | `true` hides it from the live site, feed and sitemap      |

Everything else is automatic: **reading time, formatted dates, tag pages, the
RSS feed, the sitemap, and Open Graph tags** are all derived from the file. There
is no index to update.

Drafts (`draft: true`) are visible while running `npm run dev` and excluded from
the production build, so you can work on a post in the open.

**Post images:** put them in `public/img/` and reference them as
`![alt text](/img/name.png)`.

---

## Deploying

### First-time setup: push to a new repo and go live

1. **Create the repo on GitHub.** For a site at `https://rajrathi.github.io`, it
   must be named exactly `rajrathi.github.io`. (This repo already is.)

2. **Push the code:**

   ```bash
   git add .
   git commit -m "Rebuild site with Astro"
   git push origin source          # or: git push -u origin main
   ```

3. **Turn on GitHub Actions deployment** — this is the step people miss:

   Repo → **Settings** → **Pages** → under _Build and deployment_, set
   **Source** to **GitHub Actions**. (Not "Deploy from a branch".)

4. **Watch it build.** Go to the **Actions** tab. The _Deploy to GitHub Pages_
   workflow runs on every push. It takes about a minute. When it goes green,
   your site is live.

That is it. There is no build step to run by hand and nothing to commit to a
`gh-pages` branch — [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
handles it.

### Redeploying

Push to `main` or `source`. That is the whole process:

```bash
git add content/blog/my-new-post.md
git commit -m "New post: ..."
git push
```

You can also trigger a rebuild by hand from the **Actions** tab → _Deploy to
GitHub Pages_ → **Run workflow** — useful if you only changed a repo setting.

### If a deploy fails

Open the failed run in the Actions tab and read the **Build** step. Almost every
failure is a content error, and the message names the file and field — for
example `projects → 02-my-project data does not match collection schema`.
Running `npm run build` locally reproduces it in a few seconds.

If instead the **Install dependencies** step fails with
`npm ci ... Missing: <package> from lock file`, the lockfile is missing the
Linux-only binaries the runner needs. This happens when a version of npm writes
a lockfile containing only the platform packages it needed on _your_ machine. It
will not reproduce locally — macOS `npm ci` passes happily. Regenerate the
lockfile against the same environment CI uses:

```bash
docker run --rm -u "$(id -u):$(id -g)" -v "$PWD":/app -w /app \
  -e HOME=/tmp node:22 npm install --package-lock-only
```

Then commit `package-lock.json`. It stays valid on macOS — the file is a
superset covering every platform.

### Adding a custom domain later

1. At your DNS registrar, point the domain at GitHub:
   - **Apex domain** (`rajrathi.tech`) — four `A` records to `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - **Subdomain** (`www.rajrathi.tech`) — one `CNAME` to `rajrathi.github.io`.
2. Repo → **Settings** → **Pages** → **Custom domain**: enter the domain and
   save. GitHub commits a `CNAME` file for you and provisions an HTTPS
   certificate (this can take up to an hour).
3. Tick **Enforce HTTPS** once the certificate is issued.
4. **Update the site's own URL** so canonical links, the sitemap and the RSS feed
   point at the new domain — three places:
   - `astro.config.mjs` → `site: 'https://rajrathi.tech'`
   - `content/site.yaml` → `url: https://rajrathi.tech`
   - `public/robots.txt` → the `Sitemap:` line

   Then push. Skipping this step is what causes duplicate-content SEO problems.

`base` stays `'/'` throughout — you only change it if you move to a project repo
served from a subpath, which is explained in `astro.config.mjs`.

---

## Design and customisation

The look is defined entirely by CSS custom properties at the top of
[`src/styles/global.css`](src/styles/global.css). To re-skin the site, change
the tokens — you should not need to touch a component.

```css
--neon-cyan: #35e6e0; /* primary accent  */
--neon-magenta: #ff5fd2; /* secondary       */
--neon-amber: #ffc23d; /* dates, counters */
--bg: #0a0a11; /* page background */
```

Light-theme equivalents sit directly below, under `:root[data-theme='light']`.

Both fonts (Inter for body, JetBrains Mono for headings and code) are
self-hosted — no Google Fonts request, no third-party tracking.

**Regenerating the social share image:** `public/img/og-default.png` was
produced by [`scripts/make-og-image.py`](scripts/make-og-image.py) (needs
Pillow: `pip install Pillow`). Edit the text in that script and re-run it, or
just replace the PNG with any 1200×630 image.

---

## How it is built

Astro was the right fit here for four reasons: Content Collections read
`content/` directly and validate it against a schema; Markdown blogging is
first-class; it ships **zero JavaScript by default** (this site's only scripts
are the theme toggle, the mobile menu, the tag filter and the scroll reveal — a
couple of kilobytes total); and it deploys to static hosting with no server.

```
content/                  Everything you edit. Plain text.
public/                   Static assets served as-is (images, favicon, robots.txt)
scripts/                  One-off helper scripts (OG image generator)
src/
├── content.config.ts     Maps content/ → typed, validated collections
├── layouts/Base.astro    The page shell: head, nav, footer, global scripts
├── components/           Hero, About, Experience, Projects, Contact, cards, icons
├── pages/                Routes. File name = URL.
│   ├── index.astro           /
│   ├── blog/index.astro      /blog          (with tag filtering)
│   ├── blog/[...slug].astro  /blog/<post>/  (one per Markdown file)
│   ├── blog/tags/[tag].astro /blog/tags/<tag>/
│   ├── rss.xml.ts            /rss.xml
│   └── 404.astro             served by GitHub Pages for unknown paths
├── lib/                  Content helpers, URL helpers, site.yaml loader
└── styles/global.css     Design tokens and global styles
```

### Accessibility and performance notes

- Semantic HTML, one `<h1>` per page, landmarks on every region.
- Skip-to-content link; a visible focus ring on every interactive element.
- Full keyboard support, including the mobile menu (Escape closes it).
- Colour contrast meets WCAG AA in both themes.
- All motion — reveals, hovers, the blinking cursor, the CRT scanlines — is
  disabled under `prefers-reduced-motion: reduce`.
- Tag filtering degrades gracefully: with JavaScript off, the filter chips are
  ordinary links to real tag pages.
- Images declare an aspect ratio, so nothing shifts as the page loads.
- Fonts are subset to Latin only: four WOFF2 files, ~190 KB, served from the
  same origin.

---

## Licence

Code is MIT ([LICENSE](LICENSE)). Blog posts and personal content are
© Rajeshwar Rathi.
