#!/usr/bin/env node

/**
 * Fix Ahrefs Audit Issues Script
 * Automatically fixes common SEO issues found by the Ahrefs audit
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const SITE_URL = 'https://tntdump.com';
const MAX_TITLE_LENGTH = 60;
const MIN_TITLE_LENGTH = 30;
const MAX_DESC_LENGTH = 160;
const MIN_DESC_LENGTH = 120;

const DRY_RUN = process.argv.includes('--dry-run');
const appDir = path.join(__dirname, '..', 'app');

let fixesApplied = 0;
let fixesSkipped = 0;
const fixLog = [];

// Helper: Truncate text intelligently
function truncateText(text, maxLength, suffix = '...') {
  if (text.length <= maxLength) return text;
  const truncated = text.substring(0, maxLength - suffix.length);
  const lastSpace = truncated.lastIndexOf(' ');
  if (lastSpace > maxLength * 0.7) {
    return truncated.substring(0, lastSpace) + suffix;
  }
  return truncated + suffix;
}

// Helper: Expand text intelligently
function expandText(text, minLength, context = '') {
  if (text.length >= minLength) return text;
  const needed = minLength - text.length;
  const addition = context ? ` ${context.substring(0, needed)}` : ` - Professional dumpster rental services`;
  return text + addition.substring(0, needed);
}

// Helper: Generate canonical URL from route
function generateCanonical(route) {
  if (route === '/' || route === '') return SITE_URL;
  return `${SITE_URL}${route.startsWith('/') ? route : '/' + route}`;
}

// Helper: Extract route from file path
function getRouteFromPath(filePath, baseDir) {
  const relative = path.relative(baseDir, filePath);
  const route = relative
    .replace(/\\/g, '/')
    .replace(/\/page\.tsx$/, '')
    .replace(/\/layout\.tsx$/, '')
    .replace(/^app/, '')
    .replace(/\[([^\]]+)\]/g, (_, param) => `:${param}`)
    || '/';
  
  return route === '/' ? '/' : route;
}

// Fix missing H1 tags
function fixMissingH1(filePath, route, metadata) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if H1 already exists (including in components)
  if (content.match(/<h1[^>]*>.*?<\/h1>/s) || content.includes('HeroSection')) {
    // HeroSection component likely has H1, skip
    return false;
  }
  
  // Generate H1 from title or route
  let h1Text = metadata?.title || route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  // Remove brand name from H1 if present
  h1Text = h1Text.replace(/\s*\|\s*TNT Dumpsters.*$/i, '').trim();
  
  // Find a good place to insert H1
  // Try to find main tag or first section
  let insertPos = -1;
  let insertBefore = '';
  
  // Look for <main> tag
  const mainMatch = content.match(/(<main[^>]*>)/);
  if (mainMatch) {
    insertPos = mainMatch.index + mainMatch[0].length;
    insertBefore = mainMatch[0];
  } else {
    // Look for first section
    const sectionMatch = content.match(/(<section[^>]*>)/);
    if (sectionMatch) {
      insertPos = sectionMatch.index + sectionMatch[0].length;
      insertBefore = sectionMatch[0];
    } else {
      // Look for return statement with JSX
      const returnMatch = content.match(/(return\s*\([^)]*<)/s);
      if (returnMatch) {
        insertPos = returnMatch.index + returnMatch[0].length - 1;
      }
    }
  }
  
  if (insertPos > 0) {
    const before = content.substring(0, insertPos);
    const after = content.substring(insertPos);
    
    // Check if there's already a heading nearby (within first 500 chars)
    const next500 = after.substring(0, 500);
    if (!next500.match(/<h[1-6][^>]*>/)) {
      // Determine indentation
      const indentMatch = insertBefore.match(/\n(\s*)/);
      const indent = indentMatch ? indentMatch[1] + '  ' : '      ';
      
      const h1Tag = `\n${indent}<h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">${h1Text}</h1>`;
      const newContent = before + h1Tag + after;
      
      if (!DRY_RUN) {
        fs.writeFileSync(filePath, newContent, 'utf8');
      }
      
      fixLog.push(`✅ Added H1 tag to ${route}: "${h1Text}"`);
      return true;
    }
  }
  
  return false;
}

// Fix title length
function fixTitleLength(filePath, route, metadata) {
  if (!metadata?.title) return false;
  
  let newTitle = metadata.title;
  let changed = false;
  
  if (metadata.title.length > MAX_TITLE_LENGTH) {
    newTitle = truncateText(metadata.title, MAX_TITLE_LENGTH);
    changed = true;
  } else if (metadata.title.length < MIN_TITLE_LENGTH) {
    newTitle = expandText(metadata.title, MIN_TITLE_LENGTH, route);
    changed = true;
  }
  
  if (changed) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Replace title in metadata
    const titlePattern = /(title:\s*['"])([^'"]+)(['"])/;
    const newContent = content.replace(titlePattern, `$1${newTitle}$3`);
    
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, newContent, 'utf8');
    }
    
    fixLog.push(`✅ Fixed title length for ${route}: ${metadata.title.length} → ${newTitle.length} chars`);
    return true;
  }
  
  return false;
}

// Fix description length
function fixDescriptionLength(filePath, route, metadata) {
  if (!metadata?.description) return false;
  
  let newDesc = metadata.description;
  let changed = false;
  
  if (metadata.description.length > MAX_DESC_LENGTH) {
    newDesc = truncateText(metadata.description, MAX_DESC_LENGTH);
    changed = true;
  } else if (metadata.description.length < MIN_DESC_LENGTH) {
    newDesc = expandText(metadata.description, MIN_DESC_LENGTH, 'Get fast delivery and clear pricing. Call for a free quote today.');
    changed = true;
  }
  
  if (changed) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Replace description in metadata
    const descPattern = /(description:\s*['"])([^'"]+)(['"])/;
    const newContent = content.replace(descPattern, `$1${newDesc}$3`);
    
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, newContent, 'utf8');
    }
    
    fixLog.push(`✅ Fixed description length for ${route}: ${metadata.description.length} → ${newDesc.length} chars`);
    return true;
  }
  
  return false;
}

// Fix missing canonical
function fixMissingCanonical(filePath, route, metadata) {
  if (metadata?.canonical) return false;
  
  const canonical = generateCanonical(route);
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if metadata export exists
  if (!content.includes('export const metadata') && !content.includes('generateMetadata')) {
    return false;
  }
  
  // Try to add canonical to existing metadata
  let newContent = content;
  
  // If it's a static metadata export
  if (content.includes('export const metadata')) {
    // Add alternates.canonical if not present
    if (!content.includes('alternates:') && !content.includes('canonical:')) {
      // Find the closing brace of metadata object
      const metadataMatch = content.match(/(export\s+const\s+metadata[^=]*=\s*{)([^}]+)(})/s);
      if (metadataMatch) {
        const before = metadataMatch[1] + metadataMatch[2];
        const after = metadataMatch[3];
        const addition = `,\n  alternates: { canonical: '${canonical}' }`;
        newContent = before + addition + after;
      }
    } else if (content.includes('alternates:')) {
      // Add canonical to existing alternates
      newContent = content.replace(
        /(alternates:\s*{)([^}]*)(})/,
        `$1$2,\n    canonical: '${canonical}'$3`
      );
    }
  }
  
  // If it's generateMetadata function
  if (content.includes('generateMetadata')) {
    // Add alternates.canonical to return object
    if (!content.includes('alternates:') && !content.includes('canonical:')) {
      const returnMatch = content.match(/(return\s*{)([^}]+)(})/s);
      if (returnMatch) {
        const before = returnMatch[1] + returnMatch[2];
        const after = returnMatch[3];
        const addition = `,\n    alternates: { canonical: '${canonical}' }`;
        newContent = before + addition + after;
      }
    }
  }
  
  if (newContent !== content) {
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, newContent, 'utf8');
    }
    
    fixLog.push(`✅ Added canonical URL to ${route}: ${canonical}`);
    return true;
  }
  
  return false;
}

// Fix incomplete Open Graph tags
function fixIncompleteOG(filePath, route, metadata) {
  const content = fs.readFileSync(filePath, 'utf8');
  const canonical = metadata?.canonical || generateCanonical(route);
  
  let newContent = content;
  let changed = false;
  
  // Check what's missing
  const hasOG = content.includes('openGraph:');
  const hasOGUrl = content.includes('openGraph:') && content.match(/openGraph:\s*{[^}]*url:/s);
  const hasOGTitle = content.includes('openGraph:') && content.match(/openGraph:\s*{[^}]*title:/s);
  const hasOGDesc = content.includes('openGraph:') && content.match(/openGraph:\s*{[^}]*description:/s);
  const hasOGImage = content.includes('openGraph:') && content.match(/openGraph:\s*{[^}]*images:/s);
  
  if (!hasOG) {
    // Add complete openGraph object
    const ogBlock = `,\n    openGraph: {\n      title: ${metadata?.title ? `'${metadata.title}'` : 'title'},\n      description: ${metadata?.description ? `'${metadata.description}'` : 'description'},\n      url: '${canonical}',\n      siteName: 'TNT Dumpsters',\n      type: 'website',\n      locale: 'en_US',\n      images: [{ url: '/images/tand-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],\n    }`;
    
    // Add to metadata return
    if (content.includes('return {')) {
      newContent = content.replace(/(return\s*{)([^}]+)(})/s, `$1$2${ogBlock}$3`);
      changed = true;
    }
  } else {
    // Complete missing OG fields
    if (!hasOGUrl) {
      newContent = newContent.replace(
        /(openGraph:\s*{)([^}]*)(})/s,
        `$1$2\n      url: '${canonical}',$3`
      );
      changed = true;
    }
    
    if (!hasOGTitle && metadata?.title) {
      newContent = newContent.replace(
        /(openGraph:\s*{)([^}]*)(})/s,
        `$1$2\n      title: '${metadata.title}',$3`
      );
      changed = true;
    }
    
    if (!hasOGDesc && metadata?.description) {
      newContent = newContent.replace(
        /(openGraph:\s*{)([^}]*)(})/s,
        `$1$2\n      description: '${metadata.description}',$3`
      );
      changed = true;
    }
    
    if (!hasOGImage) {
      newContent = newContent.replace(
        /(openGraph:\s*{)([^}]*)(})/s,
        `$1$2\n      images: [{ url: '/images/tand-t-dumpsters-logo-176w.webp', width: 1200, height: 630 }],$3`
      );
      changed = true;
    }
  }
  
  if (changed) {
    if (!DRY_RUN) {
      fs.writeFileSync(filePath, newContent, 'utf8');
    }
    
    fixLog.push(`✅ Completed Open Graph tags for ${route}`);
    return true;
  }
  
  return false;
}

// Extract metadata from file
function extractMetadata(content) {
  const metadata = {
    title: null,
    description: null,
    canonical: null,
  };
  
  const staticMatch = content.match(/export\s+const\s+metadata[^=]*=\s*{([^}]+)}/s);
  const generateMatch = content.match(/export\s+async\s+function\s+generateMetadata[^{]*{([^}]+return\s*{([^}]+)})/s);
  
  const metadataContent = staticMatch ? staticMatch[1] : (generateMatch ? generateMatch[2] : '');
  
  if (metadataContent) {
    const titleMatch = metadataContent.match(/title:\s*['"]([^'"]+)['"]/) || 
                      metadataContent.match(/title:\s*`([^`]+)`/);
    if (titleMatch) metadata.title = titleMatch[1];
    
    const descMatch = metadataContent.match(/description:\s*['"]([^'"]+)['"]/) ||
                     metadataContent.match(/description:\s*`([^`]+)`/);
    if (descMatch) metadata.description = descMatch[1];
    
    const canonicalMatch = metadataContent.match(/canonical:\s*['"]([^'"]+)['"]/) ||
                          metadataContent.match(/alternates:\s*{[^}]*canonical:\s*['"]([^'"]+)['"]/);
    if (canonicalMatch) metadata.canonical = canonicalMatch[1];
  }
  
  return metadata;
}

// Scan and fix all pages
function scanAndFix() {
  console.log('🔍 Scanning pages for fixes...\n');
  
  function scanDirectory(dir, relativePath = '') {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      if (file.startsWith('.') || file === 'node_modules') continue;
      
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath, path.join(relativePath, file));
      } else if (file === 'page.tsx') {
        const route = getRouteFromPath(fullPath, appDir);
        
        // Skip test pages
        if (route.includes('/test')) continue;
        
        const content = fs.readFileSync(fullPath, 'utf8');
        const metadata = extractMetadata(content);
        
        // Apply fixes
        if (fixMissingH1(fullPath, route, metadata)) fixesApplied++;
        if (fixTitleLength(fullPath, route, metadata)) fixesApplied++;
        if (fixDescriptionLength(fullPath, route, metadata)) fixesApplied++;
        if (fixMissingCanonical(fullPath, route, metadata)) fixesApplied++;
        if (fixIncompleteOG(fullPath, route, metadata)) fixesApplied++;
      }
    }
  }
  
  scanDirectory(appDir);
}

// Regenerate sitemap
function regenerateSitemap() {
  if (DRY_RUN) {
    console.log('\n🗺️  Would regenerate sitemap...');
    fixLog.push('⚠️  Would regenerate sitemap (dry-run)');
    return;
  }
  
  console.log('\n🗺️  Regenerating sitemap...');
  try {
    execSync('node scripts/automation/generate-type-sitemaps.mjs', { 
      stdio: 'inherit',
      cwd: path.join(__dirname, '..')
    });
    fixLog.push('✅ Regenerated sitemap');
    fixesApplied++;
  } catch (error) {
    fixLog.push('⚠️  Failed to regenerate sitemap');
  }
}

// Main execution
console.log('🔧 Fixing Ahrefs Audit Issues...\n');

if (DRY_RUN) {
  console.log('⚠️  DRY RUN MODE - No files will be modified\n');
}

// First, run audit to get current issues (optional, but helpful)
if (!DRY_RUN) {
  console.log('📊 Running audit to identify issues...\n');
  try {
    execSync('node scripts/pre-ahrefs-audit.js --export', { 
      stdio: 'pipe',
      cwd: path.join(__dirname, '..')
    });
  } catch (error) {
    // Audit found issues, that's expected
  }
}

// Apply fixes
scanAndFix();

// Regenerate sitemap
regenerateSitemap();

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 Fix Summary\n');
console.log(`✅ Fixes Applied: ${fixesApplied}`);
console.log(`⚠️  Fixes Skipped: ${fixesSkipped}\n`);

if (fixLog.length > 0) {
  console.log('📝 Fix Log:');
  fixLog.forEach(log => console.log(`   ${log}`));
}

console.log('\n💡 Note: Some issues require manual fixes:');
console.log('   - Image optimization (run: npm run images:optimize-rename)');
console.log('   - Broken image links (check file paths)');
console.log('   - Structured data validation (check schema.ts)');
console.log('\n✅ Run audit again to verify fixes: npm run audit:ahrefs\n');

process.exit(0);
