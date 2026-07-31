# Deploying

The site builds with Vite and publishes to GitHub Pages through GitHub
Actions. Repo: `tasneemiqbal/personalportfolio`. Live at
https://tasneemiqbal.github.io/personalportfolio/

## Normal deploy

Push to `main`. That's it.

`.github/workflows/deploy.yml` runs `npm ci`, then `npm run build`, then
uploads `dist/` to Pages. Watch it under the repo's **Actions** tab. A deploy
takes about a minute.

## One-time setup

Pages must be told to take its content from Actions rather than from a branch.
This is a browser-only step and has to be done once:

**Repo → Settings → Pages → Build and deployment → Source → "GitHub Actions"**

Until that is switched, the workflow will run green and the live site will not
change. If a deploy "succeeds" but the site looks identical, check this first.

## Before you push

```bash
npm run build
npm run preview      # http://localhost:4173/personalportfolio/
```

`preview` serves at the real subpath. `dev` does not, so it will not catch a
broken base path. Click through `/about`, both case studies, the resume link,
and `/v1/` before pushing.

## The base path

The site is served from `/personalportfolio/`, not from a domain root. Three
places encode that, and they have to agree:

| File | What it sets |
|---|---|
| `vite.config.ts` | `base: '/personalportfolio/'`, which prefixes every built asset URL |
| `src/app/routes.ts` | router `basename`, derived from `import.meta.env.BASE_URL` |
| `public/404.html` | the `base` constant in its redirect script |

If a custom domain is ever added, change `base` to `'/'` in `vite.config.ts`
and update the constant in `404.html`. `routes.ts` follows automatically.

## Why there is a 404.html

GitHub Pages serves static files and has no SPA rewrite, so a direct hit on
`/about` would 404 instead of reaching the router. `public/404.html` catches
that, stashes the requested path in `sessionStorage`, and bounces to the app
root; `src/main.tsx` restores the path before the router reads the URL. Paths
under `/v1/` are deliberately excluded, since a miss there is a real 404.

## Rolling back

- Revert the commit and push. The next build redeploys the previous state.
- Or check out the `v1-static` tag to get the pre-redesign site back.
- To hand control back to the old branch-based publishing, set
  **Settings → Pages → Source** back to "Deploy from a branch".
