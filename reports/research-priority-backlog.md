# Dhanpedia India — Prioritized Research & Coverage Backlog
**Audit Date:** October 2026  
**Reference Document:** `data/research/coverage-gaps.json`  
**Standard:** Risk-Weighted Impact, Urgency, and Regulatory Sensitivity Scoring (Prompt 003 Section 15 & 18-K)

---

## 1. Prioritization Methodology

To avoid haphazard research and ensure high-consequence consumer risks are addressed first, gaps are evaluated using a four-factor scoring formula:

$$\text{Priority Score} = (\text{Financial Harm} \times 0.35) + (\text{Audience Reach} \times 0.25) + (\text{Regulatory Sensitivity} \times 0.25) + (\text{Content Urgency} \times 0.15)$$

Where each factor is graded on a scale of 1 (negligible) to 10 (critical).

### Priority Bands:
- **P0 — Critical Publication Blocker:** Direct risk of severe financial loss, tax confiscation, or legal prosecution if misunderstood by the reader. Must be researched and verified prior to publishing related core articles.
- **P1 — High-Consequence Regulatory Gap:** Affects substantial household wealth (e.g. EPF/NPS, health insurance claim repudiations, home loan interest traps).
- **P2 — Important Architectural Gap:** Necessary for complete institutional and operational understanding of Indian capital markets (e.g. REIT/InvIT cash flows, primary agricultural credit societies).
- **P3 — Specialized / Niche Research:** Complex advanced instruments or high-net-worth structures (e.g. Category III AIFs, cross-border remittance limits under LRS).
- **P4 — Optional Future Enhancement:** Algorithmic execution, historical market microstructure evolutions, edge-case financial history.

---

## 2. Ranked Research Backlog Queue

| Rank | Gap ID | Priority | Category / Topic | Statutory Reference | Risk / Consequence | Target Prompt |
| :---: | :--- | :---: | :--- | :--- | :--- | :---: |
| **1** | `GAP-001` | **P0** | Real Estate Cash & Black Money Mechanics | Income-tax Act Sec 269SS/ST, 271D/DA, 50C, 56(2)(x) | 100% monetary penalties, double taxation on buyer & seller, criminal seizure | Prompt 004/005 |
| **2** | `GAP-002` | **P0** | Illegal Dabba Trading & Off-Exchange Bucketing | SCRA 1956 Sec 13, 16, 23 | Total loss of capital, zero investor protection, up to 10 years imprisonment | Prompt 004/005 |
| **3** | `GAP-003` | **P0** | Health Insurance Rejection & Waiting Periods | Insurance Act 1938 Sec 45, IRDAI Master Circular 2024 | Total claim repudiation during medical emergency, 3-year incontestability clause | Prompt 004/005 |
| **4** | `GAP-004` | **P1** | Benami Transactions & Family Property Holdings | PBPT Act 1988 (as amended 2016) Sec 5, 53 | Complete property confiscation without compensation, 7 years rigorous imprisonment | Prompt 005 |
| **5** | `GAP-005` | **P1** | Dual Tax Regime Capital Gains (Budget 2024) | Finance (No. 2) Act 2024, Income-tax Act Sec 112/112A | Unindexed real estate capital gains tax traps, revised holding periods (12m vs 24m) | Prompt 005 |
| **6** | `GAP-006` | **P1** | Illegal Digital Lending Apps & Cyber Fraud | RBI Digital Lending Guidelines 2022, PMLA 2002 | Extortion, unauthorized device access, mule account money laundering | Prompt 005 |
| **7** | `GAP-007` | **P2** | Co-operative Bank Supervisory Dual Control | Banking Regulation (Amendment) Act 2020 | State Registrar vs RBI dual control ambiguities, deposit moratorium triggers | Prompt 006 |
| **8** | `GAP-008` | **P2** | REITs & InvITs Taxation Framework | Income-tax Act Sec 115UA, SEBI REIT Regulations 2014 | Complex multi-component distributions (Dividend vs Interest vs Repayment of Capital) | Prompt 006 |
| **9** | `GAP-009` | **P3** | Unregulated Collective Investment & Ponzi Schemes | BUDS Act 2019, SEBI CIS Regulations 1999 | Fraudulent ponzi deposit schemes masquerading as multi-level marketing or agro-funds | Prompt 006 |
| **10** | `GAP-010` | **P3** | Sovereign Gold Bonds vs Physical Gold Taxation | RBI SGB Operational Guidelines, Finance Act 2024 | Sovereign redemption capital gains exemption vs secondary market sales taxation | Prompt 006 |

---

## 3. Detailed Resolution Criteria for Top P0/P1 Gaps

### 3.1 Gap-001: Real Estate Cash & Black Money Mechanics
- **Core Investigation:** Document the precise economic mechanisms connecting municipal circle rates (ready reckoner values) to market prices in major Tier 1 and Tier 2 cities.
- **Statutory Cross-References:**
  - Section 269SS: Prohibits accepting cash $\ge$ ₹20,000 for transfer of immovable property.
  - Section 271D: Mandatory penalty equal to 100% of the cash accepted.
  - Section 269ST: Prohibits receiving ₹2,00,000 or more in cash in aggregate from a person in a day or in respect of a single transaction.
  - Section 271DA: Mandatory penalty equal to 100% of the cash received.
  - Section 50C: Deems circle rate as full value of consideration for seller if circle rate exceeds agreement value by more than 10%.
  - Section 56(2)(x): Taxes the difference between circle rate and agreement value as "Income from Other Sources" in the hands of the buyer if difference exceeds 10% and ₹50,000.
- **Audio-Native Requirement:** Ensure complete spoken explanation of the 10% safe-harbor tolerance band without visual equation tables.

### 3.2 Gap-002: Dabba Trading (Off-Exchange Bucketing)
- **Core Investigation:** Document how parallel unrecorded ledgers operate via mobile apps, phone calls, and Telegram channels outside the NSE/BSE clearing corporation umbrella.
- **Statutory Cross-References:**
  - Securities Contracts (Regulation) Act 1956, Sections 13 and 16 (contracts in securities illegal unless entered into through recognized stock exchange members).
  - SCRA Section 23 penalties: Imprisonment up to 10 years, fine up to ₹25 Crore.
  - Complete absence of IPF (Investor Protection Fund) coverage or SEBI SCORES 2.0 redressal.
  - Money laundering risk under PMLA 2002.

### 3.3 Gap-003: Health Insurance Claim Repudiations & Waiting Periods
- **Core Investigation:** Analyze the legal mechanics of non-disclosure, pre-existing disease (PED) definitions, and statutory moratoriums.
- **Statutory Cross-References:**
  - Insurance Act 1938, Section 45: Three-year incontestability clause after which a life/health policy cannot be called in question on ground of misstatement.
  - IRDAI Master Circular on Health Insurance (2024): Reduction of maximum waiting period for pre-existing diseases from 48 months to 36 months; 60-day cashless authorization requirements; ombudsman escalation timelines.

---

## 4. Backlog Governance

Research tasks are claimed and executed in order of priority score. A P0 task must have its statutory references verified against the primary India Code, RBI, or SEBI master direction before the corresponding treatise is marked ready for publication.
