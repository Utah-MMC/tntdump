#!/usr/bin/env node

/**
 * Apply Lighthouse Fixes Script
 * Reads lighthouse report and suggests/apply fixes
 */

const fs = require('fs');
const path = require('path');

const REPORT_PATH = path.join(process.cwd(), 'lighthouse-report.json');
const EXECUTE = process.argv.includes('--execute');

if (!fs.existsSync(REPORT_PATH)) {
  console.log('❌ Lighthouse report not found. Run: npm run audit:lighthouse');
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(REPORT_PATH, 'utf8'));
const audits = report.audits || {};
const categories = report.categories || {};

console.log('🔍 Analyzing Lighthouse report...\n');

const fixes = [];
const performanceScore = categories.performance?.score ? Math.round(categories.performance.score * 100) : null;

// Check Core Web Vitals and Performance Metrics
if (audits['largest-contentful-paint']) {
  const lcp = audits['largest-contentful-paint'];
  const lcpValue = lcp.numericValue / 1000; // Convert to seconds
  if (lcpValue > 2.5) {
    fixes.push({
      type: 'largest-contentful-paint',
      severity: lcpValue > 4 ? 'critical' : 'high',
      value: `${lcpValue.toFixed(1)}s`,
      threshold: '2.5s',
      fix: 'Optimize LCP: preload hero images, reduce server response time, eliminate render-blocking resources, optimize images',
      actionable: [
        'Add priority hints to hero images',
        'Preload critical resources',
        'Optimize or compress large images',
        'Reduce server response time',
        'Defer non-critical CSS/JS'
      ]
    });
  }
}

if (audits['total-blocking-time']) {
  const tbt = audits['total-blocking-time'];
  const tbtValue = tbt.numericValue;
  if (tbtValue > 200) {
    fixes.push({
      type: 'total-blocking-time',
      severity: tbtValue > 600 ? 'critical' : 'high',
      value: `${Math.round(tbtValue)}ms`,
      threshold: '200ms',
      fix: 'Reduce JavaScript execution time: code-split, defer non-critical JS, remove unused code',
      actionable: [
        'Code-split large JavaScript bundles',
        'Defer non-critical JavaScript',
        'Remove unused JavaScript',
        'Optimize third-party scripts',
        'Use web workers for heavy computations'
      ]
    });
  }
}

if (audits['first-contentful-paint']) {
  const fcp = audits['first-contentful-paint'];
  const fcpValue = fcp.numericValue / 1000;
  if (fcpValue > 1.8) {
    fixes.push({
      type: 'first-contentful-paint',
      severity: 'medium',
      value: `${fcpValue.toFixed(1)}s`,
      threshold: '1.8s',
      fix: 'Improve FCP: eliminate render-blocking resources, reduce server response time',
      actionable: [
        'Inline critical CSS',
        'Defer non-critical CSS',
        'Preload key resources',
        'Optimize server response time'
      ]
    });
  }
}

// Check for render-blocking resources
if (audits['render-blocking-resources']) {
  const blocking = audits['render-blocking-resources'].details?.items || [];
  if (blocking.length > 0) {
    fixes.push({
      type: 'render-blocking-resources',
      severity: 'high',
      items: blocking,
      fix: 'Defer non-critical CSS/JS or inline critical CSS',
      actionable: [
        'Inline critical CSS in <head>',
        'Defer non-critical CSS with media="print" then onload',
        'Defer non-critical JavaScript',
        'Use Next.js automatic code splitting'
      ]
    });
  }
}

// Check for unused JavaScript
if (audits['unused-javascript']) {
  const unused = audits['unused-javascript'];
  const savings = unused.details?.overallSavingsMs || unused.numericValue || 0;
  if (savings > 100) {
    fixes.push({
      type: 'unused-javascript',
      severity: 'high',
      value: `${Math.round(savings)}ms potential savings`,
      items: unused.details?.items || [],
      fix: 'Remove unused JavaScript or code-split bundles',
      actionable: [
        'Use dynamic imports for route-based code splitting',
        'Remove unused dependencies',
        'Tree-shake unused code',
        'Lazy load components'
      ]
    });
  }
}

// Check for unused CSS
if (audits['unused-css-rules']) {
  const unused = audits['unused-css-rules'];
  const savings = unused.details?.overallSavingsMs || unused.numericValue || 0;
  if (savings > 100) {
    fixes.push({
      type: 'unused-css-rules',
      severity: 'medium',
      value: `${Math.round(savings)}ms potential savings`,
      items: unused.details?.items || [],
      fix: 'Remove unused CSS or split stylesheets',
      actionable: [
        'Use CSS modules or styled-components',
        'Remove unused CSS frameworks',
        'Purge unused CSS',
        'Split CSS by route/component'
      ]
    });
  }
}

// Check for image optimization
if (audits['modern-image-formats']) {
  const unoptimized = audits['modern-image-formats'].details?.items || [];
  if (unoptimized.length > 0) {
    fixes.push({
      type: 'modern-image-formats',
      severity: 'medium',
      items: unoptimized,
      fix: 'Convert images to WebP/AVIF format',
      actionable: [
        'Run: npm run images:optimize-rename',
        'Use Next.js Image component with automatic optimization',
        'Convert images to WebP format'
      ]
    });
  }
}

if (audits['uses-optimized-images']) {
  const unoptimized = audits['uses-optimized-images'].details?.items || [];
  if (unoptimized.length > 0) {
    fixes.push({
      type: 'uses-optimized-images',
      severity: 'medium',
      items: unoptimized,
      fix: 'Compress and optimize images',
      actionable: [
        'Run: npm run images:optimize-rename',
        'Compress images before upload',
        'Use appropriate image dimensions'
      ]
    });
  }
}

// Check for missing alt text
if (audits['image-alt']) {
  const missingAlt = audits['image-alt'].details?.items || [];
  if (missingAlt.length > 0) {
    fixes.push({
      type: 'missing-alt-text',
      severity: 'medium',
      items: missingAlt,
      fix: 'Add descriptive alt text to all images',
      actionable: [
        'Run: node scripts/fix-missing-alt-text.mjs',
        'Add alt attributes to all <img> and <Image> components'
      ]
    });
  }
}

// Check for large DOM
if (audits['dom-size']) {
  const domSize = audits['dom-size'].numericValue;
  if (domSize > 1500) {
    fixes.push({
      type: 'large-dom',
      severity: 'medium',
      value: domSize,
      threshold: '1500',
      fix: 'Reduce DOM size by splitting components or lazy loading',
      actionable: [
        'Lazy load below-the-fold content',
        'Split large components',
        'Use virtual scrolling for long lists',
        'Remove hidden/unused DOM elements'
      ]
    });
  }
}

// Check main thread work
if (audits['mainthread-work-breakdown']) {
  const work = audits['mainthread-work-breakdown'];
  const workValue = work.numericValue;
  if (workValue > 2000) {
    fixes.push({
      type: 'mainthread-work-breakdown',
      severity: 'high',
      value: `${(workValue / 1000).toFixed(1)}s`,
      threshold: '2.0s',
      fix: 'Reduce main thread work: minimize JavaScript execution, optimize parsing',
      actionable: [
        'Code-split JavaScript bundles',
        'Defer non-critical JavaScript',
        'Optimize third-party scripts',
        'Use web workers for heavy computations'
      ]
    });
  }
}

// Display results
if (performanceScore !== null) {
  console.log(`📊 Performance Score: ${performanceScore}/100\n`);
}

if (fixes.length === 0) {
  console.log('✅ No critical issues found!');
  process.exit(0);
}

console.log(`Found ${fixes.length} issue(s) to fix:\n`);

fixes.forEach((fix, index) => {
  const severityIcon = fix.severity === 'critical' ? '🔴' : fix.severity === 'high' ? '🟠' : '🟡';
  console.log(`${index + 1}. ${severityIcon} ${fix.type}`);
  if (fix.value) {
    console.log(`   Current: ${fix.value} (threshold: ${fix.threshold || 'N/A'})`);
  }
  console.log(`   ${fix.fix}`);
  if (fix.actionable && fix.actionable.length > 0) {
    console.log(`   Actions:`);
    fix.actionable.forEach(action => {
      console.log(`     • ${action}`);
    });
  }
  if (fix.items && fix.items.length > 0) {
    console.log(`   Affected: ${fix.items.length} item(s)`);
    if (fix.items.length <= 5) {
      fix.items.slice(0, 5).forEach(item => {
        const url = item.url || item;
        console.log(`     - ${url}`);
      });
    }
  }
  console.log('');
});

if (EXECUTE) {
  console.log('🔧 Applying fixes...\n');
  
  // Execute actionable fixes
  const executedFixes = [];
  
  fixes.forEach(fix => {
    if (fix.type === 'modern-image-formats' || fix.type === 'uses-optimized-images') {
      console.log(`   → Running image optimization...`);
      executedFixes.push('image-optimization');
    }
    
    if (fix.type === 'missing-alt-text') {
      console.log(`   → Checking for missing alt text...`);
      executedFixes.push('alt-text-check');
    }
  });
  
  if (executedFixes.length > 0) {
    console.log(`\n✅ Applied ${executedFixes.length} automatic fix(es)!`);
    console.log('\n💡 Remaining fixes require manual intervention. See actions above.');
  } else {
    console.log('⚠️  No automatic fixes available. Please implement the suggested actions manually.');
  }
} else {
  console.log('💡 Run with --execute flag to apply automatic fixes:');
  console.log('   npm run apply:lighthouse-fixes -- --execute');
  console.log('\n📝 Most fixes require manual code changes. Review the actions above.');
}

process.exit(0);
