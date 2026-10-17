# Dhanpedia India — Agent Testing, Integrity & Quality Gate Policy

**Status:** Canonical Specialist Policy  
**Parent Document:** [`AGENTS.md`](file:///c:/g/dhanpedia-india/AGENTS.md)  
**Effective Date:** October 2026 (Operational under Prompt 004)

---

## 1. Zero-Failure Quality Gate Standard

In the Dhanpedia India repository, quality gates are non-negotiable. No code, content, or publication may be committed or merged into `main` unless the full test suite passes with **zero failures and 100% assertions satisfied**.

The test suite is executed locally via:
```bash
npm test
```
Which triggers `node scripts/validate-integrity.mjs`.

For comprehensive type checking and Astro schema validation:
```bash
npm run test:quality
```
Which executes `astro check && node scripts/validate-integrity.mjs`.

---

## 2. Test Suite Architecture

The integrity suite is structured into focused validation suites:

1. **Taxonomy Integrity (Suite 1):** Validates all 26 Canonical Domains (A to Z) in `data/taxonomy/taxonomy.json`, ensuring unique IDs, non-empty canonical names, substantive descriptions, and regulatory mappings.
2. **Financial System Tree (Suite 2):** Verifies the machine-readable node hierarchy in `data/taxonomy/financial-system.json`.
3. **Statutory Source Registry (Suite 3):** Asserts at least 30 primary statutory sources in `data/sources/source-registry.json` with HTTPS URLs and Tier 1–4 reliability classifications.
4. **Statutory Claim Registry (Suite 4):** Validates legal claims in `data/claims/claim-registry.json` and verifies that every cited source ID exists in the source registry.
5. **Foundational Concept Registry (Suite 5):** Asserts at least 50 core concepts with layered definitions in `data/concepts/concept-registry.json`.
6. **Financial Calculator Inventory (Suite 6):** Asserts at least 40 calculators in `data/calculators/calculator-inventory.json`.
7. **Article Coverage Matrix (Suite 7):** Validates article mappings in `data/publications/article-coverage-matrix.json`.
8. **Public Dataset Registry (Suite 8):** Asserts verified public financial datasets in `data/sources/public-datasets.json`.
9. **Knowledge Graph Nodes (Suite 9):** Validates typed nodes across entities, regulators, products, and concepts in `data/knowledge-graph/nodes.json`.
10. **Knowledge Graph Relationships (Suite 10):** Asserts semantic relationships in `data/knowledge-graph/relationships.json` and verifies referential integrity.
11. **Financial Formula Registry (Suite 11):** Asserts canonical formulas in `data/calculators/formulas.json`, requiring audio-native spoken English narration for every formula.
12. **Structured Learning Paths (Suite 12):** Validates 12 curated learning curricula in `data/publications/learning-paths.json`.
13. **Prioritized Coverage Gaps (Suite 13):** Validates coverage gap tracking across P0 to P4 priority bands in `data/research/coverage-gaps.json`.
14. **Legacy Taxonomy Gaps (Suite 14):** Verifies referential consistency in `data/taxonomy/research-gaps.json`.
15. **Article Word Counts & Secret Scanning (Suite 15):**
    - Enforces the **>10,000-word mandate** for substantive articles in `src/content/articles/`.
    - Scans every source file for accidental API keys, tokens, or private credentials.
16. **Publication Manifest & Artifact Integrity (Suite 16):**
    - Validates `public/books/publication-manifest.json`.
    - Verifies physical existence, positive byte size, and SHA-256 hash match for all generated EPUB, PDF, and TXT files.
17. **Moon+ Reader Pro Audio-Native Quality Checks (Suite 17):**
    - Asserts zero isolated LaTeX equation blocks (`$$`) in published articles and book text.
    - Asserts that every Mermaid diagram is accompanied by descriptive spoken narrative paragraphs.

---

## 3. Pre-Commit and Pre-Push Protocol

Before pushing any commit:
1. Run `npm test`.
2. Run `npm run build:book` to ensure books compile cleanly.
3. Run `npm run build` to ensure Astro static route generation succeeds with 0 errors.
4. Verify git status is clean and changes are atomic.
