# Dhanpedia India — Technical Architecture & Technical Decision Record (TDR)

## 1. System Vision & Governing Principles

Dhanpedia India is engineered as a canonical, authoritative, multi-format financial knowledge system rather than an ephemeral blog or disposable landing page. The platform adheres strictly to the following foundational principles:

1. **Single Source of Truth (SSOT)**: One underlying canonical content repository and metadata graph powers static HTML pages, search indices, topic landing pages, financial calculators, downloadable Markdown, TTS editions, and eventual master EPUB/PDF publications. No divergent manual copies are maintained.
2. **Zero Mandatory Infrastructure Expenditure**: Hosted on GitHub Pages with static HTML generation, local client-side search, zero paid APIs, zero proprietary databases, and zero required user login.
3. **Resumable & Deterministic Quality Gates**: Type checking, content schema validation, stable ID integrity, duplicate detection, and automated builds run deterministically across prompts.
4. **TTS-First Editorial Structure**: Semantic heading hierarchies, natural-language formula expansions, and accessible table structures optimized for Microsoft Edge Read Aloud and text-to-speech engines.

---

## 2. Technical Stack Evaluation & Selection

| Dimension | Chosen Solution | Evaluated Alternatives | Rationale & Trade-offs |
| :--- | :--- | :--- | :--- |
| **Framework** | **Astro 5+ (Static Generation)** | Next.js, Hugo, VitePress, Docusaurus | Astro provides zero-JS static output by default, outstanding content collection validation with Zod schemas, high build performance, and effortless deployment to GitHub Pages without node runtime overhead. |
| **Language** | **TypeScript 5.x** | Pure JavaScript | Strict type-safety across registries (taxonomy, sources, concepts, articles) prevents schema drift and dead references at compile time. |
| **Styling** | **Vanilla CSS + Tailored Design Tokens** | TailwindCSS, Sass, Styled Components | Pure CSS Custom Properties deliver zero build overhead, effortless light/dark theme toggling, complete design control without CSS framework version churn, and pristine typography. |
| **Search Engine** | **Client-Side Partitionable Inverted Index** | Algolia, MeiliSearch, Lunr.js | Custom static JSON search index with normalized tokenization requires zero external API keys or server costs, operates offline, and satisfies GitHub Pages constraints. |
| **Hosting Target** | **GitHub Pages + GitHub Actions** | Vercel, Netlify, Cloudflare Pages | Guaranteed zero ongoing financial cost, native Git-integrated revision history, automated deploy workflows, and durable long-term stability. |

---

## 3. GitHub Pages Deployment & Constraint Management

### 3.1 Base Path Routing
The GitHub Pages deployment under username `chirag127` and repository `dhanpedia-india` publishes at `https://chirag127.github.io/dhanpedia-india/`.
- `astro.config.mjs` configures:
  - `site: 'https://chirag127.github.io'`
  - `base: '/dhanpedia-india'`
- Internal routes and static assets utilize relative base path resolution helpers (`import.meta.env.BASE_URL`) ensuring flawless navigation in both local development (`npm run dev`) and GitHub Pages deployment.

### 3.2 Corpus Size & Build Decoupling
GitHub Pages has soft repository and deployment limits (~1GB site size, 10-minute build action recommendations).
- Heavy publication deliverables (master EPUB and PDF builds) are engineered in separate release workflows using GitHub Releases or detached artifact workflows rather than embedding multi-gigabyte binaries into every routine web deploy.
- Static HTML is generated with minimal asset footprint, optimized inline SVGs, and system font stacks supplemented by efficient Google Fonts.

---

## 4. Canonical Content Graph & Registry Architecture

The content corpus is governed by five decoupled, machine-readable data registries stored in `/data`:
1. `data/taxonomy/taxonomy.json`: Authoritative 22-category hierarchical tree with stable IDs, parent references, core questions, and regulatory mappings.
2. `data/sources/source-registry.json`: Registry of primary statutory bodies (RBI, SEBI, CBDT, PFRDA, IRDAI, EPFO) and official portals with verification stamps and scope boundaries.
3. `data/concepts/concept-registry.json`: Canonical concept dictionary preventing redundant re-definitions across articles.
4. `data/taxonomy/research-gaps.json`: Unresolved regulatory and empirical research questions tracked with severity and monitoring protocols.
5. `data/articles/article-registry.json`: Master index tracking article status (`planned`, `researching`, `drafting`, `validating`, `published`, `outdated`), word counts, verification dates, and citation links.

---

## 5. Website UI & Editorial Reading Experience

### 5.1 Three-Region Desktop Layout
The reading interface implements a synchronized 3-column architecture:
- **Left Column (Navigation Drawer)**: Collapsible nested taxonomy explorer, category filters, and quick links. Supports keyboard shortcuts and state persistence.
- **Center Column (Substantive Reading Area)**: Optimized 68–75 character line-length reading container, breadcrumbs, verification badges, article metadata, structured callouts (Warnings, Regulatory Citations, Numerical Formulas, Worked Examples), and download options.
- **Right Column (Sticky Table of Contents)**: Dynamic scroll-spy indicator tracking current heading levels (H2/H3), keyboard-accessible jump anchors, and reading progress indicator.

### 5.2 Responsive Single-Column Mobile Architecture
On viewport widths under 1024px, sidebars collapse cleanly behind accessible drawer triggers (`aria-expanded`, keyboard focus trap, backdrop blur). The central reading column takes primary focus without awkward multi-column cramping.

### 5.3 Color Palette & Visual Identity
- **Dark Navy Slate**: `#0B132B`, `#1C2541` (Foundational depth, trust, authority)
- **Warm Ivory / Parchment**: `#FBFBFA`, `#F4F3EE` (Light mode reading background minimizing eye fatigue)
- **Deep Charcoal**: `#1F2937`, `#111827` (Pristine typography contrast exceeding WCAG AAA standards)
- **Restrained Gold & Emerald**: `#D4AF37`, `#0D9488` (Muted accentuation for badges, verification marks, and key takeaways)

---

## 6. Duplicate Detection & Quality Gates

To prevent bloated, redundant, or inconsistent material, Dhanpedia India implements a deterministic validation suite:
- **Exact & Near-Duplicate Detection**: Content hash checks (SHA-256) and token n-gram Jaccard similarity matrices to detect repeated boilerplate or competing definitions.
- **Reference Integrity**: Verifies that every `categoryId` in an article exists in `taxonomy.json`, and every citation points to a valid entry in `source-registry.json`.
- **Slugs & Stable IDs**: Strict uniqueness validation across all articles, categories, and concept IDs.
- **No Secrets Quality Gate**: Automated scan preventing API keys, tokens, or personal financial data from entering the codebase.
