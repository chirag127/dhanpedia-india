# Dhanpedia India — Agent Audio-Native Prose & Moon+ Reader Pro TTS Policy

**Status:** Canonical Specialist Policy  
**Parent Document:** [`AGENTS.md`](file:///c:/g/dhanpedia-india/AGENTS.md)  
**Effective Date:** October 2026 (Operational under Prompt 004)

---

## 1. The Moon+ Reader Pro Text-to-Speech (TTS) Mandate

The primary author and core readership of Dhanpedia India consume financial treatises and master books as **audiobooks using Text-to-Speech (TTS)** in **Moon+ Reader Pro** on mobile devices with the screen turned off.

Audio-native comprehension is not an afterthought; it is a **first-class publishing requirement**. Every paragraph, formula, table, heading, and list must sound natural, lucid, and human when read by Android neural speech synthesizers (Google Speech Services, ElevenLabs, or Samsung TTS).

---

## 2. Audio-Native Prose Rules

### 2.1 Paragraph Format Exclusivity
- Substantive analysis must be written in continuous, cohesive English paragraphs.
- **Zero Raw LaTeX or ASCII Equations:** Never author raw mathematical syntax like `$$CAGR = (EV / BV)^{1/n} - 1$$`. Neural voice engines pronounce this literally as:
  > *"Dollar sign dollar sign capital C capital A capital G capital R equals open parenthesis capital E capital V slash capital B capital V close parenthesis caret..."*
  This destroys auditory comprehension.
- **Mandatory Spoken English Mathematics:** Every formula must be articulated in natural spoken words first:
  > *“The compound annual growth rate is calculated by dividing the ending value by the beginning value, raising that ratio to the power of one divided by the number of years, and then subtracting one.”*
- The formatted visual equation may be presented separately for sighted readers, but the spoken explanation must carry complete, self-contained mathematical meaning.

### 2.2 Table Traps Prohibition
- Sighted readers scan multi-column tables easily, but Android TTS engines read tabular cells sequentially across columns. If a table contains 4 columns and 5 rows of financial metrics, TTS reads:
  > *"Scheme A Scheme B Return Expense 12 percent 14 percent 0.5 percent 1.2 percent..."*
- **Strict Rule:** Every comparative table must be accompanied by comprehensive narrative paragraphs detailing the exact findings, tradeoffs, and quantitative implications. A listener listening with the screen turned off must absorb 100% of the insights without looking at the table.

### 2.3 Punctuation, Breathing, and Line Breaks
- **No Hard Line Breaks Inside Paragraphs:** Never use `<br>` tags within a paragraph. Android TTS engines treat hard line breaks as sentence terminators, creating awkward, staccato pauses.
- **Natural Breathing Punctuation:** Use commas, semicolons, and periods to introduce natural pauses.
- **No Bracketed Footnote Traps:** Avoid inline bracketed markers like `[^1]` or `[see note 4]`, which TTS reads literally as *"bracket footnote one bracket"*. Instead, weave citations naturally: *“According to Section 18A of the Deposit Insurance and Credit Guarantee Corporation Act...”*

---

## 3. Indian Numbers, Currency, and Acronym Standards

### 3.1 Currency and Number Formatting
- Neural voice engines frequently mispronounce raw symbols like `₹5,00,000` (often reading it as *“question mark five zero zero comma zero zero zero”* or *“rupees five hundred thousand”*).
- **In Audio-Native Texts:**
  - Prefer explicit words: *“five lakh rupees”*, *“twenty-five crore rupees”*, or *“Rs. 5 Lakh”*.
  - For percentages, write *“eight point five percent”* or ensure `%` is pronounced cleanly.
  - For dates, use full context: *“the financial year 2024 to 2025”* rather than *“FY24-25”*.

### 3.2 Acronyms and Pronunciation
- At the first introduction in any chapter, introduce statutory abbreviations with their full spoken title:
  - *“The Reserve Bank of India, commonly referred to as the R B I...”*
  - *“The Securities and Exchange Board of India, known as S E B I...”*
  - *“The Deposit Insurance and Credit Guarantee Corporation, abbreviated as D I C G C...”*
- In audio-native text generation, spaces between letters (`R B I` instead of `RBI`) ensure the speech synthesizer spells out the letters rather than attempting to pronounce an unpronounceable word.

---

## 4. Mermaid Diagrams and Audio Pairing

- Mermaid diagrams are encouraged for visual clarity on web and PDF layouts.
- **Mandatory Pairing Rule:** Every Mermaid diagram must be followed by a comprehensive spoken narrative explaining every branch, threshold, decision node, and legal consequence.
- A listener must never miss a single nuance because a diagram was not visible.

---

## 5. Moon+ Reader Pro Listening Configuration

For optimal listening ergonomics, recommend the following client configuration:
1. **App:** Moon+ Reader Pro (Android).
2. **Engine:** Google Speech Services or Android System TTS.
3. **Voice:** English (India) Natural / Neural (Voice 1 or Voice 2).
4. **Playback Mode:** Enable *"Background Playback"* and *"Keep screen off while reading aloud"*.
5. **EPUB Rendering:** Select *Dhanpedia-India-TTS-Edition.epub* from the downloads catalogue.
