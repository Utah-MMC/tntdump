#!/usr/bin/env node

/**
 * Submit URLs to IndexNow
 * Automatically submits new/updated pages to search engines via IndexNow API
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const SITE_URL = 'https://tntdump.com';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';
const INDEXNOW_KEY = '2aaa5122b98a4ce09d1e45535e18b50b';
const INDEXNOW_KEY_LOCATION = `${SITE_URL}/${INDEXNOW_KEY}.txt`;
const MAX_URLS_PER_REQUEST = 50;

// Track submitted URLs to avoid duplicates
const SUBMITTED_URLS_FILE = path.join(__dirname, '..', '.indexnow-submitted.json');

// Load previously submitted URLs
function loadSubmittedUrls() {
  if (fs.existsSync(SUBMITTED_URLS_FILE)) {
    try {
      const data = fs.readFileSync(SUBMITTED_URLS_FILE, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return { urls: [], lastSubmitted: null };
    }
  }
  return { urls: [], lastSubmitted: null };
}

// Save submitted URLs
function saveSubmittedUrls(data) {
  fs.writeFileSync(SUBMITTED_URLS_FILE, JSON.stringify(data, null, 2));
}

// Extract URLs from sitemap XML
function extractUrlsFromSitemap(xmlContent) {
  const urls = [];
  const locMatches = xmlContent.matchAll(/<loc>([^<]+)<\/loc>/g);
  
  for (const match of locMatches) {
    urls.push(match[1]);
  }
  
  return urls;
}

// Load all URLs from sitemap files
function loadSitemapUrls() {
  const sitemapFiles = [
    'public/sitemap.xml',
    'public/sitemap-pages.xml',
    'public/sitemap-cities.xml',
    'public/sitemap-posts.xml',
  ];
  
  const allUrls = new Set();
  
  sitemapFiles.forEach(file => {
    const filePath = path.join(__dirname, '..', file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Check if it's a sitemap index
      if (content.includes('<sitemapindex')) {
        // Extract child sitemap URLs
        const childMatches = content.matchAll(/<loc>([^<]+)<\/loc>/g);
        for (const match of childMatches) {
          const childUrl = match[1];
          // If it's a local file path, read it
          if (childUrl.startsWith('https://')) {
            // Skip remote URLs for now, we'll handle them separately
            continue;
          }
          const childPath = path.join(__dirname, '..', childUrl.replace(SITE_URL, ''));
          if (fs.existsSync(childPath)) {
            const childContent = fs.readFileSync(childPath, 'utf8');
            const childUrls = extractUrlsFromSitemap(childContent);
            childUrls.forEach(url => allUrls.add(url));
          }
        }
      } else {
        // Regular sitemap
        const urls = extractUrlsFromSitemap(content);
        urls.forEach(url => allUrls.add(url));
      }
    }
  });
  
  return Array.from(allUrls);
}

// Submit URLs to IndexNow
function submitToIndexNow(urls) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({
      host: 'tntdump.com',
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList: urls,
    });

    const url = new URL(INDEXNOW_ENDPOINT);
    const options = {
      hostname: url.hostname,
      port: url.port || 443,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
      },
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          statusMessage: res.statusMessage,
          body: data,
          ok: res.statusCode >= 200 && res.statusCode < 300,
        });
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(body);
    req.end();
  });
}

// Main function
async function main() {
  console.log('🚀 Submitting URLs to IndexNow...\n');
  
  // Load current sitemap URLs
  const currentUrls = loadSitemapUrls();
  console.log(`📄 Found ${currentUrls.length} URLs in sitemap`);
  
  if (currentUrls.length === 0) {
    console.log('⚠️  No URLs found in sitemap. Run sitemap generation first.');
    process.exit(1);
  }
  
  // Load previously submitted URLs
  const submittedData = loadSubmittedUrls();
  const previousUrls = new Set(submittedData.urls || []);
  
  // Find new URLs (not previously submitted)
  const newUrls = currentUrls.filter(url => !previousUrls.has(url));
  
  // Determine what to submit
  const FORCE_ALL = process.argv.includes('--all');
  const urlsToSubmit = FORCE_ALL ? currentUrls : newUrls;
  
  if (urlsToSubmit.length === 0) {
    console.log('✅ All URLs have already been submitted to IndexNow.');
    console.log('   Use --all flag to resubmit all URLs.\n');
    process.exit(0);
  }
  
  console.log(`📤 Submitting ${urlsToSubmit.length} URL(s) to IndexNow in small batches...`);
  
  if (FORCE_ALL && urlsToSubmit.length > 100) {
    console.log(`⚠️  Submitting all ${urlsToSubmit.length} URLs (this may take a moment)...`);
  }
  
  // Submit in batches if needed
  const batches = [];
  for (let i = 0; i < urlsToSubmit.length; i += MAX_URLS_PER_REQUEST) {
    batches.push(urlsToSubmit.slice(i, i + MAX_URLS_PER_REQUEST));
  }
  
  let successCount = 0;
  let errorCount = 0;
  
  for (let i = 0; i < batches.length; i++) {
    const batch = batches[i];
    console.log(`   Batch ${i + 1}/${batches.length}: ${batch.length} URLs...`);
    
    try {
      const result = await submitToIndexNow(batch);
      
      if (result.ok) {
        console.log(`   ✅ Batch ${i + 1} submitted successfully`);
        successCount += batch.length;
        
        // Update submitted URLs
        batch.forEach(url => previousUrls.add(url));
      } else {
        console.error(`   ❌ Batch ${i + 1} failed: ${result.statusCode} ${result.statusMessage}`);
        errorCount += batch.length;
      }
    } catch (error) {
      console.error(`   ❌ Batch ${i + 1} error: ${error.message}`);
      errorCount += batch.length;
    }
  }
  
  // Save updated submitted URLs
  saveSubmittedUrls({
    urls: Array.from(previousUrls),
    lastSubmitted: new Date().toISOString(),
    totalSubmitted: previousUrls.size,
  });
  
  // Summary
  console.log('\n📊 Summary:');
  console.log(`   ✅ Successfully submitted: ${successCount}`);
  if (errorCount > 0) {
    console.log(`   ❌ Failed: ${errorCount}`);
  }
  console.log(`   📝 Total URLs tracked: ${previousUrls.size}`);
  
  if (successCount > 0) {
    console.log('\n✅ IndexNow submission complete!');
    console.log('   Search engines will be notified of the updated URLs.\n');
  }
  
  process.exit(errorCount > 0 ? 1 : 0);
}

main().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

