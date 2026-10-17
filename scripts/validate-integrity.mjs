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
console.log('  Prompt 003 — Knowledge Graph, Concepts & Gap Audit');
console.log('======================================================\n');

// 1. Taxonomy Validation (26 Domains A to Z)
console.log('[1/15] Validating 26-Domain Taxonomy Integrity (taxonomy.json)...');
const taxonomyPath = path.resolve('data/taxonomy/taxonomy.json');
assert(fs.existsSync(taxonomyPath), 'taxonomy.json exists');

const taxonomy = JSON.parse(fs.readFileSync(taxonomyPath, 'utf8'));
assert(taxonomy.categories && taxonomy.categories.length === 26, `Exactly 26 canonical categories defined (found ${taxonomy.categories?.length})`);

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

// 2. Machine-Readable Financial System Tree
console.log('\n[2/15] Validating Machine-Readable Financial System Tree (financial-system.json)...');
const finSystemPath = path.resolve('data/taxonomy/financial-system.json');
assert(fs.existsSync(finSystemPath), 'financial-system.json exists');
const finSystem = JSON.parse(fs.readFileSync(finSystemPath, 'utf8'));
assert(Array.isArray(finSystem.nodes) && finSystem.nodes.length >= 26, `At least 26 hierarchical nodes defined (found ${finSystem.nodes?.length})`);

const nodeIds = new Set();
finSystem.nodes.forEach(node => {
  assert(node.id && !nodeIds.has(node.id), `Taxonomy node ${node.id} has unique ID`);
  nodeIds.add(node.id);
  assert(node.canonicalName && node.slug, `Node ${node.id} has canonical name and slug`);
  assert(node.primaryRegulator && node.primaryRegulator.length > 0, `Node ${node.id} has primary regulator`);
});

// 3. Source Registry Validation (30+ Statutory Bodies)
console.log('\n[3/15] Validating Primary Statutory Source Registry (source-registry.json)...');
const sourceRegistryPath = path.resolve('data/sources/source-registry.json');
assert(fs.existsSync(sourceRegistryPath), 'source-registry.json exists');

const sourceRegistry = JSON.parse(fs.readFileSync(sourceRegistryPath, 'utf8'));
assert(Array.isArray(sourceRegistry.sources) && sourceRegistry.sources.length >= 30, `At least 30 primary sources registered (found ${sourceRegistry.sources?.length})`);

const sourceIds = new Set();
sourceRegistry.sources.forEach(src => {
  assert(src.sourceId && typeof src.sourceId === 'string', `Source ${src.sourceId} has valid ID`);
  assert(!sourceIds.has(src.sourceId), `Source ID ${src.sourceId} is unique`);
  sourceIds.add(src.sourceId);
  assert(src.canonicalUrl && src.canonicalUrl.startsWith('https://'), `Source ${src.sourceId} has secure canonical URL`);
  assert(src.reliabilityClassification && src.reliabilityClassification.includes('Tier'), `Source ${src.sourceId} has Tier classification`);
});

// 4. Statutory Claim Registry Validation
console.log('\n[4/15] Validating Statutory Claim Registry (claim-registry.json)...');
const claimRegistryPath = path.resolve('data/claims/claim-registry.json');
assert(fs.existsSync(claimRegistryPath), 'claim-registry.json exists');
const claimRegistry = JSON.parse(fs.readFileSync(claimRegistryPath, 'utf8'));
assert(Array.isArray(claimRegistry.claims) && claimRegistry.claims.length >= 10, `At least 10 verified statutory claims registered (found ${claimRegistry.claims?.length})`);

const claimIds = new Set();
claimRegistry.claims.forEach(clm => {
  assert(clm.claimId && !claimIds.has(clm.claimId), `Claim ID ${clm.claimId} is unique`);
  claimIds.add(clm.claimId);
  assert(clm.proposition && clm.proposition.length > 30, `Claim ${clm.claimId} has substantive proposition`);
  assert(clm.statutoryReference && clm.statutoryReference.length > 10, `Claim ${clm.claimId} has specific statutory reference`);
  assert(['legal_rule', 'tax_rule', 'regulatory_requirement', 'current_fact'].includes(clm.classification), `Claim ${clm.claimId} has valid classification`);
  clm.sourceIds.forEach(sid => {
    assert(sourceIds.has(sid), `Claim ${clm.claimId} citation ${sid} exists in source registry`);
  });
});

// 5. Canonical Concept Registry Validation
console.log('\n[5/15] Validating Canonical Concept Registry (concept-registry.json)...');
const conceptRegistryPath = path.resolve('data/concepts/concept-registry.json');
assert(fs.existsSync(conceptRegistryPath), 'concept-registry.json exists');

const conceptRegistry = JSON.parse(fs.readFileSync(conceptRegistryPath, 'utf8'));
assert(Array.isArray(conceptRegistry.concepts) && conceptRegistry.concepts.length >= 50, `At least 50 concepts registered (found ${conceptRegistry.concepts?.length})`);
const conceptIds = new Set();
conceptRegistry.concepts.forEach(c => {
  assert(c.id && !conceptIds.has(c.id), `Concept ID ${c.id} is valid and unique`);
  conceptIds.add(c.id);
  assert(c.canonicalTerm && (c.shortDefinition || c.definitionPlainEnglish), `Concept ${c.id} has term and definition`);
  const cat = c.categoryId || c.domainId;
  assert(categoryIds.has(cat), `Concept ${c.id} references valid category ${cat}`);
});

// 6. Article Coverage Matrix Validation
console.log('\n[6/15] Validating Article Coverage Matrix (coverage-matrix.json)...');
const coverageMatrixPath = path.resolve('data/publications/coverage-matrix.json');
assert(fs.existsSync(coverageMatrixPath), 'coverage-matrix.json exists');
const coverageMatrix = JSON.parse(fs.readFileSync(coverageMatrixPath, 'utf8'));
assert(Array.isArray(coverageMatrix.publications) && coverageMatrix.publications.length >= 15, `At least 15 planned publications mapped (found ${coverageMatrix.publications?.length})`);

const publicationSlugs = new Set();
coverageMatrix.publications.forEach(pub => {
  assert(pub.articleId && pub.workingTitle, `Publication ${pub.articleId} has valid title`);
  assert(!publicationSlugs.has(pub.slug), `Publication slug ${pub.slug} is unique`);
  publicationSlugs.add(pub.slug);
  assert(categoryIds.has(pub.primaryDomainId), `Publication ${pub.articleId} maps to valid domain ${pub.primaryDomainId}`);
  assert(pub.estimatedWordCount && pub.estimatedWordCount.includes('10000'), `Publication ${pub.articleId} targets >10,000 words`);
});

// 7. Calculator Inventory Validation (40+ Calculators across 7 Clusters)
console.log('\n[7/15] Validating Financial Calculator Inventory (calculator-inventory.json)...');
const calcInventoryPath = path.resolve('data/calculators/calculator-inventory.json');
assert(fs.existsSync(calcInventoryPath), 'calculator-inventory.json exists');
const calcInventory = JSON.parse(fs.readFileSync(calcInventoryPath, 'utf8'));
assert(Array.isArray(calcInventory.calculators) && calcInventory.calculators.length >= 40, `At least 40 calculators documented (found ${calcInventory.calculators?.length})`);
assert(Array.isArray(calcInventory.clusters) && calcInventory.clusters.length === 7, `All 7 required clusters represented (found ${calcInventory.clusters?.length})`);

const calcIds = new Set();
calcInventory.calculators.forEach(calc => {
  assert(calc.id && !calcIds.has(calc.id), `Calculator ID ${calc.id} is unique`);
  calcIds.add(calc.id);
  assert(calc.title && calc.userProblem, `Calculator ${calc.id} has title and problem statement`);
  assert(Array.isArray(calc.inputs) && calc.inputs.length > 0, `Calculator ${calc.id} specifies inputs`);
  assert(Array.isArray(calc.outputs) && calc.outputs.length > 0, `Calculator ${calc.id} specifies outputs`);
  assert(calc.formulaSpoken && calc.formulaSpoken.length > 30, `Calculator ${calc.id} has spoken paragraph formula`);
  assert(calcInventory.clusters.includes(calc.cluster), `Calculator ${calc.id} belongs to valid cluster ${calc.cluster}`);
});

// 8. Public Data Sources Catalogue Validation
console.log('\n[8/15] Validating Public Data Source Catalogue (data-source-catalogue.json)...');
const dataCatalogPath = path.resolve('data/sources/data-source-catalogue.json');
assert(fs.existsSync(dataCatalogPath), 'data-source-catalogue.json exists');
const dataCatalog = JSON.parse(fs.readFileSync(dataCatalogPath, 'utf8'));
assert(Array.isArray(dataCatalog.dataSources) && dataCatalog.dataSources.length >= 10, `At least 10 free public data sources catalogued (found ${dataCatalog.dataSources?.length})`);

dataCatalog.dataSources.forEach(ds => {
  assert(ds.datasetId && ds.name, `Dataset ${ds.datasetId} has valid name`);
  assert(ds.officialUrl && ds.officialUrl.startsWith('https://'), `Dataset ${ds.datasetId} has secure official URL`);
  assert(ds.authenticationRequired === false, `Dataset ${ds.datasetId} adheres to free-first unauthenticated policy`);
  assert(ds.cost.toLowerCase().includes('free'), `Dataset ${ds.datasetId} is zero-cost`);
});

// 9. Knowledge Graph Nodes Validation
console.log('\n[9/15] Validating Knowledge Graph Nodes (nodes.json)...');
const nodesPath = path.resolve('data/knowledge-graph/nodes.json');
assert(fs.existsSync(nodesPath), 'nodes.json exists');
const nodesData = JSON.parse(fs.readFileSync(nodesPath, 'utf8'));
assert(Array.isArray(nodesData.nodes) && nodesData.nodes.length >= 60, `At least 60 typed knowledge graph nodes defined (found ${nodesData.nodes?.length})`);

const validEntityTypes = [
  'domain', 'concept', 'financial_instrument', 'regulator', 'institution',
  'act_or_law', 'risk', 'calculator', 'publication', 'claim', 'article', 'dataset', 'formula'
];
const kgNodeIds = new Set();
nodesData.nodes.forEach(node => {
  const nid = node.nodeId || node.id;
  assert(nid && !kgNodeIds.has(nid), `Knowledge graph node ${nid} is unique`);
  kgNodeIds.add(nid);
  assert(validEntityTypes.includes(node.entityType), `Node ${nid} has valid entity type ${node.entityType}`);
  assert(node.canonicalName && node.canonicalName.length > 0, `Node ${nid} has canonical name`);
});

// 10. Knowledge Graph Relationships Validation
console.log('\n[10/15] Validating Knowledge Graph Relationships (relationships.json)...');
const relsPath = path.resolve('data/knowledge-graph/relationships.json');
assert(fs.existsSync(relsPath), 'relationships.json exists');
const relsData = JSON.parse(fs.readFileSync(relsPath, 'utf8'));
assert(Array.isArray(relsData.relationships) && relsData.relationships.length >= 40, `At least 40 semantic relationships mapped (found ${relsData.relationships?.length})`);

const relIds = new Set();
const validPredicates = [
  'governed_by', 'regulated_by', 'taxed_under', 'prohibits', 'mitigates_risk',
  'exposes_to', 'has_calculator', 'requires_prerequisite', 'supported_by',
  'supersedes', 'belongs_to', 'depends_on', 'defined_by', 'is_a', 'alias_of', 'explained_by'
];
relsData.relationships.forEach(rel => {
  assert(rel.relationId && !relIds.has(rel.relationId), `Relationship ID ${rel.relationId} is unique`);
  relIds.add(rel.relationId);
  assert(validPredicates.includes(rel.predicate), `Relationship ${rel.relationId} has valid predicate ${rel.predicate}`);
  assert(rel.evidence && rel.evidence.length > 10, `Relationship ${rel.relationId} has statutory or analytical evidence`);
});

// 11. Canonical Formula Registry Validation
console.log('\n[11/15] Validating Canonical Formula Registry (formula-registry.json)...');
const formulaPath = path.resolve('data/calculators/formula-registry.json');
assert(fs.existsSync(formulaPath), 'formula-registry.json exists');
const formulaData = JSON.parse(fs.readFileSync(formulaPath, 'utf8'));
assert(Array.isArray(formulaData.formulas) && formulaData.formulas.length >= 14, `At least 14 canonical formulas defined (found ${formulaData.formulas?.length})`);

const formulaIds = new Set();
formulaData.formulas.forEach(form => {
  assert(form.formulaId && !formulaIds.has(form.formulaId), `Formula ID ${form.formulaId} is unique`);
  formulaIds.add(form.formulaId);
  assert(form.name && form.mathematicalExpression, `Formula ${form.formulaId} has name and mathematical expression`);
  assert(form.plainEnglishInterpretation && form.plainEnglishInterpretation.length > 30, `Formula ${form.formulaId} has audio-native spoken interpretation`);
  assert(Array.isArray(form.variables) && form.variables.length > 0, `Formula ${form.formulaId} specifies variable definitions`);
});

// 12. Structured Learning Paths Validation
console.log('\n[12/15] Validating Structured Learning Paths (learning-paths.json)...');
const pathsFile = path.resolve('data/publications/learning-paths.json');
assert(fs.existsSync(pathsFile), 'learning-paths.json exists');
const pathsData = JSON.parse(fs.readFileSync(pathsFile, 'utf8'));
assert(Array.isArray(pathsData.learningPaths) && pathsData.learningPaths.length >= 12, `At least 12 structured learning paths defined (found ${pathsData.learningPaths?.length})`);

const pathIds = new Set();
pathsData.learningPaths.forEach(lp => {
  assert(lp.pathId && !pathIds.has(lp.pathId), `Learning path ID ${lp.pathId} is unique`);
  pathIds.add(lp.pathId);
  assert(lp.title && lp.targetAudience, `Learning path ${lp.pathId} has title and target audience`);
  assert(Array.isArray(lp.curriculumStages) && lp.curriculumStages.length >= 3, `Learning path ${lp.pathId} has at least 3 structured stages`);
});

// 13. Prioritized Coverage Gaps Validation
console.log('\n[13/15] Validating Prioritized Coverage Gaps (coverage-gaps.json)...');
const covGapsPath = path.resolve('data/research/coverage-gaps.json');
assert(fs.existsSync(covGapsPath), 'coverage-gaps.json exists');
const covGapsData = JSON.parse(fs.readFileSync(covGapsPath, 'utf8'));
assert(Array.isArray(covGapsData.gaps) && covGapsData.gaps.length >= 10, `At least 10 prioritized coverage gaps defined (found ${covGapsData.gaps?.length})`);

const validPriorityBands = ['P0', 'P1', 'P2', 'P3', 'P4'];
const covGapIds = new Set();
covGapsData.gaps.forEach(gap => {
  assert(gap.gapId && !covGapIds.has(gap.gapId), `Coverage gap ID ${gap.gapId} is unique`);
  covGapIds.add(gap.gapId);
  assert(validPriorityBands.includes(gap.priority), `Coverage gap ${gap.gapId} has valid priority band ${gap.priority}`);
  assert(gap.missingArea && gap.missingArea.length > 10, `Coverage gap ${gap.gapId} defines substantive missing area`);
  assert(gap.whyItMatters && gap.whyItMatters.length > 15, `Coverage gap ${gap.gapId} documents consumer impact`);
  assert(gap.resolutionCriteria && gap.resolutionCriteria.length > 10, `Coverage gap ${gap.gapId} specifies resolution criteria`);
});

// 14. Taxonomy Research Gaps Validation
console.log('\n[14/15] Validating Legacy Taxonomy Research Gaps Registry...');
const gapsPath = path.resolve('data/taxonomy/research-gaps.json');
assert(fs.existsSync(gapsPath), 'research-gaps.json exists');

const gapsData = JSON.parse(fs.readFileSync(gapsPath, 'utf8'));
assert(Array.isArray(gapsData.gaps) && gapsData.gaps.length > 0, `Research gaps tracked (found ${gapsData.gaps?.length})`);
gapsData.gaps.forEach(g => {
  assert(categoryIds.has(g.categoryId), `Gap ${g.gapId} references valid category ${g.categoryId}`);
  assert(['High', 'Medium', 'Low'].includes(g.severity), `Gap ${g.gapId} has valid severity`);
});

// 15. Article Registry, Substantive Word Counts, GitHub Pages, and Secret Scanning
console.log('\n[15/15] Validating Article Word Counts, GitHub Pages Config, and Secret Exposure...');
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

// GitHub Pages configuration check
const astroConfigPath = path.resolve('astro.config.mjs');
assert(fs.existsSync(astroConfigPath), 'astro.config.mjs exists');
const astroConfigContent = fs.readFileSync(astroConfigPath, 'utf8');
assert(astroConfigContent.includes("base: '/dhanpedia-india'"), "Astro config specifies base: '/dhanpedia-india'");
assert(astroConfigContent.includes("site: 'https://chirag127.github.io'"), "Astro config specifies site: 'https://chirag127.github.io'");
assert(astroConfigContent.includes("output: 'static'"), "Astro config specifies output: 'static'");

// Secret scanning check
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
  console.log('✓ All Prompt 003 quality gates passed successfully!\n');
}
