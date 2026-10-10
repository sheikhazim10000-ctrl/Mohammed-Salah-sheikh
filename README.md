# Mohammad Salah Sheikh — MEP Technical Supervisor Portfolio

Responsive professional portfolio for **Mohammad Salah Sheikh**, built as a static HTML, CSS, and JavaScript website.

## Active website files

- `index.html` — page content, navigation, contact links, and metadata
- `styles.css` — responsive layout and technical diagrams
- `script.js` — mobile navigation, experience timeline, scroll progress, and optional reveal animation
- `assets/1000152484.jpg` — supplied profile portrait
- `Mohammad-Salah-Sheikh-CV.pdf` — supplied CV, preserved without modification
- `public/Mohammad-Salah-Sheikh-CV.pdf` — byte-identical copy so Vite includes the CV in production builds
- `public/favicon.svg` and `public/robots.txt` — browser icon and crawler instructions

The Replit preview serves `index.html` directly through Vite. The React component scaffold in `src/` is not the website entry point and is not required to run the portfolio.

## Run in the Replit workspace

From the monorepo root:

```bash
pnpm --filter @workspace/mohammad-salah-sheikh-portfolio run dev
```

To create the Replit production build:

```bash
pnpm --filter @workspace/mohammad-salah-sheikh-portfolio run build
```

## Run from the standalone ZIP

The downloadable ZIP contains a small, self-contained Vite setup for the active static website. With Node.js and npm installed:

```bash
npm install
npm run dev
```

For an exact install from the included lockfile, you can also use `npm ci`. Open the local address printed by Vite. To create and preview a production build:

```bash
npm run build
npm run preview
```

The built website is written to `dist/`. The ZIP contains a standalone `package.json`, `package-lock.json`, and `vite.config.ts`; the workspace keeps its original Replit-specific configuration and dependency aliases for the monorepo. Run it through Vite for the full interactive experience; opening the module-based page with `file://` can block JavaScript in browsers.

## Content and assets

- The original portrait and CV are included; the production CV copy is byte-identical.
- Employment history, technical experience, education, language, and contact details are preserved from the supplied project material.
- No unsupported employers, qualifications, awards, performance figures, testimonials, or project outcomes are added.
- NEBOSH IGC (UK), IOSH (UK), OSHA (USA), and TÜV & SÜD remain marked **IN PROGRESS**.
- The CV links use a relative file path so they work from the extracted project root.
- Google Fonts and Lucide icons are optional online resources; the content and core interactions remain usable if they are unavailable.

## Verification

The active site has been built and checked at 360, 390, 430, 768, 1024, 1280, 1440, and 1920px widths. Checks cover horizontal overflow, technical-label visibility, navigation targets, the portrait, mobile menu and Escape behavior, timeline interaction, reduced motion, browser errors, and CV availability.