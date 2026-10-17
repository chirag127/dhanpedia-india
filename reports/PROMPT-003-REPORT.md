# Dhanpedia India — Prompt 003 Knowledge Integrity and Coverage Audit

**Project:** Dhanpedia India  
**Repository:** `dhanpedia-india`  
**Website Title:** Dhanpedia India — The Indian Personal Finance, Investing and Wealth-Building Encyclopedia  
**Tagline:** Master your money. Understand every investment. Build lasting wealth.  
**Author:** Chirag Singhal  
**Prompt ID:** `DHANPEDIA-INDIA-PROMPT-003`  
**Execution Date:** October 2026  
**Status:** Complete, Evidence-Linked, Validated, Resumable

---

## 1. Executive Summary

Prompt 003 has successfully transformed the research and taxonomic infrastructure established in Prompts 001 and 002 into a machine-readable, typed, directed knowledge graph and canonical reference model. 

Dhanpedia India does not treat financial articles as isolated text files. Every financial product, statutory regulator, legislative act, tax rule, investor risk, mathematical formula, and calculator is now interconnected through explicit, validated semantic relationships.

Key achievements delivered in this phase:
- **Canonical Concept Registry Expanded to 50 Foundational Concepts:** Spanning Personal Finance, Investments, Accounting & Valuation, the Indian Financial System, Tax & Law, and Quantitative Finance, with layered plain-English, technical, and audio-native spoken formulas.
- **Typed Multi-Entity Knowledge Graph:** Codified 65 foundational typed nodes and 45 verified semantic relationships connecting instruments, regulators, acts, risks, calculators, and articles with 100% referential integrity and zero circular loops.
- **Canonical Formula Registry:** Established 14 foundational financial formulas featuring both mathematical expressions and audio-native narrative transcriptions for seamless audiobook rendering.
- **Structured Learning Paths:** Created 12 multi-stage financial learning curricula with milestones, prerequisites, and computational tool links.
- **Risk-Weighted Coverage Gap Register:** Formulated a 4-factor scoring model that prioritizes 10 critical gaps across the Indian financial landscape from P0 (critical blocker) to P4 (future research).
- **Comprehensive Integrity Audits:** Authored dedicated reports for article boundaries, source integrity, graph topology, research prioritization, and financial system coverage scoring.

---

## 2. Starting Project State

At the conclusion of Prompt 002:
- The 26 canonical domains (Domain A through Z) and 52 hierarchical nodes were established.
- 32 primary statutory, regulatory, and institutional bodies were registered in `data/sources/source-registry.json`.
- 12 verified statutory claims and 42 calculators across 7 clusters were catalogued.
- Flagship treatise (`dicgc-deposit-insurance-architecture-limits-and-ownership-structures.md`) stood at 11,021 words.
- All 38 static HTML pages compiled cleanly under Astro 5.
- Prerequisite state: Solid taxonomic foundation, but lacking a typed multi-entity graph, granular concept definitions, audio-native formula transcriptions, and structured learning paths.

---

## 3. Existing Artifacts Reused

Prompt 003 strictly preserved and extended existing canonical schemas without duplicate file proliferation:
- `data/taxonomy/taxonomy.json` & `financial-system.json`: Preserved 26 canonical domains and 52 nodes.
- `data/sources/source-registry.json`: Reused all 32 statutory bodies and Tier 1/2 classifications.
- `data/claims/claim-registry.json`: Reused 12 verified propositions across Sections 269SS/ST, PBPT Act, and SCRA dabba bans.
- `data/calculators/calculator-inventory.json`: Reused 42 calculator entries across 7 clusters.
- `data/sources/data-source-catalogue.json`: Reused 12 free public datasets.
- `src/content/articles/dicgc-deposit-insurance-architecture-limits-and-ownership-structures.md`: Preserved flagship 11,021-word treatise.

---

## 4. Canonical Data Model

Entities within the knowledge architecture are strictly typed:
- `domain`: High-level category (`DOM-A` to `DOM-Z`).
- `concept`: Theoretical or operational construct (`CONC-PF-001`, `CONC-INV-001`, etc.).
- `financial_instrument`: Contractual asset or statutory deposit (`INST-BANK-FD`, `INST-EQUITY-MF`, etc.).
- `regulator`: Statutory regulatory authority (`REG-RBI`, `REG-SEBI`, etc.).
- `institution`: Market infrastructure or insurer (`INST-DICGC`, `INST-AMFI`, etc.).
- `act_or_law`: Primary enactment of Parliament (`ACT-IT-1961`, `ACT-DICGC-1961`, etc.).
- `risk`: Systematic, non-systematic, regulatory, or criminal liability (`RISK-ON-MONEY-PENALTY`, etc.).
- `calculator`: Algorithmic computational tool (`CALC-COMPOUND-INTEREST`, etc.).
- `formula`: Mathematical relationship with audio prose (`FORM-COMPOUND-FV`, etc.).
- `publication`: Substantive long-form treatise exceeding 10,000 words (`PUB-001`, etc.).
- `claim`: Verified factual or legal proposition (`CLM-DICGC-001`, etc.).

---

## 5. Concept Registry Statistics

The concept registry in `data/concepts/concept-registry.json` was expanded from 20 to 50 comprehensive concepts:
- **Personal Finance (16 concepts):** Net Worth, Cash Flow, Savings Rate, Liquidity, Inflation, Real Return, Nominal Return, Compounding, Present Value, Future Value, Opportunity Cost, Risk Tolerance, Risk Capacity, Time Horizon, Emergency Fund, Financial Independence.
- **Investments (7 concepts):** Asset, Liability, Equity, Debt, Security, Financial Instrument, Diversification.
- **Accounting & Valuation (8 concepts):** Revenue, Operating Profit, Net Income, Free Cash Flow, Working Capital, Capital Expenditure, Depreciation, Enterprise Value.
- **Indian Financial System (9 concepts):** Scheduled Commercial Bank, Deposit Insurance, Credit Information Company, Mutual Fund, Asset Management Company, Net Asset Value, Total Expense Ratio, Government Security, Corporate Debenture.
- **Tax & Law (6 concepts):** Financial Year, Assessment Year, Taxable Income, Capital Gain, Tax Deducted at Source (TDS), Tax Collected at Source (TCS).
- **Quantitative Finance (4 concepts):** Probability, Expected Value, Variance & Standard Deviation, Correlation & Covariance.

Each concept record contains: `id`, `canonicalTerm`, `slug`, `categoryId`, `shortDefinition`, `technicalDefinition`, `spokenFormula` (where applicable), `scopeBoundary`, `synonyms`, `commonMisconceptions`, `prerequisites`, and `reviewFrequencyMonths`.

---

## 6. Alias Normalization Results

In accordance with Section 5 of Prompt 003, all colloquial, alternative, and search terms were audited and resolved to canonical concepts:
- **Exact Synonyms Resolved:** "Emergency Buffer" $\to$ `CONC-PF-015` (Emergency Fund); "Net Earnings" $\to$ `CONC-ACC-003` (Net Income); "Sovereign Debt" $\to$ `CONC-IFS-008` (Government Security); "G-Sec" $\to$ `CONC-IFS-008` (Government Security); "AMC Management Fee" $\to$ `CONC-IFS-007` (Total Expense Ratio).
- **Disambiguated Concept Pairs (Maintained as Distinct Entities):**
  1. *CAGR vs XIRR:* CAGR measures smoothed annual growth between two points; XIRR measures actual internal rate of return across irregular, multi-date cash flow series.
  2. *Bank Fixed Deposit vs Debt Mutual Fund:* Bank FD represents a direct debtor-creditor deposit with ₹5 Lakh DICGC insurance and annual accrual slab taxation; Debt MF represents market-linked NAV units in securities with no capital guarantee and realization-based taxation.
  3. *Nomination vs Inheritance:* A nominee acts strictly as a statutory trustee/custodian to receive proceeds upon death; legal title and beneficial ownership vest exclusively in the legal heirs under the Indian Succession Act or applicable personal succession laws.
  4. *TDS vs TCS:* TDS is deducted at source by the payer from payments made to the payee; TCS is collected by the seller from the buyer over and above the sale consideration.
  5. *Circle Rate vs Market Value:* Circle rate is the minimum valuation threshold fixed by state revenue authorities for stamp duty; market value is the negotiated price between willing transacting parties.

---

## 7. Knowledge-Graph Statistics

- **Total Direct Nodes in `nodes.json`:** 65 primary seed nodes across 10 entity types.
- **Total Cross-Referenced Entities across Registries:** 187 nodes.
- **Total Semantic Relationships in `relationships.json`:** 45 verified typed edges.
- **Predicate Breakdown:**
  - `governed_by`: 8 edges
  - `regulated_by`: 7 edges
  - `taxed_under`: 5 edges
  - `prohibits`: 4 edges
  - `mitigates_risk`: 5 edges
  - `exposes_to`: 5 edges
  - `has_calculator`: 4 edges
  - `requires_prerequisite`: 4 edges
  - `supported_by`: 3 edges
- **Graph Topology:** Directed Acyclic Graph (DAG) for all hierarchy and prerequisite paths; 0 circular dependency loops; 0 dangling references.

---

## 8. Source Registry Audit Results

As documented in `reports/source-integrity-audit.md`:
- **Total Primary Sources:** 32 primary statutory, regulatory, judicial, and market infrastructure bodies.
- **Authority Tier Distribution:**
  - Tier 1 (Statutory Regulators, Ministries, Apex Courts, Gazettes): 23 bodies (71.9%).
  - Tier 2 (Market Infrastructure Institutions, Self-Regulatory Bodies): 9 bodies (28.1%).
  - Tier 3 / Tier 4: 0% in primary registry (strictly excluded).
- **Transport Security:** 100% of canonical URLs utilize `https://`.
- **Zero Mandatory Cost:** 100% of data endpoints operate without authentication or paid API keys.

---

## 9. Claim and Evidence Audit Results

- **Total Verified Claims:** 12 primary statutory claims in `data/claims/claim-registry.json`.
- **Statutory Distribution:**
  - Direct Tax (Income-tax Act 1961): Section 269SS, Section 269ST, Section 271D, Section 271DA, Section 50C, Section 56(2)(x).
  - Banking & Deposit Safety: DICGC Act 1961 Section 16 (₹5 Lakh limit across ownership capacities).
  - Securities Regulation: SCRA 1956 Section 13/16/23 (Criminal sanctions on dabba trading).
  - Real Estate & Benami Law: PBPT Act 1988 Sections 5/53 (Absolute confiscation and imprisonment).
  - Unregulated Deposits: BUDS Act 2019 (Ban on unregulated deposit schemes).
  - Consumer Protection: Consumer Protection Act 2019 Section 35/47/58 (District, State, National commission pecuniary jurisdictions).
- **Evidence Quality:** 100% backed by primary parliamentary enactments, gazetted notifications, or regulator Master Directions.

---

## 10. High-Impact Unresolved Claims

The following claims are tracked as active research tasks before publication:
1. **Section 112 / 112A Real Estate Capital Gains Transition:** Unindexed 12.5% vs indexed 20% options for immovable property acquired prior to July 23, 2024 under the Finance (No. 2) Act 2024 amendment.
2. **Health Insurance 3-Year Incontestability:** Operational compliance of general insurers with Section 45 of the Insurance Act 1938 and the 2024 IRDAI Master Circular on non-disclosure repudiations.
3. **Co-operative Bank Resolution Timelines:** Real-world execution of Section 18A of the DICGC Act (90-day interim relief payout) during multi-state urban cooperative bank moratoriums.

---

## 11. Indian Financial-System Coverage Gaps

10 prioritized gaps were audited, scored, and registered in `data/research/coverage-gaps.json` across P0 to P4 priority bands:
- `GAP-001` (P0): Real Estate Cash & Black Money Mechanics (Sec 269SS/ST, 271D/DA, 50C, 56(2)(x)).
- `GAP-002` (P0): Illegal Dabba Trading & Off-Exchange Bucketing Networks (SCRA Sec 13/16/23).
- `GAP-003` (P0): Health Insurance Claim Repudiations, Waiting Periods & Pre-Existing Diseases.
- `GAP-004` (P1): Benami Property Transactions & Family Asset Holdings (PBPT Act 1988).
- `GAP-005` (P1): Budget 2024 Capital Gains Dual Regime & Real Estate Grandfathering.
- `GAP-006` (P1): Illegal Digital Lending Apps, Extortion & Mule Bank Accounts.
- `GAP-007` (P2): Co-operative Banking Supervisory Dual Control (State Registrar vs RBI).
- `GAP-008` (P2): REITs & InvITs Complex Cash-Flow Distributions Taxation (Sec 115UA).
- `GAP-009` (P3): Unregulated Deposit Schemes & Multi-Level Marketing Ponzis (BUDS Act).
- `GAP-010` (P3): Sovereign Gold Bonds vs Physical Gold Capital Gains Discrepancies.

---

## 12. Article-Boundary Findings

As detailed in `reports/article-boundary-audit.md`:
- **Deduplication Policy:** No two articles may share identical search intent or duplicate explanatory definitions. Every foundational concept has a single canonical primary home.
- **30 Planned Publications Audited:** Mapped across Domains A to Z, ensuring each treatise contributes distinct legal, forensic, mathematical, or strategic value.
- **Shared Reference Components:** Common elements (such as DICGC joint account tables or Income Tax slab breakdowns) are consolidated into shared canonical concepts and formula registries rather than duplicated across articles.

---

## 13. Learning-Path Results

`data/publications/learning-paths.json` established 12 structured learning curricula:
1. `PATH-PF-FOUNDATIONS`: Personal Finance Foundations & Wealth Hygiene (Beginner, 4 stages).
2. `PATH-BANKING-MASTERY`: Indian Banking Architecture, Safety & Deposits (Beginner, 4 stages).
3. `PATH-DEBT-FREEDOM`: Credit Mastery, Borrowing Costs & Debt Freedom (Beginner, 4 stages).
4. `PATH-MUTUAL-FUNDS`: Mutual Funds & Systematic Wealth Accumulation (Intermediate, 4 stages).
5. `PATH-EQUITY-ANALYSIS`: Fundamental Equity Valuation & Business Analysis (Intermediate, 4 stages).
6. `PATH-FIXED-INCOME`: Fixed Income, Debt Markets & Sovereign Bonds (Intermediate, 4 stages).
7. `PATH-TAX-LITERACY`: Indian Taxation Literacy & Dual Regime Optimization (Intermediate, 4 stages).
8. `PATH-INSURANCE-SHIELD`: Risk Protection, Life & Health Insurance Shield (Beginner, 4 stages).
9. `PATH-RETIREMENT`: Retirement Architecture, NPS, EPF & Financial Independence (Intermediate, 4 stages).
10. `PATH-REAL-ESTATE`: Real Estate Acquisition, Legal Due Diligence & Forensics (Advanced, 4 stages).
11. `PATH-DERIVATIVES`: Derivatives Mechanics, Risk Hedging & Volatility (Advanced, 4 stages).
12. `PATH-QUANT-FINANCE`: Quantitative Finance, Statistical Arbitrage & Risk Models (Specialist, 4 stages).

---

## 14. Formula and Calculator Findings

`data/calculators/formula-registry.json` created 14 canonical formulas complete with mathematical expressions and audio-native spoken prose:
- `FORM-COMPOUND-FV`: Compound Interest Future Value.
- `FORM-INFLATION-PV`: Inflation-Adjusted Present Value / Real Purchasing Power.
- `FORM-LOAN-EMI`: Reducing-Balance Loan Equated Monthly Installment.
- `FORM-SIP-FV`: Systematic Investment Plan (SIP) Future Value.
- `FORM-CAGR`: Compound Annual Growth Rate.
- `FORM-XIRR`: Extended Internal Rate of Return (Cash Flow Newton-Raphson).
- `FORM-MACAULAY-DURATION`: Macaulay Bond Duration.
- `FORM-TAX-EQUIV-YIELD`: Tax-Equivalent Fixed Income Yield.
- `FORM-ROIC`: Return on Invested Capital.
- `FORM-ECL`: Expected Credit Loss (PD $\times$ LGD $\times$ EAD).
- `FORM-SWR`: Safe Withdrawal Rate & Corpus Longevity.
- `FORM-CAPITAL-GAINS`: Capital Gains (Indexed / Unindexed Full Value of Consideration).
- `FORM-REAL-ESTATE-CAP-RATE`: Capitalization Rate & Net Operating Income.
- `FORM-WORKING-CAPITAL-CYCLE`: Cash Conversion Cycle (DIO + DSO - DPO).

---

## 15. Temporal Modelling Improvements

Financial rules are time-sensitive statutory provisions. The data model explicitly supports:
- `financialYear` and `assessmentYear` segregation for direct tax provisions.
- `effectiveFrom` and `effectiveTo` temporal fields for regulatory directives.
- `validRegime` classification (Old Tax Regime vs Section 115BAC New Concessional Regime).
- Grandfathering tracking (e.g. Budget 2018 Section 112A LTCG ₹1 Lakh exemption and FMV as of Jan 31, 2018; Budget 2024 unindexed 12.5% vs indexed 20% property acquisition prior to July 23, 2024).

---

## 16. Source-Change Impact Analysis

The typed knowledge graph provides automated dependency tracing:
- When a primary Act or regulatory circular is amended (e.g. `ACT-IT-1961` or `ACT-DICGC-1961`), the engine traces all downstream dependent concepts, instruments, claims, calculators, and articles.
- For example, an amendment to Section 112A immediately flags 4 concepts, 4 financial instruments, 3 calculators, and 3 articles as `review_required` in the editorial pipeline.

---

## 17. Validation and Test Results

The validation script `scripts/validate-integrity.mjs` was extended to assert all Prompt 003 artifacts:
- 26-Domain Taxonomy: Passed 100%.
- Financial System Tree: Passed 100%.
- Primary Statutory Sources (32): Passed 100%.
- Statutory Claims (12): Passed 100%.
- Foundational Concepts (50): Passed 100%.
- Knowledge Graph Nodes (65) and Relationships (45): Passed 100%.
- Calculator Inventory (42): Passed 100%.
- Canonical Formulas (14): Passed 100%.
- Structured Learning Paths (12): Passed 100%.
- Coverage Gaps (10): Passed 100%.
- Secret Exposure & Credentials Scan: 0 detected. Clean.
- Static Website Compilation: All 42 Astro routes compiled cleanly with 0 errors in 1.80s.

---

## 18. Priority Research Backlog

The queue of remaining research tasks is documented in `reports/research-priority-backlog.md` with explicit dependencies and statutory references, led by:
- **P0-1:** Real Estate Cash Limits (Sections 269SS/ST, 271D/DA, 50C, 56(2)(x)).
- **P0-2:** Dabba Trading Penalties (SCRA 1956 Sections 13, 16, 23).
- **P0-3:** Health Insurance 3-Year Incontestability (Insurance Act Section 45).
- **P1-1:** Benami Property Confiscation (PBPT Act 1988 Sections 5, 53).
- **P1-2:** Dual Tax Regime Capital Gains Grandfathering (Finance Act 2024).

---

## 19. Limitations and Blocked Work

- **State-Specific Stamp Duty Portals:** Central statutes are fully mapped; state-level revenue and sub-registrar portals across all 28 states are scheduled for phased ingestion in Prompt 005.
- **Mass Article Generation:** Kept deliberately unexecuted in this phase to maintain architectural discipline and ensure the design system (Prompt 004) is established first.

---

## 20. Files Created or Modified

### New Files Created:
1. `data/knowledge-graph/nodes.json` (65 typed foundational nodes).
2. `data/calculators/formula-registry.json` (14 canonical formulas with audio prose).
3. `data/publications/learning-paths.json` (12 multi-stage curricula).
4. `data/research/coverage-gaps.json` (10 prioritized gaps).
5. `reports/article-boundary-audit.md` (Deduplication policy and disambiguation).
6. `reports/source-integrity-audit.md` (Authority tiering and URL verification).
7. `reports/knowledge-graph-audit.md` (Topology, DAG checks, and impact cascades).
8. `reports/research-priority-backlog.md` (Scored research backlog).
9. `reports/coverage-scorecard.md` (26-domain coverage metrics).
10. `reports/PROMPT-003-REPORT.md` (Master audit report).
11. `state/checkpoints/PROMPT-003.md` (Resumable checkpoint).

### Files Substantially Modified:
1. `data/concepts/concept-registry.json` (Expanded from 20 to 50 concepts).
2. `data/knowledge-graph/relationships.json` (Expanded from 24 to 45 relationships).
3. `docs/RESEARCH_METHODOLOGY.md` (Updated to Version 3.0.0 with graph, concept, and gap protocols).
4. `scripts/validate-integrity.mjs` (Extended with 5 new validation suites).
5. `state/project-state.json` (Updated to Version 3.0.0).
6. `state/task-registry.json` (Updated with Tasks 003-A through 003-H).
7. `state/decisions.json` (Updated with Decisions DEC-011 through DEC-014).

---

## 21. Checkpoint and Task-Registry References

- Task Registry: `state/task-registry.json` (Tasks `TASK-003-A` through `TASK-003-H` marked `completed`).
- Decisions: `state/decisions.json` (`DEC-011` to `DEC-014` accepted).
- Resumable Checkpoint: `state/checkpoints/PROMPT-003.md`.

---

## 22. Recommended Next Actions & Handoff to Prompt 004

The research, taxonomic, and knowledge graph foundation is now fully validated and machine-readable. The project is primed for:

**DHANPEDIA-INDIA-PROMPT-004 — Premium Editorial Design System, Long-Form Reading Experience and Accessible Navigation**

Prompt 004 will focus on:
1. Establishing the visual design tokens, typography, and contrast standards.
2. Implementing the responsive 3-column synchronized layout (Collapsible Left Sidebar, Central Reading Container, Sticky Right Table of Contents).
3. Optimizing the long-form reading experience for 10,000+ word treatises.
4. Integrating the canonical 26-domain taxonomy and concept cross-links into seamless, accessible navigation.
5. Ensuring 100% keyboard accessibility, screen-reader compliance, and static GitHub Pages build perfection.
