#!/usr/bin/env node

/**
 * Convert Images to WebP Script
 * Converts JPG/PNG images to WebP format for better performance
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];
let converted = 0;
let skipped = 0;
let errors = 0;

// Check if sharp is available (better) or use sharp-cli
function hasSharp() {
  try {
    require.resolve('sharp');
    return true;
  } catch {
    return false;
  }
}

function convertWithSharp(inputPath, outputPath) {
  try {
    const sharp = require('sharp');
    const ext = path.extname(inputPath).toLowerCase();
    
    let pipeline = sharp(inputPath);
    
    if (ext === '.png') {
      pipeline = pipeline.png({ quality: 85, compressionLevel: 9 });
    } else {
      pipeline = pipeline.jpeg({ quality: 85, mozjpeg: true });
    }
    
    return pipeline
      .webp({ quality: 85 })
      .toFile(outputPath);
  } catch (error) {
    throw new Error(`Sharp conversion failed: ${error.message}`);
  }
}

function convertWithImagemagick(inputPath, outputPath) {
  try {
    execSync(`magick "${inputPath}" -quality 85 "${outputPath}"`, { stdio: 'ignore' });
    return true;
  } catch {
    return false;
  }
}

function processImage(filePath, relativePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (!SUPPORTED_FORMATS.includes(ext)) {
    return;
  }

  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Skip if WebP already exists
  if (fs.existsSync(webpPath)) {
    skipped++;
    return;
  }

  try {
    if (hasSharp()) {
      convertWithSharp(filePath, webpPath);
      console.log(`✅ Converted: ${relativePath} → ${path.basename(webpPath)}`);
      converted++;
    } else if (convertWithImagemagick(filePath, webpPath)) {
      console.log(`✅ Converted: ${relativePath} → ${path.basename(webpPath)}`);
      converted++;
    } else {
      console.log(`⚠️  Skipped: ${relativePath} (install sharp: npm install sharp)`);
      skipped++;
    }
  } catch (error) {
    console.error(`❌ Error converting ${relativePath}: ${error.message}`);
    errors++;
  }
}

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
      processImage(fullPath, itemRelativePath);
    }
  }
}

console.log('🔄 Converting images to WebP format...\n');

if (!hasSharp()) {
  console.log('⚠️  Sharp not installed. Install it for better results:');
  console.log('   npm install sharp\n');
}

scanDirectory(IMAGES_DIR);

console.log(`\n📊 Summary:`);
console.log(`   Converted: ${converted}`);
console.log(`   Skipped: ${skipped}`);
console.log(`   Errors: ${errors}`);

if (converted > 0) {
  console.log(`\n✅ Conversion complete! Update your code to use .webp extensions.`);
}

process.exit(errors > 0 ? 1 : 0);

