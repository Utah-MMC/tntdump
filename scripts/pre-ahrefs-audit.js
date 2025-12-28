#!/usr/bin/env node

/**
 * Comprehensive Ahrefs Pre-Audit Script
 * Checks for all common Ahrefs SEO issues before running a full audit
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://tntdump.com';
const MAX_TITLE_LENGTH = 60;
const MIN_TITLE_LENGTH = 30;
const MAX_DESC_LENGTH = 160;
const MIN_DESC_LENGTH = 120;
const MAX_IMAGE_SIZE_KB = 500; // 500KB threshold

const DETAILED = process.argv.includes('--detailed');
const EXPORT = process.argv.includes('--export');

const issues = {
  'h1-missing': [],
  'title-too-long': [],
  'title-too-short': [],
  'desc-too-short': [],
  'desc-too-long': [],
  'title-serb-mismatch': [],
  'h1-changed': [],
  'og-url-mismatch': [],
  'og-incomplete': [],
  'duplicate-canonical': [],
  'missing-canonical': [],
  'image-too-large': [],
  'image-broken': [],
  'broken-image-page': [],
  'not-in-sitemap': [],
  'structured-data-errors': [],
};

const metadataMap = new Map();
const canonicalMap = new Map();
const sitemapUrls = new Set();

// Load sitemap URLs
function loadSitemapUrls() {
  console.log('📄 Loading sitemap URLs...');
  
  const sitemapFiles = [
    'public/sitemap.xml',
    'public/sitemap-pages.xml',
    'public/sitemap-cities.xml',
    'public/sitemap-posts.xml',
  ];
  
  sitemapFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const urlMatches = content.match(/<loc>(.*?)<\/loc>/g);
      if (urlMatches) {
        urlMatches.forEach(match => {
          const url = match.replace(/<\/?loc>/g, '');
          sitemapUrls.add(url.replace(/\/$/, ''));
        });
      }
    }
  });
  
  console.log(`   Found ${sitemapUrls.size} URLs in sitemaps`);
}

// Extract route from file path
function getRouteFromPath(filePath, baseDir) {
  const relative = path.relative(baseDir, filePath);
  const route = relative
    .replace(/\\/g, '/')
    .replace(/(^|\/)page\.tsx$/, '')
    .replace(/(^|\/)layout\.tsx$/, '')
    .replace(/^app/, '')
    .replace(/\[([^\]]+)\]/g, (_, param) => `:${param}`)
    || '/';
  
  return route === '/' ? '/' : route;
}

function isRedirectOnlyPage(content) {
  if (!content.includes('redirect(')) return false;
  return !content.includes('<main') && !content.includes('<section') && !content.includes('<h1');
}

function isLegacyBlogRoute(route) {
  return route.startsWith('blog/') && route !== 'blog';
}

function isDuplicateSlugRoute(route) {
  const parts = route.split('/').filter(Boolean);
  return parts.length >= 2 && parts[parts.length - 1] === parts[parts.length - 2];
}

// Check for H1 tags in JSX
function checkH1Tags(content, route) {
  // Check for H1 in JSX
  const h1Matches = content.match(/<h1[^>]*>(.*?)<\/h1>/gs);
  
  if (!h1Matches || h1Matches.length === 0) {
    const hasHeroHeading =
      /<HeroSection(\s|\/|>)/.test(content) ||
      /<Hero(\s|\/|>)/.test(content) ||
      /<ServicePageTemplate(\s|\/|>)/.test(content);

    if (hasHeroHeading) {
      return null;
    }

    issues['h1-missing'].push({ route, file: route });
    return null;
  }
  
  // Check if H1 is empty
  const h1Content = h1Matches[0].replace(/<[^>]+>/g, '').trim();
  if (!h1Content || h1Content.length === 0) {
    issues['h1-missing'].push({ route, file: route, reason: 'Empty H1 tag' });
    return null;
  }
  
  return h1Content;
}

// Extract a balanced object literal starting at the next "{"
function extractObjectLiteral(content, startIndex) {
  const openIndex = content.indexOf('{', startIndex);
  if (openIndex === -1) return null;

  let depth = 0;
  let inSingle = false;
  let inDouble = false;
  let inTemplate = false;
  let escaped = false;

  for (let i = openIndex; i < content.length; i++) {
    const ch = content[i];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (ch === '\\') {
      escaped = true;
      continue;
    }

    if (inSingle) {
      if (ch === "'") inSingle = false;
      continue;
    }

    if (inDouble) {
      if (ch === '"') inDouble = false;
      continue;
    }

    if (inTemplate) {
      if (ch === '`') inTemplate = false;
      continue;
    }

    if (ch === "'") {
      inSingle = true;
      continue;
    }

    if (ch === '"') {
      inDouble = true;
      continue;
    }

    if (ch === '`') {
      inTemplate = true;
      continue;
    }

    if (ch === '{') depth++;
    if (ch === '}') {
      depth--;
      if (depth === 0) {
        return content.slice(openIndex, i + 1);
      }
    }
  }

  return null;
}

function matchStringValue(source, key) {
  if (!source) return null;
  const regex = new RegExp(`${key}\\s*:\\s*(?:'([^']*)'|"([^"]*)"|\\\`([^\\\`]*)\\\`)`);
  const match = source.match(regex);
  return match ? (match[1] || match[2] || match[3]) : null;
}

function hasKey(source, key) {
  return !!(source && new RegExp(`${key}\\s*:`).test(source));
}

function extractMetadataBlock(content) {
  const staticIndex = content.indexOf('export const metadata');
  if (staticIndex !== -1) {
    return extractObjectLiteral(content, staticIndex);
  }

  const generateIndex = content.indexOf('generateMetadata');
  if (generateIndex !== -1) {
    const functionBody = extractObjectLiteral(content, generateIndex);
    if (functionBody) {
      let returnIndex = functionBody.indexOf('return');
      let bestMatch = null;
      while (returnIndex !== -1) {
        const candidate = extractObjectLiteral(functionBody, returnIndex);
        if (candidate && (!bestMatch || candidate.length > bestMatch.length)) {
          bestMatch = candidate;
        }
        returnIndex = functionBody.indexOf('return', returnIndex + 6);
      }
      if (bestMatch) return bestMatch;
    }
  }

  return null;
}

// Extract metadata from file
function extractMetadata(content, route) {
  const metadata = {
    title: null,
    description: null,
    canonical: null,
    ogUrl: null,
    ogTitle: null,
    ogDescription: null,
    ogImage: null,
    hasMetadata: false,
  };

  const metadataContent = extractMetadataBlock(content);
  if (!metadataContent) return metadata;

  metadata.hasMetadata = true;

  metadata.title = matchStringValue(metadataContent, 'title');
  metadata.description = matchStringValue(metadataContent, 'description');

  const canonicalValue = matchStringValue(metadataContent, 'canonical');
  if (canonicalValue) {
    metadata.canonical = canonicalValue;
  } else {
  const alternatesIndex = metadataContent.indexOf('alternates');
  const alternatesBlock = alternatesIndex !== -1
      ? extractObjectLiteral(metadataContent, alternatesIndex)
      : null;
  const alternatesCanonical = matchStringValue(alternatesBlock, 'canonical');
  if (alternatesCanonical) metadata.canonical = alternatesCanonical;
  if (!metadata.canonical && hasKey(alternatesBlock, 'canonical')) {
    metadata.canonical = '__dynamic__';
  }
  }

  const ogIndex = metadataContent.indexOf('openGraph');
  const ogBlock = ogIndex !== -1 ? extractObjectLiteral(metadataContent, ogIndex) : null;

  metadata.ogUrl = matchStringValue(ogBlock, 'url');
  metadata.ogTitle = matchStringValue(ogBlock, 'title');
  metadata.ogDescription = matchStringValue(ogBlock, 'description');

  if (ogBlock) {
    const ogImageMatch = ogBlock.match(/images:\s*\[[^\]]*?(?:url:\s*['"]([^'"]+)['"]|['"]([^'"]+)['"])/s);
    if (ogImageMatch) {
      metadata.ogImage = ogImageMatch[1] || ogImageMatch[2];
    }
    if (!metadata.ogUrl && hasKey(ogBlock, 'url')) metadata.ogUrl = '__dynamic__';
    if (!metadata.ogTitle && hasKey(ogBlock, 'title')) metadata.ogTitle = '__dynamic__';
    if (!metadata.ogDescription && hasKey(ogBlock, 'description')) metadata.ogDescription = '__dynamic__';
    if (!metadata.ogImage && hasKey(ogBlock, 'images')) metadata.ogImage = '__dynamic__';
  }

  return metadata;
}

// Validate title length
function validateTitle(title, route) {
  if (!title) return;
  
  if (title.length > MAX_TITLE_LENGTH) {
    issues['title-too-long'].push({
      route,
      title,
      length: title.length,
      max: MAX_TITLE_LENGTH,
    });
  }
  
  if (title.length < MIN_TITLE_LENGTH) {
    issues['title-too-short'].push({
      route,
      title,
      length: title.length,
      min: MIN_TITLE_LENGTH,
    });
  }
}

// Validate description length
function validateDescription(desc, route) {
  if (!desc) return;
  
  if (desc.length < MIN_DESC_LENGTH) {
    issues['desc-too-short'].push({
      route,
      description: desc,
      length: desc.length,
      min: MIN_DESC_LENGTH,
    });
  }
  
  if (desc.length > MAX_DESC_LENGTH) {
    issues['desc-too-long'].push({
      route,
      description: desc,
      length: desc.length,
      max: MAX_DESC_LENGTH,
    });
  }
}

// Check Open Graph completeness
function checkOpenGraph(metadata, route) {
  const required = ['ogUrl', 'ogTitle', 'ogDescription', 'ogImage'];
  const missing = required.filter(field => !metadata[field]);
  
  if (missing.length > 0 && metadata.hasMetadata) {
    issues['og-incomplete'].push({
      route,
      missing: missing.join(', '),
    });
  }
}

// Check canonical vs OG URL match
function checkCanonicalMatch(metadata, route) {
  if (metadata.canonical && metadata.ogUrl) {
    // Normalize URLs for comparison
    const canonical = metadata.canonical.replace(/\/$/, '');
    const ogUrl = metadata.ogUrl.replace(/\/$/, '');
    
    if (canonical !== ogUrl) {
      issues['og-url-mismatch'].push({
        route,
        canonical,
        ogUrl,
      });
    }
  }
}

// Check for duplicate metadata
function checkDuplicates(metadata, route) {
  if (metadata.title) {
    const key = `title:${metadata.title}`;
    if (metadataMap.has(key)) {
      issues['title-serb-mismatch'].push({
        route,
        duplicateOf: metadataMap.get(key),
        title: metadata.title,
      });
    } else {
      metadataMap.set(key, route);
    }
  }
  
  if (metadata.canonical) {
    const key = `canonical:${metadata.canonical}`;
    if (canonicalMap.has(key)) {
      issues['duplicate-canonical'].push({
        route,
        duplicateOf: canonicalMap.get(key),
        canonical: metadata.canonical,
      });
    } else {
      canonicalMap.set(key, route);
    }
  } else if (metadata.hasMetadata) {
    issues['missing-canonical'].push({ route });
  }
}

// Check images
function checkImages(content, route) {
  const imageMatches = content.match(/<Image[^>]+src=['"]([^'"]+)['"]/g) ||
                      content.match(/<img[^>]+src=['"]([^'"]+)['"]/g);
  
  if (!imageMatches) return;
  
  const imagesDir = path.join(__dirname, '..', 'public');
  let hasBrokenImage = false;
  
  imageMatches.forEach(match => {
    const srcMatch = match.match(/src=['"]([^'"]+)['"]/);
    if (!srcMatch) return;
    
    let imagePath = srcMatch[1];

    // Skip remote images
    if (/^https?:\/\//.test(imagePath) || imagePath.startsWith('//')) {
      return;
    }
    
    // Remove leading slash and query params
    imagePath = imagePath.replace(/^\//, '').split('?')[0];
    const fullPath = path.join(imagesDir, imagePath);
    
    // Check if image exists
    if (!fs.existsSync(fullPath)) {
      issues['image-broken'].push({
        route,
        image: imagePath,
      });
      hasBrokenImage = true;
    } else {
      // Check file size
      const stats = fs.statSync(fullPath);
      const sizeKB = stats.size / 1024;
      
      if (sizeKB > MAX_IMAGE_SIZE_KB) {
        issues['image-too-large'].push({
          route,
          image: imagePath,
          size: `${sizeKB.toFixed(1)}KB`,
          max: `${MAX_IMAGE_SIZE_KB}KB`,
        });
      }
    }
  });
  
  if (hasBrokenImage) {
    issues['broken-image-page'].push({ route });
  }
}

// Scan all pages
function scanPages() {
  console.log('🔍 Scanning pages...');
  
  const appDir = path.join(__dirname, '..', 'app');
  
  function scanDirectory(dir, relativePath = '') {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      // Skip node_modules, .next, etc.
      if (file.startsWith('.') || file === 'node_modules') continue;
      
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, path.join(relativePath, file));
      } else if (file === 'page.tsx' || file === 'layout.tsx') {
        const content = fs.readFileSync(fullPath, 'utf8');
        const route = getRouteFromPath(fullPath, appDir);
        
        // Skip test pages
        if (route.includes('/test') || route.startsWith('test')) continue;
        if (isLegacyBlogRoute(route)) continue;
        if (isDuplicateSlugRoute(route)) continue;
        if (isRedirectOnlyPage(content)) continue;
        
        // Extract and validate metadata
        const metadata = extractMetadata(content, route);
        
        // Check H1 (only for page.tsx, not layout.tsx)
        if (file === 'page.tsx') {
          const h1 = checkH1Tags(content, route);
          
          // Check if H1 matches title (H1 changed issue)
          if (h1 && metadata.title) {
            const normalizedH1 = h1.replace(/\{[^}]*\}/g, ' ').replace(/\s+/g, ' ').trim();
            const normalizedTitle = metadata.title.replace(/\s*\|\s*TNT Dumpsters.*$/i, '').trim();
            const normalizedTitleShort = normalizedTitle.replace(/\.\.\.$/, '').trim();
            const h1Lower = normalizedH1.toLowerCase();
            const titleLower = normalizedTitleShort.toLowerCase();

            const h1Words = new Set(h1Lower.split(/[^a-z0-9]+/).filter((w) => w.length > 2));
            const titleWords = new Set(titleLower.split(/[^a-z0-9]+/).filter((w) => w.length > 2));
            let overlap = 0;
            h1Words.forEach((word) => {
              if (titleWords.has(word)) overlap += 1;
            });
            const overlapRatio = h1Words.size ? overlap / h1Words.size : 0;

            const isMatch =
              normalizedH1 === normalizedTitle ||
              normalizedH1 === normalizedTitleShort ||
              titleLower.startsWith(h1Lower) ||
              h1Lower.startsWith(titleLower) ||
              overlapRatio >= 0.6;

            if (!isMatch) {
              issues['h1-changed'].push({
                route,
                h1: normalizedH1,
                title: metadata.title,
              });
            }
          }
        }
        
        // Validate metadata
        if (metadata.hasMetadata) {
          validateTitle(metadata.title, route);
          validateDescription(metadata.description, route);
          checkOpenGraph(metadata, route);
          checkCanonicalMatch(metadata, route);
          if (file !== 'layout.tsx') {
            checkDuplicates(metadata, route);
          }
        }
        
        // Check images
        checkImages(content, route);
        
        // Check sitemap coverage
        const fullUrl = `${SITE_URL}${route === '/' ? '' : '/' + route}`.replace(/\/$/, '');
        if (
          !route.includes(':') &&
          file === 'page.tsx' &&
          !route.includes('/test') &&
          !route.startsWith('test') &&
          route !== 'cart' &&
          route !== 'order-confirmation' &&
          !route.includes('/cart') &&
          !route.includes('/order-confirmation') &&
          !isLegacyBlogRoute(route) &&
          !isDuplicateSlugRoute(route) &&
          !isRedirectOnlyPage(content) &&
          !sitemapUrls.has(fullUrl)
        ) {
          issues['not-in-sitemap'].push({ route, url: fullUrl });
        }
      }
    }
  }
  
  scanDirectory(appDir);
}

// Generate detailed report
function generateDetailedReport() {
  console.log('\n📋 Detailed Issue Report:\n');
  
  Object.entries(issues).forEach(([key, arr]) => {
    if (arr.length === 0) return;
    
    const categoryNames = {
      'h1-missing': 'H1 tag missing or empty',
      'title-too-long': 'Title too long',
      'title-too-short': 'Title too short',
      'desc-too-short': 'Meta description too short',
      'desc-too-long': 'Meta description too long',
      'title-serb-mismatch': 'Page and SERP titles do not match',
      'h1-changed': 'H1 tag changed',
      'og-url-mismatch': 'Open Graph URL not matching canonical',
      'og-incomplete': 'Open Graph tags incomplete',
      'duplicate-canonical': 'Duplicate pages without canonical',
      'missing-canonical': 'Missing canonical tags',
      'image-too-large': 'Image file size too large',
      'image-broken': 'Image broken',
      'broken-image-page': 'Page has broken image',
      'not-in-sitemap': 'Indexable page not in sitemap',
      'structured-data-errors': 'Structured data errors',
    };
    
    console.log(`\n${categoryNames[key] || key} (${arr.length}):`);
    console.log('-'.repeat(60));
    
    arr.slice(0, DETAILED ? 100 : 10).forEach((issue, idx) => {
      console.log(`  ${idx + 1}. ${issue.route || issue.url || 'N/A'}`);
      if (issue.title) console.log(`     Title: ${issue.title}`);
      if (issue.description) console.log(`     Description: ${issue.description}`);
      if (issue.canonical) console.log(`     Canonical: ${issue.canonical}`);
      if (issue.ogUrl) console.log(`     OG URL: ${issue.ogUrl}`);
      if (issue.image) console.log(`     Image: ${issue.image}`);
      if (issue.size) console.log(`     Size: ${issue.size}`);
      if (issue.missing) console.log(`     Missing: ${issue.missing}`);
      if (issue.length) console.log(`     Length: ${issue.length} chars`);
    });
    
    if (arr.length > (DETAILED ? 100 : 10)) {
      console.log(`  ... and ${arr.length - (DETAILED ? 100 : 10)} more`);
    }
  });
}

// Export to JSON
function exportReport() {
  const report = {
    timestamp: new Date().toISOString(),
    site: SITE_URL,
    summary: {},
    issues: {},
  };
  
  Object.entries(issues).forEach(([key, arr]) => {
    report.summary[key] = arr.length;
    report.issues[key] = arr;
  });
  
  const reportPath = path.join(__dirname, '..', 'ahrefs-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📄 Report exported to: ${reportPath}`);
}

// Generate report
function generateReport() {
  console.log('\n📊 Ahrefs Pre-Audit Report\n');
  console.log('='.repeat(60));
  
  const totalIssues = Object.values(issues).reduce((sum, arr) => sum + arr.length, 0);
  
  if (totalIssues === 0) {
    console.log('\n✅ No issues found! Site is ready for Ahrefs audit.\n');
    return;
  }
  
  console.log(`\nTotal Issues Found: ${totalIssues}\n`);
  
  // General SEO Issues
  console.log('📋 General SEO Issues:');
  if (issues['h1-missing'].length > 0) {
    console.log(`   🔴 H1 tag missing or empty: ${issues['h1-missing'].length}`);
    if (DETAILED && issues['h1-missing'].length <= 10) {
      issues['h1-missing'].slice(0, 10).forEach(issue => {
        console.log(`      - ${issue.route}`);
      });
    }
  }
  
  if (issues['title-too-long'].length > 0) {
    console.log(`   ⚡ Title too long: ${issues['title-too-long'].length}`);
  }
  
  if (issues['title-too-short'].length > 0) {
    console.log(`   ⚡ Title too short: ${issues['title-too-short'].length}`);
  }
  
  if (issues['desc-too-short'].length > 0) {
    console.log(`   ⚡ Meta description too short: ${issues['desc-too-short'].length}`);
  }
  
  if (issues['desc-too-long'].length > 0) {
    console.log(`   ⚡ Meta description too long: ${issues['desc-too-long'].length}`);
  }
  
  if (issues['title-serb-mismatch'].length > 0) {
    console.log(`   ⚡ Page and SERP titles do not match: ${issues['title-serb-mismatch'].length}`);
  }
  
  if (issues['h1-changed'].length > 0) {
    console.log(`   ⚠️  H1 tag changed: ${issues['h1-changed'].length}`);
  }
  
  // Social Tags
  console.log('\n📱 Social Tags:');
  if (issues['og-url-mismatch'].length > 0) {
    console.log(`   ⚡ Open Graph URL not matching canonical: ${issues['og-url-mismatch'].length}`);
  }
  
  if (issues['og-incomplete'].length > 0) {
    console.log(`   ⚠️  Open Graph tags incomplete: ${issues['og-incomplete'].length}`);
  }
  
  // Duplicates
  console.log('\n🔄 Duplicates:');
  if (issues['duplicate-canonical'].length > 0) {
    console.log(`   🔴 Duplicate pages without canonical: ${issues['duplicate-canonical'].length}`);
  }
  
  if (issues['missing-canonical'].length > 0) {
    console.log(`   ⚠️  Missing canonical tags: ${issues['missing-canonical'].length}`);
  }
  
  // Images
  console.log('\n🖼️  Images:');
  if (issues['image-too-large'].length > 0) {
    console.log(`   🔴 Image file size too large: ${issues['image-too-large'].length}`);
  }
  
  if (issues['image-broken'].length > 0) {
    console.log(`   🔴 Image broken: ${issues['image-broken'].length}`);
  }
  
  if (issues['broken-image-page'].length > 0) {
    console.log(`   🔴 Page has broken image: ${issues['broken-image-page'].length}`);
  }
  
  // Sitemaps
  console.log('\n🗺️  Sitemaps:');
  if (issues['not-in-sitemap'].length > 0) {
    console.log(`   ⚠️  Indexable page not in sitemap: ${issues['not-in-sitemap'].length}`);
  }
  
  // Summary
  console.log('\n' + '='.repeat(60));
  console.log('\n📈 Issue Summary:');
  Object.entries(issues).forEach(([key, arr]) => {
    if (arr.length > 0) {
      const icon = key.includes('missing') || key.includes('broken') ? '🔴' : 
                   key.includes('too-') ? '⚡' : '⚠️';
      console.log(`   ${icon} ${key}: ${arr.length}`);
    }
  });
  
  if (DETAILED) {
    generateDetailedReport();
  }
  
  if (EXPORT) {
    exportReport();
  }
  
  console.log('\n💡 Usage:');
  console.log('   npm run audit:ahrefs              - Summary report');
  console.log('   npm run audit:ahrefs -- --detailed - Detailed report');
  console.log('   npm run audit:ahrefs -- --export   - Export to JSON\n');
}

// Check structured data in schema files
function checkStructuredData() {
  console.log('🔍 Checking structured data...');
  
  const schemaFile = path.join(__dirname, '..', 'lib', 'schema.ts');
  if (fs.existsSync(schemaFile)) {
    const content = fs.readFileSync(schemaFile, 'utf8');
    
    // Basic validation - check for common schema issues
    const schemaMatches = content.match(/@type["\s]*:["\s]*["']([^"']+)["']/g);
    if (schemaMatches) {
      // Count potential issues
      const hasLocalBusiness = content.includes('LocalBusiness');
      const hasOrganization = content.includes('Organization');
      
      // Note: Full validation would require parsing JSON-LD, which is complex
      // This is a placeholder for structured data checking
      console.log(`   Found ${schemaMatches.length} schema types`);
    }
  }
}

// Main execution
console.log('🚀 Running comprehensive Ahrefs pre-audit...\n');

loadSitemapUrls();
scanPages();
checkStructuredData();
generateReport();

const totalIssues = Object.values(issues).reduce((sum, arr) => sum + arr.length, 0);
process.exit(totalIssues > 0 ? 1 : 0);
