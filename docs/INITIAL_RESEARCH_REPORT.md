# Dhanpedia India — Initial Research Report (Prompt 001)

## 1. Executive Summary

This research report documents the primary findings from the baseline statutory and regulatory audit conducted during Prompt 001. All findings have been cross-checked against official portals and statutory registries (RBI, SEBI, CBDT, PFRDA, IRDAI, EPFO, DICGC) and are integrated into the authoritative source registry (`data/sources/source-registry.json`) and taxonomy (`data/taxonomy/taxonomy.json`).

---

## 2. Verified Statutory Findings

### 2.1 Banking, Deposit Insurance & Dispute Redressal
- **DICGC Coverage Limit**: Under the DICGC Act (amended 2021), bank deposit insurance is statutory at **₹5,00,000 per depositor per bank** covering aggregate principal and interest across all branches of a scheduled commercial bank, small finance bank, or cooperative bank. Crucially, deposits held in different capacities (e.g., individual sole account vs joint account with different order of names vs partner in firm) each enjoy separate ₹5,00,000 coverage limits at the same banking institution.
- **Reserve Bank - Integrated Ombudsman Scheme (RB-IOS, 2021)**: Integrates three prior ombudsman schemes into 'One Nation One Ombudsman'. Covers Regulated Entities (REs) including Commercial Banks, RRBs, Scheduled Primary Co-operative Banks, NBFCs with deposit-taking capacity or asset size >= ₹100 Crore, and non-bank System Participants. If an RE fails to respond within 30 days or rejects a complaint, the consumer has statutory right of escalation to CMS (`cms.rbi.org.in`) with zero filing fees.
- **Unauthorized Electronic Banking Transactions**: Under RBI Master Direction DBR.No.Leg.BC.78/09.07.005/2017-18, where fraud is due to third-party breach without customer fault, zero liability applies if reported within 3 working days of occurrence.

### 2.2 Capital Markets & Mutual Funds
- **SEBI Mutual Fund Categorization**: Governed by SEBI Circular SEBI/HO/IMD/DF3/CIR/P/2017/114 (October 6, 2017). Defines precise market capitalization tiers:
  - Large Cap: 1st to 100th company in full market capitalization.
  - Mid Cap: 101st to 250th company.
  - Small Cap: 251st company onwards.
  AMFI updates this semi-annual categorization list every June and December.
- **Investor Dispute Resolution (SCORES 2.0 & SMART ODR)**: Upgraded in April 2024 to SCORES 2.0 (`scores.sebi.gov.in`), mandating a two-tier escalation: direct resolution with entity within 21 days, followed by SEBI review. If dissatisfied, the online conciliation and arbitration mechanism is accessible via SMART ODR portal (`smartodr.in`).

### 2.3 Direct Taxation & Budgetary Revisions
- **Section 115BAC (New Tax Regime)**: Set as the default regime from FY 2023-24. Slabs updated under Finance (No. 2) Act 2024 with a standard deduction of ₹75,000 for salaried employees and rebate under Section 87A up to taxable income of ₹7,00,000.
- **Capital Gains Overhaul (Finance (No. 2) Act 2024)**:
  - Listed Equity & Equity MF: Short-Term Capital Gains (STCG) increased from 15% to **20%** under Section 111A. Long-Term Capital Gains (LTCG) increased from 10% to **12.5%** under Section 112A, with annual exemption threshold raised from ₹1,00,000 to **₹1,25,000**.
  - Debt Mutual Funds: As established under Finance Act 2023 (Section 50AA), funds with <=35% equity exposure are taxed as short-term capital gains at individual slab rates regardless of holding period (indexation completely eliminated).
  - Unlisted Equity & Real Estate: Holding period for long term standardized to 24 months, with LTCG taxed at 12.5% without indexation (with a grandfathering choice for resident individuals purchasing real estate prior to July 23, 2024).

---

## 3. Research Hypotheses Under Investigation

1. **Hypothesis H-01 (Arbitrage Fund Post-Tax Drag vs Liquid Funds)**: Despite lower gross yields, arbitrage funds deliver higher net returns for individuals in the 30%+ surcharge tax brackets due to equity taxation treatment (20% STCG / 12.5% LTCG) compared to liquid funds taxed at slab rates (up to 39% effective). Empirical simulation across rolling 3-month and 6-month horizons is required.
2. **Hypothesis H-02 (Direct Plan Compounding Alpha)**: A 75-100 bps difference in Total Expense Ratio (TER) between Regular and Direct plans compounds to an attrition of between 18% and 24% of final terminal corpus over a 25-year investment horizon at historical Indian market return rates (12% CAGR).
3. **Hypothesis H-03 (Optimal SWR for Indian Retirees)**: The classical Bengen 4% Rule for the US market suffers unacceptable sequence-of-returns failure rates in India due to high baseline inflation (6-8%) and currency depreciation. An initial Safe Withdrawal Rate of 3.00% - 3.25% with equity allocation between 50-60% provides empirical durability over 30+ year spans.

---

## 4. Documented Research Gaps

| Gap ID | Topic | Description & Current Bottleneck |
| :--- | :--- | :--- |
| `GAP-TAX-87A-SPL` | Section 87A Rebate vs Special Rate Income | Uncertainty regarding rebate calculation order against STCG 111A and LTCG 112A in New Regime income tax utility. Awaiting ITAT precedents. |
| `GAP-SMREIT-TRACK` | SM REIT Secondary Liquidity | Limited historical depth on fractional ownership SM REIT performance post-SEBI 2024 framework. |
| `GAP-LRS-TCS-RECON` | Foreign Outward Remittance 20% TCS | Form 26AS reflection latency and employer Form 12BAA set-off operational friction. |
| `GAP-URBAN-INFLATION` | Real Lifestyle Inflation in Tier 1 Indian Metros | Disconnect between official CPI (4-6%) and middle-class healthcare/education inflation (10-12%). |
