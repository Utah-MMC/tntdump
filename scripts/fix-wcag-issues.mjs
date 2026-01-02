#!/usr/bin/env node

/**
 * WCAG 2.0 Accessibility Issues Scanner
 * Scans React/Next.js components for common WCAG 2.0 compliance issues
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

const issues = {
  missingAltText: [],
  missingLabels: [],
  missingAriaLabels: [],
  missingLang: [],
  missingHeadings: [],
  missingSkipLinks: [],
  missingFocusIndicators: [],
  missingKeyboardHandlers: [],
  missingFormErrors: [],
  missingSemanticHTML: [],
  colorContrastWarnings: [],
};

// Required ARIA attributes by role
const REQUIRED_ARIA_ATTRS = {
  button: ['aria-label', 'aria-labelledby'],
  link: ['aria-label', 'aria-labelledby'],
  'img': ['alt'],
  'input': ['aria-label', 'aria-labelledby', 'id'],
  'select': ['aria-label', 'aria-labelledby', 'id'],
  'textarea': ['aria-label', 'aria-labelledby', 'id'],
};

function getLineNumber(content, index) {
  return content.substring(0, index).split('\n').length;
}

function scanFile(filePath, relativePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Check for missing alt text on images
  const imageRegex = /<Image[\s\S]*?\/>/g;
  const imageMatches = content.matchAll(imageRegex);
  for (const match of imageMatches) {
    const tag = match[0];
    if (!tag.includes('alt=') && !tag.includes('alt="') && !tag.includes("alt='")) {
      issues.missingAltText.push({
        file: relativePath,
        line: getLineNumber(content, match.index),
        tag: tag.substring(0, 80).replace(/\s+/g, ' ') + '...',
        type: 'Next.js Image',
      });
    }
  }
  
  const imgRegex = /<img[^>]*>/g;
  const imgMatches = content.matchAll(imgRegex);
  for (const match of imgMatches) {
    const tag = match[0];
    if (!tag.includes('alt=') && !tag.includes("alt=")) {
      issues.missingAltText.push({
        file: relativePath,
        line: getLineNumber(content, match.index),
        tag: tag.substring(0, 50) + '...',
        type: 'HTML img',
      });
    }
  }
  
  // 2. Check for missing labels on form inputs
  const inputRegex = /<input[^>]*>/g;
  const inputMatches = content.matchAll(inputRegex);
  for (const match of inputMatches) {
    const tag = match[0];
    const hasId = tag.includes('id=');
    const hasAriaLabel = tag.includes('aria-label=') || tag.includes('aria-labelledby=');
    
    if (hasId) {
      // Check if there's a corresponding label with htmlFor
      const idMatch = tag.match(/id=["']([^"']+)["']/);
      if (idMatch) {
        const id = idMatch[1];
        const labelRegex = new RegExp(`<label[^>]*htmlFor=["']${id}["']`, 'i');
        const hasLabel = labelRegex.test(content);
        
        if (!hasLabel && !hasAriaLabel && !tag.includes('type=["\']hidden["\']')) {
          issues.missingLabels.push({
            file: relativePath,
            line: getLineNumber(content, match.index),
            tag: tag.substring(0, 80).replace(/\s+/g, ' ') + '...',
            id: id,
          });
        }
      }
    } else if (!hasAriaLabel && !tag.includes('type=["\']hidden["\']')) {
      issues.missingLabels.push({
        file: relativePath,
        line: getLineNumber(content, match.index),
        tag: tag.substring(0, 80).replace(/\s+/g, ' ') + '...',
        id: null,
      });
    }
  }
  
  // Check select and textarea
  const selectRegex = /<select[^>]*>/g;
  const selectMatches = content.matchAll(selectRegex);
  for (const match of selectMatches) {
    const tag = match[0];
    const hasId = tag.includes('id=');
    const hasAriaLabel = tag.includes('aria-label=') || tag.includes('aria-labelledby=');
    
    if (hasId) {
      const idMatch = tag.match(/id=["']([^"']+)["']/);
      if (idMatch) {
        const id = idMatch[1];
        const labelRegex = new RegExp(`<label[^>]*htmlFor=["']${id}["']`, 'i');
        const hasLabel = labelRegex.test(content);
        
        if (!hasLabel && !hasAriaLabel) {
          issues.missingLabels.push({
            file: relativePath,
            line: getLineNumber(content, match.index),
            tag: tag.substring(0, 80).replace(/\s+/g, ' ') + '...',
            id: id,
            type: 'select',
          });
        }
      }
    } else if (!hasAriaLabel) {
      issues.missingLabels.push({
        file: relativePath,
        line: getLineNumber(content, match.index),
        tag: tag.substring(0, 80).replace(/\s+/g, ' ') + '...',
        id: null,
        type: 'select',
      });
    }
  }
  
  const textareaRegex = /<textarea[^>]*>/g;
  const textareaMatches = content.matchAll(textareaRegex);
  for (const match of textareaMatches) {
    const tag = match[0];
    const hasId = tag.includes('id=');
    const hasAriaLabel = tag.includes('aria-label=') || tag.includes('aria-labelledby=');
    
    if (hasId) {
      const idMatch = tag.match(/id=["']([^"']+)["']/);
      if (idMatch) {
        const id = idMatch[1];
        const labelRegex = new RegExp(`<label[^>]*htmlFor=["']${id}["']`, 'i');
        const hasLabel = labelRegex.test(content);
        
        if (!hasLabel && !hasAriaLabel) {
          issues.missingLabels.push({
            file: relativePath,
            line: getLineNumber(content, match.index),
            tag: tag.substring(0, 80).replace(/\s+/g, ' ') + '...',
            id: id,
            type: 'textarea',
          });
        }
      }
    } else if (!hasAriaLabel) {
      issues.missingLabels.push({
        file: relativePath,
        line: getLineNumber(content, match.index),
        tag: tag.substring(0, 80).replace(/\s+/g, ' ') + '...',
        id: null,
        type: 'textarea',
      });
    }
  }
  
  // 3. Check for buttons/links without accessible names
  const buttonRegex = /<button[^>]*>[\s\S]*?<\/button>/g;
  const buttonMatches = content.matchAll(buttonRegex);
  for (const match of buttonMatches) {
    const tag = match[0];
    const hasAriaLabel = tag.includes('aria-label=') || tag.includes('aria-labelledby=');
    const hasText = /<button[^>]*>[\s\S]*?[^\s<][\s\S]*?<\/button>/.test(tag);
    const hasAriaHidden = tag.includes('aria-hidden="true"');
    
    // Check if button only contains icons (common pattern)
    const onlyIcons = /<button[^>]*>[\s\S]*?<(svg|Image|img)[\s\S]*?<\/button>/.test(tag) && 
                      !/[a-zA-Z]{2,}/.test(tag.replace(/<(svg|Image|img)[\s\S]*?>/g, ''));
    
    if ((!hasText || onlyIcons) && !hasAriaLabel && !hasAriaHidden) {
      issues.missingAriaLabels.push({
        file: relativePath,
        line: getLineNumber(content, match.index),
        tag: tag.substring(0, 100).replace(/\s+/g, ' ') + '...',
        type: 'button',
      });
    }
  }
  
  // Check links without accessible names
  const linkRegex = /<a[^>]*>[\s\S]*?<\/a>/g;
  const linkMatches = content.matchAll(linkRegex);
  for (const match of linkMatches) {
    const tag = match[0];
    const hasAriaLabel = tag.includes('aria-label=') || tag.includes('aria-labelledby=');
    const hasText = /<a[^>]*>[\s\S]*?[^\s<][\s\S]*?<\/a>/.test(tag);
    const hasAriaHidden = tag.includes('aria-hidden="true"');
    
    const onlyIcons = /<a[^>]*>[\s\S]*?<(svg|Image|img)[\s\S]*?<\/a>/.test(tag) && 
                      !/[a-zA-Z]{2,}/.test(tag.replace(/<(svg|Image|img)[\s\S]*?>/g, ''));
    
    if ((!hasText || onlyIcons) && !hasAriaLabel && !hasAriaHidden) {
      issues.missingAriaLabels.push({
        file: relativePath,
        line: getLineNumber(content, match.index),
        tag: tag.substring(0, 100).replace(/\s+/g, ' ') + '...',
        type: 'link',
      });
    }
  }
  
  // 4. Check for missing lang attribute (only in root layout/page files)
  if (relativePath.includes('layout') || relativePath.includes('page')) {
    const htmlRegex = /<html[^>]*>/i;
    const htmlMatch = content.match(htmlRegex);
    if (htmlMatch && !htmlMatch[0].includes('lang=')) {
      issues.missingLang.push({
        file: relativePath,
        line: getLineNumber(content, content.indexOf(htmlMatch[0])),
      });
    }
  }
  
  // 5. Check for heading hierarchy issues (h1 should come before h2, etc.)
  const headingMatches = [...content.matchAll(/<h([1-6])[^>]*>/gi)];
  if (headingMatches.length > 0) {
    let previousLevel = 0;
    for (const match of headingMatches) {
      const level = parseInt(match[1]);
      if (previousLevel > 0 && level > previousLevel + 1) {
        issues.missingHeadings.push({
          file: relativePath,
          line: getLineNumber(content, match.index),
          current: `h${level}`,
          previous: `h${previousLevel}`,
          message: `Heading level jumps from h${previousLevel} to h${level}`,
        });
      }
      previousLevel = level;
    }
    
    // Check if first heading is h1
    const firstHeading = headingMatches[0];
    if (firstHeading && parseInt(firstHeading[1]) !== 1) {
      issues.missingHeadings.push({
        file: relativePath,
        line: getLineNumber(content, firstHeading.index),
        current: `h${firstHeading[1]}`,
        message: 'Page should start with an h1 heading',
      });
    }
  }
  
  // 6. Check for missing skip links (in main layout/header)
  if (relativePath.includes('layout') || relativePath.includes('Header')) {
    const hasSkipLink = /<a[^>]*skip|skip[\s\S]*?main/i.test(content);
    if (!hasSkipLink) {
      issues.missingSkipLinks.push({
        file: relativePath,
        message: 'Consider adding a skip link for keyboard navigation',
      });
    }
  }
  
  // 7. Check for missing focus indicators
  const focusNoneRegex = /focus:outline-none/g;
  const focusRingRegex = /focus:ring/g;
  const focusMatches = content.matchAll(focusNoneRegex);
  for (const match of focusMatches) {
    // Check if there's a focus:ring nearby (within 50 chars)
    const context = content.substring(
      Math.max(0, match.index - 50),
      Math.min(content.length, match.index + 200)
    );
    if (!focusRingRegex.test(context)) {
      issues.missingFocusIndicators.push({
        file: relativePath,
        line: getLineNumber(content, match.index),
        context: context.substring(0, 100).replace(/\s+/g, ' '),
      });
    }
  }
  
  // 8. Check for onClick without keyboard handlers
  const onClickRegex = /onClick\s*=/g;
  const onClickMatches = content.matchAll(onClickRegex);
  for (const match of onClickMatches) {
    // Get the element context
    const beforeMatch = content.substring(Math.max(0, match.index - 100), match.index);
    const afterMatch = content.substring(match.index, Math.min(content.length, match.index + 200));
    const fullContext = beforeMatch + afterMatch;
    
    // Check if it's a button or link (these should have keyboard handlers)
    const isButtonOrLink = /<(button|a)[^>]*onClick/i.test(fullContext);
    const hasOnKeyDown = /onKeyDown\s*=|onKeyPress\s*=/i.test(fullContext);
    const hasRoleButton = /role=["']button["']/i.test(fullContext);
    const hasTabIndex = /tabIndex\s*=/i.test(fullContext);
    
    if (isButtonOrLink && !hasOnKeyDown && !hasRoleButton && !hasTabIndex) {
      // This is usually fine for buttons/links, but check if it's a div/span
      const isDivOrSpan = /<(div|span)[^>]*onClick/i.test(fullContext);
      if (isDivOrSpan) {
        issues.missingKeyboardHandlers.push({
          file: relativePath,
          line: getLineNumber(content, match.index),
          context: fullContext.substring(0, 150).replace(/\s+/g, ' '),
          message: 'Interactive div/span should have keyboard handlers and proper ARIA',
        });
      }
    }
  }
  
  // 9. Check for form validation without accessible error messages
  const formRegex = /<form[^>]*>[\s\S]*?<\/form>/gi;
  const formMatches = content.matchAll(formRegex);
  for (const formMatch of formMatches) {
    const formContent = formMatch[0];
    const hasRequired = /required\s*=/i.test(formContent);
    const hasValidation = /validate|error|invalid/i.test(formContent);
    const hasAriaInvalid = /aria-invalid/i.test(formContent);
    const hasAriaDescribedBy = /aria-describedby/i.test(formContent);
    
    if (hasRequired && hasValidation && !hasAriaInvalid && !hasAriaDescribedBy) {
      issues.missingFormErrors.push({
        file: relativePath,
        line: getLineNumber(content, formMatch.index),
        message: 'Form validation should include aria-invalid and aria-describedby for error messages',
      });
    }
  }
  
  // 10. Check for semantic HTML issues (divs used where semantic elements should be)
  // This is a warning, not an error
  const divButtonRegex = /<div[^>]*onClick[^>]*>/gi;
  const divButtonMatches = content.matchAll(divButtonRegex);
  for (const match of divButtonMatches) {
    const tag = match[0];
    if (!tag.includes('role=') && !tag.includes('role="button"')) {
      issues.missingSemanticHTML.push({
        file: relativePath,
        line: getLineNumber(content, match.index),
        tag: tag.substring(0, 80).replace(/\s+/g, ' ') + '...',
        message: 'Consider using <button> instead of <div> with onClick',
      });
    }
  }
  
  // 11. Check for potential color contrast issues (warnings only)
  // Look for text colors that might have contrast issues
  const textColorRegex = /text-(gray|yellow|blue|green|red)-[1-3]00/g;
  const bgColorRegex = /bg-(gray|yellow|blue|green|red)-[89]00/g;
  const textMatches = content.matchAll(textColorRegex);
  for (const match of textMatches) {
    // Get surrounding context to check background
    const context = content.substring(
      Math.max(0, match.index - 100),
      Math.min(content.length, match.index + 100)
    );
    if (!bgColorRegex.test(context)) {
      issues.colorContrastWarnings.push({
        file: relativePath,
        line: getLineNumber(content, match.index),
        color: match[0],
        message: 'Light text colors may have contrast issues - verify with contrast checker',
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

console.log('🔍 Scanning for WCAG 2.0 accessibility issues...\n');

COMPONENT_DIRS.forEach(dir => {
  if (fs.existsSync(dir)) {
    scanDirectory(dir);
  }
});

// Report results
let totalIssues = 0;
let hasErrors = false;

// Critical issues (errors)
const criticalIssues = [
  { key: 'missingAltText', title: 'Missing Alt Text', emoji: '🖼️' },
  { key: 'missingLabels', title: 'Missing Form Labels', emoji: '📝' },
  { key: 'missingAriaLabels', title: 'Missing ARIA Labels', emoji: '🏷️' },
  { key: 'missingLang', title: 'Missing Lang Attribute', emoji: '🌐' },
  { key: 'missingKeyboardHandlers', title: 'Missing Keyboard Handlers', emoji: '⌨️' },
];

// Warnings
const warnings = [
  { key: 'missingHeadings', title: 'Heading Hierarchy Issues', emoji: '📋' },
  { key: 'missingSkipLinks', title: 'Missing Skip Links', emoji: '🔗' },
  { key: 'missingFocusIndicators', title: 'Missing Focus Indicators', emoji: '👁️' },
  { key: 'missingFormErrors', title: 'Missing Form Error Messages', emoji: '⚠️' },
  { key: 'missingSemanticHTML', title: 'Semantic HTML Issues', emoji: '🏗️' },
  { key: 'colorContrastWarnings', title: 'Color Contrast Warnings', emoji: '🎨' },
];

// Report critical issues
criticalIssues.forEach(({ key, title, emoji }) => {
  const issueList = issues[key];
  if (issueList.length > 0) {
    hasErrors = true;
    totalIssues += issueList.length;
    console.log(`\n${emoji} ${title} (${issueList.length} issue${issueList.length > 1 ? 's' : ''}):`);
    issueList.forEach((issue, index) => {
      console.log(`  ${index + 1}. ${issue.file}:${issue.line}`);
      if (issue.tag) console.log(`     Tag: ${issue.tag}`);
      if (issue.id) console.log(`     ID: ${issue.id}`);
      if (issue.type) console.log(`     Type: ${issue.type}`);
      if (issue.message) console.log(`     ${issue.message}`);
    });
  }
});

// Report warnings
warnings.forEach(({ key, title, emoji }) => {
  const issueList = issues[key];
  if (issueList.length > 0) {
    totalIssues += issueList.length;
    console.log(`\n${emoji} ${title} (${issueList.length} warning${issueList.length > 1 ? 's' : ''}):`);
    issueList.forEach((issue, index) => {
      console.log(`  ${index + 1}. ${issue.file}${issue.line ? `:${issue.line}` : ''}`);
      if (issue.tag) console.log(`     Tag: ${issue.tag}`);
      if (issue.message) console.log(`     ${issue.message}`);
      if (issue.current) console.log(`     Current: ${issue.current}`);
      if (issue.previous) console.log(`     Previous: ${issue.previous}`);
      if (issue.color) console.log(`     Color: ${issue.color}`);
    });
  }
});

// Summary
console.log('\n' + '='.repeat(60));
if (totalIssues === 0) {
  console.log('✅ No WCAG 2.0 issues found!');
  process.exit(0);
} else {
  const criticalCount = criticalIssues.reduce((sum, { key }) => sum + issues[key].length, 0);
  const warningCount = warnings.reduce((sum, { key }) => sum + issues[key].length, 0);
  
  console.log(`\n📊 Summary:`);
  console.log(`   Total Issues: ${totalIssues}`);
  console.log(`   Critical: ${criticalCount}`);
  console.log(`   Warnings: ${warningCount}`);
  
  console.log(`\n💡 Next Steps:`);
  console.log(`   1. Fix critical issues first (missing alt text, labels, ARIA)`);
  console.log(`   2. Review warnings and improve accessibility`);
  console.log(`   3. Test with screen readers (NVDA, JAWS, VoiceOver)`);
  console.log(`   4. Use browser DevTools accessibility panel`);
  console.log(`   5. Run automated tools: axe DevTools, WAVE, Lighthouse`);
  
  process.exit(hasErrors ? 1 : 0);
}

