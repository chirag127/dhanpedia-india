# Dhanpedia India — Research Methodology & Verification Protocol

## 1. Editorial Integrity & Core Directive

Dhanpedia India is built as an uncompromising, evidence-grounded financial encyclopedia for the Indian economic and regulatory landscape. Every factual statement, tax threshold, interest calculation, legal citation, and product mechanism must be traceable to primary, verifiable authority.

**Zero Tolerance for Fabrication**: Under no circumstances may an agent or contributor invent a financial statistic, cite an imaginary regulatory circular, fabricate a URL, or project speculative returns as established fact. Where empirical data or statutory clarity is lacking, it must be explicitly classified as a **Research Gap** or an **Open Regulatory Ambiguity**.

---

## 2. Source Hierarchy & Evidentiary Tiers

All claims within Dhanpedia India are categorized and verified according to a strict three-tier hierarchy:

```
+--------------------------------------------------------------------------+
| TIER 1: PRIMARY STATUTORY & REGULATORY AUTHORITIES                       |
| The Gazette of India, Acts of Parliament, RBI Master Directions/Circulars,|
| SEBI Regulations & Circulars, CBDT Notifications & Income-tax Act 1961,   |
| PFRDA Regulations, IRDAI Master Circulars, EPFO Notifications, DICGC.    |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| TIER 2: STATUTORY GRIEVANCE PORTALS & OFFICIAL EXCHANGES                 |
| RBI CMS / Integrated Ombudsman, SEBI SCORES 2.0 / SMART ODR,            |
| National Stock Exchange (NSE), Bombay Stock Exchange (BSE),             |
| Association of Mutual Funds in India (AMFI), NPCI Protocol Specs.        |
+--------------------------------------------------------------------------+
                                    |
                                    v
+--------------------------------------------------------------------------+
| TIER 3: DISCOVERY & CONTEXTUAL SECONDARY SOURCES                         |
| Financial news publications (Mint, Business Standard, Economic Times),   |
| academic working papers (IIM/ISB/NIPFP), vetted research reports.         |
| (Permitted strictly for initial hypothesis discovery; never cited as     |
| sole statutory proof for legal, tax, or regulatory mechanics.)           |
+--------------------------------------------------------------------------+
```

---

## 3. Systematic Verification Protocol

For every substantive article published:
1. **Primary Citation Linkage**: The article must link directly to the statutory authority or circular in `data/sources/source-registry.json`.
2. **Effective Date Tracking**: Regulatory provisions in India undergo continuous refinement (e.g., Union Budget Finance Acts, RBI bi-monthly Monetary Policy reviews). Each article must document its `effectiveDate` and `lastVerificationDate`.
3. **Dual Tax Regime Segregation**: Every tax analysis must explicitly differentiate between the **Old Tax Regime** and the **New Concessional Tax Regime (Section 115BAC)**, specifying applicable financial year (e.g., FY 2024-25 / AY 2025-26) and Finance Act amendments.
4. **Dispute & Escalation Verification**: Banking, brokerage, and insurance articles must provide verified statutory escalation paths (Tier 1: Internal Grievance Officer -> Tier 2: Principal Nodal Officer -> Tier 3: Statutory Ombudsman / SCORES / SMART ODR / Bima Bharosa).

---

## 4. Handling Uncertainty & Regulatory Conflicts

When statutory language, regulatory circulars, and judicial precedents diverge:
- **State the Ambiguity Explicitly**: Do not provide speculative conclusions as binding legal or tax advice.
- **Document the Dissenting Interpretations**: Detail the conflicting viewpoints (e.g., assessing officer interpretations vs Income Tax Appellate Tribunal (ITAT) rulings).
- **Log to Research Gaps**: Register an entry in `data/taxonomy/research-gaps.json` with a severity rating and active monitoring action plan.

---

## 5. Continuous Audit & Maintenance Cycle

- **Quarterly Source Audit**: Automated link and checksum validation across all registered source URLs.
- **Budgetary Re-indexing**: Comprehensive audit following each annual Union Budget (Finance Bill presentation and Presidential assent) to identify affected tax thresholds, capital gains rates, and deduction ceilings.
- **Monetary Policy Sync**: Bi-monthly verification of RBI Repo Rate, Standing Deposit Facility (SDF), Marginal Standing Facility (MSF), and small savings scheme interest rate announcements.
