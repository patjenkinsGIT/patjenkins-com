# patjenkins.com

Personal landing page for Patrick Jenkins. Static site, plain HTML + Tailwind CSS, deployed to Cloudflare Pages.

## Stack

- **HTML** — single `index.html` at repo root
- **Tailwind CSS 3** — built via Tailwind CLI (no PostCSS / framework overhead)
- **Cloudflare Pages** — static deploy from GitHub

## Local development

```bash
npm install
npm run dev      # watch mode — rebuilds dist/styles.css on save
```

Open `index.html` directly in the browser, or serve `dist/` after a full build.

## Production build

```bash
npm run build
```

Outputs to `dist/`:
- `dist/index.html` (copy of root `index.html`)
- `dist/styles.css` (minified Tailwind output)
- `dist/resume.pdf` (copied from `public/`)

## Cloudflare Pages settings

When connecting the repo:

| Setting | Value |
| --- | --- |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` (set via env var `NODE_VERSION=20`) |

## Custom domain + DNS

After the first successful Pages deploy:

1. In Cloudflare Pages → project → **Custom domains** → add `patjenkins.com` and `www.patjenkins.com`
2. Cloudflare will auto-create the CNAME records pointing to the Pages project
3. **Remove the old A record** pointing to `35.212.68.202` (legacy SiteGround origin — cancelled)
4. SSL is handled end-to-end by Cloudflare; no origin cert needed

## File layout

```
.
├── index.html              # the site
├── src/input.css           # Tailwind source (directives only)
├── public/resume.pdf       # downloadable résumé
├── tailwind.config.js
├── package.json
└── dist/                   # build output (gitignored)
```
