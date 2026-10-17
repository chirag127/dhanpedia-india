# Dhanpedia India — Agent Deployment & GitHub Pages Policy

**Status:** Canonical Specialist Policy  
**Parent Document:** [`AGENTS.md`](file:///c:/g/dhanpedia-india/AGENTS.md)  
**Effective Date:** October 2026 (Operational under Prompt 004)

---

## 1. Zero-Cost Static Deployment Architecture

Dhanpedia India is designed to be hosted permanently on **GitHub Pages** with 100% free static infrastructure. There are zero paid cloud servers, zero serverless functions, zero backend databases, and zero required credit-card-dependent services.

- **Repository Target:** `https://github.com/chirag127/dhanpedia-india`
- **Canonical Hosted URL:** `https://chirag127.github.io/dhanpedia-india/`
- **Base Path:** `/dhanpedia-india`
- **Output Mode:** Static HTML/CSS/JS (`output: 'static'` in `astro.config.mjs`)

---

## 2. GitHub Actions Deployment Workflow

Deployment is fully automated via `.github/workflows/deploy.yml`. The workflow triggers on every push to the `main` branch:

```yaml
name: Deploy Dhanpedia India to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'

      - name: Install Dependencies
        run: npm ci

      - name: Run Integrity Suite
        run: npm test

      - name: Build Static Site and Books
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## 3. Subpath Routing and Base URL Correctness

Because the site is hosted at the GitHub Pages subpath `/dhanpedia-india`, all internal links, script tags, stylesheets, and book download URLs must strictly adhere to the base path:

1. **Path Helper Standard:** Never write hardcoded absolute paths like `href="/articles/..."` or `src="/images/..."`. Always use the canonical path utility:
   ```astro
   ---
   import { url } from '../../utils/paths';
   ---
   <a href={url('/articles/dicgc-deposit-insurance-architecture-limits-and-ownership-structures')}>Read Treatise</a>
   <a href={url('/books/Dhanpedia-India-Complete-Reference.epub')}>Download Master EPUB</a>
   ```
2. **Astro Config Enforcement:** `astro.config.mjs` must enforce:
   ```javascript
   export default defineConfig({
     site: 'https://chirag127.github.io',
     base: '/dhanpedia-india',
     output: 'static'
   });
   ```

---

## 4. Live Deployment Verification Protocol

Following a push to `main`:
1. Check the GitHub Actions run status using Git and GitHub CLI / API.
2. Verify HTTP response on `https://chirag127.github.io/dhanpedia-india/`.
3. Verify that CSS themes, fonts, client-side search index (`public/search-index.json`), and book downloads (`/dhanpedia-india/books/...`) load with HTTP 200 responses.
4. Report the exact live URL in the completion report.
