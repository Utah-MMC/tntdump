#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const componentsDir = path.join(__dirname, '..', 'components');
const appDir = path.join(__dirname, '..', 'app');

console.log('🔧 Auto-fixing accessibility issues...\n');

let filesFixed = 0;
let issuesFixed = 0;

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let fileIssues = 0;

  // Fix 1: Add htmlFor to labels and id to inputs
  // Pattern: <label className="...">Text</label>\n spaces <input ... name="fieldName"
  const labelInputPattern = /(<label\s+(?![^>]*htmlFor)className="[^"]*">([^<]+)<\/label>\s*\n\s*)(<input\s+(?![^>]*\bid=)([^>]*name="([^"]+)"[^>]*)>)/g;

  content = content.replace(labelInputPattern, (match, labelPart, labelText, inputPart, inputAttrs, nameValue) => {
    const id = nameValue;
    const newLabel = labelPart.replace('<label ', `<label htmlFor="${id}" `);
    const newInput = inputPart.replace('<input ', `<input id="${id}" `);
    fileIssues++;
    return newLabel + newInput;
  });

  // Fix 2: Add htmlFor to labels and id to select elements
  const labelSelectPattern = /(<label\s+(?![^>]*htmlFor)className="[^"]*">([^<]+)<\/label>\s*\n\s*)(<select\s+(?![^>]*\bid=)([^>]*name="([^"]+)"[^>]*)>)/g;

  content = content.replace(labelSelectPattern, (match, labelPart, labelText, selectPart, selectAttrs, nameValue) => {
    const id = nameValue;
    const newLabel = labelPart.replace('<label ', `<label htmlFor="${id}" `);
    const newSelect = selectPart.replace('<select ', `<select id="${id}" `);
    fileIssues++;
    return newLabel + newSelect;
  });

  // Fix 3: Add htmlFor to labels and id to textarea elements
  const labelTextareaPattern = /(<label\s+(?![^>]*htmlFor)className="[^"]*">([^<]+)<\/label>\s*\n\s*)(<textarea\s+(?![^>]*\bid=)([^>]*name="([^"]+)"[^>]*)>)/g;

  content = content.replace(labelTextareaPattern, (match, labelPart, labelText, textareaPart, textareaAttrs, nameValue) => {
    const id = nameValue;
    const newLabel = labelPart.replace('<label ', `<label htmlFor="${id}" `);
    const newTextarea = textareaPart.replace('<textarea ', `<textarea id="${id}" `);
    fileIssues++;
    return newLabel + newTextarea;
  });

  // Fix 4: Add lang="en" to html elements in page files
  if (filePath.includes('page.tsx') && !content.includes('lang=')) {
    content = content.replace(/<html\s+/, '<html lang="en" ');
    fileIssues++;
  }

  // Fix 5: Add focus-visible:ring classes to elements missing focus indicators
  const focusableElements = /(className="[^"]*)(focus:outline-none)([^"]*")/g;
  content = content.replace(focusableElements, (match, prefix, outline, suffix) => {
    if (!match.includes('focus:ring') && !match.includes('focus-visible:ring')) {
      fileIssues++;
      return `${prefix}${outline} focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2${suffix}`;
    }
    return match;
  });

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

// Process both directories
processDirectory(appDir);
processDirectory(componentsDir);

console.log(`\n📊 Summary:`);
console.log(`   Files fixed: ${filesFixed}`);
console.log(`   Issues fixed: ${issuesFixed}`);
console.log(`\n💡 Run 'node scripts/fix-wcag-issues.mjs' to see remaining issues`);
