# Tasneem Iqbal · Portfolio

Live at **https://tasneem-iqbal.pages.dev/**, and mirrored on GitHub Pages at
https://tasneemiqbal.github.io/personalportfolio/.

Two hosts, one difference: the path the site is served from. `npm run build`
targets a domain root (Cloudflare, which autodetects that command); the Actions
workflow runs `npm run build:pages` for the `/personalportfolio/` subpath. The
canonical and `og:*` URLs point at Cloudflare from both builds on purpose — see
the comment in `index.html`.

A React + Vite site for a product manager. The design
brief lives in [PRODUCT.md](PRODUCT.md) and it is the thing to read before
changing anything visual.

## Running it

```bash
npm install
npm run dev          # http://localhost:5173
```

To check something the way production will serve it:

```bash
npm run build
npm run preview      # http://localhost:4173/personalportfolio/
```

Use `preview`, not `dev`, when you want to trust what you see. The site is
served from the `/personalportfolio/` subpath rather than a domain root, and
`dev` hides base-path bugs that `preview` surfaces.

## Structure

```
index.html               Vite entry
vite.config.ts           base: '/personalportfolio/'  <- load-bearing
src/
  main.tsx               mounts the app, restores the 404.html redirect
  app/
    routes.ts            router + basename derived from Vite's BASE_URL
    Root.tsx             nav, footer, scroll-to-top on route change
  pages/
    Home.tsx             hero, publications, project rows, contact
    About.tsx            bio, experience, skills
    Schedaddle.tsx       case study
    Dig.tsx              case study
  components/
    case-study.tsx       shared case study layout primitives
  styles/
    theme.css            design tokens (cream ground, radius 0)
    tailwind.css         Tailwind v4 entry
  assets/                images, hashed and base-prefixed by Vite
public/
  404.html               SPA fallback, since Pages has no rewrite
  v1/                    the previous static site, served verbatim
  *.pdf                  resume and product spec
```

### Routes

| Path | What |
|---|---|
| `/` | Home |
| `/about` | About |
| `/work/schedaddle` | Schedaddle case study |
| `/work/dig` | DIG Magazine case study |
| `/v1/` | The previous site, kept live and unchanged |

## The v1 archive

`public/v1/` holds the hand-written static site this replaced: four HTML
pages, their CSS and JS, and the XP-themed `offline.html`. Vite copies
`public/` into the build untouched, so every relative link inside v1 keeps
resolving exactly as it did. Nothing in the new site links to it except this
README, by design.

The pre-redesign state is also tagged `v1-static` if you need it as a working
tree rather than as served files.

## Dependencies

Four runtime packages: `react`, `react-dom`, `react-router`, `motion`. The
Figma Make export arrived with the full shadcn/ui kit and about 55
dependencies, none of which anything imported. They were removed. If you want
a shadcn primitive later, `npx shadcn@latest add <name>` regenerates it.

## Deploying

Push to `main`. See [DEPLOYMENT.md](DEPLOYMENT.md).
