#!/usr/bin/env node

/**
 * Fix Missing Alt Text Script
 * Scans React/Next.js components for images missing alt text
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const COMPONENT_DIRS = [
  path.join(ROOT, 'app'),
  path.join(ROOT, 'components'),
];

const issues = [];

function scanFile(filePath, relativePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check for Next.js Image components (handle multi-line)
  // Match <Image ... /> or <Image ... > ... </Image>
  const imageRegex = /<Image[\s\S]*?\/>/g;
  const matches = content.matchAll(imageRegex);
  
  for (const match of matches) {
    const tag = match[0];
    
    // Check if alt attribute exists (handle both single and double quotes)
    if (!tag.includes('alt=') && !tag.includes('alt="') && !tag.includes("alt='")) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      issues.push({
        file: relativePath,
        line: lineNumber,
        tag: tag.substring(0, 80).replace(/\s+/g, ' ') + '...',
        type: 'Next.js Image',
      });
    }
  }
  
  // Check for regular img tags
  const imgRegex = /<img[^>]*>/g;
  const imgMatches = content.matchAll(imgRegex);
  
  for (const match of imgMatches) {
    const tag = match[0];
    
    if (!tag.includes('alt=') && !tag.includes("alt=")) {
      const lineNumber = content.substring(0, match.index).split('\n').length;
      issues.push({
        file: relativePath,
        line: lineNumber,
        tag: tag.substring(0, 50) + '...',
        type: 'HTML img',
      });
    }
  }
}

function scanDirectory(dir, relativePath = '') {
  if (!fs.existsSync(dir)) return;

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    const itemRelativePath = path.join(relativePath, item);

    if (stat.isDirectory()) {
      // Skip node_modules, .next, etc.
      if (['node_modules', '.next', 'out', '.git'].includes(item)) continue;
      scanDirectory(fullPath, itemRelativePath);
    } else if (stat.isFile()) {
      const ext = path.extname(item);
      if (['.tsx', '.jsx', '.ts', '.js'].includes(ext)) {
        scanFile(fullPath, itemRelativePath);
      }
    }
  }
}

console.log('🔍 Scanning for missing alt text...\n');

COMPONENT_DIRS.forEach(dir => {
  if (fs.existsSync(dir)) {
    scanDirectory(dir);
  }
});

if (issues.length === 0) {
  console.log('✅ No missing alt text found!');
  process.exit(0);
}

console.log(`❌ Found ${issues.length} image(s) missing alt text:\n`);

issues.forEach((issue, index) => {
  console.log(`${index + 1}. ${issue.file}:${issue.line}`);
  console.log(`   Type: ${issue.type}`);
  console.log(`   Tag: ${issue.tag}\n`);
});

console.log(`\n💡 Fix by adding alt="descriptive text" to all Image and img tags.`);

process.exit(issues.length > 0 ? 1 : 0);

