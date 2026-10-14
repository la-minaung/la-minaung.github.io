# la-minaung.github.io

Personal portfolio for La Min Aung, a backend .NET developer. Built with React + Vite and published to GitHub Pages.

## Keeping it current

All site content lives in one file: [`src/data/profile.js`](src/data/profile.js).

- **Years of experience** are computed from the start date, so "4+" becomes "5+" on its own.
- When you add a project or change a role, edit `profile.js` and bump `lastUpdated` (shown in the footer).
- **Resume:** run `npm run resume`. It rebuilds `resume/La-Min-Aung-Resume.html` from `profile.js` and prints
  `public/La-Min-Aung-NET-Developer-Resume.pdf` using the Edge or Chrome you have installed
  (set `CHROME_PATH` to choose another browser). Don't edit the generated HTML by hand.
- **Share image** (`public/og-image.png`, 1200x630) is what LinkedIn and WhatsApp show for the link.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run check` | Lint, unit tests and production build (what CI runs) |
| `npm run resume` | Regenerate the resume HTML and PDF from `profile.js` |
| `npm run deploy` | Run `check`, then publish `dist/` to the `gh-pages` branch |

## Deployment

GitHub Pages serves the `gh-pages` branch, and **pushing to `main` does not publish anything**.
To go live, merge to `main`, pull it, then run `npm run deploy` from your personal git identity
(`git config user.email` should be your personal address).

## Notes

- Requires Node 20.9 or newer (see `.nvmrc`).
- `npm audit` reports findings in build-time tooling only (the Vite dev server and `gh-pages`'s glob dependency).
  The shipped site has no runtime vulnerabilities (`npm audit --omit=dev` is clean). Vite is pinned to 5.x because
  newer majors need a newer Node than 20.9.
