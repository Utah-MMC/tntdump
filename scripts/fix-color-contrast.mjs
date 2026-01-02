#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appDir = path.join(__dirname, '..', 'app');
const componentsDir = path.join(__dirname, '..', 'components');

console.log('🎨 Fixing color contrast issues...\n');

let filesFixed = 0;
let issuesFixed = 0;

// Color replacements for better contrast on dark backgrounds
const colorReplacements = [
  // text-blue-100 -> text-blue-50 (lighter, better on dark)
  { from: /text-blue-100(?![\w-])/g, to: 'text-blue-50', name: 'text-blue-100 → text-blue-50' },

  // text-yellow-300 -> text-yellow-200 (maintain visibility while improving contrast)
  { from: /text-yellow-300(?![\w-])/g, to: 'text-yellow-200', name: 'text-yellow-300 → text-yellow-200' },

  // text-gray-300 -> text-gray-200 on dark backgrounds
  { from: /text-gray-300(?![\w-])/g, to: 'text-gray-200', name: 'text-gray-300 → text-gray-200' },

  // text-green-300 -> text-green-200
  { from: /text-green-300(?![\w-])/g, to: 'text-green-200', name: 'text-green-300 → text-green-200' },
];

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  let fileChanges = [];

  colorReplacements.forEach(({ from, to, name }) => {
    const matches = content.match(from);
    if (matches) {
      content = content.replace(from, to);
      fileChanges.push(`  • ${name} (${matches.length} occurrences)`);
    }
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    filesFixed++;
    const changes = fileChanges.length;
    issuesFixed += changes;
    console.log(`✅ ${path.relative(process.cwd(), filePath)}`);
    fileChanges.forEach(change => console.log(change));
    console.log('');
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

console.log('📂 Processing files...\n');
processDirectory(appDir);
processDirectory(componentsDir);

console.log('📊 Summary:');
console.log(`   Files modified: ${filesFixed}`);
console.log(`   Color changes: ${issuesFixed}`);
console.log('\n💡 These colors now have better contrast on dark backgrounds');
console.log('   Verify visually and test with a contrast checker tool');
