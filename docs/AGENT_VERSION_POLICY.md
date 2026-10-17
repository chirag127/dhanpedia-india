# Dhanpedia India — Agent Dependency & Version Selection Policy

**Status:** Canonical Specialist Policy  
**Parent Document:** [`AGENTS.md`](file:///c:/g/dhanpedia-india/AGENTS.md)  
**Effective Date:** October 2026 (Operational under Prompt 004)

---

## 1. Prime Version Policy

Dhanpedia India enforces a strict, evidence-grounded dependency policy. Agents must never blindly upgrade packages to arbitrary versions, adopt alpha/beta/prerelease builds, or introduce unvetted third-party bloat.

Every dependency must satisfy the following lifecycle criteria:
1. **LTS Runtime Alignment:** Node.js Active LTS (Node 20+ / Node 22+).
2. **Deterministic Locking:** All production and development dependencies must be strictly locked in `package-lock.json`.
3. **Zero Mandatory Paid Services:** Never add a dependency that requires an API key with a paid quota, a credit card subscription, or proprietary cloud infrastructure.
4. **Minimal Runtime Overhead:** Prefer native Node.js standard libraries (`node:fs`, `node:path`, `node:crypto`, `node:stream`, `node:buffer`) over heavy third-party packages for file processing, hashing, vector generation, and publication packaging.

---

## 2. Core Toolchain Baseline

| Component | Selected Version / Specification | Rationale & Status |
| :--- | :--- | :--- |
| **Runtime** | Node.js 20.x (CI) / Node 26.x (Local) | Official Active LTS baseline supported across GitHub Actions Ubuntu runners. |
| **Framework** | Astro 5.x (`astro@^5.1.0`) | Modern Content Layer architecture, zero client-side JS by default, static HTML generation. |
| **Language** | TypeScript 5.x (`typescript@^5.7.0`) | Strict static type checking, Astro component type checking (`astro check`). |
| **Styling** | Vanilla CSS Custom Properties | Zero build dependencies, zero Tailwind runtime bloat, CSS variables design tokens (`src/styles/theme.css`). |
| **Package Manager** | `npm` 10+ / 12+ | Standard Node.js package manager, reproducible installs via `npm ci`. |
| **EPUB Generator** | Custom Node.js `ZipBuilder` | EPUB 3.3 compliant, uncompressed `mimetype` header (magic `0x04034b50`), zero npm dependencies. |
| **PDF Generator** | Custom Node.js `SimplePdfWriter` | ISO 32000-1 (PDF 1.4) compliant, vector text stream writer, eliminates Chromium/Puppeteer overhead. |
| **Search Engine** | Client-side partitionable JSON index | Zero external backend required, 100% static GitHub Pages compatible (`public/search-index.json`). |

---

## 3. Dependency Upgrade Protocol

Prior to upgrading any dependency in `package.json`:
1. Check the official release notes and changelog.
2. Verify backward compatibility with Astro 5 static output.
3. Check for open security advisories using `npm audit`.
4. Run full test suite: `npm test` and `npm run test:quality`.
5. Run full build: `npm run build`.
6. Record the rationale in [`docs/research/technical-research-log.md`](file:///c:/g/dhanpedia-india/docs/research/technical-research-log.md).
