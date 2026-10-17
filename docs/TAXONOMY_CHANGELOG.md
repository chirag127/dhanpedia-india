# Dhanpedia India — Taxonomy Changelog

This document maintains an immutable audit trail of all architectural revisions, expansions, splits, merges, and alias registrations across the Dhanpedia India knowledge base taxonomy.

---

## [2.0.0] — 2026-10-17

### Prompt Context
- **Prompt ID**: `DHANPEDIA-INDIA-PROMPT-002`
- **Focus**: Comprehensive Indian financial-system research, taxonomy expansion to 26 canonical domains (Domain A through Z), source discovery across statutory regulators, and explicit integration of real-world shadow finance, black money, dabba trading, and audio-native prose standards.

### Major Structural Changes
1. **Expansion from 22 Families to 26 Canonical Domains**:
   - Re-architected the topical structure to map cleanly across 26 capital domains (A to Z) established in the Prompt 002 specification.
   - Preserved backward compatibility by registering legacy Prompt 001 category IDs as canonical aliases.

2. **Domain Splits & Specialization**:
   - **Split Banking and Payments**:
     - *Domain B (`banking-deposits`)*: Focuses exclusively on scheduled commercial banks, small finance banks, cooperative banks, savings/current accounts, fixed/recurring deposits, and statutory DICGC deposit insurance.
     - *Domain C (`payments-digital-infrastructure`)*: Dedicated to retail payment clearing rails, UPI 2.0, NPCI interchange, NEFT/RTGS settlement cycles, payment aggregators, escrow guidelines, and FASTag networks.
   - **Split Government Savings and Pensions**:
     - *Domain E (`gov-small-savings`)*: Dedicated to sovereign postal small savings instruments (PPF, Sukanya Samriddhi, SCSS, NSC, KVP, POTD) and quarterly G-Sec yield formulas.
     - *Domain J (`retirement-pensions`)*: Dedicated to statutory formal retirement institutions (EPF, VPF, EPS under EPFO; NPS Tier I/II under PFRDA), safe withdrawal rates (SWR) under Indian inflation, and longevity risk.
   - **Carved out P2P Lending and Private Credit**:
     - *Domain O (`p2p-lending-private-credit`)*: Established as an independent domain to provide deep forensic scrutiny of RBI August 2024 Master Direction tightening, ban on assured returns, escrow structures, and expected credit loss realities.

3. **Explicit Real-World Shadow Economy & Forensic Finance Integration**:
   - Substantially expanded *Domain R (`financial-fraud-scams-shadow-economy`)* to mandate coverage of:
     - Real estate black money generation mechanisms ('on-money' cash components vs declared agreement values).
     - Income Tax Act Section 269SS (₹20,000 cash advance/loan limit for immovable property) and Section 271D (100% monetary penalty).
     - Income Tax Act Section 269ST (₹2,00,000 aggregate cash receipt limit) and Section 271DA (100% monetary penalty).
     - Income Tax Act Section 50C and Section 56(2)(x) 10% safe harbor tolerance band on circle rate versus agreement consideration.
     - Dabba Trading (illegal bucket shops operating off-exchange) under Sections 13, 16, and 23 of the Securities Contracts (Regulation) Act 1956.
     - Prohibition of Benami Property Transactions Act 1988 (as amended 2016) criminal prosecution and absolute property confiscation without compensation.
     - Enforcement powers of the Directorate of Enforcement (ED), Income Tax Investigation Wing, SFIO, and Financial Intelligence Unit - India (FIU-IND).

4. **Addition of Domain Z (Decision Frameworks & Audio Mathematics)**:
   - *Domain Z (`financial-education-decision-tools`)*: Added to house comparative multi-variable decision trees (Buy vs Rent, Old vs New Tax Regime), statutory due-diligence checklists, and standards for transcribing complex quantitative formulas into flowing, spoken English paragraph prose for text-to-speech audiobooks.

5. **Substantive Scale & Audiobook Mandate**:
   - Codified the editorial rule that foundational guides must exceed **10,000 substantive words**.
   - Banned isolated LaTeX equation blocks and raw tables in main articles, requiring all mathematical steps and legal sections to be narrated in natural, spoken prose.

### Legacy Category ID to Domain 2.0 Mapping Matrix

| Legacy Prompt 001 ID | Prompt 002 Canonical Domain ID | Domain Code | Status |
| :--- | :--- | :--- | :--- |
| `pf-foundations` | `pf-foundations` | DOMAIN-A | Retained & Expanded |
| `banking-payments` | `banking-deposits` | DOMAIN-B | Renamed & Registered as Alias |
| *New Domain* | `payments-digital-infrastructure` | DOMAIN-C | Newly Created Domain |
| `credit-cards-consumer-credit` | `credit-borrowing` | DOMAIN-D | Consolidated & Registered as Alias |
| `debt-loans-mortgages` | `credit-borrowing` | DOMAIN-D | Consolidated & Registered as Alias |
| `emergency-protection` | `pf-foundations` / `banking-deposits` | DOMAIN-A / B | Subsumed with Cross-Links |
| *New Domain* | `gov-small-savings` | DOMAIN-E | Newly Created Domain |
| `mutual-funds-etfs` | `mutual-funds-pooled` | DOMAIN-F | Standardized & Registered as Alias |
| `stocks-equity-research` | `equity-markets-listed-securities` | DOMAIN-G | Standardized & Registered as Alias |
| `debt-fixed-income` | `fixed-income-debt-markets` | DOMAIN-H | Standardized & Registered as Alias |
| `insurance-risk-management` | `insurance-risk-protection` | DOMAIN-I | Standardized & Registered as Alias |
| `retirement-fire` | `retirement-pensions` | DOMAIN-J | Standardized & Registered as Alias |
| `taxes-compliance` | `indian-taxation` | DOMAIN-K | Standardized & Registered as Alias |
| `real-estate-property` | `real-estate-property-land` | DOMAIN-L | Standardized & Registered as Alias |
| `gold-commodities` | `gold-silver-commodities` | DOMAIN-M | Standardized & Registered as Alias |
| `alternative-investments` | `alternative-investments` | DOMAIN-N | Retained & Expanded |
| *New Domain* | `p2p-lending-private-credit` | DOMAIN-O | Newly Created Domain |
| `derivatives-fno-trading` | `derivatives-trading` | DOMAIN-P | Standardized & Registered as Alias |
| `portfolio-construction` | `portfolio-management-quant` | DOMAIN-Q | Standardized & Registered as Alias |
| `fraud-investor-rights` | `financial-fraud-scams-shadow-economy` | DOMAIN-R | Expanded & Registered as Alias |
| `business-entrepreneurship` | `entrepreneurship-business-finance` | DOMAIN-S | Standardized & Registered as Alias |
| `income-career-capital` | `career-income-capital` | DOMAIN-T | Standardized & Registered as Alias |
| `fintech-calculators` | `fintech-automation` | DOMAIN-U | Standardized & Registered as Alias |
| `macro-monetary-policy` | `economics-monetary-history` | DOMAIN-V | Standardized & Registered as Alias |
| `family-wealth-estate` | `estate-planning-succession` | DOMAIN-W | Standardized & Registered as Alias |
| `dispute-resolution-consumer-rights` | `consumer-protection-grievance` | DOMAIN-X | Standardized & Registered as Alias |
| `international-investing` | `international-cross-border-finance` | DOMAIN-Y | Standardized & Registered as Alias |
| *New Domain* | `financial-education-decision-tools` | DOMAIN-Z | Newly Created Domain |

---

## [1.0.0] — 2026-10-17

### Prompt Context
- **Prompt ID**: `DHANPEDIA-INDIA-PROMPT-001`
- **Initial Baseline**: Initialized 22 baseline topical families with stable IDs, scopes, exclusions, core questions, and preliminary statutory source bindings.
