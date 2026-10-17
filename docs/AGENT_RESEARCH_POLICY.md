# Dhanpedia India — Agent Research Policy & Statutory Verification Standards

**Status:** Canonical Specialist Policy  
**Parent Document:** [`AGENTS.md`](file:///c:/g/dhanpedia-india/AGENTS.md)  
**Effective Date:** October 2026 (Operational under Prompt 004)

---

## 1. Prime Directive: Web Search & Primary Source Grounding

Every autonomous AI agent, research assistant, or human contributor operating in the Dhanpedia India repository must follow a strict, evidence-linked research protocol:

1. **Deep Web Search Mandate:** Agents must search the web dozens to hundreds of times across official legislative, regulatory, and judicial repositories before drafting any financial explanation, tax formula, circular reference, or penalty threshold.
2. **Zero Hallucination Tolerance:** Never invent a legal section, circular number, notification date, statutory exemption limit, or regulatory guideline. Every claim must trace back to a verifiable primary source.
3. **Primary Authority Hierarchy:**
   - **Tier 1 (Statutory Enactments & Notifications):** Acts of Parliament (Income-tax Act 1961, Banking Regulation Act 1949, DICGC Act 1961, Companies Act 2013, PMLA 2002, SCRA 1956, Benami Act 1988), Gazetted Rules, CBDT Notifications, CBIC Notifications.
   - **Tier 2 (Regulatory Master Directions & Circulars):** Reserve Bank of India (RBI) Master Directions, Securities and Exchange Board of India (SEBI) Regulations and Master Circulars, Insurance Regulatory and Development Authority of India (IRDAI) Master Circulars, Pension Fund Regulatory and Development Authority (PFRDA) Guidelines.
   - **Tier 3 (Judicial Authorities):** Supreme Court of India reported judgments, High Court rulings, Income Tax Appellate Tribunal (ITAT) Special Bench orders, National Company Law Appellate Tribunal (NCLAT) decisions.
   - **Tier 4 (Official Guidance & Government Data):** Ministry of Finance releases, Press Information Bureau (PIB) fact checks, RBI Financial Stability Reports, SEBI Bulletin, Annual Reports of DICGC.
   - **Unacceptable Sources:** Unvetted commercial affiliate blogs, sponsored fintech promotional portals, anonymous forum posts, and generic SEO content farms.

---

## 2. Latest Gazetted Versions and Legislative Currency Protocol

Financial laws in India change rapidly through annual Union Budgets (Finance Acts) and continuous regulatory notifications. Agents must actively verify the latest statutory version:

### 2.1 Direct Taxes (Income Tax)
- **Finance (No. 2) Act 2024:**
  - Capital Gains Tax overhaul effective July 23, 2024:
    - Listed equity and equity-oriented mutual funds: Short-Term Capital Gains (STCG) under Section 111A taxed at **20%** (up from 15%); Long-Term Capital Gains (LTCG) under Section 112A taxed at **12.5%** (up from 10%) with an enhanced annual exemption threshold of **₹1,25,000** (up from ₹1,00,000).
    - Unlisted shares, debt mutual funds, and real estate: Revised under Section 112 with indexation benefit removed for transfers on or after July 23, 2024 (with grandfathering election option for resident individuals acquiring land/building prior to July 23, 2024 at 12.5% without indexation vs 20% with indexation).
  - Default Regime: Concessional Tax Regime under Section 115BAC is the statutory default regime for Individuals, HUFs, and AOIs.
  - Section 87A Rebate: Full tax rebate up to ₹25,000 for resident individuals having total taxable income up to ₹7,00,000 under Section 115BAC (note special rate tax interaction nuances documented in research gaps).

### 2.2 Banking, Insurance, and Consumer Protection
- **IRDAI Master Circular on Health Insurance (2024):** Pre-existing disease (PED) maximum waiting period reduced from 48 months to 36 months; moratorium period for incontestability under Section 45 reduced from 8 years to 5 years (subject to statutory limits); mandatory cashless pre-authorization turnaround time of 1 hour and final discharge settlement within 3 hours.
- **DICGC (Amendment) Act 2021:** Section 18A statutory mandate guaranteeing interim relief payout of up to ₹5,00,000 per depositor within 90 days of an RBI bank direction or moratorium.
- **RBI Digital Lending Guidelines (2022/2023):** Disintermediation of pass-through/pool accounts; all loan disbursements and repayments must occur directly between the borrower's bank account and the Regulated Entity's bank account without touchpoint by Lending Service Providers (LSPs).

---

## 3. Forensic Finance and Shadow Economy Mandates

Financial analysis must document actual commercial realities, informal practices, and statutory penalties:

1. **Cash Transactions in Real Estate (On-Money):**
   - **Section 269SS:** Strict bar against taking or accepting loan, deposit, or specified sum (advance in relation to transfer of immovable property) of ₹20,000 or more in cash.
   - **Section 271D:** Equal monetary penalty of **100% of the cash accepted** levied on the recipient.
   - **Section 269ST:** Prohibition against receiving ₹2,00,000 or more in cash from a person in a day, in respect of a single transaction, or in respect of transactions relating to one event/occasion, backed by **100% penalty under Section 271DA**.
   - **Section 50C & Section 56(2)(x):** Stamp duty value (circle rate) deemed as full value of consideration with a 10% statutory tolerance band.
2. **Prohibition of Benami Property Transactions Act 1988 (as amended 2016):**
   - Section 5 provides for **confiscation of benami property without compensation**.
   - Section 53 mandates rigorous imprisonment of 1 to 7 years plus fine up to 25% of fair market value.
3. **Illegal Dabba Trading Bucket Shops:**
   - Violations of Sections 13 and 16 of the Securities Contracts (Regulation) Act 1956 (SCRA).
   - Criminal sanctions under Section 23: up to 10 years imprisonment and fine up to ₹25 Crore. Total absence of SEBI SCORES or Investor Protection Fund (IPF) recourse.

---

## 4. Research Recording & Persistence

Whenever deep research is performed:
1. Log all queries, official URLs, access timestamps, and findings in [`docs/research/technical-research-log.md`](file:///c:/g/dhanpedia-india/docs/research/technical-research-log.md).
2. Register newly verified primary sources in [`data/sources/source-registry.json`](file:///c:/g/dhanpedia-india/data/sources/source-registry.json).
3. Register legal propositions in [`data/claims/claim-registry.json`](file:///c:/g/dhanpedia-india/data/claims/claim-registry.json).
4. Run `npm test` (`node scripts/validate-integrity.mjs`) to verify 100% consistency across claims, sources, and taxonomy.
