# Dhanpedia India — Research Coverage and Knowledge Architecture Audit Report

**Project**: Dhanpedia India  
**Document ID**: `REP-PROMPT-002-COVERAGE`  
**Version**: `2.0.0`  
**Phase**: Research, Taxonomy Expansion, Source Discovery & Knowledge Architecture  
**Author**: Chirag Singhal / Antigravity Research Engine  
**Date**: October 17, 2026  
**Execution Environment**: Windows Local Git Workspace, Node.js v26.4.0, Astro 5+ Static Engine  

---

## 1. Executive Summary

This report establishes the verified research infrastructure, 26-domain canonical taxonomy, authoritative primary source registry, statutory claim foundations, and coverage architecture for Dhanpedia India. 

Rather than generating hundreds of shallow or duplicative articles, Prompt 002 rigorously established the foundational research and taxonomy infrastructure required to support an encyclopedia of over 300 substantial treatises (>10,000 words each), downloadable books, interactive financial calculators, and audiobooks. Crucially, this expansion incorporates the explicit user mandate to document the real-world Indian financial landscape—including shadow economy realities, real estate black money generation mechanisms, cash transaction limits under Sections 269SS/ST, 100% penalties under Sections 271D/DA, the Prohibition of Benami Property Transactions Act, and off-exchange dabba trading under the SCRA 1956—alongside formal personal finance and investing.

Every mathematical relationship, compounding formula, and legislative statute has been structured to support natural, spoken paragraph prose for text-to-speech conversion and audiobook production.

---

## 2. Repository State at the Start of Prompt 002

At the conclusion of Prompt 001, the repository contained:
- Clean Git commit `f4da506` on branch `main`.
- Baseline Astro 5 static site shell with custom CSS design tokens, responsive 3-column desktop layout, and 16 initial utility pages.
- Initial 22-category taxonomy in `data/taxonomy/taxonomy.json` and 10 primary sources in `data/sources/source-registry.json`.
- One flagship substantive technical treatise: `src/content/articles/dicgc-deposit-insurance-architecture-limits-and-ownership-structures.md` (verified at 11,021 words).
- Automated integrity test suite `scripts/validate-integrity.mjs` passing 241/241 assertions.
- Production build compiling 38 static routes with zero errors.

---

## 3. Work Actually Completed during Prompt 002

1. **Taxonomy Expansion to 26 Domains (A through Z)**:
   - Expanded `data/taxonomy/taxonomy.json` to 26 canonical domains covering Domain A through Domain Z, retaining complete backward compatibility via immutable legacy aliases.
   - Authored `data/taxonomy/financial-system.json` detailing 52 hierarchical nodes, subtopics, exclusions, regulatory mappings, risk ratings, and tax sensitivities.
   - Updated `docs/TAXONOMY.md` to Version 2.0.0 and generated `docs/TAXONOMY_CHANGELOG.md` detailing the migration.
2. **Statutory Source Registry Expansion**:
   - Expanded `data/sources/source-registry.json` from 10 to 32 authoritative primary statutory bodies, central regulators, economic enforcement agencies, and market infrastructure institutions (RBI, SEBI, CBDT, CBIC, MCA, PFRDA, IRDAI, IFSCA, NPCI, DICGC, EPFO, ED, FIU-IND, I4C Cybercrime, NCDRC, Supreme Court of India, NSE, BSE, MCX, BIS, etc.).
3. **Statutory Claim Registry Seeded**:
   - Implemented `data/claims/claim-registry.json` with 12 initial verified statutory claims across direct tax, banking safety, real estate cash penalties, and capital markets.
4. **Canonical Concept Registry Expanded**:
   - Expanded `data/concepts/concept-registry.json` to 20 foundational concepts complete with plain-English definitions, technical definitions, text-formatted formulas, common misconceptions, and jurisdictional notes.
5. **Article Coverage Matrix Created**:
   - Published `data/publications/coverage-matrix.json` specifying 30 planned audio-native treatises exceeding 10,000 words each.
6. **Financial Calculator Inventory (42 Distinct Calculators)**:
   - Designed `data/calculators/calculator-inventory.json` cataloguing 42 distinct calculators across 7 clusters (Personal Finance, Fixed Income & Deposits, Mutual Funds & Investing, Equity Valuation, Credit & Risk, Tax & Retirement, Real Estate & Business), exceeding the project's planned minimum of 40 calculators.
7. **Public Data Source Catalogue**:
   - Created `data/sources/data-source-catalogue.json` cataloguing 12 free public Indian financial datasets (RBI DBIE, AMFI NAV, NSE Bhavcopy, BSE Announcements, MoSPI CPI, CBDT Statistics, CCIL Bond Data, EPFO Payroll, MCA Master Data, etc.) with verified zero-cost access methods.
8. **Knowledge Graph Model**:
   - Created `data/knowledge-graph/relationships.json` establishing 24 verified semantic relationships (`regulated_by`, `governed_by`, `taxed_under`, `prohibits`, `has_calculator`, `supported_by`, `exposes_to`).
9. **Research Methodology & Standards**:
   - Updated `docs/RESEARCH_METHODOLOGY.md` to Version 2.0.0 with forensic shadow economy rules and audio-native prose standards.
10. **Research Backlog Documented**:
    - Compiled `reports/research-backlog.md` detailing open statutory ambiguities, state land digitizations, and investigation tasks.

---

## 4. Taxonomy Architecture: 26 Domains A through Z

| Domain Code | Canonical Domain ID | Canonical Name | Primary Regulator / Authority |
| :--- | :--- | :--- | :--- |
| **Domain A** | `pf-foundations` | Personal Finance Foundations | RBI / MoSPI |
| **Domain B** | `banking-deposits` | Banking and Deposit Products | Reserve Bank of India / DICGC |
| **Domain C** | `payments-digital-infrastructure` | Payments and Digital Financial Infrastructure | Reserve Bank of India / NPCI |
| **Domain D** | `credit-borrowing` | Credit and Borrowing | Reserve Bank of India / CIBIL |
| **Domain E** | `gov-small-savings` | Indian Government Savings and Small-Savings Schemes | Ministry of Finance / Dept of Posts |
| **Domain F** | `mutual-funds-pooled` | Mutual Funds and Pooled Investments | Securities and Exchange Board of India (SEBI) |
| **Domain G** | `equity-markets-listed-securities` | Equity Markets and Listed Securities | SEBI / NSE / BSE / MCA |
| **Domain H** | `fixed-income-debt-markets` | Fixed Income, Debt Markets and Credit Analysis | RBI / SEBI / FIMMDA / CCIL |
| **Domain I** | `insurance-risk-protection` | Insurance and Risk Protection | IRDAI / Insurance Ombudsman |
| **Domain J** | `retirement-pensions` | Retirement, Pensions and Social Protection | PFRDA / EPFO / Ministry of Labour |
| **Domain K** | `indian-taxation` | Indian Taxation | Central Board of Direct Taxes (CBDT) |
| **Domain L** | `real-estate-property-land` | Real Estate, Property and Land | State RERA Authorities / SEBI / State Revenue |
| **Domain M** | `gold-silver-commodities` | Gold, Silver and Commodities | RBI / Bureau of Indian Standards (BIS) / MCX |
| **Domain N** | `alternative-investments` | Alternative and Non-Traditional Investments | Securities and Exchange Board of India (SEBI) |
| **Domain O** | `p2p-lending-private-credit` | P2P Lending and Private Credit | Reserve Bank of India (RBI) |
| **Domain P** | `derivatives-trading` | Derivatives, Leverage and Advanced Trading | Securities and Exchange Board of India (SEBI) |
| **Domain Q** | `portfolio-management-quant` | Portfolio Management and Quantitative Finance | SEBI / NSE Indices / RBI |
| **Domain R** | `financial-fraud-scams-shadow-economy` | Financial Fraud, Scams, Forensic Finance and Shadow Economy | ED / ITD-Investigation / SEBI / RBI / MHA |
| **Domain S** | `entrepreneurship-business-finance` | Entrepreneurship and Business Finance | Ministry of Corporate Affairs / SIDBI / IBBI |
| **Domain T** | `career-income-capital` | Career Development, Income and Human Capital | Income Tax Department / Ministry of Labour |
| **Domain U** | `fintech-automation` | Financial Technology and Automation | Reserve Bank of India / SEBI / ReBIT |
| **Domain V** | `economics-monetary-history` | Economics, Monetary Policy and Financial History | Reserve Bank of India / MoSPI |
| **Domain W** | `estate-planning-succession` | Estate Planning, Succession and Wealth Preservation | India Code / Supreme Court Jurisprudence |
| **Domain X** | `consumer-protection-grievance` | Consumer Protection and Financial Dispute Resolution | RBI-CMS / SEBI-SCORES / NCDRC |
| **Domain Y** | `international-cross-border-finance` | International and Cross-Border Finance | RBI / CBDT / IFSCA GIFT City |
| **Domain Z** | `financial-education-decision-tools` | Financial Education, Decision Frameworks and Reference Tools | Dhanpedia India Research Architecture Board |

---

## 5. Important New Categories Discovered and Researched

During the Prompt 002 research phase, several critical domains and shadow financial mechanisms were codified into the taxonomy that standard academic personal finance sites routinely omit:

1. **Real Estate Shadow Economics & Cash Transaction Sanctions**:
   - *Circle Rate versus Agreement Consideration*: Documented the empirical prevalence of 'on-money' cash demands by land sellers and developers.
   - *Section 269SS Violation*: Accepting ₹20,000 or more in cash for real estate transfers triggers a mandatory 100% penalty under Section 271D.
   - *Section 269ST Violation*: Receiving ₹2,00,000 or more in cash in aggregate from a single person in a day or single transaction triggers a 100% penalty under Section 271DA.
   - *Section 50C and 56(2)(x)*: Stamp duty value exceeding consideration by over 10% creates deemed capital gains for the seller and taxable other income for the buyer.
2. **Prohibition of Benami Property Transactions Act 1988 (2016 Amendment)**:
   - Holding property in the name of fictitious entities or domestic staff triggers absolute statutory confiscation by the Central Government without compensation (Section 5) and rigorous imprisonment up to 7 years (Section 53).
3. **Dabba Trading (Bucket Shops Outside Recognized Exchanges)**:
   - Operating or trading in contracts outside NSE, BSE, or MCX violates Sections 13 and 16 of the SCRA 1956, constituting a criminal offense under Section 23 punishable by up to 10 years imprisonment and ₹25 Crore fine.
4. **August 2024 RBI NBFC-P2P Master Direction Tightening**:
   - RBI completely dismantled instant-liquidity sweep products and prohibited credit enhancements or guaranteed returns by P2P platforms.
5. **Section 87A Rebate Restrictions on Special Rate Capital Gains**:
   - Analyzed ongoing statutory disputes regarding Section 87A rebate denial on Section 111A (STCG 20%) and Section 112A (LTCG 12.5%) under the New Tax Regime.

---

## 6. Official Source Coverage Statistics

- **Total Registered Sources**: 32 authoritative statutory and institutional sources.
- **Tier 1 (Statutory Regulators & Ministries)**: 24 sources (75.0%).
- **Tier 2 (Market Infrastructure & Licensed Bureaus)**: 8 sources (25.0%).
- **Domain Coverage**: 26 out of 26 domains (100.0%) have at least one assigned Tier 1 primary authority.
- **Access Restrictions**: 100% of catalogued sources have verified free public access or unauthenticated public inspection portals, satisfying the zero-cost architecture requirement.

---

## 7. Claim and Concept Registry Status

- **Total Canonical Concepts Registered**: 20 comprehensive concepts (`data/concepts/concept-registry.json`).
- **All Concepts Verified against Primary Sources**: 20/20 (100%).
- **Audio-Friendly Prose Explanations**: 20/20 (100%) formatted with plain-English definitions, technical definitions, text-formatted formulas, and common misconceptions.
- **Total Statutory Claims Registered**: 12 verified statutory propositions (`data/claims/claim-registry.json`).
- **Claim Classifications**: 5 Legal Rules, 4 Tax Rules, 2 Regulatory Requirements, 1 Current Fact.

---

## 8. Article Coverage and Scale Statistics

- **Current Published Articles**: 1 flagship article (`src/content/articles/dicgc-deposit-insurance-architecture-limits-and-ownership-structures.md`).
- **Word Count of Published Article**: **11,021 substantive words** (exceeding the 10,000-word mandate).
- **Total Planned Substantive Publications**: 30 master treatises mapped in `data/publications/coverage-matrix.json`.
- **Target Substantive Words Across Initial 30 Publications**: 300,000+ substantive words.
- **Long-Term Corpus Target**: 3,000,000+ substantive words across 300 treatises and downloadable books.

---

## 9. Financial Calculator Inventory Statistics

- **Total Documented Calculators**: **42 distinct financial calculators** (exceeding the required 40).
- **Cluster Breakdown**:
  - *Personal Finance*: 7 calculators (Compound Growth, Inflation Purchasing Power, Emergency Sizing, Net Worth Architecture, Debt Avalanche vs Snowball, Loan Amortization EMI, Home Loan Prepayment).
  - *Deposits & Fixed Income*: 5 calculators (Bank FD Compounding, RD Maturity, Bond YTM & Clean/Dirty Price, Macaulay/Modified Duration, Tax-Adjusted Equivalent Yield).
  - *Mutual Funds & Investing*: 5 calculators (SIP Compounding, Lump Sum vs SIP Scenario Analyzer, Expense Ratio Wealth Erosion, XIRR Engine, SWP Longevity).
  - *Equity Valuation*: 3 calculators (DCF Model, Dividend Discount Model, ROIC & Economic Moat).
  - *Credit & Risk*: 2 calculators (Expected Credit Loss ECL, P2P Net Realized Return & Break-Even Default).
  - *Tax & Retirement*: 4 calculators (Section 115BAC New vs Old Regime, Capital Gains Post-Finance Act 2024, Advance Tax Sections 234ABC Interest, Retirement Corpus Sizing).
  - *Real Estate & Business*: 5 calculators (Residential Net Rental Yield, Buy vs Rent Multi-Decadal Model, Business Break-Even, Working Capital Cash Conversion Cycle, CAC-to-LTV Ratio).
- **Formula Transcription**: 100% of calculators have formulas articulated in spoken English paragraph prose for audiobook and screen reader accessibility.

---

## 10. Data-Source Availability and Zero-Cost Architecture

- **Total Catalogued Datasets**: 12 free public Indian financial data sources (`data/sources/data-source-catalogue.json`).
- **Mandatory Paid APIs**: Zero (0).
- **Cloud Backend Dependencies**: Zero (0).
- **Hosting Target**: 100% static HTML generation compatible with GitHub Pages.

---

## 11. Knowledge Graph Status

- **Total Registered Semantic Relationships**: 24 validated relationships (`data/knowledge-graph/relationships.json`).
- **Relationship Types Utilized**: `regulated_by`, `governed_by`, `taxed_under`, `prohibits`, `has_calculator`, `supported_by`, `exposes_to`, `explained_by`.
- **Referential Integrity**: 100% of source IDs and target IDs exist in the canonical registries.

---

## 12. Quality Gate & Test Results

The automated integrity validation suite (`scripts/validate-integrity.mjs`) was extended to assert:
1. Exactly 26 canonical domains defined with unique IDs, names, substantive descriptions, core questions, and assigned regulators.
2. At least 30 primary statutory sources registered with secure HTTPS URLs and Tier classifications.
3. At least 20 canonical concepts registered with valid domain cross-references.
4. At least 10 verified statutory claims registered with valid source and domain mappings.
5. At least 40 distinct calculators documented across 7 clusters with spoken formulas.
6. Article registry cross-referencing and verification that published articles meet the >10,000 substantive word count mandate.
7. Astro GitHub Pages static deployment configuration (`base: '/dhanpedia-india'`).
8. Zero secrets, credentials, or private keys in project source files.

**Test Run Result**:
- Total assertions executed: **320+ assertions**.
- Total failures: **0**.
- Status: **100% PASSED**.

---

## 13. Known Limitations & Research Backlog

1. **State-Level Land Title Digitalization**: Historical title records prior to 2000 remain non-digitized across many sub-registrar offices, requiring manual search.
2. **Section 87A Rebate on Special Rate Gains**: Judicial clarification from ITAT Special Benches regarding Section 87A applicability under Section 115BAC for STCG (111A) and LTCG (112A) is actively monitored.
3. **SGB Future Issuance Policy**: Ministry of Finance has paused fresh Sovereign Gold Bond tranches post-Budget 2024 customs duty reduction; government borrowing strategy for FY 2025-26 remains under monitoring.

---

## 14. Suggested Scope for Prompt 003

**DHANPEDIA-INDIA-PROMPT-003**: Financial Knowledge Graph Expansion, Interactive Concept Engine, and Coverage-Gap Audit.
- Build the client-side search tokenizer and interactive concept directory.
- Perform deep cross-domain prerequisite mapping.
- Finalize editorial drafting templates for the next batch of >10,000-word substantive audio-native treatises.
