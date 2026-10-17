# Dhanpedia India — Research Methodology & Verification Protocol (Version 3.0.0)

## 1. Editorial Integrity and Core Directive

Dhanpedia India is built as an uncompromising, evidence-grounded reference encyclopedia for the Indian financial system and wealth-building landscape. Every factual statement, statutory tax slab, interest compounding formula, legal citation, and market mechanism must be traceable to primary, verifiable authority.

**Absolute Prohibition on Fabrication**: Under no circumstances may an agent or contributor invent a financial statistic, cite an imaginary regulatory circular, fabricate a URL, project speculative returns as guaranteed, or misrepresent a marketing claim as a legal right. Where empirical data or statutory clarity is lacking, it must be explicitly recorded in `data/taxonomy/research-gaps.json` or `reports/research-backlog.md` with an assigned severity rating.

---

## 2. Source Hierarchy & Evidentiary Tiers

All research claims within Dhanpedia India are categorized and verified according to a strict four-tier hierarchy:

### Tier 1 — Primary Statutory, Regulatory, and Judicial Authorities
- **Legislation & Official Acts**: The Gazette of India, India Code repository, consolidated Central Acts (Income-tax Act 1961, Companies Act 2013, Insurance Act 1938, DICGC Act 1961, SCRA 1956, BUDS Act 2019, PBPT Act 1988, FEMA 1999, Consumer Protection Act 2019).
- **Statutory Regulators**: Reserve Bank of India (RBI) Master Directions and Circulars, Securities and Exchange Board of India (SEBI) Regulations and Board Orders, Central Board of Direct Taxes (CBDT) Notifications, Central Board of Indirect Taxes and Customs (CBIC) Circulars, Insurance Regulatory and Development Authority of India (IRDAI) Master Circulars, Pension Fund Regulatory and Development Authority (PFRDA) Guidelines, Insolvency and Bankruptcy Board of India (IBBI) Orders.
- **Apex Judicial Precedents**: Supreme Court of India reported judgments, High Court landmark appellate rulings, Income Tax Appellate Tribunal (ITAT) Special Bench orders, National Consumer Disputes Redressal Commission (NCDRC) judgments.
- **Official Portals & Statistical Bureaus**: Ministry of Statistics and Programme Implementation (MoSPI / NSO), Department of Economic Affairs, Ministry of Corporate Affairs (MCA21), Employees' Provident Fund Organisation (EPFO), India Post / National Savings Institute.

### Tier 2 — Recognized Market Infrastructure & Institutional Bodies
- **Market Infrastructure Institutions (MIIs)**: National Stock Exchange of India (NSE), Bombay Stock Exchange (BSE), Multi Commodity Exchange (MCX), National Securities Depository Limited (NSDL), Central Depository Services Limited (CDSL), Clearing Corporation of India Limited (CCIL).
- **Industry & Institutional Associations**: Association of Mutual Funds in India (AMFI), Fixed Income Money Market and Derivatives Association (FIMMDA), Foreign Exchange Dealers' Association of India (FEDAI), Bureau of Indian Standards (BIS).
- **Credit Information Companies**: TransUnion CIBIL, Experian, CRIF High Mark, Equifax (licensed under CICRA 2005).

### Tier 3 — Reputable Professional Research & Specialized Financial Journalism
- Established financial publications (Mint, Business Standard, The Hindu Business Line, Economic Times) and academic working papers (IIMs, ISB, NIPFP, Indira Gandhi Institute of Development Research).
- *Strict evidentiary rule*: Secondary publications are utilized solely for initial lead discovery, historical context, and investigative synthesis; they must never be cited as the sole statutory authority for a legal, tax, or regulatory claim.

### Tier 4 — Community Evidence & Ground-Level Forensic Intelligence
- Investor forums, consumer complaint repositories, legal court dockets, and practitioner anecdotes.
- *Strict evidentiary rule*: Anecdotal community reports are used exclusively to uncover real-world operational friction, hidden product charges, loan-app harassment, or emerging fraud typologies. They serve to generate research hypotheses, never as verified factual proof.

---

## 3. Real-World Shadow Economy & Forensic Finance Standards

Personal finance in India does not operate in a theoretical vacuum. Millions of citizens encounter real-world informal mechanisms, black money pressures, and unregulated offerings. Dhanpedia India documents these realities with absolute forensic clarity, objective legal analysis, and zero moralizing:

1. **Real Estate Cash Transactions ('On-Money')**:
   - Must document the gap between circle rates (ready reckoner / guidance values) and actual prevailing market values.
   - Must cite the explicit statutory limits under Section 269SS of the Income-tax Act (restricting cash advances/loans for immovable property to ₹20,000) and the mandatory hundred percent penalty on the recipient under Section 271D.
   - Must cite Section 269ST (restricting general cash receipts from a person in a day or single transaction to ₹2,00,000) and the corresponding hundred percent penalty under Section 271DA.
   - Must analyze Section 50C and Section 56(2)(x) safe-harbor tolerance bands (10%), detailing how discrepancies trigger double taxation on both seller and buyer.

2. **Prohibition of Benami Transactions**:
   - Must explain the legal definition of benami property under the Prohibition of Benami Property Transactions Act 1988 (as amended 2016).
   - Must document the severe statutory consequences: absolute confiscation of the asset by the Central Government without compensation (Section 5) and rigorous imprisonment up to seven years plus a 25% fine on fair market value (Section 53).

3. **Dabba Trading (Off-Exchange Bucketing)**:
   - Must document how illegal dabba trading networks operate outside recognized stock exchanges.
   - Must cite Sections 13 and 16 of the Securities Contracts (Regulation) Act 1956 and criminal sanctions under Section 23 (up to 10 years imprisonment and ₹25 Crore fine).
   - Must highlight the complete lack of investor protection, clearing corporation guarantees, or statutory ombudsman recourse.

4. **Forensic Enforcement Agencies**:
   - Must accurately differentiate the investigative and attachment jurisdictions of the Directorate of Enforcement (ED under PMLA), Income Tax Investigation Wing (under Section 132/133A), Serious Fraud Investigation Office (SFIO under Companies Act), and Financial Intelligence Unit - India (FIU-IND under PMLA reporting rules).

---

## 4. Audio-Native Prose Mandate

To ensure seamless text-to-speech audio rendering and audiobook publication:
1. **Paragraph Format**: All substantive explanations must be structured in cohesive, flowing English paragraphs.
2. **Formula Transcription**: Never leave isolated LaTeX equation blocks ($FV = PV(1+r)^n$) or ASCII formulas without full spoken English narration. For example: "The maturity value of a fixed deposit is calculated by taking the initial principal and multiplying it by the factor of one plus the quarterly interest rate raised to the power of four times the number of years."
3. **Table Traps**: Complex multi-column visual tables must be accompanied by explanatory narrative prose so that listeners relying on audiobooks or screen readers comprehend every row and column relationship.
4. **Substantive Depth**: Foundational treatises must exceed **10,000 words** of original, non-duplicative, technically rigorous prose.

---

## 5. Claim Classification and Verification Protocol

Every factual claim in the knowledge architecture is categorized under one or more explicit classifications:
- `current_fact`: Verified factual truth under current operational statutes and regulations.
- `historical_fact`: Past historical event, superseded rule, or discontinued instrument.
- `legal_rule`: Statutory mandate originating directly from an Act of Parliament or subordinate legislation.
- `tax_rule`: Direct or indirect tax provision under the Income-tax Act, GST Acts, or annual Finance Acts.
- `regulatory_requirement`: Binding directive or circular issued by a designated regulator (RBI, SEBI, IRDAI, PFRDA).
- `empirical_finding`: Statistical result derived from historical market data or government survey prints.
- `interpretation`: Legal or analytical construction of an ambiguous statutory text, citing relevant judicial precedents.
- `estimate` or `forecast`: Clearly identified mathematical projection with documented input assumptions.
- `unverified` or `disputed`: A claim subject to conflicting evidence or ongoing litigation; publication blocked or heavily caveated.

---

## 6. Time-Sensitive and Regulatory Update Protocols

1. **Dual Tax Regime Segregation**: Every tax explanation must explicitly state the Financial Year (e.g., FY 2024-25) and Assessment Year (e.g., AY 2025-26), analyzing both the **Old Tax Regime** and the **New Concessional Tax Regime (Section 115BAC)** with current Finance Act amendments.
2. **Effective Date Tracking**: Provisions must specify their statutory commencement date (e.g., Finance Act 2024 capital gains changes effective July 23, 2024).
3. **Escalation Path Verification**: Banking, insurance, and securities guides must provide verified statutory escalation paths (Internal Grievance Officer -> Principal Nodal Officer -> Statutory Ombudsman / SCORES 2.0 / SMART ODR / Bima Bharosa).
4. **Automated Validation**: All schemas, references, category IDs, source links, and substantive word counts are validated by automated integrity tests prior to commit and deployment.

---

## 7. Typed Knowledge Graph and Relational Integrity

Dhanpedia India represents the financial system as a machine-readable, typed, directed multigraph:
1. **Entity Typing**: All nodes are categorized under explicit types: `domain`, `concept`, `regulator`, `institution`, `act_or_law`, `risk`, `financial_instrument`, `calculator`, `publication`, `claim`.
2. **Permissible Predicates**: Edges must use documented predicates: `governed_by`, `regulated_by`, `taxed_under`, `prohibits`, `mitigates_risk`, `exposes_to`, `has_calculator`, `requires_prerequisite`, `supported_by`, `supersedes`.
3. **Referential Resolution**: 100% of relationship endpoints must resolve to valid, active identifiers in their corresponding registries. Dangling pointers fail automated CI quality gates.
4. **DAG Enforcement**: Hierarchical and prerequisite dependencies are strictly checked to prevent circular logic cycles.

---

## 8. Concept Normalization and Alias Disambiguation

1. **Layered Explanations**: Concepts support multi-tier explanations:
   - *Plain English Definition*: Intuitive, jargon-free summary accessible to beginners.
   - *Technical Definition*: Statutory, mathematical, or institutional precision.
   - *Audio-Native Spoken Formula*: Natural language reading of any governing equation.
2. **Controlled Alias Taxonomy**: Discovered alternative terms must be explicitly classified as: exact synonym, abbreviation, spelling variation, colloquial term, distinct legal concept, or misleading/incorrect usage.
3. **Equivalence Auditing**: Terms that appear synonymous in everyday speech but carry divergent legal or tax consequences (e.g. CAGR vs XIRR, Bank FD vs Corporate FD, Direct vs Regular Plan, Nomination vs Inheritance, TDS vs TCS) are strictly maintained as distinct canonical entities.

---

## 9. Audio-Native Mathematical Formulas

To ensure seamless narration in text-to-speech engines and audiobooks:
1. **Zero Raw Equation Blocks**: Mathematical formulas must not appear as isolated LaTeX blocks ($FV = PV(1+r)^n$) or ASCII tables without comprehensive spoken prose.
2. **Spoken Formulation Standard**: Every formula in `data/calculators/formula-registry.json` provides an explicit narrative reading. For example, Compound Future Value is articulated as: "The future value of an investment is calculated by multiplying the initial principal amount by the sum of one plus the periodic interest rate, with that sum raised to the power of the total number of compounding periods."
3. **Limitation Disclosures**: Boundary conditions, compounding frequency assumptions, cash-flow sign conventions, and tax deductions must be narrated in accompanying text.

---

## 10. Coverage Gap Prioritization Protocol

Unresolved research tasks and institutional coverage gaps in `data/research/coverage-gaps.json` are evaluated using risk-weighted prioritization scoring:
$$\text{Priority Score} = (\text{Financial Harm} \times 0.35) + (\text{Audience Reach} \times 0.25) + (\text{Regulatory Sensitivity} \times 0.25) + (\text{Content Urgency} \times 0.15)$$

- **P0 (Score 8.5 - 10.0):** Immediate publication blocker. Involves severe consumer harm, criminal prosecution risks (e.g., Section 269SS/ST cash penalties, PBPT Act asset confiscation, dabba trading arrest), or complete insurance repudiation.
- **P1 (Score 7.0 - 8.4):** High-consequence gap affecting mass household savings (e.g., Finance Act 2024 capital gains changes, illegal loan app extortion).
- **P2 (Score 5.0 - 6.9):** Architectural or institutional topic necessary for comprehensive encyclopedia completeness.
- **P3 (Score 3.0 - 4.9):** Specialized or niche topic (e.g., Category III AIFs, cross-border LRS remittance limits).
- **P4 (Score 1.0 - 2.9):** Historical or edge-case study for future research phases.

