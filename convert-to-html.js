const fs = require('fs');
const path = require('path');

// Read the markdown file
const mdContent = fs.readFileSync('BUILD_GUIDE.md', 'utf8');

// Simple markdown to HTML converter
function markdownToHTML(md) {
  let html = md;
  
  // Code blocks
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>`;
  });
  
  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Headers
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  
  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  
  // Italic
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  
  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // Lists (simple)
  html = html.replace(/^\- (.+)$/gim, '<li>$1</li>');
  html = html.replace(/^(\d+)\. (.+)$/gim, '<li>$2</li>');
  
  // Wrap consecutive list items
  html = html.replace(/(<li>.*<\/li>\n?)+/g, (match) => {
    return '<ul>' + match + '</ul>';
  });
  
  // Paragraphs (lines that aren't headers, lists, or code blocks)
  html = html.split('\n').map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    if (trimmed.startsWith('<h') || trimmed.startsWith('<ul') || trimmed.startsWith('</ul') || 
        trimmed.startsWith('<li') || trimmed.startsWith('</li') || trimmed.startsWith('<pre') || 
        trimmed.startsWith('</pre') || trimmed.startsWith('<code') || trimmed.startsWith('</code')) {
      return line;
    }
    return '<p>' + trimmed + '</p>';
  }).join('\n');
  
  // Clean up empty paragraphs
  html = html.replace(/<p><\/p>/g, '');
  html = html.replace(/\n{3,}/g, '\n\n');
  
  return html;
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TNT Dumpsters - Complete Build Guide</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      max-width: 900px;
      margin: 0 auto;
      padding: 40px 20px;
      line-height: 1.8;
      color: #1e293b;
      background: #ffffff;
    }
    
    h1 {
      color: #1e40af;
      border-bottom: 4px solid #3b82f6;
      padding-bottom: 15px;
      margin-bottom: 30px;
      font-size: 2.5em;
      page-break-after: avoid;
    }
    
    h2 {
      color: #2563eb;
      margin-top: 40px;
      margin-bottom: 20px;
      border-bottom: 2px solid #60a5fa;
      padding-bottom: 8px;
      font-size: 1.8em;
      page-break-after: avoid;
    }
    
    h3 {
      color: #3b82f6;
      margin-top: 30px;
      margin-bottom: 15px;
      font-size: 1.4em;
      page-break-after: avoid;
    }
    
    h4 {
      color: #60a5fa;
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 1.2em;
    }
    
    p {
      margin-bottom: 15px;
      text-align: justify;
    }
    
    code {
      background: #f1f5f9;
      padding: 3px 8px;
      border-radius: 4px;
      font-family: 'Courier New', Courier, monospace;
      font-size: 0.9em;
      color: #dc2626;
    }
    
    pre {
      background: #1e293b;
      color: #e2e8f0;
      padding: 20px;
      border-radius: 8px;
      overflow-x: auto;
      margin: 20px 0;
      page-break-inside: avoid;
    }
    
    pre code {
      background: transparent;
      color: inherit;
      padding: 0;
    }
    
    ul, ol {
      margin-left: 30px;
      margin-bottom: 20px;
    }
    
    li {
      margin: 8px 0;
    }
    
    a {
      color: #2563eb;
      text-decoration: underline;
    }
    
    a:hover {
      color: #1e40af;
    }
    
    strong {
      color: #1e293b;
      font-weight: 600;
    }
    
    blockquote {
      border-left: 4px solid #3b82f6;
      padding-left: 20px;
      margin: 20px 0;
      color: #64748b;
      font-style: italic;
    }
    
    table {
      border-collapse: collapse;
      width: 100%;
      margin: 20px 0;
      page-break-inside: avoid;
    }
    
    th, td {
      border: 1px solid #cbd5e1;
      padding: 12px;
      text-align: left;
    }
    
    th {
      background: #3b82f6;
      color: white;
      font-weight: 600;
    }
    
    tr:nth-child(even) {
      background: #f8fafc;
    }
    
    @media print {
      body {
        max-width: 100%;
        padding: 20px;
      }
      
      h1, h2, h3, h4 {
        page-break-after: avoid;
      }
      
      pre, blockquote, table {
        page-break-inside: avoid;
      }
      
      ul, ol {
        page-break-inside: avoid;
      }
    }
    
    .toc {
      background: #f8fafc;
      padding: 20px;
      border-radius: 8px;
      margin-bottom: 30px;
      border-left: 4px solid #3b82f6;
    }
    
    .toc h2 {
      margin-top: 0;
      border-bottom: none;
    }
    
    .toc ul {
      list-style: none;
      margin-left: 0;
    }
    
    .toc li {
      margin: 5px 0;
    }
    
    .toc a {
      text-decoration: none;
      color: #2563eb;
    }
  </style>
</head>
<body>
  ${markdownToHTML(mdContent)}
</body>
</html>`;

fs.writeFileSync('BUILD_GUIDE.html', htmlContent, 'utf8');
console.log('✅ HTML file created: BUILD_GUIDE.html');
console.log('📄 Open in browser and print to PDF (Ctrl+P)');

