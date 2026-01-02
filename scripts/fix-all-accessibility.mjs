#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, '..', 'components');
const appDir = path.join(__dirname, '..', 'app');

console.log('🔧 Fixing all accessibility issues...\n');

let filesFixed = 0;
let issuesFixed = 0;

function addAriaLabel(content, type, field) {
  const label = field
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .toLowerCase()
    .replace(/^./, str => str.toUpperCase());

  const pattern = new RegExp(`(<${type}[^>]*)(value=\\{lead\\.${field}\\})([^>]*)(placeholder="[^"]*")([^>]*>)`, 'g');
  return content.replace(pattern, `$1aria-label="${label}" $2$3$4$5`);
}

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let fileIssues = 0;

  // Fix ChatWidget aria-labels
  if (filePath.includes('ChatWidget')) {
    const fields = ['firstName', 'lastName', 'phone', 'email', 'zip'];
    fields.forEach(field => {
      const before = content;
      content = addAriaLabel(content, 'input', field);
      if (content !== before) fileIssues++;
    });

    // Fix dumpsterSize select
    if (!content.match(/aria-label="[^"]*"[^>]*value=\{lead\.dumpsterSize\}/)) {
      content = content.replace(
        /(<select[^>]*)(value=\{lead\.dumpsterSize\})/g,
        '$1aria-label="Dumpster size" $2'
      );
      fileIssues++;
    }

    // Fix chat input
    if (content.includes('value={input}') && !content.match(/aria-label="[^"]*"[^>]*value=\{input\}/)) {
      content = content.replace(
        /(<input[^>]*)(value=\{input\})/g,
        '$1aria-label="Type your message" $2'
      );
      fileIssues++;
    }
  }

  // Fix CitySearch input
  if (filePath.includes('CitySearch')) {
    content = content.replace(
      /(<input type="text" placeholder="Search for your city\.\.\.")[^>]*>/g,
      '$1 aria-label="Search for your city" />'
    );
    if (content !== originalContent) fileIssues++;
  }

  // Fix DumpsterFinder radio buttons
  if (filePath.includes('DumpsterFinder')) {
    content = content.replace(
      /<input type="radio" name="amount" value=\{a\} checked=\{amount===a\}/g,
      '<input type="radio" name="amount" value={a} checked={amount===a} aria-label={`Select ${a} amount`}'
    );
    if (content !== originalContent) fileIssues++;
  }

  // Fix SizeComparison checkbox
  if (filePath.includes('SizeComparison')) {
    content = content.replace(
      /<input type="checkbox" checked=\{showWhatFits\}/g,
      '<input type="checkbox" checked={showWhatFits} aria-label="Toggle what fits view"'
    );
    if (content !== originalContent) fileIssues++;
  }

  // Fix VolumeCalculator inputs without labels
  if (filePath.includes('VolumeCalculator')) {
    // Add aria-labels to inputs that don't have labels
    content = content.replace(
      /<input type="number" min="0"\s+value=\{item\.length\}/g,
      '<input type="number" min="0" aria-label="Item length" value={item.length}'
    );
    content = content.replace(
      /<input type="number" min="0"\s+value=\{item\.width\}/g,
      '<input type="number" min="0" aria-label="Item width" value={item.width}'
    );
    content = content.replace(
      /<input type="number" m[^>]*value=\{material\.quantity\}/g,
      (match) => match.replace('<input', '<input aria-label="Material quantity"')
    );
    if (content !== originalContent) fileIssues++;
  }

  // Add lang="en" to pages without it
  if (filePath.includes('/page.tsx')) {
    const hasLang = content.match(/<html[^>]*lang=/);
    if (!hasLang && content.includes('<html')) {
      content = content.replace(/<html(\s+|>)/g, '<html lang="en"$1');
      fileIssues++;
    }
  }

  // Add skip link to Header
  if (filePath.includes('Header.tsx') && !content.includes('Skip to main content')) {
    content = content.replace(
      /(<header[^>]*>)/,
      `$1\n        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-blue-600 focus:text-white">Skip to main content</a>`
    );
    fileIssues++;
  }

  // Add improved focus indicators
  content = content.replace(
    /focus:outline-none(?!\s+focus:ring|\s+focus-visible:ring)/g,
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'
  );
  if (content !== originalContent) fileIssues++;

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesFixed++;
    issuesFixed += fileIssues;
    console.log(`✅ Fixed ${fileIssues} issues in ${path.relative(process.cwd(), filePath)}`);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        fixFile(filePath);
      } catch (error) {
        console.error(`❌ Error processing ${filePath}:`, error.message);
      }
    }
  }
}

// Add sr-only utility class to globals.css if not present
const globalsPath = path.join(__dirname, '..', 'app', 'globals.css');
let globalsContent = fs.readFileSync(globalsPath, 'utf8');
if (!globalsContent.includes('.sr-only')) {
  globalsContent += `\n\n/* Screen Reader Only - for accessibility */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus\\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
`;
  fs.writeFileSync(globalsPath, globalsContent, 'utf8');
  console.log('✅ Added .sr-only utility class to globals.css');
}

// Process both directories
processDirectory(appDir);
processDirectory(componentsDir);

console.log(`\n📊 Summary:`);
console.log(`   Files fixed: ${filesFixed}`);
console.log(`   Issues fixed: ${issuesFixed}`);
console.log(`\n✨ Major fixes applied:`);
console.log(`   ✓ Added aria-labels to unlabeled form inputs`);
console.log(`   ✓ Added lang="en" to pages`);
console.log(`   ✓ Added skip navigation link to header`);
console.log(`   ✓ Improved focus indicators`);
console.log(`   ✓ Added screen reader utility classes`);
console.log(`\n💡 Run 'node scripts/fix-wcag-issues.mjs' to verify remaining issues`);
