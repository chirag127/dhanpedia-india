# Dhanpedia India — Research Backlog and Open Statutory Inquiries

**Document ID**: `REP-PROMPT-002-BACKLOG`  
**Version**: `1.0.0`  
**Last Updated**: October 17, 2026  
**Status**: Active Research Queue  

This document catalogs open statutory ambiguities, incomplete historical data series, conflicting judicial precedents, and priority research tasks that require monitoring or specialized legal investigation.

---

## 1. High-Priority Direct Tax & Capital Gains Ambiguities

### BACKLOG-TAX-001: Section 87A Rebate on Special Rate Capital Gains under Section 115BAC
- **Domain**: Domain K (`indian-taxation`)
- **Issue**: During AY 2024-25 filing utilities, the Income Tax Department restricted Section 87A rebate calculation against income taxed at special rates, specifically Short-Term Capital Gains under Section 111A (taxed at 15% / 20%) and Long-Term Capital Gains under Section 112A (taxed at 10% / 12.5%). However, Section 87A statutory text under the New Tax Regime contains no explicit exclusion for special rate income except for Section 112A LTCG beyond the threshold.
- **Current Status**: Under litigation before multiple Income Tax Appellate Tribunal (ITAT) benches.
- **Action Required**: Monitor ITAT Special Bench rulings and track potential retrospective or prospective clarification circulars from the Central Board of Direct Taxes (CBDT).
- **Impact on Dhanpedia**: Essential for precision in `CALC-TAX-001` (New vs Old Tax Regime Calculator) and `capital-gains-taxation-architecture-post-finance-act-2024`.

### BACKLOG-TAX-002: Grandfathering Choice for Real Estate Acquired Prior to July 23, 2024
- **Domain**: Domain K (`indian-taxation`) / Domain L (`real-estate-property-land`)
- **Issue**: Finance (No. 2) Act 2024 amended Section 112 to permit resident individuals and HUFs selling land or building acquired before July 23, 2024 to compute tax at 12.5% without indexation or at 20% with indexation, paying whichever is lower. However, the exact computation method for capital loss scenarios where indexation creates a loss while 12.5% without indexation produces a nominal gain requires explicit statutory clarification.
- **Current Status**: Awaiting formal CBDT procedural circular on loss reporting in Schedule CG of the ITR.
- **Action Required**: Analyze CBDT clarifications and upcoming ITR utilities for AY 2025-26.

---

## 2. Shadow Economy & Real Estate Cash Penalty Inquiries

### BACKLOG-SHADOW-001: Section 273B 'Reasonable Cause' Defense in Section 269SS/ST Violations
- **Domain**: Domain R (`financial-fraud-scams-shadow-economy`) / Domain L (`real-estate-property-land`)
- **Issue**: In Indian real estate transactions, property sellers frequently demand a cash component ('on-money') exceeding the ₹20,000 threshold of Section 269SS. Where buyers pay cash out of commercial duress, tax assessing officers levy 100% penalties under Section 271D. Under Section 273B, penalties can be waived if the taxpayer proves 'reasonable cause'.
- **Current Status**: Conflicting judicial interpretations across different High Courts on what constitutes sufficient commercial urgency or duress.
- **Action Required**: Synthesize Supreme Court and High Court tax appeal jurisprudence (including rulings from Delhi, Bombay, and Madras High Courts) to document the exact legal evidentiary bar required for Section 273B relief.

### BACKLOG-SHADOW-002: Benami Property Transactions Act Prospective vs Retrospective Scope
- **Domain**: Domain R (`financial-fraud-scams-shadow-economy`)
- **Issue**: The Supreme Court of India in *Union of India v. Ganpati Dealcom Pvt. Ltd. (2022)* held that criminal provisions introduced by the 2016 Amendment Act apply only prospectively from November 1, 2016. However, civil forfeiture proceedings initiated by Initiating Officers under the amended Act for pre-2016 transactions continue to generate complex legal disputes.
- **Current Status**: Clarified for criminal prosecution, but asset tracing protocols on historical family HUF properties remain actively litigated.
- **Action Required**: Track Constitutional Bench review petitions and emerging appellate tribunal decisions under the PBPT Act.

---

## 3. Banking, Payments and Private Credit Inquiries

### BACKLOG-BANK-001: P2P Lending Platform Transition Compliance under August 2024 Master Directions
- **Domain**: Domain O (`p2p-lending-private-credit`)
- **Issue**: The RBI's August 16, 2024 Master Direction amendments mandated the immediate discontinuation of instant-liquidity sweep products, automated reinvestment without explicit trade-by-trade consent, and tenure-mismatched pools.
- **Current Status**: Platforms are restructuring their product offerings to pure manual matching or fixed-tenure closed-ended loan pools.
- **Action Required**: Audit the revised user agreements, fee schedules, and escrow documentation across the top operational NBFC-P2P platforms in India to verify compliance.

### BACKLOG-BANK-002: Secondary Corporate Bond Liquidity on Exchange RFQ Platforms
- **Domain**: Domain H (`fixed-income-debt-markets`)
- **Issue**: While SEBI has mandated that listed debt securities be traded on Request for Quote (RFQ) platforms on BSE and NSE, retail-sized lots (under ₹10 Lakh) often suffer from wide bid-ask spreads and liquidity desertion.
- **Current Status**: Online Bond Platform Providers (OBPPs) have emerged under SEBI regulations, but liquidity for non-AAA rated corporate bonds remains constrained.
- **Action Required**: Gather empirical RFQ execution data on retail bond platforms to document true liquidity costs for individual debt investors.

---

## 4. Government Savings & Sovereign Debt Inquiries

### BACKLOG-SOV-001: Future Issuance Framework for Sovereign Gold Bonds (SGBs)
- **Domain**: Domain M (`gold-silver-commodities`) / Domain E (`gov-small-savings`)
- **Issue**: Following the reduction of basic customs duty on gold imports from 15% to 6% in Budget 2024, the Ministry of Finance has paused fresh Sovereign Gold Bond tranche issuances due to high fiscal redemption costs.
- **Current Status**: RBI has not released an issuance calendar for late FY 2024-25.
- **Action Required**: Monitor government borrowing announcements and parliamentary standing committee on finance deliberations regarding whether SGB issuances will resume or be permanently restructured.

---

## 5. Summary of Priority Next Steps

1. **ITR AY 2025-26 Schema Tracking**: Monitor the release of draft ITR forms to confirm capital gains grandfathering tables and Section 87A rebate calculation orders.
2. **State Land Title Digitalization Audit**: Document which Indian states (e.g., Karnataka Bhoomi, Telangana Dharani, Maharashtra Mahabhulekh) have achieved full electronic search for encumbrance certificates dating back 30 years.
3. **Audio-Native Drafting Guidelines**: Establish standard spoken phonetic conventions for citing complex Indian legal sections (e.g., phrasing "Section 115BAC, subsection 1, clause a" for listening comprehension).
