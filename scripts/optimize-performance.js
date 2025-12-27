#!/usr/bin/env node

/**
 * Optimize Performance Script
 * Runs multiple optimization tasks
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('⚡ Optimizing performance...\n');

const tasks = [
  {
    name: 'Find large images',
    command: 'node scripts/find-large-images.js',
    optional: true,
  },
  {
    name: 'Check missing alt text',
    command: 'node scripts/fix-missing-alt-text.mjs',
    optional: true,
  },
  {
    name: 'Check broken pages',
    command: 'node scripts/fix-broken-pages.mjs',
    optional: true,
  },
];

let passed = 0;
let failed = 0;

tasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.name}...`);
  
  try {
    execSync(task.command, { stdio: 'pipe', cwd: process.cwd() });
    console.log(`   ✅ Passed\n`);
    passed++;
  } catch (error) {
    if (task.optional) {
      console.log(`   ⚠️  Issues found (optional)\n`);
      failed++;
    } else {
      console.log(`   ❌ Failed\n`);
      failed++;
    }
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Passed: ${passed}`);
console.log(`   Issues: ${failed}`);

if (failed === 0) {
  console.log(`\n✅ All checks passed!`);
  process.exit(0);
} else {
  console.log(`\n⚠️  Some issues found. Review and fix as needed.`);
  process.exit(0); // Don't fail build, just warn
}

