# Dhanpedia India — Agent Book Publishing & Distribution Policy

**Status:** Canonical Specialist Policy  
**Parent Document:** [`AGENTS.md`](file:///c:/g/dhanpedia-india/AGENTS.md)  
**Effective Date:** October 2026 (Operational under Prompt 004)

---

## 1. Prime Publishing Directive

Dhanpedia India operates as a single-source-of-truth publication engine. The website, downloadable books, standalone chapters, and audio-native text archives are generated from the exact same validated canonical Markdown files and research registries (`data/` and `src/content/articles/`).

Under no circumstances may an agent maintain separate, diverged copies of articles for the website and the books. Any change made to canonical content must automatically compile into both the static web routes and the multi-format publication files.

---

## 2. Multi-Format Publication Matrix

The publication pipeline (`scripts/generate-book.mjs`) generates four tiers of publication artifacts:

1. **Master Complete Reference Compendiums:**
   - `Dhanpedia-India-Complete-Reference.epub`: Standards-compliant EPUB 3 with uncompressed `mimetype`, hierarchical NCX navigation, and styled chapters.
   - `Dhanpedia-India-Complete-Reference.pdf`: Print-ready A4 PDF with running headers, footers, page numbering, and line wrapping.
   - `Dhanpedia-India-Complete-Reference.txt`: Clean, plain-text edition preserving chapter boundaries.
2. **Master TTS Audiobook Editions (Moon+ Reader Pro Optimized):**
   - `Dhanpedia-India-TTS-Edition.epub`: Tailored for Moon+ Reader Pro TTS listening with spoken English formulas, expanded acronyms, and zero visual table traps.
   - `Dhanpedia-India-TTS-Edition.pdf`: Accompanying PDF edition formatted for spoken cadence.
   - `Dhanpedia-India-TTS-Edition.txt`: Streamlined plain text for direct screen-off TTS importing.
3. **Subject-Wise Volumes (Domain Compendiums):**
   - Personal Finance Foundations (`Personal-Finance-Foundations.epub`, `.pdf`, `.txt`)
   - Banking and Deposit Products (`Banking-and-Deposit-Products.epub`, `.pdf`, `.txt`)
   - Indian Taxation Architecture (`Indian-Taxation-Architecture.epub`, `.pdf`, `.txt`)
   - Financial Mathematics (Spoken English) (`Financial-Mathematics-Spoken-English.epub`, `.pdf`, `.txt`)
   - Structured Learning Curricula (`Structured-Learning-Curricula.epub`, `.pdf`, `.txt`)
   - Forensic Finance & Shadow Economy (`Forensic-Finance-and-Shadow-Economy.epub`, `.pdf`, `.txt`)
   - Statutory Authorities Registry (`Statutory-Authorities-Registry.epub`, `.pdf`, `.txt`)
4. **Standalone Chapter Editions:**
   - Individual chapter publications for major substantive treatises (e.g., DICGC Deposit Insurance, Concept Encyclopedia).

---

## 3. Zero-Dependency Build Architecture

To guarantee 100% free, reproducible builds on GitHub Actions and local developer machines:
- **No Headless Browser or Heavy PDF Binaries:** The PDF generator uses pure Node.js vector and stream writing (`SimplePdfWriter` in `scripts/generate-book.mjs`), eliminating Puppeteer, Chromium, and native C++ binding crashes.
- **Pure Node.js EPUB Packaging:** The EPUB generator uses pure Node.js byte-level zip building (`ZipBuilder`), guaranteeing that the uncompressed `mimetype` file is placed first without extra directory overhead (magic number `0x04034b50`).
- **Standard Mirroring:** All generated artifacts are written simultaneously to `public/books/` (for local development and Astro static bundling) and `dist/books/` (for static production deployment).

---

## 4. Publication Manifest & Content Integrity

Every execution of `npm run build:book` (`node scripts/generate-book.mjs`) generates a machine-readable `publication-manifest.json` containing:
- Unique `publicationId` for each artifact.
- Title, edition type (`master_reference`, `tts_optimized`, `subject_volume`, `chapter_edition`).
- Exact file size in bytes.
- Cryptographic SHA-256 hash.
- Verified word count and estimated page count.
- TTS suitability rating.
- Download URL path.

Quality gates in `scripts/validate-integrity.mjs` verify that all entries in `publication-manifest.json` physically exist, have non-zero file sizes, and match their computed SHA-256 hashes.
