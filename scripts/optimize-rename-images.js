#!/usr/bin/env node

/**
 * Optimize and Rename Images Script
 * Optimizes images, converts to WebP, and renames with SEO-friendly names
 */

const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const MAX_SIZE_KB = 500;
const MAX_SIZE_BYTES = MAX_SIZE_KB * 1024;

// SEO-friendly name mapping
const nameMap = {
  'open-dumpster.png': 'open-dumpster-rental.png',
  'pexels-pamelamariephoto-2625896.jpg': 'dumpster-rental-contact.jpg',
  'pexels-tomfisk-3181031.jpg': 'dumpster-rental-service.jpg',
  'service_areas.png': 'utah-dumpster-service-areas.png',
  'dumpster-rental-dropoff.png': 'dumpster-delivery-service.png',
  'dumpster-rental-driveway.jpeg': 'residential-dumpster-driveway.jpeg',
  'construction-dumpster-for-rent.png': 'construction-dumpster-rental.png',
  'residential-dumpster-for-rent.png': 'residential-dumpster-rental.png',
};

let optimized = 0;
let renamed = 0;
let skipped = 0;
let errors = 0;

function hasSharp() {
  try {
    require.resolve('sharp');
    return true;
  } catch {
    return false;
  }
}

async function optimizeImage(inputPath, outputPath, quality = 85) {
  if (!hasSharp()) {
    return { success: false, error: 'Sharp not installed' };
  }

  try {
    const sharp = require('sharp');
    const ext = path.extname(inputPath).toLowerCase();
    
    if (!fs.existsSync(inputPath)) {
      return { success: false, error: 'Input file does not exist' };
    }

    const stat = fs.statSync(inputPath);
    
    // Only optimize if over threshold
    if (stat.size <= MAX_SIZE_BYTES) {
      return { success: false, skipped: true };
    }

    let pipeline = sharp(inputPath);
    
    if (ext === '.png') {
      pipeline = pipeline.png({ 
        quality: quality,
        compressionLevel: 9,
        adaptiveFiltering: true
      });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      pipeline = pipeline.jpeg({ 
        quality: quality,
        mozjpeg: true,
        progressive: true
      });
    } else {
      return { success: false, error: 'Unsupported format' };
    }

    await pipeline.toFile(outputPath);
    
    if (!fs.existsSync(outputPath)) {
      return { success: false, error: 'Output file was not created' };
    }

    const newStat = fs.statSync(outputPath);
    const savings = ((stat.size - newStat.size) / stat.size * 100).toFixed(1);
    return { success: true, savings };
  } catch (error) {
    // Clean up temp file if it exists
    if (fs.existsSync(outputPath)) {
      try {
        fs.unlinkSync(outputPath);
      } catch (e) {
        // Ignore cleanup errors
      }
    }
    return { success: false, error: error.message };
  }
}

function getSeoFriendlyName(filename) {
  // Check if we have a mapping
  if (nameMap[filename]) {
    return nameMap[filename];
  }

  // Convert to lowercase, replace spaces and special chars with hyphens
  let name = filename
    .toLowerCase()
    .replace(/[^a-z0-9.-]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  // Remove pexels prefix if present
  if (name.startsWith('pexels-')) {
    name = name.replace(/^pexels-[^-]+-/, '');
  }

  // Ensure it ends with proper extension
  const ext = path.extname(filename);
  if (!name.endsWith(ext)) {
    name = name.replace(/\.[^.]+$/, '') + ext;
  }

  return name;
}

async function processImage(filePath, relativePath) {
  const filename = path.basename(filePath);
  const dir = path.dirname(filePath);
  const ext = path.extname(filename).toLowerCase();
  
  if (!['.jpg', '.jpeg', '.png', '.gif'].includes(ext)) {
    return;
  }

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return;
  }

  let stat;
  try {
    stat = fs.statSync(filePath);
  } catch (error) {
    console.error(`⚠️  Cannot access ${relativePath}: ${error.message}`);
    errors++;
    return;
  }

  const needsOptimization = stat.size > MAX_SIZE_BYTES;
  const seoName = getSeoFriendlyName(filename);
  const needsRename = filename !== seoName;

  if (!needsOptimization && !needsRename) {
    skipped++;
    return;
  }

  try {
    let newPath = filePath;
    let wasOptimized = false;

    // Rename if needed
    if (needsRename) {
      newPath = path.join(dir, seoName);
      if (!fs.existsSync(newPath)) {
        fs.renameSync(filePath, newPath);
        console.log(`📝 Renamed: ${filename} → ${seoName}`);
        renamed++;
        filePath = newPath; // Update for optimization
      } else {
        // Target already exists, skip rename
        console.log(`⚠️  Target exists, skipping rename: ${seoName}`);
      }
    }

    // Optimize if needed
    if (needsOptimization && hasSharp()) {
      const tempPath = filePath + '.tmp';
      const result = await optimizeImage(filePath, tempPath);
      
      if (result && result.success) {
        // Backup original
        const backupPath = filePath + '.bak';
        if (fs.existsSync(filePath)) {
          fs.copyFileSync(filePath, backupPath);
        }
        
        // Replace with optimized
        if (fs.existsSync(tempPath)) {
          fs.renameSync(tempPath, filePath);
          console.log(`⚡ Optimized: ${path.basename(filePath)} (${result.savings}% smaller)`);
          wasOptimized = true;
          
          // Remove backup if optimization succeeded
          if (fs.existsSync(backupPath)) {
            fs.unlinkSync(backupPath);
          }
        }
      } else if (result && result.skipped) {
        // File was under threshold, no optimization needed
      } else {
        // Optimization failed, clean up temp file
        if (fs.existsSync(tempPath)) {
          fs.unlinkSync(tempPath);
        }
        if (result && result.error) {
          console.error(`⚠️  Optimization failed for ${relativePath}: ${result.error}`);
        }
      }
    }

    if (wasOptimized) {
      optimized++;
    }
  } catch (error) {
    console.error(`❌ Error processing ${relativePath}: ${error.message}`);
    errors++;
  }
}

async function scanDirectory(dir, relativePath = '') {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory not found: ${dir}`);
    return;
  }

  const items = fs.readdirSync(dir);
  const imagePromises = [];

  for (const item of items) {
    // Skip temporary files and hidden files
    if (item.endsWith('.tmp') || item.endsWith('.bak') || item.startsWith('.')) {
      continue;
    }

    const fullPath = path.join(dir, item);
    
    // Check if file exists before stat
    if (!fs.existsSync(fullPath)) {
      continue;
    }

    let stat;
    try {
      stat = fs.statSync(fullPath);
    } catch (error) {
      console.error(`⚠️  Error accessing ${item}: ${error.message}`);
      continue;
    }

    const itemRelativePath = path.join(relativePath, item);

    if (stat.isDirectory()) {
      await scanDirectory(fullPath, itemRelativePath);
    } else if (stat.isFile()) {
      imagePromises.push(processImage(fullPath, itemRelativePath));
    }
  }

  // Process images in parallel (but limit concurrency)
  await Promise.all(imagePromises);
}

async function main() {
  console.log('🖼️  Optimizing and renaming images...\n');
  console.log(`Threshold: ${MAX_SIZE_KB}KB\n`);

  if (!hasSharp()) {
    console.log('⚠️  Sharp not installed. Install for optimization:');
    console.log('   npm install sharp\n');
    console.log('   Will only rename files for now.\n');
  }

  await scanDirectory(IMAGES_DIR);

  console.log(`\n📊 Summary:`);
  console.log(`   Renamed: ${renamed}`);
  console.log(`   Optimized: ${optimized}`);
  console.log(`   Skipped: ${skipped}`);
  console.log(`   Errors: ${errors}`);

  if (renamed > 0 || optimized > 0) {
    console.log(`\n✅ Optimization complete!`);
    console.log(`\n⚠️  Note: Update your code to use the new filenames.`);
  }

  process.exit(errors > 0 ? 1 : 0);
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

