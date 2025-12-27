#!/usr/bin/env node

/**
 * Find Large Images Script
 * Scans the public/images directory for images over a specified size threshold
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const MAX_SIZE_KB = 500; // 500KB threshold
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

const largeImages = [];

function scanDirectory(dir, relativePath = '') {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return;
  }

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    const itemRelativePath = path.join(relativePath, item);

    if (stat.isDirectory()) {
      scanDirectory(fullPath, itemRelativePath);
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'].includes(ext)) {
        const sizeKB = stat.size / 1024;
        if (stat.size > MAX_SIZE_BYTES) {
          largeImages.push({
            path: itemRelativePath,
            size: stat.size,
            sizeKB: sizeKB.toFixed(2),
            fullPath: fullPath,
          });
        }
      }
    }
  }
}

console.log('🔍 Scanning for large images...\n');
console.log(`Threshold: ${MAX_SIZE_KB}KB\n`);

scanDirectory(IMAGES_DIR);

if (largeImages.length === 0) {
  console.log('✅ No large images found!');
  process.exit(0);
}

console.log(`❌ Found ${largeImages.length} large image(s):\n`);

largeImages.sort((a, b) => b.size - a.size);

largeImages.forEach((img, index) => {
  console.log(`${index + 1}. ${img.path}`);
  console.log(`   Size: ${img.sizeKB}KB (${(img.size / 1024 / 1024).toFixed(2)}MB)`);
  console.log(`   Path: ${img.fullPath}\n`);
});

console.log(`\n💡 Recommendation: Optimize these images using:`);
console.log(`   - npm run optimize:performance`);
console.log(`   - Or use: node scripts/convert-images-to-webp.js`);

process.exit(largeImages.length > 0 ? 1 : 0);

