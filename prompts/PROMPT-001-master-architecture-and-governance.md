# DHANPEDIA-INDIA-PROMPT-001
## MASTER UNIFIED ARCHITECTURE, DYNAMIC BOOK GENERATOR & GOVERNANCE

**Project:** Dhanpedia India  
**Repository:** `chirag127/dhanpedia-india`  
**Hosting Target:** GitHub Pages (`https://chirag127.github.io/dhanpedia-india/`)  
**Website Title:** Dhanpedia India — The Indian Personal Finance, Investing and Wealth-Building Encyclopedia  
**Author:** Chirag Singhal  

---

### Mission
Enforce master repository governance for the single-repository unified encyclopedia:
1. Upgrade `scripts/generate-book.mjs` to dynamically ingest all markdown articles in `src/content/articles/` in numerical order.
2. Ensure `htmlToPlainText` cleanly strips all markdown asterisks (`**` and `*`), hashes (`#`), backticks, and formatting characters so Moon+ Reader Pro synthesizes seamless English audio without pronouncing "asterisk" or "star".
3. Validate zero ASCII art, zero box trees, zero arrow diagrams, zero code blocks, and zero raw equations in canonical articles.
4. Verify automated CI/CD workflow in `.github/workflows/deploy.yml` for static GitHub Pages hosting.
