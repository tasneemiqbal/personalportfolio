import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

// Two hosts serve this site and they disagree about exactly one thing: the
// path it lives at. GitHub Pages serves it from /personalportfolio/, Cloudflare
// Pages from a domain root. Every other difference between the builds follows
// from this one value, so it is the only thing either host has to set:
//
//   Cloudflare     (default)                        base = /
//   GitHub Pages   VITE_BASE=/personalportfolio/    base = /personalportfolio/
//
// The domain root is the default because Cloudflare autodetects `npm run build`
// and its build settings live in a dashboard this repo cannot see or verify.
// GitHub Pages builds from .github/workflows/, which is a file under review, so
// it is the one that carries the override. Put the odd case where it can be
// read, not where it has to be remembered.
//
// Downstream, the router basename reads import.meta.env.BASE_URL and the 404
// fallback below is generated from the same value, so neither can drift out of
// sync with this. Getting it wrong is not a subtle failure: the HTML asks for
// assets at a prefix that does not exist and the page renders blank.
const BASE = process.env.VITE_BASE || '/'

// GitHub Pages has no SPA rewrite. A direct hit on /about, or a refresh while
// already there, serves 404.html instead of the app, so that file stashes the
// requested path and bounces to the root for the restore in index.html.
//
// Emitted ONLY for a sub-path build, which means only for Pages. It used to be
// emitted for both on the theory that an unreachable fallback costs nothing.
// That was wrong and it cost every deep link on Cloudflare: Pages serves a
// root 404.html for unmatched routes and that shadows the /* rewrite in
// public/_redirects, so https://<site>/work/dig answered 404 and bounced to the
// homepage instead of rewriting to index.html with a 200. A crawler indexing a
// 404 is the expensive half of that.
//
// It is generated rather than kept in public/ because Vite copies public/
// verbatim: a hardcoded base in there would silently be the wrong base on one
// of the two hosts.
function spaFallback(base) {
  const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tasneem Iqbal — Product Manager</title>
    <script>
      // /v1/ is the archived static site and is NOT a client route, so a miss
      // there is a genuine 404 and must not be bounced into the app.
      (function () {
        var base = ${JSON.stringify(base)};
        var path = location.pathname + location.search + location.hash;
        if (path.indexOf(base + 'v1/') !== 0) {
          sessionStorage.setItem('spa:redirect', path);
        }
        location.replace(base);
      })();
    </script>
  </head>
  <body></body>
</html>
`
  return {
    name: 'spa-fallback',
    apply: 'build',
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: '404.html', source: html })
    },
  }
}

export default defineConfig({
  base: BASE,

  plugins: [
    figmaAssetResolver(),
    // Falsy entries are ignored by Vite, so the root-base build simply has no
    // 404.html and lets _redirects do the work.
    BASE !== '/' && spaFallback(BASE),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
