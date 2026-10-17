# Dhanpedia India

> **The Indian Personal Finance, Investing and Wealth-Building Encyclopedia**  
> *Master your money. Understand every investment. Build lasting wealth.*

---

## 1. Project Overview

**Dhanpedia India** is an uncompromising, mathematically rigorous, evidence-grounded financial encyclopedia and reference publication engineered specifically for Indian investors, salaried professionals, software engineers, and entrepreneurs.

- **Author & Curator:** Chirag Singhal ([chirag@oriz.in](mailto:chirag@oriz.in))
- **Live Deployment:** [https://chirag127.github.io/dhanpedia-india/](https://chirag127.github.io/dhanpedia-india/)
- **Repository:** [https://github.com/chirag127/dhanpedia-india](https://github.com/chirag127/dhanpedia-india)
- **Execution Model:** Autonomous, parallelized, dependency-aware, 70-prompt master build sequence.
- **Hosting & Infrastructure:** 100% free-tier GitHub Pages with static HTML generation, local client-side search, zero tracking cookies, and zero mandatory external API costs.

---

## 2. Core Editorial & Audio-First Standards

1. **Exhaustive Substantive Treatises (>10,000 Words):** Rather than superficial listicles or search-engine summaries, every foundational treatise is an encyclopedic masterwork exceeding **10,000 words** of continuous, evidence-backed analysis.
2. **Audio-Native Spoken Prose:** All calculations, compounding formulas, and tax rules are articulated in natural, rhythmic spoken English paragraphs. Formula hurdles ($FV = PV...$) and complex visual table traps are avoided so that the text converts effortlessly to audiobooks and works seamlessly with tools like Microsoft Edge Read Aloud.
3. **Three-Tier Statutory Evidence:** All claims are cross-referenced directly against primary statutory authorities: Reserve Bank of India (RBI), Securities and Exchange Board of India (SEBI), Central Board of Direct Taxes (CBDT), Pension Fund Regulatory and Development Authority (PFRDA), Insurance Regulatory and Development Authority of India (IRDAI), Employees' Provident Fund Organisation (EPFO), and the Deposit Insurance and Credit Guarantee Corporation (DICGC).

---

## 3. The 22 Canonical Topical Families

```
Dhanpedia Master Taxonomy
├── 01. Personal-Finance Foundations [pf-foundations]
├── 02. Indian Banking and Payments [banking-payments]
├── 03. Credit Cards and Consumer Credit [credit-cards-consumer-credit]
├── 04. Emergency Funds and Financial Protection [emergency-protection]
├── 05. Income, Salary, and Career Capital [income-career-capital]
├── 06. Indian Taxes and Financial Compliance [taxes-compliance]
├── 07. Mutual Funds and Exchange-Traded Funds [mutual-funds-etfs]
├── 08. Stocks, Equity Research, and Quantitative Investing [stocks-equity-research]
├── 09. Debt Investments and Fixed Income [debt-fixed-income]
├── 10. Gold, Silver, and Commodities [gold-commodities]
├── 11. Real Estate, Land, and Property Finance [real-estate-property]
├── 12. Alternative and Private Investments [alternative-investments]
├── 13. Insurance and Risk Management [insurance-risk-management]
├── 14. Retirement and Financial Independence [retirement-fire]
├── 15. Business Ownership and Entrepreneurship [business-entrepreneurship]
├── 16. Advanced Portfolio Construction [portfolio-construction]
├── 17. International Finance and Cross-Border Investing [international-investing]
├── 18. Digital Assets and Emerging Financial Products [digital-assets]
├── 19. Financial Fraud, Investor Rights, and Dispute Resolution [fraud-investor-rights]
├── 20. Family Wealth, Inheritance, and Estate Planning [family-wealth-estate]
├── 21. Financial Data, Calculators, and Personal-Finance Technology [fintech-calculators]
└── 22. Practical Financial Playbooks and Goal-Based Guides [playbooks-guides]
```

---

## 4. Local Development & Quality Gates

### Prerequisites
- Node.js (v18+ or v20+ recommended)
- npm

### Installation & Execution
```bash
# Clone repository
git clone https://github.com/chirag127/dhanpedia-india.git
cd dhanpedia-india

# Install dependencies
npm install

# Start local development server
npm run dev

# Run automated quality gate & integrity test suite (240+ assertions)
npm run test

# Type checking and build
npm run check
npm run build

# Preview production build locally
npm run preview
```

---

## 5. Repository Structure

```
dhanpedia-india/
├── astro.config.mjs         # Static GitHub Pages configuration with base path
├── tsconfig.json            # Strict TypeScript configuration
├── package.json             # Scripts and dependencies
├── data/
│   ├── taxonomy/            # 22-category tree & research gaps registry
│   ├── sources/             # Statutory regulator registry (RBI, SEBI, CBDT...)
│   ├── concepts/            # Canonical concept definitions
│   └── articles/            # Article index & word count tracking
├── docs/
│   ├── ARCHITECTURE.md      # Technical Decision Records (TDR) & system design
│   ├── RESEARCH_METHODOLOGY.md # Three-tier evidentiary protocols
│   ├── INITIAL_RESEARCH_REPORT.md # Verified findings & research hypotheses
│   ├── CONTENT_GUIDE.md     # Audio-first editorial guide & >10k word mandate
│   ├── TAXONOMY.md          # Complete human-readable category specifications
│   └── PROMPT_ROADMAP.md    # 70-prompt sequenced build roadmap
├── reports/
│   └── PROMPT-001-ACCEPTANCE.md # Verification report against criteria
├── scripts/
│   └── validate-integrity.mjs # Automated 7-stage quality gate validator
├── src/
│   ├── content/articles/    # Substantive markdown treatises (>10,000 words each)
│   ├── components/          # Header, Footer, Sidebar, TableOfContents
│   ├── layouts/             # BaseLayout, ArticleLayout (3-column desktop)
│   ├── pages/               # Index, Explore, Search, Glossary, Calculators...
│   ├── styles/              # Design tokens (theme.css) & global styles
│   └── utils/               # Base-path routing helpers
└── state/
    ├── project-state.json   # Machine-readable architecture & progress metrics
    ├── task-registry.json   # Workstreams, task dependencies, ownership
    ├── decisions.json       # Architectural & editorial decision log
    └── checkpoints/         # Resumable session checkpoints (PROMPT-001.md)
```

---

## 6. Author & Public Links

- **GitHub:** [https://github.com/chirag127/](https://github.com/chirag127/)
- **LinkedIn:** [https://www.linkedin.com/in/chirag127/](https://www.linkedin.com/in/chirag127/)
- **X (Twitter):** [https://x.com/singhal127](https://x.com/singhal127)
- **YouTube:** [https://www.youtube.com/@ChiragSinghal127](https://www.youtube.com/@ChiragSinghal127)
- **Buy Me a Coffee:** [https://buymeacoffee.com/chirag127](https://buymeacoffee.com/chirag127)
- **Editorial Email:** [chirag@oriz.in](mailto:chirag@oriz.in)

---

## 7. Educational & Risk Disclaimer

*Dhanpedia India is a free public educational reference library. All material is published solely for informational, analytical, and educational purposes. Neither Dhanpedia India nor Chirag Singhal is a SEBI-registered Investment Adviser (RIA), Research Analyst (RA), or licensed tax professional. Nothing contained herein constitutes personal financial, legal, or tax advice.*
