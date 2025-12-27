#!/usr/bin/env node

/**
 * Generate Sitemap Script
 * Wrapper script to generate all sitemaps
 */

const { execSync } = require('child_process');

console.log('🗺️  Generating sitemaps...\n');

try {
  console.log('Running sitemap generation...');
  execSync('npm run sitemap', { stdio: 'inherit', cwd: process.cwd() });
  console.log('\n✅ Sitemap generation complete!');
  process.exit(0);
} catch (error) {
  console.error('\n❌ Sitemap generation failed!');
  process.exit(1);
}

