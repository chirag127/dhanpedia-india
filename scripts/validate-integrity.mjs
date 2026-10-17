import fs from 'node:fs';
import path from 'node:path';

let failures = 0;
let passed = 0;

function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAILED: ${message}`);
    failures++;
  }
}

console.log('\n======================================================');
console.log('  DHANPEDIA INDIA — QUALITY GATE & INTEGRITY VALIDATOR');
console.log('======================================================\n');

// 1. Taxonomy Validation
console.log('[1/7] Validating 22-Category Taxonomy Integrity...');
const taxonomyPath = path.resolve('data/taxonomy/taxonomy.json');
assert(fs.existsSync(taxonomyPath), 'taxonomy.json exists');

const taxonomy = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));
assert(taxonomy.categories && taxonomy.categories.length === 22, `Exactly 22 canonical categories defined (found ${taxonomy.categories?.length})`);

const categoryIds = new Set();
taxonomy.categories.forEach(cat => {
  assert(cat.id && typeof cat.id === 'string', `Category ${cat.id || 'unknown'} has valid ID`);
  assert(!categoryIds.has(cat.id), `Category ID ${cat.id} is unique`);
  categoryIds.add(cat.id);
  assert(cat.canonicalName && cat.canonicalName.length > 0, `Category ${cat.id} has canonical name`);
  assert(cat.shortDescription && cat.shortDescription.length > 20, `Category ${cat.id} has substantive description`);
  assert(Array.isArray(cat.coreQuestions) && cat.coreQuestions.length > 0, `Category ${cat.id} has core questions`);
  assert(Array.isArray(cat.plannedArticles) && cat.plannedArticles.length > 0, `Category ${cat.id} has planned articles`);
  assert(Array.isArray(cat.regulatorsAndSources) && cat.regulatorsAndSources.length > 0, `Category ${cat.id} has assigned regulators`);
});

// 2. Source Registry Validation
console.log('\n[2/7] Validating Primary Statutory Source Registry...');
const sourceRegistryPath = path.resolve('data/sources/source-registry.json');
assert(fs.existsSync(sourceRegistryPath), 'source-registry.json exists');

const sourceRegistry = JSON.parse(fs.readFileSync(sourceRegistryPath, 'utf8'));
assert(Array.isArray(sourceRegistry.sources) && sourceRegistry.sources.length >= 10, `At least 10 primary sources registered (found ${sourceRegistry.sources?.length})`);

const sourceIds = new Set();
sourceRegistry.sources.forEach(src => {
  assert(src.sourceId && typeof src.sourceId === 'string', `Source ${src.sourceId} has valid ID`);
  assert(!sourceIds.has(src.sourceId), `Source ID ${src.sourceId} is unique`);
  sourceIds.add(src.sourceId);
  assert(src.canonicalUrl && src.canonicalUrl.startsWith('https://'), `Source ${src.sourceId} has secure canonical URL`);
  assert(src.reliabilityClassification && src.reliabilityClassification.includes('Tier'), `Source ${src.sourceId} has Tier classification`);
});

// 3. Canonical Concept Registry Validation
console.log('\n[3/7] Validating Canonical Concept Registry...');
const conceptRegistryPath = path.resolve('data/concepts/concept-registry.json');
assert(fs.existsSync(conceptRegistryPath), 'concept-registry.json exists');

const conceptRegistry = JSON.parse(fs.readFileSync(conceptRegistryPath, 'utf8'));
const conceptIds = new Set();
conceptRegistry.concepts.forEach(c => {
  assert(c.id && !conceptIds.has(c.id), `Concept ID ${c.id} is valid and unique`);
  conceptIds.add(c.id);
  assert(c.canonicalTerm && c.shortDefinition, `Concept ${c.id} has term and definition`);
  assert(categoryIds.has(c.categoryId), `Concept ${c.id} references valid category ${c.categoryId}`);
});

// 4. Research Gaps Validation
console.log('\n[4/7] Validating Research Gaps Registry...');
const gapsPath = path.resolve('data/taxonomy/research-gaps.json');
assert(fs.existsSync(gapsPath), 'research-gaps.json exists');

const gapsData = JSON.parse(fs.readFileSync(gapsPath, 'utf8'));
assert(Array.isArray(gapsData.gaps) && gapsData.gaps.length > 0, `Research gaps tracked (found ${gapsData.gaps?.length})`);
gapsData.gaps.forEach(g => {
  assert(categoryIds.has(g.categoryId), `Gap ${g.gapId} references valid category ${g.categoryId}`);
  assert(['High', 'Medium', 'Low'].includes(g.severity), `Gap ${g.gapId} has valid severity`);
});

// 5. Article Registry & Substantive Word Count Validation
console.log('\n[5/7] Validating Article Registry & Substantive Word Counts...');
const articleRegistryPath = path.resolve('data/articles/article-registry.json');
assert(fs.existsSync(articleRegistryPath), 'article-registry.json exists');

const articleRegistry = JSON.parse(fs.readFileSync(articleRegistryPath, 'utf8'));
const articleSlugs = new Set();
const articleIds = new Set();

articleRegistry.articles.forEach(art => {
  assert(!articleIds.has(art.id), `Article ID ${art.id} is unique`);
  articleIds.add(art.id);
  assert(!articleSlugs.has(art.slug), `Article slug ${art.slug} is unique`);
  articleSlugs.add(art.slug);
  assert(categoryIds.has(art.categoryId), `Article ${art.id} belongs to valid category ${art.categoryId}`);

  // Cross-reference sources
  art.sourceIds.forEach(sid => {
    assert(sourceIds.has(sid), `Article ${art.id} citation ${sid} exists in source registry`);
  });

  // Verify markdown file exists and check substantive word count
  const mdPath = path.resolve(`src/content/articles/${art.slug}.md`);
  assert(fs.existsSync(mdPath), `Article content file exists at src/content/articles/${art.slug}.md`);

  const mdContent = fs.readFileSync(mdPath, 'utf8');
  const words = mdContent.trim().split(/\s+/).length;
  assert(words >= 10000, `Article ${art.slug} meets >10,000 word mandate (actual: ${words.toLocaleString()} words)`);
});

// 6. Base Path and GitHub Pages Deployment Configuration
console.log('\n[6/7] Validating Astro GitHub Pages Configuration...');
const astroConfigPath = path.resolve('astro.config.mjs');
assert(fs.existsSync(astroConfigPath), 'astro.config.mjs exists');
const astroConfigContent = fs.readFileSync(astroConfigPath, 'utf8');
assert(astroConfigContent.includes("base: '/dhanpedia-india'"), "Astro config specifies base: '/dhanpedia-india'");
assert(astroConfigContent.includes("site: 'https://chirag127.github.io'"), "Astro config specifies site: 'https://chirag127.github.io'");
assert(astroConfigContent.includes("output: 'static'"), "Astro config specifies output: 'static'");

// 7. Secret & Credential Exposure Scan
console.log('\n[7/7] Scanning Repository for Secrets & Private Data...');
const credentialPatterns = [
  /AIza[0-9A-Za-z-_]{35}/, // Google API key
  /sk-[a-zA-Z0-9]{32,}/, // OpenAI/Secret key
  /ghp_[a-zA-Z0-9]{36}/, // GitHub personal access token
  /PRIVATE KEY-----/,
  /password\s*=\s*['"][^'"]+['"]/i
];

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (['node_modules', '.git', 'dist', '.gemini', 'scripts'].includes(f)) continue;
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      scanDir(full);
    } else if (stat.isFile() && /\.(json|js|mjs|ts|astro|md|css)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      for (const pattern of credentialPatterns) {
        if (pattern.test(content)) {
          console.error(`  ✗ POTENTIAL SECRET DETECTED in ${full}: matches ${pattern}`);
          failures++;
        }
      }
    }
  }
}
scanDir(process.cwd());
assert(true, 'Secrets scan completed across all project source files');

console.log('\n------------------------------------------------------');
console.log(`TEST SUMMARY: ${passed} assertions passed, ${failures} failed.`);
console.log('------------------------------------------------------\n');

if (failures > 0) {
  process.exit(1);
} else {
  console.log('✓ All quality gates passed successfully!\n');
}
