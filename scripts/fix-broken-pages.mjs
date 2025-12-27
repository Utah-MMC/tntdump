#!/usr/bin/env node

/**
 * Fix Broken Pages Script
 * Checks for common issues in Next.js pages that could cause build failures
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');

const APP_DIR = path.join(ROOT, 'app');
const issues = [];

function checkFile(filePath, relativePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  // Check for duplicate exports
  const exportMetadata = content.match(/export\s+const\s+metadata/g);
  if (exportMetadata && exportMetadata.length > 1) {
    issues.push({
      file: relativePath,
      type: 'Duplicate metadata export',
      message: `Found ${exportMetadata.length} metadata exports`,
    });
  }
  
  // Check for duplicate default exports
  const exportDefault = content.match(/export\s+default\s+function/g);
  if (exportDefault && exportDefault.length > 1) {
    issues.push({
      file: relativePath,
      type: 'Duplicate default export',
      message: `Found ${exportDefault.length} default exports`,
    });
  }
  
  // Check for missing React import in JSX files
  if (filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    const hasJSX = /<[A-Z]/.test(content);
    const hasReactImport = /^import\s+.*\bReact\b|^import\s+.*from\s+['"]react['"]/.test(content);
    
    if (hasJSX && !hasReactImport && !content.includes('"use client"')) {
      // Next.js 13+ doesn't require React import, but check anyway
      const hasNextImport = /^import\s+.*from\s+['"]next['"]/.test(content);
      if (!hasNextImport) {
        // This might be okay for Next.js 13+, but flag it
      }
    }
  }
  
  // Check for common syntax errors
  const openBraces = (content.match(/{/g) || []).length;
  const closeBraces = (content.match(/}/g) || []).length;
  if (openBraces !== closeBraces) {
    issues.push({
      file: relativePath,
      type: 'Mismatched braces',
      message: `Found ${openBraces} opening and ${closeBraces} closing braces`,
    });
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
      if (['node_modules', '.next', 'out', '.git'].includes(item)) continue;
      scanDirectory(fullPath, itemRelativePath);
    } else if (stat.isFile()) {
      const ext = path.extname(item);
      if (['.tsx', '.jsx', '.ts', '.js'].includes(ext)) {
        // Only check page.tsx, layout.tsx, etc.
        if (item === 'page.tsx' || item === 'layout.tsx' || item === 'page.jsx' || item === 'layout.jsx') {
          checkFile(fullPath, itemRelativePath);
        }
      }
    }
  }
}

console.log('🔍 Scanning for broken pages...\n');

scanDirectory(APP_DIR);

if (issues.length === 0) {
  console.log('✅ No issues found!');
  process.exit(0);
}

console.log(`❌ Found ${issues.length} issue(s):\n`);

issues.forEach((issue, index) => {
  console.log(`${index + 1}. ${issue.file}`);
  console.log(`   Type: ${issue.type}`);
  console.log(`   ${issue.message}\n`);
});

console.log(`\n💡 Fix these issues before building.`);

process.exit(issues.length > 0 ? 1 : 0);

