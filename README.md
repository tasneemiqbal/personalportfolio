# Tasneem Iqbal - Portfolio

A Windows XP themed portfolio for a CS senior pivoting into Product Management. Static HTML, CSS, and vanilla JavaScript. No build step, no framework.

## Live Demo

https://tasneemiqbal.github.io/personalportfolio/

## Pages

- `index.html` - home: hero, case studies, about, experience, skills, contact
- `schedaddle.html` - case study: scheduling tool, user research through Figma prototype
- `dig.html` - case study: DIG Magazine redesign

## Structure

```
portfolio-website/
├── index.html
├── schedaddle.html
├── dig.html
├── css/
│   ├── styles.css        # layout, spacing, base components
│   ├── xp-theme.css      # the XP skin; loads last and overrides styles.css
│   └── case-study.css    # case study page styles
├── js/
│   ├── script.js         # theme toggle, tabs, scroll state
│   └── background.js     # three.js hero canvas
├── images/
└── PRODUCT.md            # who this is for and what it has to prove
```

`xp-theme.css` is loaded after the others and leans on `!important` to reskin
them. If a style is not doing what you expect, check there first.

## Type

Pixelify Sans for display, Tahoma for everything else. Tahoma is a system font,
so only Pixelify Sans is fetched from Google Fonts.

## Accessibility

Targets WCAG AA: keyboard navigable throughout, visible focus, `prefers-reduced-motion`
honored, 4.5:1 minimum on body text.

## Running locally

No build step. Serve the directory and open it:

```
python3 -m http.server 8000
```

## Contact

**Tasneem Iqbal**
- Email: tasneemiqbal417@gmail.com
- LinkedIn: https://linkedin.com/in/tasneemiqbal89
- Location: Long Beach, CA
