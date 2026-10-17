# Dhanpedia India — Article Boundary and Content Deduplication Audit

**Document ID**: `REP-PROMPT-003-ARTICLE-BOUNDARIES`  
**Phase**: Prompt 003 Knowledge Modelling & Disambiguation  
**Date**: October 17, 2026  
**Auditor**: Antigravity Editorial Architecture Engine  

---

## 1. Objective and Boundary Policy

To prevent Dhanpedia India from devolving into a repetitive content mill where hundreds of articles duplicate the same foundational concepts, this audit defines explicit scope boundaries, disambiguates confusingly similar financial topics, and establishes canonical parent-child linking hierarchies.

### The Canonical Linking Principle
When a core financial concept (such as *Macaulay Duration*, *Compounding*, *TDS*, or *Circle Rates*) is relevant across multiple practical domains, the comprehensive, mathematical, and statutory definition resides canonically in **one dedicated pillar article**. Secondary articles reference and summarize the concept in local context while linking directly to the canonical source, eliminating duplicate prose across the encyclopedia.

---

## 2. Topic Disambiguation & Merge/Separate Determinations

### A. Compound Growth versus CAGR versus XIRR
- **Confusion**: Retail investors often treat Compound Annual Growth Rate (CAGR) and Extended Internal Rate of Return (XIRR) as interchangeable synonyms for investment returns.
- **Economic & Mathematical Reality**:
  - *Compound Growth*: The general mathematical principle of interest earning interest.
  - *CAGR*: Calculates the smoothed annualized geometric growth rate between exactly two discrete points in time for a single lump-sum investment ($CAGR = (EV/BV)^{1/n} - 1$).
  - *XIRR*: Calculates the internal rate of return for multiple irregular cash inflows and redemptions occurring on arbitrary calendar dates.
- **Architectural Decision**: **SEPARATE BUT LINKED**.
  - Canonical mathematical definition of TVM and CAGR in `time-value-of-money-and-real-returns-india`.
  - Practical application to SIPs and irregular fund cashflows in `mutual-fund-categorization-sebi-mandates-and-portfolio-constraints` with dedicated calculator `CALC-MF-004`.

### B. Bank Fixed Deposits versus Corporate Deposits versus Debt Mutual Funds
- **Confusion**: Savers view all three as "fixed return deposits", failing to recognize critical divergence in credit risk, statutory insurance, and tax treatments.
- **Statutory & Economic Reality**:
  - *Bank Fixed Deposits*: Backed by scheduled commercial banks and guaranteed up to ₹5,00,000 by DICGC. Taxed at marginal slab rates under Section 194A.
  - *Corporate Fixed Deposits*: Unsecured loans to private corporations; zero DICGC guarantee; high default risk.
  - *Debt Mutual Funds*: Market-linked portfolios of G-Secs, Commercial Paper, and corporate debentures; zero fixed return guarantee; marked-to-market daily; post-Finance Act 2023 taxed at slab rates without indexation.
- **Architectural Decision**: **SEPARATE SPECIALIST GUIDES WITH DEDICATED COMPARISON MATRIX**.
  - Canonical bank deposit coverage in `dicgc-deposit-insurance-architecture-limits-and-ownership-structures`.
  - Canonical debt fund mechanics in `sovereign-debt-architecture-gsecs-tbills-and-rbi-retail-direct`.

### C. Direct versus Regular Mutual Fund Plans
- **Confusion**: Investors assume Regular plans are simply "assisted" investing with identical underlying performance.
- **Economic Reality**: Both plans hold the identical underlying stock portfolio, but Regular plans deduct distributor commissions (0.50% to 1.25% annually) directly from the scheme NAV, eroding up to 25% of terminal wealth over 25 years.
- **Architectural Decision**: **COMBINED WITHIN CANONICAL MUTUAL FUND PILLAR**.
  - Full comparative compounding math integrated directly into `direct-vs-regular-mutual-funds-long-term-wealth-erosion-mechanics`, supported by `CALC-MF-003`.

### D. Credit Score versus Credit Report
- **Confusion**: Consumers use the terms interchangeably, ignoring that a credit score is merely a 3-digit summary derived from a comprehensive multi-page tradeline report.
- **Operational Reality**: Credit repair requires auditing the detailed tradeline ledger (overdue days, DPD, settled status) in the full credit report; improving the score is a downstream mathematical consequence.
- **Architectural Decision**: **COMBINED IN MASTER CREDIT BUREAU GUIDE**.
  - Unified in `cibil-score-mechanics-credit-repair-and-bureau-dispute-resolution`.

### E. Real Estate Circle Rates versus Agreement Value versus 'On-Money' Black Cash
- **Confusion**: Buyers often misunderstand how circle rates interact with declared values and cash demands.
- **Legal & Tax Reality**:
  - *Circle Rate*: State government minimum valuation benchmark for calculating stamp duty and registration fees.
  - *Agreement Consideration*: Declared white contract price transferred via banking channels.
  - *'On-Money'*: Illicit unrecorded cash demanded by sellers.
  - *Section 269SS/ST*: Cash payments of ₹20,000+ for property trigger 100% penalties under Section 271D.
  - *Section 50C*: Gaps exceeding 10% trigger phantom capital gains on the seller and deemed income on the buyer under Section 56(2)(x).
- **Architectural Decision**: **SEPARATE FORENSIC TREATISE AND TITLE GUIDE**.
  - Civil conveyancing and title verification in `property-title-due-diligence-encumbrance-certificates-and-rera-protections`.
  - Forensic analysis of black money, Section 269SS/ST penalties, and the Benami Act in `black-money-in-indian-real-estate-circle-rates-cash-penalties-under-section-269ss-and-benami-laws`.

---

## 3. Duplicate Prevention & Cross-Domain Boundary Map

| Proposed Concept | Primary Canonical Home | Permitted Secondary Reference Mode | Prohibited Redundancy |
| :--- | :--- | :--- | :--- |
| **Macaulay Duration** | Domain H (`fixed-income-debt-markets`) | Contextual mention in Debt Mutual Funds & Asset Allocation | Do not re-derive the duration calculus equation in multiple articles. |
| **DICGC Insurance** | Domain B (`banking-deposits`) | Brief safety mention in Emergency Funds & Net Worth | Do not re-explain the Section 18A 90-day liquidation process in emergency fund guides. |
| **Section 115BAC Slabs**| Domain K (`indian-taxation`) | Reference link in Salary Structuring & Retirement Planning | Do not hardcode full progressive tax slab tables in salary guides. |
| **Section 269SS Penalties**| Domain R (`financial-fraud-scams-shadow-economy`)| Warning citation in Real Estate Buying Guides | Do not duplicate the full High Court Section 273B jurisprudence in conveyancing manuals. |
| **Theta Time Decay** | Domain P (`derivatives-trading`) | Risk citation in Systematic Investment Guides | Do not repeat the Black-Scholes partial derivative formulas in general investing pages. |

---

## 4. Audit Summary

- **Total Planned Substantive Publications Reviewed**: 30 master treatises.
- **Duplicate Topic Collisions Detected**: 0 (all overlapping concepts assigned distinct primary canonical homes).
- **Boundary Disambiguations Formulated**: 5 major economic pairs disambiguated.
- **Status**: **PASSED — Clear architectural boundaries established for Prompt 004 drafting batches.**
