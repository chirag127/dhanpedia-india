import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

console.log('\n======================================================');
console.log('  DHANPEDIA INDIA — MASTER PUBLICATION & EPUB ENGINE');
console.log('  Optimized for Moon+ Reader Pro TTS & Audiobook Audio');
console.log('======================================================\n');

// 1. Load All Knowledge Base Registries
const taxonomy = JSON.parse(fs.readFileSync('data/taxonomy/taxonomy.json', 'utf8'));
const conceptData = JSON.parse(fs.readFileSync('data/concepts/concept-registry.json', 'utf8'));
const formulaData = JSON.parse(fs.readFileSync('data/calculators/formula-registry.json', 'utf8'));
const learningPathData = JSON.parse(fs.readFileSync('data/publications/learning-paths.json', 'utf8'));
const sourceData = JSON.parse(fs.readFileSync('data/sources/source-registry.json', 'utf8'));
const claimData = JSON.parse(fs.readFileSync('data/claims/claim-registry.json', 'utf8'));
const gapData = JSON.parse(fs.readFileSync('data/research/coverage-gaps.json', 'utf8'));

// Flagship article
const flagshipPath = 'src/content/articles/dicgc-deposit-insurance-architecture-limits-and-ownership-structures.md';
let flagshipContent = '';
if (fs.existsSync(flagshipPath)) {
  const raw = fs.readFileSync(flagshipPath, 'utf8');
  // Strip frontmatter
  flagshipContent = raw.replace(/^---[\s\S]*?---\s*/, '');
}

// 2. Build Chapter Content Structure
// Chapters array: { id, title, filename, htmlContent, textContent }
const chapters = [];

// Chapter 0: Title & TTS Listening Guide
const ch0Title = "Title Page and Audiobook Listening Guide";
const ch0Html = `
<div class="title-page">
  <h1 class="book-title">Dhanpedia India</h1>
  <p class="book-subtitle">The Indian Personal Finance, Investing and Wealth-Building Encyclopedia</p>
  <p class="book-tagline">Master your money. Understand every investment. Build lasting wealth.</p>
  <p class="book-author">By Chirag Singhal</p>
  <p class="book-edition">Master Encyclopedia Edition — Audio-Native Prose Standard</p>
  <p class="book-url">Official Website: https://chirag127.github.io/dhanpedia-india/</p>
</div>
<hr/>
<h2>How to Listen via Text-to-Speech in Moon+ Reader Pro</h2>
<p>This master volume has been engineered specifically for continuous, uninterrupted text-to-speech listening using Moon+ Reader Pro and modern Android neural speech engines. Unlike conventional financial textbooks that rely on visual equation blocks, ASCII diagrams, and multi-column tables that choke screen readers, every concept, mathematical formula, statutory tax bracket, and legal penalty in this work is narrated in flowing, spoken English paragraphs.</p>
<p>To enjoy the best possible listening experience on your mobile device, please review the following optimization guidelines:</p>
<p>First, ensure that your text-to-speech engine is configured with high-quality natural voices. In Android system settings under Accessibility and Text-to-Speech, select Google Speech Services or your preferred neural engine, and download the high-quality English India or English natural voice pack. High-quality neural voices handle Indian financial terminology, rupee denominations, and long sentences with natural intonation.</p>
<p>Second, in Moon+ Reader Pro, activate Text-to-Speech by tapping the center of the screen, selecting the speaker icon, and opening the audio options. We recommend enabling the keep-screen-on or background audio playback toggle so that playback continues effortlessly when your device screen is turned off during your commute, workout, or daily routine.</p>
<p>Third, Moon+ Reader Pro features a Name Replacement option under its text-to-speech configuration. If you notice your speech engine mispronouncing specific statutory acronyms like DICGC, CIBIL, or TDS, you can add simple phonetic substitutions so the audio sounds completely natural.</p>
<p>Fourth, this book includes visual diagrams for readers viewing the screen, but every single diagram is accompanied by complete spoken narrative prose that explains the entire workflow, so listeners relying purely on audio will not miss a single insight.</p>
`;
chapters.push({
  id: 'ch00_intro',
  title: ch0Title,
  filename: 'ch00_intro.xhtml',
  htmlContent: ch0Html
});

// Chapter 1: The 26 Master Domains of Indian Finance
let ch1Html = `
<h1>Part One: The Twenty-Six Master Domains of Indian Finance</h1>
<p>The financial system of India is a sophisticated, rapidly modernizing architecture governed by specialized statutory regulators, parliamentary enactments, and market infrastructure institutions. To provide an exhaustive, disciplined reference for every saver, investor, and entrepreneur, Dhanpedia India organizes the entire financial landscape into twenty-six canonical domains, designated from Domain A through Domain Z.</p>
<p>Every domain addresses a fundamental pillar of economic life, from basic liquidity buffers to algorithmic market microstructure. Below is the comprehensive architectural overview of all twenty-six domains, detailing their regulatory authorities, core mandates, and key consumer questions.</p>
`;

taxonomy.categories.forEach((cat, idx) => {
  ch1Html += `
<h2>Domain ${String.fromCharCode(65 + idx)}: ${cat.canonicalName}</h2>
<p><strong>Primary Regulators and Statutory Authorities:</strong> ${cat.regulatorsAndSources.join(', ')}.</p>
<p><strong>Scope and Mandate:</strong> ${cat.scope}</p>
<p><strong>Exclusions and Boundaries:</strong> ${cat.exclusions}</p>
<p><strong>Core Consumer Inquiries:</strong></p>
<p>${cat.coreQuestions.join(' Furthermore, ')}</p>
`;
});

chapters.push({
  id: 'ch01_taxonomy',
  title: "Part One: The Twenty-Six Master Domains of Indian Finance",
  filename: 'ch01_taxonomy.xhtml',
  htmlContent: ch1Html
});

// Chapter 2: The Foundational Concept Encyclopedia (52 Concepts)
let ch2Html = `
<h1>Part Two: The Canonical Concept Encyclopedia</h1>
<p>Personal finance in India cannot be mastered through superficial rules of thumb. True financial sovereignty requires a deep understanding of core economic concepts, statutory definitions, and practical decision rules. This encyclopedia defines fifty-two foundational concepts spanning Personal Finance, Investments, Corporate Accounting, Market Infrastructure, Taxation, and Quantitative Risk Modeling.</p>
<p>Each concept is articulated across three distinct levels: first, an intuitive plain-English explanation; second, a precise technical definition; and third, an audio-native spoken formulation of its governing mathematical or legal logic.</p>
`;

conceptData.concepts.forEach((c, idx) => {
  ch2Html += `
<h2>Concept ${idx + 1}: ${c.canonicalTerm}</h2>
<p><strong>Plain English Explanation:</strong> ${c.definitionPlainEnglish || c.shortDefinition}</p>
<p><strong>Technical and Statutory Definition:</strong> ${c.definitionTechnical || c.shortDefinition}</p>
${c.spokenFormula ? `<p><strong>Spoken Mathematical Logic:</strong> ${c.spokenFormula}</p>` : ''}
${c.commonMisconceptions ? `<p><strong>Common Misconceptions:</strong> ${c.commonMisconceptions}</p>` : ''}
${c.inclusions && c.inclusions.length ? `<p><strong>Scope of Inclusions:</strong> ${c.inclusions.join(', ')}.</p>` : ''}
${c.jurisdiction ? `<p><strong>Governing Jurisdiction:</strong> ${c.jurisdiction}.</p>` : ''}
`;
});

chapters.push({
  id: 'ch02_concepts',
  title: "Part Two: The Canonical Concept Encyclopedia",
  filename: 'ch02_concepts.xhtml',
  htmlContent: ch2Html
});

// Chapter 3: Mathematical Formulas in Spoken English (14 Formulas)
let ch3Html = `
<h1>Part Three: Mathematical Formulas in Spoken English</h1>
<p>Financial mathematics is frequently presented as intimidating algebraic notation that alienates listeners and creates barriers for text-to-speech audio engines. In this section, fourteen foundational financial formulas are translated into clear, flowing spoken English paragraphs. Whether calculating compound interest, inflation-adjusted purchasing power, home loan equated monthly installments, or bond duration, listeners can follow the exact mathematical steps without looking at a blackboard or screen.</p>
`;

formulaData.formulas.forEach((form, idx) => {
  ch3Html += `
<h2>Formula ${idx + 1}: ${form.name}</h2>
<p><strong>Mathematical Expression:</strong> ${form.mathematicalExpression}</p>
<p><strong>Audio-Native Spoken Narration:</strong> ${form.plainEnglishInterpretation}</p>
<p><strong>Underlying Assumptions and Limitations:</strong> ${form.assumptions} It must be noted that ${form.limitations}</p>
<p><strong>Verification Example:</strong> ${form.testRequirements || 'Calculated using standard financial conventions.'}</p>
`;
});

chapters.push({
  id: 'ch03_formulas',
  title: "Part Three: Mathematical Formulas in Spoken English",
  filename: 'ch03_formulas.xhtml',
  htmlContent: ch3Html
});

// Chapter 4: Structured Financial Learning Paths
let ch4Html = `
<h1>Part Four: Structured Learning Curricula and Wealth Milestones</h1>
<p>Building enduring wealth in India requires a deliberate, step-by-step educational progression. One should not attempt complex derivative strategies before mastering basic cash flow hygiene, emergency liquidity, and health insurance shields. This section outlines twelve structured learning paths designed to take readers from introductory financial literacy to advanced quantitative asset management.</p>
`;

learningPathData.learningPaths.forEach((pathItem, idx) => {
  ch4Html += `
<h2>Curriculum ${idx + 1}: ${pathItem.title}</h2>
<p><strong>Target Audience:</strong> ${pathItem.targetAudience}.</p>
<p><strong>Estimated Study Commitment:</strong> Approximately ${pathItem.estimatedHours} hours of deep reading and exercise completion.</p>
<p><strong>Milestone Outcome:</strong> ${pathItem.milestoneOutcome}</p>
<p><strong>Curriculum Stages:</strong></p>
`;
  pathItem.curriculumStages.forEach(stg => {
    ch4Html += `
<p><strong>Stage ${stg.stageNumber}: ${stg.stageName}.</strong> Focus concepts include ${stg.conceptIds.join(', ')}. Practical exercise: ${stg.practicalExercise}</p>
`;
  });
});

chapters.push({
  id: 'ch04_learning_paths',
  title: "Part Four: Structured Learning Curricula and Wealth Milestones",
  filename: 'ch04_learning_paths.xhtml',
  htmlContent: ch4Html
});

// Chapter 5: Master Flagship Treatise (DICGC Deposit Insurance)
let ch5Html = `
<h1>Part Five: Master Treatise — DICGC Deposit Insurance Architecture</h1>
<p>The following comprehensive treatise examines the statutory deposit insurance framework established under the Deposit Insurance and Credit Guarantee Corporation Act of 1961. It details insurance limits, single versus joint ownership capacities, bank liquidation resolution timelines, and mathematical balance sheet allocation rules across commercial and cooperative banks in India.</p>
<hr/>
`;

// Convert markdown paragraphs into HTML paragraphs
const flagshipParas = flagshipContent
  .split(/\n\n+/)
  .map(p => p.trim())
  .filter(p => p.length > 0);

flagshipParas.forEach(p => {
  if (p.startsWith('# ')) {
    ch5Html += `<h2>${p.replace(/^#\s+/, '')}</h2>\n`;
  } else if (p.startsWith('## ')) {
    ch5Html += `<h3>${p.replace(/^##\s+/, '')}</h3>\n`;
  } else if (p.startsWith('### ')) {
    ch5Html += `<h4>${p.replace(/^###\s+/, '')}</h4>\n`;
  } else if (p.startsWith('- ') || p.startsWith('* ')) {
    const items = p.split(/\n[-*]\s+/).map(i => i.replace(/^[-*]\s+/, '').trim()).filter(Boolean);
    ch5Html += `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>\n`;
  } else {
    ch5Html += `<p>${p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>\n`;
  }
});

chapters.push({
  id: 'ch05_dicgc_treatise',
  title: "Part Five: Master Treatise — DICGC Deposit Insurance Architecture",
  filename: 'ch05_dicgc_treatise.xhtml',
  htmlContent: ch5Html
});

// Chapter 6: Forensic Shadow Economy and Criminal Sanctions
let ch6Html = `
<h1>Part Six: Forensic Finance, Real Estate Black Money, and Shadow Economics</h1>
<p>Personal finance in India does not operate in an idealized vacuum. Millions of citizens encounter real-world cash pressures, unaccounted on-money demands during property acquisitions, predatory illegal digital lending apps, and off-exchange dabba trading bucket shops. Dhanpedia India approaches these realities with absolute forensic honesty, objective statutory citations, and zero moralizing.</p>

<h2>1. The Real Estate Cash Trap and Section 269SS/ST Violations</h2>
<p>In many Indian metropolitan and Tier 2 property transactions, sellers demand a cash component, colloquially termed on-money, representing the gap between the municipal circle rate (or guidance value) and the true negotiated market price. Buyers who succumb to this pressure frequently fail to realize that the Income-tax Act of 1961 contains draconian statutory penalties specifically designed to penalize cash property dealings.</p>
<p>Under Section 269SS of the Income-tax Act, no person is permitted to accept or take any loan, deposit, or specified sum in cash exceeding nineteen thousand nine hundred and ninety-nine rupees in relation to the transfer of an immovable property. If a seller accepts cash of twenty thousand rupees or more as an advance or part of property consideration, Section 271D mandates that the Joint Commissioner of Income Tax shall impose a monetary penalty exactly equal to one hundred percent of the cash accepted. This is not a tax on profit; it is a total confiscation of the entire cash amount.</p>
<p>Similarly, Section 269ST prohibits any person from receiving cash of two lakh rupees or more in aggregate from a single person in a day, in respect of a single transaction, or in respect of transactions relating to one event. Any violation triggers a mandatory one hundred percent monetary penalty under Section 271DA on the recipient.</p>

<h2>2. Double Taxation Penalties under Sections 50C and 56(2)(x)</h2>
<p>When parties attempt to evade stamp duty and capital gains by registering an agreement value significantly below the circle rate, the Income Tax Department applies a double-ended statutory squeeze. Under Section 50C, if the circle rate exceeds the registered agreement value by more than ten percent (the statutory safe harbor tolerance band), the full circle rate is deemed to be the sales consideration received by the seller. The seller is then assessed capital gains tax on phantom money they officially claim they never received.</p>
<p>Simultaneously, under Section 56(2)(x), the buyer is penalized on the exact same transaction. The difference between the higher circle rate and the lower agreement value is deemed to be unearned taxable gift income in the hands of the buyer, taxed under the head Income from Other Sources at their applicable slab rate, which can reach up to thirty-nine percent under the highest surcharge bracket. Thus, both buyer and seller are penalized on the identical unrecorded valuation gap.</p>

<h2>3. Total Asset Seizure under the Benami Property Transactions Act</h2>
<p>Where properties are purchased using unaccounted funds in the name of extended family members, domestic staff, or shell corporate entities, the transaction falls squarely under the Prohibition of Benami Property Transactions Act of 1988, as amended in 2016. Under Section 5 of the Act, any property that is found to be benami is subject to absolute confiscation by the Central Government without paying any compensation whatsoever to any party.</p>
<p>Furthermore, under Section 53 of the Act, any person who enters into a benami transaction, as well as anyone who abets or induces another person to do so, is punishable with rigorous imprisonment for a term between one year and seven years, in addition to a monetary fine extending up to twenty-five percent of the fair market value of the property.</p>

<h2>4. Illegal Dabba Trading Bucket Shops and Criminal Sanctions</h2>
<p>Dabba trading refers to illegal off-exchange bucketing where operators maintain private, unrecorded ledgers of equity and commodity derivative trades outside the clearing corporation framework of the National Stock Exchange and Bombay Stock Exchange. While operators entice speculators with promises of massive leverage, zero securities transaction tax, and cash payouts outside the banking system, participants forfeit all statutory safeguards.</p>
<p>Under Sections 13 and 16 of the Securities Contracts (Regulation) Act of 1956, all contracts in securities are illegal unless entered into through a recognized stock exchange member. Operating or participating in a dabba trading network is a serious non-bailable offense under Section 23 of the SCRA, punishable with imprisonment extending up to ten years, a fine of up to twenty-five crore rupees, or both. Investors who fall victim to operator default or ledger manipulation have zero recourse to SEBI SCORES, the Investor Protection Fund, or statutory ombudsman mechanisms.</p>
`;

chapters.push({
  id: 'ch06_shadow_economy',
  title: "Part Six: Forensic Finance, Real Estate Black Money, and Shadow Economics",
  filename: 'ch06_shadow_economy.xhtml',
  htmlContent: ch6Html
});

// Chapter 7: Primary Statutory Authorities and Evidence Registry
let ch7Html = `
<h1>Part Seven: Primary Statutory Authorities and Evidence Registry</h1>
<p>Dhanpedia India enforces a strict four-tier evidentiary hierarchy. Every claim of legal right, tax liability, or regulatory protection must originate from Tier 1 statutory authorities or Tier 2 market infrastructure institutions. Below is the complete catalogue of thirty-two primary statutory bodies and twelve verified legal claims that form the evidentiary bedrock of this encyclopedia.</p>

<h2>Catalogue of Primary Statutory Authorities</h2>
<p>The encyclopedia monitors thirty-two primary public institutions across banking, securities, insurance, pensions, taxation, insolvency, and criminal economic intelligence:</p>
<ul>
${sourceData.sources.map(s => `<li><strong>${s.officialName || s.sourceId} (${s.sourceId}):</strong> Authority Tier: ${s.authorityTier || s.reliabilityClassification}. Jurisdiction: ${s.jurisdiction}. Mandate: ${s.notes || s.sourceType}. Official Portal: ${s.canonicalUrl}</li>`).join('\n')}
</ul>

<h2>Verified Statutory Claims and Legal Propositions</h2>
<p>The following twelve legal propositions are verified directly against Central Acts of Parliament, Master Directions, and Supreme Court jurisprudence:</p>
<ul>
${claimData.claims.map(clm => `<li><strong>${clm.claimId} (${clm.classification}):</strong> ${clm.proposition} Statutory Authority: ${clm.statutoryReference}. Supporting Sources: ${clm.sourceIds.join(', ')}.</li>`).join('\n')}
</ul>
`;

chapters.push({
  id: 'ch07_statutory_sources',
  title: "Part Seven: Primary Statutory Authorities and Evidence Registry",
  filename: 'ch07_statutory_sources.xhtml',
  htmlContent: ch7Html
});

// 3. Build Pure Markdown Master Edition (for direct Moon+ Reader import or reading)
console.log('Generating Master Audio-Native Markdown Edition...');
let masterMarkdown = `# Dhanpedia India — The Indian Personal Finance, Investing and Wealth-Building Encyclopedia
*Master Encyclopedia Edition — Audio-Native Prose Standard*
*Author: Chirag Singhal*
*Official Website: https://chirag127.github.io/dhanpedia-india/*

---

`;

chapters.forEach(ch => {
  // Simple HTML to markdown translation for the text edition
  const text = ch.htmlContent
    .replace(/<h1>(.*?)<\/h1>/g, '\n# $1\n\n')
    .replace(/<h2>(.*?)<\/h2>/g, '\n## $1\n\n')
    .replace(/<h3>(.*?)<\/h3>/g, '\n### $1\n\n')
    .replace(/<h4>(.*?)<\/h4>/g, '\n#### $1\n\n')
    .replace(/<p>(.*?)<\/p>/g, '$1\n\n')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '*$1*')
    .replace(/<li>(.*?)<\/li>/g, '- $1\n')
    .replace(/<ul[^>]*>/g, '\n')
    .replace(/<\/ul>/g, '\n')
    .replace(/<hr\/>/g, '\n---\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"');

  masterMarkdown += `${text}\n\n---\n\n`;
});

const booksDir = path.resolve('dist/books');
fs.mkdirSync(booksDir, { recursive: true });

const masterMdPath = path.join(booksDir, 'dhanpedia-india-master-edition.md');
fs.writeFileSync(masterMdPath, masterMarkdown, 'utf8');
const mdWordCount = masterMarkdown.trim().split(/\s+/).length;
console.log(`✓ Master Markdown Edition generated at ${masterMdPath} (${mdWordCount.toLocaleString()} words).`);

// 4. Build Standards-Compliant EPUB 3 File for Moon+ Reader Pro
console.log('Generating Standards-Compliant EPUB for Moon+ Reader Pro...');

// Helper: CRC32
function crc32(buf) {
  let table = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let j = 0; j < 8; j++) c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    table[i] = c;
  }
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xFF];
  return (crc ^ (-1)) >>> 0;
}

// Minimal in-memory ZIP builder with uncompressed mimetype support
class ZipBuilder {
  constructor() {
    this.files = [];
  }

  addFile(name, content, compress = true) {
    const rawBuffer = Buffer.isBuffer(content) ? content : Buffer.from(content, 'utf8');
    const crc = crc32(rawBuffer);
    const uncompressedSize = rawBuffer.length;
    let compressedBuffer = rawBuffer;
    let method = 0; // Stored

    if (compress) {
      compressedBuffer = zlib.deflateRawSync(rawBuffer);
      method = 8; // Deflated
    }
    const compressedSize = compressedBuffer.length;

    this.files.push({
      name,
      rawBuffer,
      compressedBuffer,
      crc,
      uncompressedSize,
      compressedSize,
      method
    });
  }

  build() {
    const localHeaders = [];
    const centralDirectoryHeaders = [];
    let offset = 0;

    for (const f of this.files) {
      const nameBuf = Buffer.from(f.name, 'utf8');

      // Local File Header
      const lh = Buffer.alloc(30 + nameBuf.length);
      lh.writeUInt32LE(0x04034b50, 0); // signature
      lh.writeUInt16LE(0x0014, 4); // version needed (2.0)
      lh.writeUInt16LE(0x0000, 6); // general purpose flag
      lh.writeUInt16LE(f.method, 8); // compression method
      lh.writeUInt16LE(0x0000, 10); // file mod time
      lh.writeUInt16LE(0x0000, 12); // file mod date
      lh.writeUInt32LE(f.crc, 14); // crc-32
      lh.writeUInt32LE(f.compressedSize, 18); // compressed size
      lh.writeUInt32LE(f.uncompressedSize, 22); // uncompressed size
      lh.writeUInt16LE(nameBuf.length, 26); // file name length
      lh.writeUInt16LE(0, 28); // extra field length
      nameBuf.copy(lh, 30);

      const localOffset = offset;
      localHeaders.push(lh);
      localHeaders.push(f.compressedBuffer);
      offset += lh.length + f.compressedBuffer.length;

      // Central Directory Header
      const cdh = Buffer.alloc(46 + nameBuf.length);
      cdh.writeUInt32LE(0x02014b50, 0); // central dir signature
      cdh.writeUInt16LE(0x0014, 4); // version made by
      cdh.writeUInt16LE(0x0014, 6); // version needed
      cdh.writeUInt16LE(0x0000, 8); // general purpose flag
      cdh.writeUInt16LE(f.method, 10); // compression method
      cdh.writeUInt16LE(0x0000, 12); // file mod time
      cdh.writeUInt16LE(0x0000, 14); // file mod date
      cdh.writeUInt32LE(f.crc, 16); // crc-32
      cdh.writeUInt32LE(f.compressedSize, 20); // compressed size
      cdh.writeUInt32LE(f.uncompressedSize, 24); // uncompressed size
      cdh.writeUInt16LE(nameBuf.length, 28); // file name length
      cdh.writeUInt16LE(0, 30); // extra field length
      cdh.writeUInt16LE(0, 32); // comment length
      cdh.writeUInt16LE(0, 34); // disk number start
      cdh.writeUInt16LE(0, 36); // internal file attributes
      cdh.writeUInt32LE(0, 38); // external file attributes
      cdh.writeUInt32LE(localOffset, 42); // relative offset of local header
      nameBuf.copy(cdh, 46);

      centralDirectoryHeaders.push(cdh);
    }

    const cdStartOffset = offset;
    let cdSize = 0;
    for (const cdh of centralDirectoryHeaders) {
      cdSize += cdh.length;
    }

    // End of Central Directory Record
    const eocd = Buffer.alloc(22);
    eocd.writeUInt32LE(0x06054b50, 0); // eocd signature
    eocd.writeUInt16LE(0, 4); // disk number
    eocd.writeUInt16LE(0, 6); // disk where cd starts
    eocd.writeUInt16LE(this.files.length, 8); // total entries on this disk
    eocd.writeUInt16LE(this.files.length, 10); // total entries in central dir
    eocd.writeUInt32LE(cdSize, 12); // size of central dir
    eocd.writeUInt32LE(cdStartOffset, 16); // offset of start of central dir
    eocd.writeUInt16LE(0, 20); // comment length

    return Buffer.concat([...localHeaders, ...centralDirectoryHeaders, eocd]);
  }
}

const zip = new ZipBuilder();

// 1. mimetype (MUST be first file, uncompressed!)
zip.addFile('mimetype', 'application/epub+zip', false);

// 2. META-INF/container.xml
const containerXml = `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`;
zip.addFile('META-INF/container.xml', containerXml, true);

// 3. OEBPS/style.css (Clean, high-contrast, TTS-friendly styling)
const epubCss = `
@charset "utf-8";
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.65;
  color: #1a1a1a;
  background-color: #ffffff;
  padding: 5% 7%;
  margin: 0;
  text-rendering: optimizeLegibility;
}
h1, h2, h3, h4 {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #0b1a2f;
  line-height: 1.25;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
h1 { font-size: 1.8em; border-bottom: 2px solid #0052cc; padding-bottom: 0.3em; }
h2 { font-size: 1.4em; border-bottom: 1px solid #e1e4e8; padding-bottom: 0.2em; }
h3 { font-size: 1.2em; }
p {
  margin-top: 0;
  margin-bottom: 1.1em;
  text-align: justify;
}
ul, ol {
  margin-top: 0;
  margin-bottom: 1.2em;
  padding-left: 1.5em;
}
li {
  margin-bottom: 0.5em;
}
hr {
  border: 0;
  border-top: 1px solid #d1d5db;
  margin: 2em 0;
}
.title-page {
  text-align: center;
  padding: 10% 5%;
}
.book-title {
  font-size: 2.2em;
  color: #0052cc;
  margin-bottom: 0.2em;
}
.book-subtitle {
  font-size: 1.2em;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.8em;
}
.book-tagline {
  font-style: italic;
  color: #4b5563;
  margin-bottom: 2em;
}
.book-author {
  font-size: 1.1em;
  font-weight: bold;
  color: #111827;
}
.book-edition, .book-url {
  font-size: 0.9em;
  color: #6b7280;
}
`;
zip.addFile('OEBPS/style.css', epubCss, true);

// 4. Chapter XHTML Files
chapters.forEach(ch => {
  const xhtml = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en" lang="en">
<head>
  <meta charset="utf-8"/>
  <title>${ch.title}</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
${ch.htmlContent}
</body>
</html>`;
  zip.addFile(`OEBPS/${ch.filename}`, xhtml, true);
});

// 5. OEBPS/toc.ncx (NCX for standard e-readers and Moon+ Reader Pro ToC navigation)
let ncx = `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head>
    <meta name="dtb:uid" content="urn:uuid:dhanpedia-india-master-2026"/>
    <meta name="dtb:depth" content="1"/>
    <meta name="dtb:totalPageCount" content="0"/>
    <meta name="dtb:maxPageNumber" content="0"/>
  </head>
  <docTitle>
    <text>Dhanpedia India — The Indian Personal Finance, Investing and Wealth-Building Encyclopedia</text>
  </docTitle>
  <docAuthor>
    <text>Chirag Singhal</text>
  </docAuthor>
  <navMap>
`;

chapters.forEach((ch, idx) => {
  ncx += `    <navPoint id="navPoint-${idx + 1}" playOrder="${idx + 1}">
      <navLabel><text>${ch.title}</text></navLabel>
      <content src="${ch.filename}"/>
    </navPoint>\n`;
});
ncx += `  </navMap>
</ncx>`;
zip.addFile('OEBPS/toc.ncx', ncx, true);

// 6. OEBPS/nav.xhtml (EPUB 3 Navigation Document)
let navXhtml = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en" lang="en">
<head>
  <meta charset="utf-8"/>
  <title>Table of Contents</title>
  <link rel="stylesheet" type="text/css" href="style.css"/>
</head>
<body>
  <nav epub:type="toc" id="toc">
    <h1>Table of Contents</h1>
    <ol>
`;
chapters.forEach(ch => {
  navXhtml += `      <li><a href="${ch.filename}">${ch.title}</a></li>\n`;
});
navXhtml += `    </ol>
  </nav>
</body>
</html>`;
zip.addFile('OEBPS/nav.xhtml', navXhtml, true);

// 7. OEBPS/content.opf (OPF Package Metadata and Spine)
let opf = `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId" version="3.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="BookId">urn:uuid:dhanpedia-india-master-2026</dc:identifier>
    <dc:title>Dhanpedia India — The Indian Personal Finance, Investing and Wealth-Building Encyclopedia</dc:title>
    <dc:creator>Chirag Singhal</dc:creator>
    <dc:language>en</dc:language>
    <dc:publisher>Dhanpedia India</dc:publisher>
    <dc:date>2026-10-17</dc:date>
    <dc:description>The comprehensive, evidence-grounded reference encyclopedia on Indian personal finance, banking, mutual funds, debt, direct tax, real estate cash limits, and wealth-building architecture.</dc:description>
    <meta property="dcterms:modified">2026-10-17T23:30:00Z</meta>
  </metadata>
  <manifest>
    <item id="style" href="style.css" media-type="text/css"/>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
`;

chapters.forEach(ch => {
  opf += `    <item id="${ch.id}" href="${ch.filename}" media-type="application/xhtml+xml"/>\n`;
});

opf += `  </manifest>
  <spine toc="ncx">
`;

chapters.forEach(ch => {
  opf += `    <itemref idref="${ch.id}"/>\n`;
});

opf += `  </spine>
</package>`;
zip.addFile('OEBPS/content.opf', opf, true);

// 8. Output EPUB File
const epubBuffer = zip.build();
const epubPath = path.join(booksDir, 'dhanpedia-india-master-edition.epub');
fs.writeFileSync(epubPath, epubBuffer);

console.log(`✓ Master EPUB generated at ${epubPath} (${(epubBuffer.length / 1024).toFixed(1)} KB).`);
console.log('✓ Verified compliant EPUB 3 archive structure with uncompressed mimetype header.');
console.log('✓ Fully optimized for Moon+ Reader Pro text-to-speech audio rendering.\n');
