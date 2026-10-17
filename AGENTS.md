# AGENTS.md — Dhanpedia India Master Operating Constitution

**Project:** Dhanpedia India  
**Repository:** `chirag127/dhanpedia-india`  
**Hosting Target:** GitHub Pages (`https://chirag127.github.io/dhanpedia-india/`)  
**Website Title:** Dhanpedia India — The Indian Personal Finance, Investing and Wealth-Building Encyclopedia  
**Tagline:** Master your money. Understand every investment. Build lasting wealth.  
**Author & Primary Reader:** Chirag Singhal  
**Operating Standard:** Version 4.0.0 (October 2026) — Universal Machine-Readable Constitution  

---

## 1. Project Identity

Dhanpedia India is engineered as an authoritative, multi-million-word reference encyclopedia and book publishing system for personal finance, investment management, taxation, corporate structuring, and the Indian financial system.

- **Author & Principal Subject Specialist:** Chirag Singhal.
- **Geographic Focus:** Republic of India (sovereign jurisdiction, Union laws, Reserve Bank of India, SEBI, IRDAI, PFRDA, CBDT, and judicial authorities).
- **Primary Audience:** Salaried professionals, software engineers, founders, and advanced Indian investors requiring exhaustive, legally grounded, mathematically verified financial intelligence.
- **Core Principles:** Free-first, static-first, zero-mandatory paid infrastructure, audio-native text-to-speech design for Moon+ Reader Pro, and uncompromising statutory depth.

---

## 2. Mission and Scope

1. **The Comprehensive Financial Map:** Cover the entire Indian financial reality across 26 canonical domains (Domains A to Z), 52 system nodes, 42 financial calculators, and hundreds of verified statutory sources.
2. **Corpus Scale Benchmark:** The long-term objective of Dhanpedia India is at least 300 exhaustive treatises and 3,000,000 words of original, deduplicated prose.
3. **The 10,000-Word Standard:** Foundational pillar publications must exceed **10,000 words** of original prose. Superficial 800-word summaries are strictly banned.
4. **Honest Metric Reporting:** Completeness must be measured strictly by verified content on disk, never by ungrounded forward-looking claims or inflated word counts.

---

## 3. Source-of-Truth Hierarchy

All autonomous agents must respect the following data architecture:

- **Master Agent Constitution:** `AGENTS.md` (this document).
- **Specialist Policy Directives:**
  - Research & Verification: [`docs/AGENT_RESEARCH_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_RESEARCH_POLICY.md)
  - Content Editorial: [`docs/AGENT_CONTENT_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_CONTENT_POLICY.md)
  - Moon+ Reader Pro TTS: [`docs/AGENT_TTS_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_TTS_POLICY.md)
  - Book Publishing Pipeline: [`docs/AGENT_BOOK_PUBLISHING_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_BOOK_PUBLISHING_POLICY.md)
  - Testing & Quality Gates: [`docs/AGENT_TESTING_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_TESTING_POLICY.md)
  - Deployment & GitHub Pages: [`docs/AGENT_DEPLOYMENT_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_DEPLOYMENT_POLICY.md)
  - Dependency & Versioning: [`docs/AGENT_VERSION_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_VERSION_POLICY.md)
- **Canonical Data Models:**
  - Taxonomy (26 Domains): [`data/taxonomy/taxonomy.json`](file:///c:/g/dhanpedia-india/data/taxonomy/taxonomy.json)
  - Financial System Tree: [`data/taxonomy/financial-system.json`](file:///c:/g/dhanpedia-india/data/taxonomy/financial-system.json)
  - Statutory Sources (32 Bodies): [`data/sources/source-registry.json`](file:///c:/g/dhanpedia-india/data/sources/source-registry.json)
  - Verified Claims (12 Propositions): [`data/claims/claim-registry.json`](file:///c:/g/dhanpedia-india/data/claims/claim-registry.json)
  - Foundational Concepts (52 Entities): [`data/concepts/concept-registry.json`](file:///c:/g/dhanpedia-india/data/concepts/concept-registry.json)
  - Knowledge Graph: [`data/knowledge-graph/nodes.json`](file:///c:/g/dhanpedia-india/data/knowledge-graph/nodes.json) and [`data/knowledge-graph/relationships.json`](file:///c:/g/dhanpedia-india/data/knowledge-graph/relationships.json)
  - Mathematical Formulas: [`data/calculators/formulas.json`](file:///c:/g/dhanpedia-india/data/calculators/formulas.json)
  - Calculators: [`data/calculators/calculator-inventory.json`](file:///c:/g/dhanpedia-india/data/calculators/calculator-inventory.json)
  - Learning Curricula: [`data/publications/learning-paths.json`](file:///c:/g/dhanpedia-india/data/publications/learning-paths.json)
  - Coverage Gaps: [`data/research/coverage-gaps.json`](file:///c:/g/dhanpedia-india/data/research/coverage-gaps.json)
  - Publications Manifest: [`public/books/publication-manifest.json`](file:///c:/g/dhanpedia-india/public/books/publication-manifest.json)
- **Persistent State:** [`state/project-state.json`](file:///c:/g/dhanpedia-india/state/project-state.json), [`state/task-registry.json`](file:///c:/g/dhanpedia-india/state/task-registry.json), and [`state/decisions.json`](file:///c:/g/dhanpedia-india/state/decisions.json).

---

## 4. Repository Map

```
dhanpedia-india/
├── .github/workflows/deploy.yml       # Automated GitHub Pages CI/CD deployment
├── astro.config.mjs                   # Static Astro config (base: /dhanpedia-india)
├── package.json                       # Scripts, dependencies, and metadata
├── AGENTS.md                          # Master Operating Constitution
├── data/                              # Canonical JSON data stores
├── docs/                              # Specialist agent policies and architecture
│   ├── AGENT_RESEARCH_POLICY.md       # Primary source hierarchy and search mandate
│   ├── AGENT_CONTENT_POLICY.md        # 10k-word standard and editorial structure
│   ├── AGENT_TTS_POLICY.md            # Moon+ Reader Pro TTS audio-native rules
│   ├── AGENT_BOOK_PUBLISHING_POLICY.md# EPUB, PDF, and TXT publishing rules
│   ├── AGENT_TESTING_POLICY.md        # 17-suite automated quality gate
│   ├── AGENT_DEPLOYMENT_POLICY.md     # GitHub Pages base path routing
│   ├── AGENT_VERSION_POLICY.md        # Node.js LTS and zero-dependency baseline
│   └── research/                      # Persistent technical research logs
├── public/                            # Static assets and compiled publications
│   └── books/                         # Master EPUBs, PDFs, TXTs & publication-manifest.json
├── reports/                           # Implementation and audit reports
├── scripts/
│   ├── generate-book.mjs              # Multi-format publication compiler
│   └── validate-integrity.mjs         # Automated quality gate and validation suite
├── src/
│   ├── content/articles/              # Substantive >10,000 word markdown treatises
│   ├── layouts/                       # BaseLayout (3-column responsive grid)
│   ├── pages/                         # Astro pages (Home, Categories, Downloads, etc.)
│   ├── styles/                        # CSS variables and design tokens
│   └── utils/                         # Path helpers, reading time, and search utilities
└── state/                             # Resumable task state, decisions, and checkpoints
```

---

## 5. Technical Stack

- **Framework:** Astro 5 (`astro@^5.1.0`), configured for static pre-rendering.
- **Language:** TypeScript 5.x (`typescript@^5.7.0`) with strict type checking.
- **Styling:** Vanilla CSS Custom Properties (Design tokens in `src/styles/theme.css`). Zero Tailwind runtime overhead.
- **Runtime:** Node.js 20+ LTS (Node 20 in GitHub Actions runner, Node 26 supported locally).
- **EPUB Engine:** Built-in Node.js `ZipBuilder` enforcing uncompressed `mimetype` and EPUB 3.3 standards.
- **PDF Engine:** Built-in Node.js `SimplePdfWriter` (ISO 32000-1 / PDF 1.4 stream writer).
- **Search Engine:** Local partitionable client-side JSON search index (`public/search-index.json`).
- **Standard Commands:**
  - Dev server: `npm run dev`
  - Run quality gates: `npm test`
  - Compile books: `npm run build:book`
  - Full static build: `npm run build`
  - Preview build: `npm run preview`

---

## 6. Version-Selection Rules

Agents must adhere to [`docs/AGENT_VERSION_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_VERSION_POLICY.md):
1. Lock all versions in `package-lock.json`.
2. Do not adopt prerelease or unstable alpha/beta packages.
3. Check official release notes and run `npm audit` prior to any dependency change.
4. Verify full test suite passing (`npm test`) before committing version bumps.

---

## 7. Research Policy

Agents must adhere to [`docs/AGENT_RESEARCH_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_RESEARCH_POLICY.md):
1. Rely exclusively on primary statutory authorities: Acts of Parliament, RBI Master Directions, SEBI Master Circulars, CBDT Notifications, IRDAI Regulations, PFRDA Guidelines, and High Court / Supreme Court precedents.
2. Verify effective legal dates: All tax analysis must reflect the **Finance (No. 2) Act 2024** (effective July 23, 2024).
3. Record all research queries and official URLs in [`docs/research/technical-research-log.md`](file:///c:/g/dhanpedia-india/docs/research/technical-research-log.md).

---

## 8. Web Research Policy

1. **Broad, Systematic Querying:** Perform web searches across official government domains (`rbi.org.in`, `sebi.gov.in`, `incometax.gov.in`, `indiacode.nic.in`, `irdai.gov.in`, `dicgc.org.in`).
2. Search as many times as necessary to eliminate uncertainty regarding circular dates, interest rate formulas, penalty thresholds, and judicial appeals.
3. Every factual claim must be backed by an accessible primary URL.

---

## 9. Content-Writing Standards

Agents must adhere to [`docs/AGENT_CONTENT_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_CONTENT_POLICY.md):
1. **Depth:** All flagship articles must exceed **10,000 words** of original, non-duplicative analysis.
2. **Layered Pedagogy:** Executive Summary -> Statutory Framework -> Operational Mechanics -> Spoken Quantitative Models -> Tax Treatment -> Forensic Failure Modes -> Redressal & Ombudsman Matrix.
3. **Forensic Reality:** Document cash components in real estate (Sections 269SS, 271D, 269ST, 50C), Benami property confiscation, and illegal dabba trading bucket shops.

---

## 10. Moon+ Reader Pro TTS Standards

Agents must adhere to [`docs/AGENT_TTS_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_TTS_POLICY.md):
1. **No Raw LaTeX Equations:** Never author `$$...$$` blocks. Always author spoken English formulas (e.g. *"The future value is calculated by multiplying..."*).
2. **No Table Traps:** Tables must be accompanied by comprehensive narrative paragraphs detailing comparisons.
3. **No Hard Line Breaks (`<br>`):** Maintain natural paragraph flow for Android neural voice engines.
4. **Indian Numbers & Currency:** Express figures in words (*"five lakh rupees"*, *"twenty-five crore rupees"*).
5. **Mermaid Diagrams:** Always follow every diagram with a complete spoken explanatory narrative.

---

## 11. Book-Generation Rules

Agents must adhere to [`docs/AGENT_BOOK_PUBLISHING_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_BOOK_PUBLISHING_POLICY.md):
1. Ingest canonical content directly from `src/content/articles/` and `data/`.
2. Generate Master Complete Reference, Master TTS Audiobook Edition, 7 Subject-Wise Volumes, and Chapter Editions across EPUB, PDF, and TXT.
3. Generate and validate `public/books/publication-manifest.json` with SHA-256 hashes and real word counts.
4. Mirror all files to `public/books/` and `dist/books/`.

---

## 12. Website Design Rules

1. **Visual Identity:** Deep navy brand color, warm ivory reading surface, restrained emerald/gold accents, and high-contrast typography.
2. **Layout:** 3-column desktop layout (Collapsible Topic Navigation on left, Central Reading Column, Sticky Table of Contents on right). Responsive single-column layout on mobile.
3. **Accessibility:** WCAG 2.2 AA compliance, semantic HTML, visible focus states, and reduced-motion support.

---

## 13. Testing Policy

Agents must adhere to [`docs/AGENT_TESTING_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_TESTING_POLICY.md):
1. Execute `npm test` before any commit.
2. Maintain 100% passing rate across all 17 validation suites.
3. Enforce the >10,000-word mandate and secret scanning across all files.

---

## 14. GitHub Pages Publishing Policy

Agents must adhere to [`docs/AGENT_DEPLOYMENT_POLICY.md`](file:///c:/g/dhanpedia-india/docs/AGENT_DEPLOYMENT_POLICY.md):
1. Subpath routing: all links and static assets must resolve via `/dhanpedia-india`.
2. Automated workflow in `.github/workflows/deploy.yml`.
3. Verify live URL `https://chirag127.github.io/dhanpedia-india/` following deployment.

---

## 15. Security and Privacy

1. **Zero Secret Exposure:** Never commit API keys, personal access tokens, or private credentials.
2. **No Analytics Bloat:** Zero third-party trackers, cookies, or intrusive telemetry scripts.
3. **Static Integrity:** No user data collection, database connections, or external runtime endpoints.

---

## 16. Parallel Agent Coordination

1. Tasks must be divided with explicit file ownership boundaries.
2. Agents working in parallel must never modify the same JSON schema or Astro page concurrently.
3. All parallel branches must be validated against `npm test` prior to consolidation.

---

## 17. Project State and Checkpoints

1. Track progress in [`state/project-state.json`](file:///c:/g/dhanpedia-india/state/project-state.json).
2. Record task completion in [`state/task-registry.json`](file:///c:/g/dhanpedia-india/state/task-registry.json).
3. Log technical decisions in [`state/decisions.json`](file:///c:/g/dhanpedia-india/state/decisions.json).
4. Save resumable phase checkpoints in `state/checkpoints/`.

---

## 18. Completion Gates

A prompt or phase may only be marked complete when:
1. All required code, markdown files, and JSON registries are physically written to disk.
2. `npm test` runs and passes with 0 failures.
3. `npm run build` runs and generates all static HTML pages and book compendiums.
4. All generated publications are verified against `publication-manifest.json`.
5. An audit report is saved in `reports/`.

---

## 19. Failure Handling

1. Never retry commands blindly if a build or test fails.
2. Inspect log outputs and fix root causes (e.g., broken JSON syntax, missing fields, or broken links).
3. Preserve existing working code; never wipe valid repository content to create an empty scaffold.

---

## 20. Definition of Done

A deliverable is Done only when:
- 100% of required files are committed to the repository.
- Full test suite passes (0 errors).
- Static build succeeds with complete book compilation.
- The live deployment is pushed to GitHub Pages.
- A comprehensive implementation report is published in `reports/`.
