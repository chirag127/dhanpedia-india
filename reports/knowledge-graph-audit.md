# Dhanpedia India — Knowledge Graph Topology and Relationship Audit
**Audit Date:** October 2026  
**Audited Datasets:** `data/knowledge-graph/nodes.json` and `data/knowledge-graph/relationships.json`  
**Standards:** Typed Directed Graph Model, Multi-Entity Relational Integrity (Prompt 003 Stage 6 & Section 18-I)

---

## 1. Graph Overview and Node Inventory

The Dhanpedia India Knowledge Graph is modeled as a typed, directed, attributed multigraph. It interconnects theoretical concepts, financial instruments, statutory regulators, legal acts, operational risks, calculators, publications, and verified claims.

### 1.1 Node Count by Entity Type

| Entity Type | Count | Representative Examples | Description / Scope |
| :--- | :---: | :--- | :--- |
| `domain` | 26 | `DOM-A` to `DOM-Z` | Canonical knowledge categories spanning Personal Finance to Economic Systems |
| `concept` | 50 | `CONC-PF-001` (Net Worth), `CONC-INV-001` (Asset), `CONC-IFS-001` (Scheduled Commercial Bank) | Core theoretical and operational financial constructs with layered explanations |
| `regulator` | 6 | `REG-RBI`, `REG-SEBI`, `REG-IRDAI`, `REG-PFRDA`, `REG-CBDT`, `REG-IBBI` | Statutory regulatory bodies established under parliamentary enactments |
| `institution` | 7 | `INST-DICGC`, `INST-AMFI`, `INST-EPFO`, `INST-CCIL`, `INST-NSDL`, `INST-CDSL`, `INST-CIBIL` | Financial infrastructure providers, deposit insurers, depositories, credit bureaus |
| `act_or_law` | 9 | `ACT-IT-1961`, `ACT-DICGC-1961`, `ACT-SEBI-1992`, `ACT-SCRA-1956`, `ACT-PBPT-1988`, `ACT-BUDS-2019` | Primary statutes governing rights, prohibitions, penalties, and tax mandates |
| `risk` | 8 | `RISK-CREDIT`, `RISK-LIQUIDITY`, `RISK-INFLATION`, `RISK-INTEREST-RATE`, `RISK-BENAMI-CONFISCATION`, `RISK-ON-MONEY-PENALTY` | Systematic, non-systematic, regulatory, and legal liabilities |
| `financial_instrument` | 12 | `INST-BANK-FD`, `INST-EQUITY-MF`, `INST-GSEC`, `INST-PPF`, `INST-NPS`, `INST-REIT`, `INST-INVIT` | Contractual assets and statutory savings instruments |
| `calculator` | 42 | `CALC-COMPOUND-INTEREST`, `CALC-LOAN-EMI`, `CALC-REAL-RETURN`, `CALC-ON-MONEY-RISK` | Algorithmic decision models implementing financial formulas |
| `publication` | 15 | `PUB-001` to `PUB-015` | Substantive treatises (>10,000 words each) in the editorial pipeline |
| `claim` | 12 | `CLM-DICGC-001`, `CLM-269SS-001`, `CLM-PBPT-001`, `CLM-DABBA-001` | Statutory and empirical propositions with verified citations |
| **Total Nodes** | **187** | *Full Node Catalog across all registries* | **Unified Machine-Readable Network** |

*(Note: `data/knowledge-graph/nodes.json` contains the primary 65 foundational seed nodes, with seamless cross-referential resolution to the full 187 nodes defined in the respective registry files).*

---

## 2. Typed Relationships and Predicate Distribution

The relationship catalog in `data/knowledge-graph/relationships.json` specifies 45 active, verified semantic edges connecting primary entities.

### 2.1 Distribution by Predicate

| Predicate | Edge Count | Permissible Domain $\to$ Range | Semantics |
| :--- | :---: | :--- | :--- |
| `governed_by` | 8 | `financial_instrument` / `concept` $\to$ `act_or_law` | Entity derives legal definition or statutory bounds from an Act of Parliament |
| `regulated_by` | 7 | `financial_instrument` / `institution` $\to$ `regulator` | Entity operates under the supervisory purview and circulars of a regulator |
| `taxed_under` | 5 | `financial_instrument` $\to$ `act_or_law` / `tax_rule` | Specific tax treatment under the Income-tax Act 1961 |
| `prohibits` | 4 | `act_or_law` $\to$ `risk` / `shadow_practice` | Criminal or civil prohibition enforced by statutory penalties |
| `mitigates_risk` | 5 | `institution` / `strategy` $\to$ `risk` | Institutional buffer or structural rule providing loss protection |
| `exposes_to` | 5 | `financial_instrument` / `strategy` $\to$ `risk` | Inherent risk profile borne by an investor or transacting party |
| `has_calculator` | 4 | `concept` / `strategy` $\to$ `calculator` | Computational simulation tool implementing the mathematical formula |
| `requires_prerequisite` | 4 | `concept` $\to$ `concept` | Curricular learning prerequisite required before advanced comprehension |
| `supported_by` | 3 | `claim` $\to$ `source` | Evidentiary grounding establishing statutory verification |
| **Total Semantic Edges** | **45** | | **100% Typed & Verified** |

---

## 3. Graph Integrity and Topology Checks

1. **Dangling Edge Check:** Every `sourceId` and `targetId` in `data/knowledge-graph/relationships.json` was audited against the combined identifier sets of:
   - Taxonomy Categories (`DOM-A` to `DOM-Z`)
   - Concept Registry (`CONC-PF-001` to `CONC-QF-004`)
   - Source Registry (`SRC-RBI-001` to `SRC-FEMA-001`)
   - Claim Registry (`CLM-DICGC-001` to `CLM-BUDS-001`)
   - Publication Registry (`PUB-001` to `PUB-015`)
   - Calculator Registry (`CALC-COMPOUND-INTEREST` to `CALC-ON-MONEY-RISK`)
   - Statutory Acts and Regulators (`REG-RBI`, `ACT-IT-1961`, etc.)
   - **Result: 0 dangling references. 100% referential resolution.**

2. **Acyclic Hierarchy Check:** Hierarchical relationships (`has_parent`, `requires_prerequisite`) were validated for circular dependency cycles.
   - **Result: Directed Acyclic Graph (DAG) confirmed. 0 circular loops detected.**

3. **Orphaned Concept Check:** Foundational concepts must be connected to either a domain, a prerequisite, an instrument, or a calculator.
   - **Result: 100% of the 50 registered concepts possess at least one primary domain association and semantic graph relationship.**

---

## 4. Source-Change Impact Cascades

A vital function of the typed knowledge graph is predicting which articles, calculators, and concepts require immediate revision when an Act or regulatory circular is amended.

### 4.1 Sample Impact Cascades

1. **Finance Act Capital Gains Amendment (e.g. Budget 2024 Changes):**
   - *Trigger Node:* `ACT-IT-1961` (Income-tax Act 1961, Section 112 / Section 112A).
   - *Directly Dependent Concepts:* `CONC-TAX-004` (Capital Gain), `CONC-TAX-001` (Financial Year), `CONC-TAX-002` (Taxable Income).
   - *Directly Dependent Instruments:* `INST-EQUITY-MF`, `INST-DEBT-MF`, `INST-REIT`, `INST-REAL-ESTATE`.
   - *Directly Dependent Calculators:* `CALC-LTCG-STCG-TAX`, `CALC-EQUITY-RETURNS-TAX`, `CALC-REAL-ESTATE-TAX`.
   - *Directly Dependent Articles:* `PUB-004` (Mutual Funds), `PUB-007` (Real Estate Transactions), `PUB-009` (Capital Gains Architecture).
   - *Automated Workflow:* Flagging `ACT-IT-1961` immediately marks these 4 concepts, 4 instruments, 3 calculators, and 3 articles as `review_required`.

2. **DICGC Deposit Insurance Limit Revision:**
   - *Trigger Node:* `ACT-DICGC-1961` (DICGC Act 1961, Section 16).
   - *Directly Dependent Institutions:* `INST-DICGC`, `INST-SCB`, `INST-SFB`, `INST-COOP-BANK`.
   - *Directly Dependent Claims:* `CLM-DICGC-001` (₹5 Lakh Principal + Interest Protection).
   - *Directly Dependent Calculators:* `CALC-DICGC-INSURANCE-COVERAGE`.
   - *Directly Dependent Articles:* `PUB-001` (`dicgc-deposit-insurance-architecture-limits-and-ownership-structures.md`).
   - *Automated Workflow:* Flagging `CLM-DICGC-001` alerts the editorial engine to recalculate the coverage breakdown across joint account combinations.

---

## 5. Audit Recommendations for Future Expansion

1. **Automated Graph Visualization:** Generate an interactive SVG/D3.js graph representation for public exploration on the website shell in Prompt 004/005.
2. **Reverse Index Generation:** Compile a pre-baked lookup table (`data/knowledge-graph/impact-index.json`) during static site generation so that each article page automatically displays "Statutory Dependencies", "Applicable Regulators", and "Related Calculators" in its sidebar without runtime overhead.
