# Dhanpedia India — Master Prompt Roadmap (Prompts 001–070)

## Overview & Execution Model

This roadmap establishes the autonomous, dependency-aware sequence of **70 structured build prompts** designed to develop Dhanpedia India from its initial technical shell into an exhaustive, 3,000,000-word Indian financial encyclopedia, 40-calculator suite, and multi-volume master publication.

---

## Phase Breakdown

```
+---------------------------------------------------------------------------------+
| PHASE 1: FOUNDATION, TAXONOMY & DESIGN SHELL (Prompts 001 - 005)               |
| Core website shell, authoritative taxonomies, design tokens, persistent state. |
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
| PHASE 2: EVIDENCE BASE & VERIFICATION ENGINE (Prompts 006 - 010)                |
| Primary source scrapers, statutory circular index, citation validation engine. |
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
| PHASE 3: QUALITY GATES & DUPLICATION ENGINE (Prompts 011 - 015)                 |
| N-gram hashing, semantic duplicate detectors, style linter, tone verifier.     |
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
| PHASE 4: FINANCIAL CALCULATOR SUITE (Prompts 016 - 022)                         |
| 40 deterministic, auditable financial calculators with formula breakdowns.    |
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
| PHASE 5: BANKING, CREDIT & FOUNDATIONS CORPUS (Prompts 023 - 030)               |
| Retail banking, credit cards, CIBIL, budgeting, emergency fund architectures.  |
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
| PHASE 6: TAXATION, REGULATORY & COMPLIANCE CORPUS (Prompts 031 - 038)           |
| Income tax regimes, capital gains, Section 115BAC, advance tax, ITR filing.    |
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
| PHASE 7: INVESTMENT PRODUCTS & MARKET VEHICLES (Prompts 039 - 046)              |
| Mutual funds, ETFs, G-Secs, RBI Retail Direct, Gold, Real Estate, REITs.       |
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
| PHASE 8: ADVANCED QUANTITATIVE & ALTERNATIVE CORPUS (Prompts 047 - 052)         |
| Factor investing, balance sheet forensic analysis, AIFs, PMS, Unlisted shares. |
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
| PHASE 9: CAREER CAPITAL, RETIREMENT & ESTATE PLANNING (Prompts 053 - 058)       |
| CTC optimization, ESOPs/RSUs, FIRE mathematics, Wills, Probate, Trusts.        |
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
| PHASE 10: TTS ENGINE, ACCESSIBILITY & MULTI-FORMAT EXPORTS (Prompts 059 - 064)  |
| Edge Read Aloud optimizations, Master EPUB 3, Master PDF, print CSS, manifests.|
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
| PHASE 11: AUTOMATED AUDIT, MONITORING & FINAL RELEASE (Prompts 065 - 070)       |
| Statutory monitors, automated regression quality gates, final 3M-word release. |
+---------------------------------------------------------------------------------+
```

---

## Detailed Prompt Specifications

### Phase 1: Foundation, Taxonomy & Design Shell
- **PROMPT-001 [CURRENT]**: Master Build Foundation, Research Architecture, Taxonomy, Premium Website Shell, Persistent State, and Quality Gates.
  - *Dependencies*: None.
  - *Outputs*: Astro TS scaffold, 22-category taxonomy, source registry, 3-column layout, documentation suite, test suite.
  - *Acceptance*: Type checking, tests pass, production build succeeds, state recorded.
- **PROMPT-002**: Client-Side Search Index Engine & Local Tokenizer.
  - *Dependencies*: PROMPT-001.
  - *Outputs*: Partitioned client-side JSON search index, keyboard shortcut modal (`Cmd+K`), category filtering, fuzzy matching.
  - *Acceptance*: Instant search execution across all taxonomy categories and sample articles without external API calls.
- **PROMPT-003**: Interactive Glossary & Cross-Reference Linking Engine.
  - *Dependencies*: PROMPT-002.
  - *Outputs*: Dynamic glossary directory (`/glossary`), canonical concept card components, automated tooltip definitions for financial acronyms.
  - *Acceptance*: Automated injection of canonical tooltips into article bodies without breaking TTS screen readers.
- **PROMPT-004**: Advanced Reading Mode & Responsive Typography System.
  - *Dependencies*: PROMPT-001.
  - *Outputs*: Dyslexia-friendly typography toggle, column-width adjustments, high-contrast dark/light themes, print style-sheets.
  - *Acceptance*: Verified WCAG AAA contrast ratios across both light and dark themes.
- **PROMPT-005**: Topic Directory & Dynamic Category Landers.
  - *Dependencies*: PROMPT-001, PROMPT-003.
  - *Outputs*: Programmatic Astro routes for `/categories/[category]`, breadcrumbs, category progress bars, and related subtopic trees.
  - *Acceptance*: Zero broken links; all 22 categories render unique hubs.

---

### Phase 2: Evidence Base & Verification Engine
- **PROMPT-006**: Statutory Source Ingestion & Citation Validation Engine.
  - *Dependencies*: PROMPT-001.
  - *Outputs*: CLI validation script verifying that every footnote reference points to a valid ID in `source-registry.json`.
  - *Acceptance*: Build fails if any orphan citation is detected.
- **PROMPT-007**: Regulatory Master Circular Database & Archive System.
  - *Dependencies*: PROMPT-006.
  - *Outputs*: Structured metadata repository of key RBI, SEBI, and CBDT circulars with PDF hashes and effective dates.
  - *Acceptance*: Offline verification of statutory dates for all primary sources.
- **PROMPT-008**: Claim-Level Evidentiary Registry (`claim-registry.json`).
  - *Dependencies*: PROMPT-006.
  - *Outputs*: Granular assertion database linking specific numerical claims (e.g. ₹5 Lakh DICGC limit) to primary source paragraphs.
  - *Acceptance*: Traceability from UI callout directly to Gazette notification.
- **PROMPT-009**: Research Gap Tracker & Notification Engine.
  - *Dependencies*: PROMPT-008.
  - *Outputs*: Dynamic dashboard displaying unresolved regulatory gaps, monitoring protocols, and severity alerts.
  - *Acceptance*: Seamless generation of `research-gaps.json` summary in website updates page.
- **PROMPT-010**: Source Health & Dead-Link Auditor Workflow.
  - *Dependencies*: PROMPT-006.
  - *Outputs*: Scheduled GitHub Action testing external government portal reachability and archiving Wayback Machine fallbacks.
  - *Acceptance*: Automated fallback URLs configured for unstable official domains.

---

### Phase 3: Quality Gates & Duplication Engine
- **PROMPT-011**: N-Gram Hash & Semantic Duplicate Detection Foundation.
  - *Dependencies*: PROMPT-001.
  - *Outputs*: Algorithmic duplicate scanner computing text hashes and sentence-level similarity across markdown files.
  - *Acceptance*: Detection of identical or near-identical text blocks exceeding 100 characters.
- **PROMPT-012**: Editorial Tone & Jargon Linter.
  - *Dependencies*: PROMPT-011.
  - *Outputs*: Custom markdown linter flagging promotional language, unbacked return promises, and missing risk disclosures.
  - *Acceptance*: Strict exit code 1 if unapproved promotional phrases are detected.
- **PROMPT-013**: TTS Compatibility & Phonetic Linter.
  - *Dependencies*: PROMPT-011.
  - *Outputs*: Audio-flow validator checking heading hierarchies, math formula text expansions, and table caption presence.
  - *Acceptance*: Zero unexpanded acronyms or isolated mathematical formulas in main text.
- **PROMPT-014**: Sensitive Information & Credential Scanner.
  - *Dependencies*: PROMPT-001.
  - *Outputs*: Pre-commit git hook and CI test preventing inclusion of secrets, API keys, private emails, or personal financial data.
  - *Acceptance*: Automated block on staged files containing credential patterns.
- **PROMPT-015**: Unified Quality Gate Orchestrator (`test:quality`).
  - *Dependencies*: PROMPTS 011-014.
  - *Outputs*: Consolidated single-command audit pipeline combining types, schemas, duplicates, linting, and secrets.
  - *Acceptance*: Pipeline executes under 15 seconds locally.

---

### Phase 4: Financial Calculator Suite
- **PROMPT-016**: Core Calculator Architecture & Client-Side Engine.
  - *Dependencies*: PROMPT-001.
  - *Outputs*: Reactive UI component library with accessible sliders, numerical inputs, amortization tables, and SVG visualizers.
  - *Acceptance*: Zero external heavy charting libraries; lightweight pure CSS/SVG renders.
- **PROMPT-017**: Core Compounding & Investment Calculators (SIP, Lumpsum, Step-Up SIP, SWP).
  - *Dependencies*: PROMPT-016.
  - *Outputs*: 4 working calculators with mathematical step-by-step proofs and inflation adjustment toggles.
  - *Acceptance*: Mathematical parity verified against standard actuarial tables.
- **PROMPT-018**: Lending & Debt Calculators (Home Loan EMI, Prepayment Optimizer, Loan Comparison).
  - *Dependencies*: PROMPT-016.
  - *Outputs*: 3 working calculators computing daily reducing balance interest, prepayment interest savings, and tenure reduction.
  - *Acceptance*: Loan schedules match RBI commercial bank amortization schedules to the nearest rupee.
- **PROMPT-019**: Direct Tax Calculators (Old vs New Regime Section 115BAC Comparator, Capital Gains Tax).
  - *Dependencies*: PROMPT-016.
  - *Outputs*: Deterministic direct tax comparator incorporating standard deductions, 87A rebates, and post-Budget 2024 capital gains.
  - *Acceptance*: Accurate tax computations across 10 benchmark salaried and freelance income profiles.
- **PROMPT-020**: Retirement & Independence Calculators (FIRE Corpus Sizer, SWR Simulator, NPS Annuity).
  - *Dependencies*: PROMPT-016.
  - *Outputs*: 3 retirement calculators with Indian historical inflation inputs and sequence-of-returns simulations.
  - *Acceptance*: Generates detailed annual cashflow depletion projections.
- **PROMPT-021**: Insurance & Human Life Value Calculators (HLV Need Analysis, Term Cover Sizer).
  - *Dependencies*: PROMPT-016.
  - *Outputs*: 2 insurance sizing tools based on income replacement and expense method.
  - *Acceptance*: Accurate output preventing under-insurance or expensive over-insurance.
- **PROMPT-022**: Specialty Calculators (Gratuity, EPF Compounding, HRA Exemption, Section 44ADA Presumptive).
  - *Dependencies*: PROMPT-016.
  - *Outputs*: 4 specialized statutory calculators with legal formula citations.
  - *Acceptance*: Mathematical alignment with statutory formula mandates.

---

### Phase 5: Banking, Credit & Foundations Corpus
- **PROMPT-023**: Comprehensive Guide to DICGC Deposit Insurance & Bank Failure Redundancy.
  - *Dependencies*: PROMPTS 005, 015.
  - *Outputs*: 8,000-word substantive article, ownership capacity matrix, claim settlement timelines.
  - *Acceptance*: Complete legal analysis of DICGC Act amendments.
- **PROMPT-024**: Indian Retail Banking Mechanics: Savings Accounts, Auto-Sweep FDs & Yield Maximization.
  - *Dependencies*: PROMPT-023.
  - *Outputs*: 7,500-word substantive article on daily product interest math, sweep FD penalty traps, and TDS thresholds.
  - *Acceptance*: Form 15G/15H rules and Section 80TTA/80TTB coverage verified.
- **PROMPT-025**: Payment Rails Architecture: UPI, NPCI Settlement, IMPS, NEFT & RTGS.
  - *Dependencies*: PROMPT-023.
  - *Outputs*: 7,000-word article on interchange economics, failed transaction reversal turnaround (T+1/T+5), and chargeback mechanisms.
  - *Acceptance*: Primary reference to RBI Harmonisation of Turn Around Time (TAT) circular.
- **PROMPT-026**: CIBIL & Credit Bureau Scoring Algorithms in India.
  - *Dependencies*: PROMPT-005.
  - *Outputs*: 8,000-word article breaking down 300-900 scoring variables, hard inquiries, credit utilization ratio, and bureau error correction.
  - *Acceptance*: Step-by-step dispute resolution under CICRA Act.
- **PROMPT-027**: Credit Card Mechanics: Billing Cycles, Grace Periods, APR Math & Reward Economics.
  - *Dependencies*: PROMPT-026.
  - *Outputs*: 7,500-word article analyzing 42%+ APR compounding formulas, cash advance penalties, and merchant category codes (MCC).
  - *Acceptance*: RBI Master Direction on Credit Card Issuance integrated.
- **PROMPT-028**: Emergency Fund Blueprint: Mathematical Sizing, Liquidity Tiers & Crisis Allocation.
  - *Dependencies*: PROMPT-005.
  - *Outputs*: 6,500-word guide on non-discretionary burn rate calculation and liquid/arbitrage fund allocations.
  - *Acceptance*: Concrete emergency plan for salaried and variable-income professionals.
- **PROMPT-029**: Inflation Dynamics in India: CPI vs Real Household Cost-of-Living Escalation.
  - *Dependencies*: PROMPT-005.
  - *Outputs*: 7,000-word article analyzing the weighted basket of official CPI versus urban education and healthcare inflation.
  - *Acceptance*: Mathematical proof of purchasing power erosion over 20-year periods.
- **PROMPT-030**: Personal Balance Sheet Architecture & Net-Worth Compounding Tracking.
  - *Dependencies*: PROMPT-029.
  - *Outputs*: 6,000-word guide on asset classification, contingent liabilities, and personal solvency ratios.
  - *Acceptance*: Downloadable markdown balance sheet template.

---

### Phase 6: Taxation, Regulatory & Compliance Corpus
- **PROMPT-031**: Complete Guide to Section 115BAC (New Tax Regime) vs Old Tax Regime.
  - *Dependencies*: PROMPT-019.
  - *Outputs*: 10,000-word exhaustive guide with mathematical break-even threshold analysis for all income brackets.
  - *Acceptance*: Incorporates Finance (No. 2) Act 2024 revisions.
- **PROMPT-032**: Capital Gains Taxation in India Post-Finance Act 2024.
  - *Dependencies*: PROMPT-031.
  - *Outputs*: 9,000-word master analysis of listed equity (111A/112A), unlisted equity, debt, gold, and real estate taxation.
  - *Acceptance*: Grandfathering rules for real estate and indexation removal detailed.
- **PROMPT-033**: Advance Tax Schedules, Calculation Methods & Section 234A/B/C Penalties.
  - *Dependencies*: PROMPT-031.
  - *Outputs*: 6,500-word article detailing quarterly instalment deadlines (15% by June 15 to 100% by March 15) and interest formulas.
  - *Acceptance*: Step-by-step calculation of 234C deferment interest.
- **PROMPT-034**: Salaried Employee Tax Optimization: CTC Structuring, HRA, LTA & Perquisites.
  - *Dependencies*: PROMPT-031.
  - *Outputs*: 7,500-word guide on HRA minimum formula calculation, food coupons, company car lease schemes, and Section 10 exemptions.
  - *Acceptance*: Dual regime optimization analysis.
- **PROMPT-035**: Presumptive Taxation Under Section 44AD and Section 44ADA for Consultants & Tech Workers.
  - *Dependencies*: PROMPT-031.
  - *Outputs*: 7,000-word operational guide on eligible professions, 50% deemed profit rules, and GST interplay.
  - *Acceptance*: Explicit clarity on Section 44AB tax audit exemptions.
- **PROMPT-036**: Comprehensive Guide to ITR Forms Selection (ITR-1 through ITR-4) & Filing Protocols.
  - *Dependencies*: PROMPT-031.
  - *Outputs*: 8,000-word guide on defect prevention, Annual Information Statement (AIS) reconciliation, and Form 26AS matching.
  - *Acceptance*: Error prevention checklist for direct tax filers.
- **PROMPT-037**: Tax Deducted at Source (TDS) & Tax Collected at Source (TCS) Demystified.
  - *Dependencies*: PROMPT-031.
  - *Outputs*: 6,500-word breakdown of Sections 194A, 194C, 194J, 194IA, 206C(1G) and Form 16/16A reconciliation.
  - *Acceptance*: Accurate threshold table across all personal finance TDS sections.
- **PROMPT-038**: Dispute Resolution with the Income Tax Department: Rectifications, Appeals & CIT(A).
  - *Dependencies*: PROMPT-036.
  - *Outputs*: 7,000-word statutory guide on Section 154 rectification, faceless assessment procedures, and ITAT appeals.
  - *Acceptance*: Timeline and statutory form requirements verified.

---

### Phase 7: Investment Products & Market Vehicles
- **PROMPT-039**: SEBI Mutual Fund Categorization Architecture: The Master Guide.
  - *Dependencies*: PROMPT-005.
  - *Outputs*: 10,000-word analysis covering all 36 SEBI mutual fund categories, market-cap boundaries, and portfolio mandate constraints.
  - *Acceptance*: Direct quotes and citations from SEBI October 2017 master circular.
- **PROMPT-040**: Direct Plans vs Regular Plans: Compounding Wealth Attrition Analysis.
  - *Dependencies*: PROMPT-039.
  - *Outputs*: 7,500-word mathematical treatise proving the 20-30% final corpus difference caused by regular plan distribution commissions.
  - *Acceptance*: Actuarial proof tables across 10, 20, and 30-year holding periods.
- **PROMPT-041**: Index Funds & ETFs in India: Tracking Error, Tracking Difference & Liquidity Mechanics.
  - *Dependencies*: PROMPT-039.
  - *Outputs*: 8,000-word guide on market maker units, authorized participants, cash drag, and iNAV vs exchange traded price.
  - *Acceptance*: Empirical tracking error analysis for Nifty 50 and Nifty Next 50 funds.
- **PROMPT-042**: Sovereign Debt Investing: RBI Retail Direct, G-Secs, T-Bills & State Development Loans.
  - *Dependencies*: PROMPT-005.
  - *Outputs*: 8,500-word guide on account creation, bidding without fees, yield-to-maturity calculation, and primary/secondary liquidity.
  - *Acceptance*: Step-by-step RBI NDS-OM walkthrough.
- **PROMPT-043**: Corporate Bond Market in India: Credit Ratings, Seniority, Yield Spreads & Default Risk.
  - *Dependencies*: PROMPT-042.
  - *Outputs*: 7,500-word guide on AAA to D rating criteria, debenture trustee mechanisms, and IL&FS/DHFL post-mortem lessons.
  - *Acceptance*: Clear framework for evaluating non-convertible debentures (NCDs).
- **PROMPT-044**: Sovereign Gold Bonds (SGBs) vs Gold ETFs vs Physical Bullion: Exhaustive Analysis.
  - *Dependencies*: PROMPT-005.
  - *Outputs*: 8,000-word master comparison covering secondary market yield discounts, 2.5% coupon taxation, and Section 47 capital gains exemptions.
  - *Acceptance*: Actionable framework for secondary market SGB acquisition on NSE/BSE.
- **PROMPT-045**: Real Estate Investment Trusts (REITs) & Small-and-Medium (SM) REITs in India.
  - *Dependencies*: PROMPT-005.
  - *Outputs*: 8,500-word guide covering distribution classifications (dividend, interest, repayment of debt), commercial occupancy, and SEBI SM-REIT guidelines.
  - *Acceptance*: Complete taxability guide for REIT unit distributions.
- **PROMPT-046**: Buying vs Renting Residential Real Estate in Indian Metros: Mathematical Decision Model.
  - *Dependencies*: PROMPT-018, PROMPT-045.
  - *Outputs*: 9,000-word analytical model comparing 2-3% rental yields against 8.5% mortgage rates, maintenance, stamp duty, and opportunity cost.
  - *Acceptance*: Full mathematical framework with downloadable comparison spreadsheet.

---

### Phase 8: Advanced Quantitative & Alternative Corpus
- **PROMPT-047**: Forensic Analysis of Indian Corporate Annual Reports & Financial Statements.
  - *Dependencies*: PROMPT-005.
  - *Outputs*: 9,500-word practical guide on detecting revenue manipulation, related-party transactions, auditor qualifications, and cashflow mismatches.
  - *Acceptance*: Real forensic case studies based on Indian regulatory disclosures.
- **PROMPT-048**: Financial Ratio Decomposition: ROCE, ROE, DuPont Analysis & Working Capital Health.
  - *Dependencies*: PROMPT-047.
  - *Outputs*: 8,000-word guide on core return metrics, cash conversion cycle, and asset turnover analysis in Indian equities.
  - *Acceptance*: Precise mathematical formulas and sector benchmarks.
- **PROMPT-049**: Factor Investing in the Indian Stock Market: Momentum, Quality, Low Volatility & Value.
  - *Dependencies*: PROMPT-041.
  - *Outputs*: 9,000-word research analysis of Nifty Strategic Indices, cyclicality of factor premia, and factor decay.
  - *Acceptance*: Backtested performance analysis using published NSE historical index data.
- **PROMPT-050**: Alternative Investment Funds (AIFs): Category I, II & III Regulatory & Tax Architecture.
  - *Dependencies*: PROMPT-005.
  - *Outputs*: 8,000-word analysis of SEBI AIF Regulations 2012, pass-through taxation rules, hurdle rates, and 2/20 fee structures.
  - *Acceptance*: Precise breakdown of Category II private equity / credit taxation.
- **PROMPT-051**: Portfolio Management Services (PMS) vs Mutual Funds: Operational & Alpha Evaluation.
  - *Dependencies*: PROMPT-040.
  - *Outputs*: 7,500-word analysis of ₹50 Lakh minimum ticket size, individual demat holdings, performance fee hurdles, and tax disadvantages.
  - *Acceptance*: Clear criteria on when PMS is economically justifiable over direct mutual funds.
- **PROMPT-052**: Unlisted Pre-IPO Equities, Private Credit & P2P Lending: Risk, Liquidity & Taxation.
  - *Dependencies*: PROMPT-050.
  - *Outputs*: 7,000-word guide on illiquidity discounts, stamp duty, Section 56(2)(viib) angel tax historical context, and RBI P2P lending caps.
  - *Acceptance*: Rigorous warning checklist for retail private market investors.

---

### Phase 9: Career Capital, Retirement & Estate Planning
- **PROMPT-053**: Tech Professional Compensation: ESOPs, RSUs, ESPP & Dual-Taxation Mechanics.
  - *Dependencies*: PROMPT-031.
  - *Outputs*: 8,500-word guide detailing perquisite taxation at vest, capital gains at sale, FEMA remittance compliance, and Form 67 DTAA claims.
  - *Acceptance*: Comprehensive tax calculation example for US-listed RSUs.
- **PROMPT-054**: Mandatory ITR Schedule FA (Foreign Assets) Reporting: Compliance & Black Money Act Penalties.
  - *Dependencies*: PROMPT-053.
  - *Outputs*: 7,500-word guide on disclosing foreign bank accounts, equity shares, calendar year reporting, and avoiding ₹10 Lakh per year statutory penalties.
  - *Acceptance*: Exact line-by-line guide for Schedule FA and Schedule FSI.
- **PROMPT-055**: The Indian FIRE Blueprint: Safe Withdrawal Rates, Corpus Sizing & Sequence of Returns.
  - *Dependencies*: PROMPT-020.
  - *Outputs*: 10,000-word master blueprint modeling 30-40 year retirement horizons in India, bucket strategies, and equity glide paths.
  - *Acceptance*: Proven survival rate simulations across Indian inflationary cycles.
- **PROMPT-056**: National Pension System (NPS): Tier 1 & 2 Complete Guide, Annuity Rules & Asset Allocation.
  - *Dependencies*: PROMPT-020.
  - *Outputs*: 8,500-word analysis of Scheme E, C, G, A choices, 60% tax-free lump sum, mandatory 40% annuity drag, and Section 80CCD deductions.
  - *Acceptance*: Complete mathematical comparison of NPS vs direct equity mutual fund investing.
- **PROMPT-057**: Estate Planning in India: Nominee vs Legal Heir Realities, Supreme Court Jurisprudence.
  - *Dependencies*: PROMPT-005.
  - *Outputs*: 8,000-word legal analysis explaining why nominees are merely trustees, succession law supremacy, and transmission protocols.
  - *Acceptance*: Cites key Supreme Court precedents (*Sarbati Devi*, *Ram Chander Talwar*).
- **PROMPT-058**: Drafting a Legally Valid Will, Probate Requirements & Private Family Trusts in India.
  - *Dependencies*: PROMPT-057.
  - *Outputs*: 8,500-word operational guide on will execution, attestation, registration, presidency town probate rules, and trust deed creation.
  - *Acceptance*: Complete sample will checklist and executor instructions.

---

### Phase 10: TTS Engine, Accessibility & Multi-Format Exports
- **PROMPT-059**: Text-to-Speech (TTS) Transformation Pipeline & Clean Reading Modes.
  - *Dependencies*: PROMPTS 023-058.
  - *Outputs*: Automated pipeline generating clean, TTS-optimized markdown with natural language formula expansions and spoken citations.
  - *Acceptance*: Flawless pronunciation and audio pacing under Microsoft Edge Read Aloud.
- **PROMPT-060**: Master EPUB 3 Generation Engine & Schema Validation.
  - *Dependencies*: PROMPT-059.
  - *Outputs*: Automated build script compiling the complete corpus into a single, standards-compliant EPUB 3 publication with embedded fonts and TOC.
  - *Acceptance*: Passes official `epubcheck` with zero errors.
- **PROMPT-061**: Master PDF Publication Engine & Print-Ready Typesetting.
  - *Dependencies*: PROMPT-060.
  - *Outputs*: Automated PDF generation pipeline featuring running headers, professional typography, cross-volume pagination, and book-ready indexing.
  - *Acceptance*: Produces high-resolution, searchable, accessible PDF publication.
- **PROMPT-062**: Subject-Wise & Individual Chapter Download Generators.
  - *Dependencies*: PROMPT-060, PROMPT-061.
  - *Outputs*: Automated export pipelines for individual 22-subject volumes and standalone article PDFs and plain text files.
  - *Acceptance*: Automated generation of checksums (SHA-256) for every downloadable artifact.
- **PROMPT-063**: Publication Manifests & Offline Release Architecture.
  - *Dependencies*: PROMPT-062.
  - *Outputs*: Machine-readable release manifests (`publication-manifest.json`) indexing all download links, word counts, and checksums.
  - *Acceptance*: Integration into the website Books & Downloads center.
- **PROMPT-064**: High-Volume Asset Separation & GitHub Releases Integration.
  - *Dependencies*: PROMPT-063.
  - *Outputs*: Decoupled release workflow uploading multi-gigabyte master publication bundles to GitHub Releases instead of bloating Pages repository.
  - *Acceptance*: Zero impact on standard GitHub Pages site size limits.

---

### Phase 11: Automated Audit, Monitoring & Final Release
- **PROMPT-065**: Automated Regulatory Change Monitoring Engine.
  - *Dependencies*: PROMPT-010.
  - *Outputs*: Scheduled GitHub Action scanning RBI, SEBI, and CBDT press release feeds to automatically flag affected articles and generate research tasks.
  - *Acceptance*: Automated creation of tasks in `state/task-registry.json` on simulated circular updates.
- **PROMPT-066**: Automated Source-to-Article Citation Consistency Gate.
  - *Dependencies*: PROMPT-065.
  - *Outputs*: CI quality gate verifying that every statutory amendment triggers an audit warning across all downstream articles referencing that source ID.
  - *Acceptance*: 100% cascade tracking from source registry to published content.
- **PROMPT-067**: Full Corpus Deduplication & Word Count Verification Audit.
  - *Dependencies*: PROMPTS 023-058.
  - *Outputs*: Comprehensive word-count and uniqueness audit certifying that all 300+ substantive articles meet quality thresholds without boilerplate inflation.
  - *Acceptance*: Certified count exceeding 3,000,000 substantive words.
- **PROMPT-068**: Comprehensive SEO, Structured Data & Social Metadata Audit.
  - *Dependencies*: PROMPT-067.
  - *Outputs*: Schema.org JSON-LD generation for articles, financial educational material, breadcrumbs, sitemaps, and OpenGraph/Twitter cards.
  - *Acceptance*: Google Rich Results test validation across all page templates.
- **PROMPT-069**: End-to-End Responsive & Cross-Browser Visual Quality Audit.
  - *Dependencies*: PROMPT-068.
  - *Outputs*: Automated headless browser visual regression testing across desktop, tablet, and mobile viewports.
  - *Acceptance*: Zero horizontal scrolling, pristine typography, fully operable collapsible sidebars.
- **PROMPT-070**: Final Master Build, Integrity Checkpoint & Public Production Release.
  - *Dependencies*: PROMPTS 001-069.
  - *Outputs*: Master release publication, final verification reports, synchronized state checkpoints, and deployment verification on GitHub Pages.
  - *Acceptance*: Production site live at `https://chirag127.github.io/dhanpedia-india/` with zero console errors, 100/100 Lighthouse performance, accessibility, and SEO scores.
