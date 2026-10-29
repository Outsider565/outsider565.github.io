# Shaowen Wang Homepage

English-only Astro/Tailwind personal academic homepage for [outsider565.github.io](https://outsider565.github.io).

The site includes About, Publications, and Misc. All 14 publications retain their English descriptions and abstracts. The former `/zh/` pages and language switch have been removed.

RLPgR, published in EMNLP 2026 Findings, was added on October 29, 2026 with the official author list, abstract, and ACL Anthology link.

English page labels live in `src/config/ui.ts`, navigation in `src/config/navigation.ts`, and content in `src/content/`.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

Deployment is handled by GitHub Actions in `.github/workflows/deploy.yml`.
Push to `main`, and GitHub Pages publishes the generated `dist/` output.
