import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
import crypto from 'node:crypto';

console.log('\n================================================================');
console.log('  DHANPEDIA INDIA — CANONICAL MULTI-FORMAT PUBLICATION PIPELINE');
console.log('  Master Reference, TTS Editions, Subject Volumes & PDF Engine');
console.log('================================================================\n');

// 1. Load Canonical Knowledge Base Data
const taxonomy = JSON.parse(fs.readFileSync('data/taxonomy/taxonomy.json', 'utf8'));
const conceptData = JSON.parse(fs.readFileSync('data/concepts/concept-registry.json', 'utf8'));
const formulaData = JSON.parse(fs.readFileSync('data/calculators/formula-registry.json', 'utf8'));
const learningPathData = JSON.parse(fs.readFileSync('data/publications/learning-paths.json', 'utf8'));
const sourceData = JSON.parse(fs.readFileSync('data/sources/source-registry.json', 'utf8'));
const claimData = JSON.parse(fs.readFileSync('data/claims/claim-registry.json', 'utf8'));

// Flagship article
const flagshipPath = 'src/content/articles/dicgc-deposit-insurance-architecture-limits-and-ownership-structures.md';
let flagshipContent = '';
if (fs.existsSync(flagshipPath)) {
  const raw = fs.readFileSync(flagshipPath, 'utf8');
  flagshipContent = raw.replace(/^---[\s\S]*?---\s*/, '');
}

// 2. Helper Utilities: CRC32, ZIP Builder, PDF Writer, Hashing
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

function computeSha256(buf) {
  return crypto.createHash('sha256').update(buf).digest('hex');
}

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
      lh.writeUInt32LE(0x04034b50, 0);
      lh.writeUInt16LE(0x0014, 4);
      lh.writeUInt16LE(0x0000, 6);
      lh.writeUInt16LE(f.method, 8);
      lh.writeUInt16LE(0x0000, 10);
      lh.writeUInt16LE(0x0000, 12);
      lh.writeUInt32LE(f.crc, 14);
      lh.writeUInt32LE(f.compressedSize, 18);
      lh.writeUInt32LE(f.uncompressedSize, 22);
      lh.writeUInt16LE(nameBuf.length, 26);
      lh.writeUInt16LE(0, 28);
      nameBuf.copy(lh, 30);

      const localOffset = offset;
      localHeaders.push(lh);
      localHeaders.push(f.compressedBuffer);
      offset += lh.length + f.compressedBuffer.length;

      // Central Directory Header
      const cdh = Buffer.alloc(46 + nameBuf.length);
      cdh.writeUInt32LE(0x02014b50, 0);
      cdh.writeUInt16LE(0x0014, 4);
      cdh.writeUInt16LE(0x0014, 6);
      cdh.writeUInt16LE(0x0000, 8);
      cdh.writeUInt16LE(f.method, 10);
      cdh.writeUInt16LE(0x0000, 12);
      cdh.writeUInt16LE(0x0000, 14);
      cdh.writeUInt32LE(f.crc, 16);
      cdh.writeUInt32LE(f.compressedSize, 20);
      cdh.writeUInt32LE(f.uncompressedSize, 24);
      cdh.writeUInt16LE(nameBuf.length, 28);
      cdh.writeUInt16LE(0, 30);
      cdh.writeUInt16LE(0, 32);
      cdh.writeUInt16LE(0, 34);
      cdh.writeUInt16LE(0, 36);
      cdh.writeUInt32LE(0, 38);
      cdh.writeUInt32LE(localOffset, 42);
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
    eocd.writeUInt32LE(0x06054b50, 0);
    eocd.writeUInt16LE(0, 4);
    eocd.writeUInt16LE(0, 6);
    eocd.writeUInt16LE(this.files.length, 8);
    eocd.writeUInt16LE(this.files.length, 10);
    eocd.writeUInt32LE(cdSize, 12);
    eocd.writeUInt32LE(cdStartOffset, 16);
    eocd.writeUInt16LE(0, 20);

    return Buffer.concat([...localHeaders, ...centralDirectoryHeaders, eocd]);
  }
}

class SimplePdfWriter {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.pages = [];
    this.currentPage = [];
    this.y = 750;
    this.pageHeight = 842;
    this.margin = 54;
    this.contentWidth = 595 - (this.margin * 2);
  }

  escapePdfText(text) {
    return text
      .replace(/₹/g, 'Rs. ')
      .replace(/[^\x20-\x7E]/g, ' ')
      .replace(/\\/g, '\\\\')
      .replace(/\(/g, '\\(')
      .replace(/\)/g, '\\)');
  }

  addPage() {
    if (this.currentPage.length > 0 || this.pages.length === 0) {
      this.pages.push(this.currentPage);
      this.currentPage = [];
    }
    this.y = 750;
  }

  addText(text, fontSize = 10, isBold = false, indent = 0) {
    const font = isBold ? '/F2' : '/F1';
    const lineHeight = fontSize * 1.35;
    const charWidth = fontSize * 0.52;
    const maxCharsPerLine = Math.floor((this.contentWidth - indent) / charWidth);

    const words = text.split(/\s+/).filter(Boolean);
    let currentLine = '';

    for (const word of words) {
      if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
        currentLine = (currentLine + ' ' + word).trim();
      } else {
        if (this.y - lineHeight < 60) {
          this.addPage();
        }
        this.currentPage.push({
          font,
          fontSize,
          x: this.margin + indent,
          y: this.y,
          text: this.escapePdfText(currentLine)
        });
        this.y -= lineHeight;
        currentLine = word;
      }
    }

    if (currentLine.length > 0) {
      if (this.y - lineHeight < 60) {
        this.addPage();
      }
      this.currentPage.push({
        font,
        fontSize,
        x: this.margin + indent,
        y: this.y,
        text: this.escapePdfText(currentLine)
      });
      this.y -= lineHeight;
    }
    this.y -= lineHeight * 0.4;
  }

  build() {
    if (this.currentPage.length > 0) {
      this.pages.push(this.currentPage);
    }
    const totalPages = Math.max(1, this.pages.length);
    let objects = [];
    let nextId = 5;

    let pageObjIds = [];
    let contentObjIds = [];

    for (let i = 0; i < totalPages; i++) {
      pageObjIds.push(nextId++);
      contentObjIds.push(nextId++);
    }

    const catalogObj = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj';
    const pagesObj = '2 0 obj\n<< /Type /Pages /Kids [' + pageObjIds.map(id => id + ' 0 R').join(' ') + '] /Count ' + totalPages + ' >>\nendobj';
    const font1Obj = '3 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj';
    const font2Obj = '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj';

    objects.push(catalogObj, pagesObj, font1Obj, font2Obj);

    for (let i = 0; i < totalPages; i++) {
      const pageId = pageObjIds[i];
      const contentId = contentObjIds[i];
      const pageLines = this.pages[i] || [];

      let stream = '';
      if (i > 0) {
        stream += 'BT /F1 8 Tf 54 800 Td (' + this.escapePdfText(this.title) + ') Tj ET\n';
        stream += '0.5 w 54 792 m 541 792 l S\n';
      }
      stream += 'BT /F1 8 Tf 270 40 Td (Page ' + (i + 1) + ' of ' + totalPages + ') Tj ET\n';

      for (const line of pageLines) {
        stream += 'BT ' + line.font + ' ' + line.fontSize + ' Tf ' + line.x + ' ' + line.y + ' Td (' + line.text + ') Tj ET\n';
      }

      const streamObj = contentId + ' 0 obj\n<< /Length ' + Buffer.byteLength(stream) + ' >>\nstream\n' + stream + '\nendstream\nendobj';
      const pageObj = pageId + ' 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ' + contentId + ' 0 R >>\nendobj';

      objects.push(pageObj, streamObj);
    }

    let fullDoc = '%PDF-1.4\n';
    let xref = 'xref\n0 ' + (objects.length + 1) + '\n0000000000 65535 f \n';

    for (const obj of objects) {
      xref += String(fullDoc.length).padStart(10, '0') + ' 00000 n \n';
      fullDoc += obj + '\n';
    }

    const startxref = fullDoc.length;
    fullDoc += xref;
    fullDoc += 'trailer\n<< /Size ' + (objects.length + 1) + ' /Root 1 0 R >>\nstartxref\n' + startxref + '\n%%EOF';
    return Buffer.from(fullDoc, 'utf8');
  }
}

// 3. Build Core Chapter Models
const allChapters = [];

// Ch 0: Title and TTS Guide
const ch0Title = "Title Page and Audiobook Listening Guide";
const ch0Html = `
<div class="title-page">
  <h1 class="book-title">Dhanpedia India</h1>
  <p class="book-subtitle">The Indian Personal Finance, Investing and Wealth-Building Encyclopedia</p>
  <p class="book-tagline">Master your money. Understand every investment. Build lasting wealth.</p>
  <p class="book-author">By Chirag Singhal</p>
  <p class="book-edition">Master Reference & TTS Audio-Native Edition</p>
  <p class="book-url">Official Website: https://chirag127.github.io/dhanpedia-india/</p>
</div>
<hr/>
<h2>How to Listen via Text-to-Speech in Moon+ Reader Pro</h2>
<p>This volume is engineered specifically for uninterrupted text-to-speech listening using Moon+ Reader Pro on Android devices. Every formula, statutory tax bracket, interest compounding rule, and legal penalty is articulated in flowing spoken English paragraphs without raw equation blocks or visual table traps.</p>
<p>To listen comfortably with your screen turned off:</p>
<p>First, select Google Speech Services or your preferred neural engine under Android Accessibility Text-to-Speech settings, downloading the English India high-quality voice pack.</p>
<p>Second, in Moon+ Reader Pro, tap the screen center, select the Speaker (TTS) icon, and enable background audio playback.</p>
<p>Third, all visual diagrams are paired with complete spoken narrative paragraphs explaining the entire decision logic, so listeners relying on audio will absorb one hundred percent of the knowledge.</p>
`;
allChapters.push({ id: 'ch00_intro', title: ch0Title, filename: 'ch00_intro.xhtml', htmlContent: ch0Html, category: 'foundation' });

// Ch 1: 26 Master Domains
let ch1Html = `
<h1>Part One: The Twenty-Six Master Domains of Indian Finance</h1>
<p>Dhanpedia India organizes the entire financial landscape into twenty-six canonical domains, designated from Domain A through Domain Z. Each domain represents an indispensable pillar of personal wealth, banking security, capital markets, or statutory compliance.</p>
`;
taxonomy.categories.forEach((cat, idx) => {
  ch1Html += `
<h2>Domain ${String.fromCharCode(65 + idx)}: ${cat.canonicalName}</h2>
<p><strong>Primary Regulators and Authorities:</strong> ${cat.regulatorsAndSources.join(', ')}.</p>
<p><strong>Scope and Mandate:</strong> ${cat.scope}</p>
<p><strong>Exclusions and Boundaries:</strong> ${cat.exclusions}</p>
<p><strong>Core Questions Addressed:</strong> ${cat.coreQuestions.join(' Furthermore, ')}</p>
`;
});
allChapters.push({ id: 'ch01_taxonomy', title: "Part One: The Twenty-Six Master Domains of Indian Finance", filename: 'ch01_taxonomy.xhtml', htmlContent: ch1Html, category: 'foundation' });

// Ch 2: 52 Concepts
let ch2Html = `
<h1>Part Two: The Canonical Concept Encyclopedia</h1>
<p>True financial mastery requires understanding foundational constructs across their intuitive, technical, and mathematical dimensions. This section defines fifty-two core concepts of the Indian financial architecture.</p>
`;
conceptData.concepts.forEach((c, idx) => {
  ch2Html += `
<h2>Concept ${idx + 1}: ${c.canonicalTerm}</h2>
<p><strong>Intuitive Meaning:</strong> ${c.definitionPlainEnglish || c.shortDefinition}</p>
<p><strong>Technical Precision:</strong> ${c.definitionTechnical || c.shortDefinition}</p>
${c.spokenFormula ? `<p><strong>Spoken Mathematical Formulation:</strong> ${c.spokenFormula}</p>` : ''}
${c.commonMisconceptions ? `<p><strong>Common Pitfalls:</strong> ${c.commonMisconceptions}</p>` : ''}
${c.jurisdiction ? `<p><strong>Statutory Context:</strong> ${c.jurisdiction}.</p>` : ''}
`;
});
allChapters.push({ id: 'ch02_concepts', title: "Part Two: The Canonical Concept Encyclopedia", filename: 'ch02_concepts.xhtml', htmlContent: ch2Html, category: 'concepts' });

// Ch 3: 14 Formulas
let ch3Html = `
<h1>Part Three: Mathematical Formulas in Spoken English</h1>
<p>Fourteen foundational formulas translated into clear spoken English paragraphs, eliminating mathematical notation barriers for text-to-speech listening.</p>
`;
formulaData.formulas.forEach((form, idx) => {
  ch3Html += `
<h2>Formula ${idx + 1}: ${form.name}</h2>
<p><strong>Symbolic Formula:</strong> ${form.mathematicalExpression}</p>
<p><strong>Spoken Narration:</strong> ${form.plainEnglishInterpretation}</p>
<p><strong>Assumptions and Limitations:</strong> ${form.assumptions} Note that ${form.limitations}</p>
<p><strong>Numerical Example:</strong> ${form.testRequirements || 'Calculated using standard financial conventions.'}</p>
`;
});
allChapters.push({ id: 'ch03_formulas', title: "Part Three: Mathematical Formulas in Spoken English", filename: 'ch03_formulas.xhtml', htmlContent: ch3Html, category: 'formulas' });

// Ch 4: 12 Learning Paths
let ch4Html = `
<h1>Part Four: Structured Learning Curricula and Wealth Milestones</h1>
<p>Twelve structured educational progressions taking savers from foundational cashflow hygiene to advanced quantitative risk modeling.</p>
`;
learningPathData.learningPaths.forEach((pathItem, idx) => {
  ch4Html += `
<h2>Curriculum ${idx + 1}: ${pathItem.title}</h2>
<p><strong>Target Audience:</strong> ${pathItem.targetAudience}.</p>
<p><strong>Study Commitment:</strong> Approximately ${pathItem.estimatedHours} hours.</p>
<p><strong>Milestone Outcome:</strong> ${pathItem.milestoneOutcome}</p>
`;
  pathItem.curriculumStages.forEach(stg => {
    ch4Html += `<p><strong>Stage ${stg.stageNumber} (${stg.stageName}):</strong> Practical exercise: ${stg.practicalExercise}</p>`;
  });
});
allChapters.push({ id: 'ch04_learning_paths', title: "Part Four: Structured Learning Curricula and Wealth Milestones", filename: 'ch04_learning_paths.xhtml', htmlContent: ch4Html, category: 'learning' });

// Ch 5: Master Articles from src/content/articles/
const articlesDir = path.resolve('src/content/articles');
const articleFiles = fs.existsSync(articlesDir)
  ? fs.readdirSync(articlesDir).filter(f => f.endsWith('.md')).sort()
  : [];

let dicgcChapterIndex = 5;

articleFiles.forEach((file, idx) => {
  const fullPath = path.join(articlesDir, file);
  const raw = fs.readFileSync(fullPath, 'utf8');
  const frontmatterMatch = raw.match(/^---([\s\S]*?)---\s*/);
  let title = file.replace(/^\d+-/, '').replace(/\.md$/, '').replace(/-/g, ' ');
  let category = 'article';
  if (frontmatterMatch) {
    const titleMatch = frontmatterMatch[1].match(/title:\s*["']?([^"'\n]+)["']?/);
    if (titleMatch) title = titleMatch[1].trim();
    const catMatch = frontmatterMatch[1].match(/categoryId:\s*["']?([^"'\n]+)["']?/);
    if (catMatch) category = catMatch[1].trim();
  }
  const body = raw.replace(/^---[\s\S]*?---\s*/, '');
  let chapterHtml = `<h1>${title}</h1>\n<hr/>\n`;
  const paras = body.split(/\n\n+/).map(p => p.trim()).filter(Boolean);
  paras.forEach(p => {
    if (p.startsWith('# ')) chapterHtml += `<h2>${p.replace(/^#\s+/, '')}</h2>\n`;
    else if (p.startsWith('## ')) chapterHtml += `<h3>${p.replace(/^##\s+/, '')}</h3>\n`;
    else if (p.startsWith('### ')) chapterHtml += `<h4>${p.replace(/^###\s+/, '')}</h4>\n`;
    else if (p.startsWith('---')) chapterHtml += `<hr/>\n`;
    else chapterHtml += `<p>${p.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>\n`;
  });

  const chIndex = allChapters.length;
  if (file.includes('vault-banking') || file.includes('dicgc')) {
    dicgcChapterIndex = chIndex;
  }

  allChapters.push({
    id: `art_${file.replace(/[^a-zA-Z0-9]/g, '_')}`,
    title: `Treatise ${idx + 1}: ${title}`,
    filename: `art_${idx + 1}.xhtml`,
    htmlContent: chapterHtml,
    category
  });
});

// Ch 6: Forensic Shadow Economy
let ch6Html = `
<h1>Part Six: Forensic Finance, Real Estate Black Money, and Shadow Economics</h1>
<p>Forensic legal analysis of real estate cash limits under Section 269SS/ST, mandatory one hundred percent penalties under Section 271D/DA, Section 50C/56(2)(x) circle rate safe-harbor double taxation, asset confiscation under the Benami Property Transactions Act, and criminal sanctions against dabba trading under SCRA 1956.</p>
<h2>1. Real Estate Cash Restrictions and Penalties</h2>
<p>Under Section 269SS of the Income-tax Act 1961, accepting cash of twenty thousand rupees or more for immovable property transfer is prohibited. Section 271D imposes a mandatory penalty equal to one hundred percent of the cash accepted. Section 269ST restricts general cash receipts of two lakh rupees or more, backed by a one hundred percent penalty under Section 271DA.</p>
<h2>2. Double Taxation Penalties under Sections 50C and 56(2)(x)</h2>
<p>Discrepancies exceeding ten percent between registered agreement value and circle rate trigger capital gains tax on the seller on deemed consideration, while the buyer is taxed on the difference as income from other sources.</p>
<h2>3. Prohibition of Benami Property Transactions</h2>
<p>Under Section 5 of the PBPT Act 1988, benami assets are subject to absolute confiscation without compensation, accompanied by up to seven years rigorous imprisonment under Section 53.</p>
<h2>4. Criminal Sanctions on Dabba Trading</h2>
<p>Off-exchange bucket shops operating outside recognized stock exchanges violate Sections 13 and 16 of the SCRA 1956, carrying penalties under Section 23 of up to ten years imprisonment and fines up to twenty-five crore rupees.</p>
`;
allChapters.push({ id: 'ch06_shadow_economy', title: "Part Six: Forensic Finance, Real Estate Black Money, and Shadow Economics", filename: 'ch06_shadow_economy.xhtml', htmlContent: ch6Html, category: 'forensics' });

// Ch 7: Statutory Evidence & Claims
let ch7Html = `
<h1>Part Seven: Primary Statutory Authorities and Evidence Registry</h1>
<p>Catalogue of thirty-two primary statutory bodies and twelve verified legal propositions forming the evidentiary grounding of Dhanpedia India.</p>
<h2>Primary Statutory Authorities</h2>
<ul>
${sourceData.sources.map(s => `<li><strong>${s.officialName || s.sourceId} (${s.sourceId}):</strong> Authority Tier: ${s.authorityTier || s.reliabilityClassification}. Scope: ${s.notes || s.sourceType}. URL: ${s.canonicalUrl}</li>`).join('\n')}
</ul>
<h2>Verified Statutory Claims</h2>
<ul>
${claimData.claims.map(clm => `<li><strong>${clm.claimId} (${clm.classification}):</strong> ${clm.proposition} Authority: ${clm.statutoryReference}. Citations: ${clm.sourceIds.join(', ')}.</li>`).join('\n')}
</ul>
`;
allChapters.push({ id: 'ch07_statutory_sources', title: "Part Seven: Primary Statutory Authorities and Evidence Registry", filename: 'ch07_statutory_sources.xhtml', htmlContent: ch7Html, category: 'sources' });

// 4. Publication Generation Functions
function htmlToPlainText(html) {
  return html
    .replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi, '\n\n=== $1 ===\n\n')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
    .replace(/<hr\/?>/gi, '\n----------------------------------------\n')
    .replace(/<[^>]+>/gi, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    // Remove all markdown formatting characters so Moon+ Reader Pro TTS is pure natural spoken prose
    .replace(/\*{1,3}/g, '')
    .replace(/`{1,3}/g, '')
    .replace(/_{1,3}/g, '')
    .replace(/\n\s+\n/g, '\n\n')
    .trim();
}

function generateEpubBuffer(bookTitle, chapterList) {
  const zip = new ZipBuilder();
  zip.addFile('mimetype', 'application/epub+zip', false);

  const containerXml = `<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles>
    <rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  </rootfiles>
</container>`;
  zip.addFile('META-INF/container.xml', containerXml, true);

  const css = `
body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.65; color: #111827; padding: 4% 6%; margin: 0; }
h1, h2, h3, h4 { color: #0b132b; line-height: 1.25; margin-top: 1.4em; }
h1 { font-size: 1.8em; border-bottom: 2px solid #0052cc; padding-bottom: 0.25em; }
h2 { font-size: 1.35em; border-bottom: 1px solid #e5e7eb; padding-bottom: 0.2em; }
p { margin: 0 0 1.1em; text-align: justify; }
ul, ol { margin: 0 0 1.2em; padding-left: 1.5em; }
li { margin-bottom: 0.4em; }
.title-page { text-align: center; padding: 10% 4%; }
.book-title { font-size: 2.2em; color: #0052cc; }
`;
  zip.addFile('OEBPS/style.css', css, true);

  chapterList.forEach(ch => {
    const xhtml = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en" lang="en">
<head><meta charset="utf-8"/><title>${ch.title}</title><link rel="stylesheet" type="text/css" href="style.css"/></head>
<body>${ch.htmlContent}</body></html>`;
    zip.addFile(`OEBPS/${ch.filename}`, xhtml, true);
  });

  let ncx = `<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
  <head><meta name="dtb:uid" content="urn:uuid:dhanpedia-india-${Date.now()}"/><meta name="dtb:depth" content="1"/></head>
  <docTitle><text>${bookTitle}</text></docTitle>
  <docAuthor><text>Chirag Singhal</text></docAuthor>
  <navMap>
`;
  chapterList.forEach((ch, idx) => {
    ncx += `    <navPoint id="np-${idx + 1}" playOrder="${idx + 1}"><navLabel><text>${ch.title}</text></navLabel><content src="${ch.filename}"/></navPoint>\n`;
  });
  ncx += `  </navMap>\n</ncx>`;
  zip.addFile('OEBPS/toc.ncx', ncx, true);

  let navXhtml = `<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" xml:lang="en" lang="en">
<head><meta charset="utf-8"/><title>Table of Contents</title><link rel="stylesheet" type="text/css" href="style.css"/></head>
<body><nav epub:type="toc" id="toc"><h1>Table of Contents</h1><ol>
${chapterList.map(ch => `  <li><a href="${ch.filename}">${ch.title}</a></li>`).join('\n')}
</ol></nav></body></html>`;
  zip.addFile('OEBPS/nav.xhtml', navXhtml, true);

  let opf = `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId" version="3.0">
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
    <dc:identifier id="BookId">urn:uuid:dhanpedia-india-${Date.now()}</dc:identifier>
    <dc:title>${bookTitle}</dc:title>
    <dc:creator>Chirag Singhal</dc:creator>
    <dc:language>en</dc:language>
    <dc:publisher>Dhanpedia India</dc:publisher>
    <meta property="dcterms:modified">${new Date().toISOString().replace(/\.\d+Z$/, 'Z')}</meta>
  </metadata>
  <manifest>
    <item id="style" href="style.css" media-type="text/css"/>
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
    <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
${chapterList.map(ch => `    <item id="${ch.id}" href="${ch.filename}" media-type="application/xhtml+xml"/>`).join('\n')}
  </manifest>
  <spine toc="ncx">
${chapterList.map(ch => `    <itemref idref="${ch.id}"/>`).join('\n')}
  </spine>
</package>`;
  zip.addFile('OEBPS/content.opf', opf, true);

  return zip.build();
}

function generatePdfBuffer(bookTitle, chapterList) {
  const doc = new SimplePdfWriter(bookTitle, 'Chirag Singhal');
  doc.addText(bookTitle, 18, true);
  doc.addText('Author: Chirag Singhal — Dhanpedia India Reference Publishing', 11, false);
  doc.addText('--------------------------------------------------------------------------------', 10, false);

  chapterList.forEach(ch => {
    doc.addPage();
    doc.addText(ch.title, 15, true);
    const plain = htmlToPlainText(ch.htmlContent);
    const paras = plain.split(/\n\n+/).filter(Boolean);
    paras.forEach(p => {
      if (p.startsWith('=== ')) {
        doc.addText(p.replace(/===/g, '').trim(), 12, true);
      } else {
        doc.addText(p, 10, false);
      }
    });
  });

  return { buffer: doc.build(), pageCount: doc.pages.length };
}

// 5. Target Directories
const distBooksDir = path.resolve('dist/books');
const publicBooksDir = path.resolve('public/books');
fs.mkdirSync(distBooksDir, { recursive: true });
fs.mkdirSync(publicBooksDir, { recursive: true });

const manifestItems = [];

function publishPublication(pubId, title, editionType, subject, chaptersToInclude, baseFilename) {
  const epubBuf = generateEpubBuffer(title, chaptersToInclude);
  const pdfRes = generatePdfBuffer(title, chaptersToInclude);
  
  let txtContent = `# ${title}\nAuthor: Chirag Singhal\n\n`;
  chaptersToInclude.forEach(ch => {
    txtContent += `${htmlToPlainText(ch.htmlContent)}\n\n----------------------------------------\n\n`;
  });
  const txtBuf = Buffer.from(txtContent, 'utf8');

  const epubName = `${baseFilename}.epub`;
  const pdfName = `${baseFilename}.pdf`;
  const txtName = `${baseFilename}.txt`;

  // Write files to dist and public
  [distBooksDir, publicBooksDir].forEach(dir => {
    fs.writeFileSync(path.join(dir, epubName), epubBuf);
    fs.writeFileSync(path.join(dir, pdfName), pdfRes.buffer);
    fs.writeFileSync(path.join(dir, txtName), txtBuf);
  });

  const wordCount = txtContent.trim().split(/\s+/).length;

  manifestItems.push(
    {
      publicationId: `${pubId}-EPUB`,
      title,
      editionType,
      subject,
      format: 'epub',
      filename: epubName,
      fileSizeBytes: epubBuf.length,
      sha256: computeSha256(epubBuf),
      wordCount,
      pageCount: null,
      ttsSuitability: 'Excellent (Moon+ Reader Pro Optimized)',
      downloadUrl: `/books/${epubName}`
    },
    {
      publicationId: `${pubId}-PDF`,
      title,
      editionType,
      subject,
      format: 'pdf',
      filename: pdfName,
      fileSizeBytes: pdfRes.buffer.length,
      sha256: computeSha256(pdfRes.buffer),
      wordCount,
      pageCount: pdfRes.pageCount,
      ttsSuitability: 'Visual Reference & Print',
      downloadUrl: `/books/${pdfName}`
    },
    {
      publicationId: `${pubId}-TXT`,
      title,
      editionType,
      subject,
      format: 'txt',
      filename: txtName,
      fileSizeBytes: txtBuf.length,
      sha256: computeSha256(txtBuf),
      wordCount,
      pageCount: null,
      ttsSuitability: 'Plain Text TTS Compatible',
      downloadUrl: `/books/${txtName}`
    }
  );

  console.log(`✓ Published: ${baseFilename} (EPUB: ${(epubBuf.length/1024).toFixed(1)}KB, PDF: ${(pdfRes.buffer.length/1024).toFixed(1)}KB [${pdfRes.pageCount} pgs], Words: ${wordCount.toLocaleString()})`);
}

// 6. Generate Complete Publications Suite
console.log('[1/4] Publishing Master Editions...');
// 1. Master Complete Reference (All Chapters)
publishPublication(
  'PUB-MASTER-REF',
  'Dhanpedia India: The Complete Reference (Master Edition)',
  'master_reference',
  'All Domains A to Z',
  allChapters,
  'Dhanpedia-India-Complete-Reference'
);

// 2. Master TTS Audio-Native Edition
publishPublication(
  'PUB-MASTER-TTS',
  'Dhanpedia India: TTS Audiobook Edition (Moon+ Reader Pro)',
  'tts_optimized',
  'All Domains A to Z (Spoken Audio-Native)',
  allChapters,
  'Dhanpedia-India-TTS-Edition'
);

console.log('\n[2/4] Publishing Subject-Wise Volumes...');
// Subject Volumes
const subjectMap = [
  { id: 'SUBJ-PF', title: 'Personal Finance Foundations & Household Wealth', subject: 'Personal Finance', chapters: [allChapters[0], allChapters[1], allChapters[2]], filename: 'Personal-Finance-Foundations' },
  { id: 'SUBJ-BANK', title: 'Indian Banking, Deposits & Resolution Architecture', subject: 'Banking & Deposits', chapters: [allChapters[0], allChapters[5]], filename: 'Banking-and-Deposit-Products' },
  { id: 'SUBJ-TAX', title: 'Indian Taxation, Slabs & Dual Regime Architecture', subject: 'Taxation', chapters: [allChapters[0], allChapters[2]], filename: 'Indian-Taxation-Architecture' },
  { id: 'SUBJ-FORMULAS', title: 'Financial Mathematics in Spoken English', subject: 'Quantitative Finance', chapters: [allChapters[0], allChapters[3]], filename: 'Financial-Mathematics-Spoken-English' },
  { id: 'SUBJ-CURRICULA', title: 'Structured Wealth Milestones & Learning Paths', subject: 'Education', chapters: [allChapters[0], allChapters[4]], filename: 'Structured-Learning-Curricula' },
  { id: 'SUBJ-FORENSIC', title: 'Forensic Shadow Economy, Cash Penalties & Scams', subject: 'Forensic Finance', chapters: [allChapters[0], allChapters[6]], filename: 'Forensic-Finance-and-Shadow-Economy' },
  { id: 'SUBJ-STATUTORY', title: 'Statutory Authorities & Primary Legal Grounding', subject: 'Regulatory', chapters: [allChapters[0], allChapters[7]], filename: 'Statutory-Authorities-Registry' }
];

subjectMap.forEach(s => {
  publishPublication(s.id, s.title, 'subject_volume', s.subject, s.chapters, s.filename);
});

console.log('\n[3/4] Publishing Standalone Chapter Editions...');
// Standalone Chapter Editions
publishPublication(
  'CHAP-DICGC',
  'Chapter: DICGC Deposit Insurance Architecture & Bank Failure Resolution',
  'chapter_edition',
  'Banking Safety',
  [allChapters[dicgcChapterIndex] || allChapters[5]],
  'Chapter-DICGC-Deposit-Insurance-Architecture'
);

publishPublication(
  'CHAP-CONCEPTS',
  'Chapter: The 52 Foundational Financial Concepts',
  'chapter_edition',
  'Reference Concepts',
  [allChapters[2]],
  'Chapter-Concept-Encyclopedia-52-Foundations'
);

console.log('\n[4/4] Writing Publication Manifest...');
const manifest = {
  $schema: './publication-manifest.schema.json',
  version: '2.0.0',
  lastUpdated: new Date().toISOString(),
  totalPublications: manifestItems.length,
  author: 'Chirag Singhal',
  publisher: 'Dhanpedia India Reference Publishing',
  canonicalUrl: 'https://chirag127.github.io/dhanpedia-india/downloads/',
  publications: manifestItems
};

[distBooksDir, publicBooksDir].forEach(dir => {
  fs.writeFileSync(path.join(dir, 'publication-manifest.json'), JSON.stringify(manifest, null, 2), 'utf8');
});

console.log(`✓ Publication Manifest generated with ${manifestItems.length} downloadable artifacts.`);
console.log('✓ All files mirrored to public/books/ and dist/books/. Pipeline Complete!\n');
