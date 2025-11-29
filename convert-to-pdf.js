const fs = require('fs');
const path = require('path');

console.log('📄 PDF Conversion Script for BUILD_GUIDE');
console.log('==========================================\n');

// Check if puppeteer is available
let puppeteer;
try {
  puppeteer = require('puppeteer');
  console.log('✅ Puppeteer found - will generate PDF directly\n');
} catch (e) {
  console.log('⚠️  Puppeteer not installed');
  console.log('   Installing puppeteer...\n');
  console.log('   Run: npm install puppeteer --save-dev');
  console.log('   Then run this script again\n');
  console.log('   OR: Open BUILD_GUIDE.html in your browser and print to PDF (Ctrl+P)\n');
  process.exit(0);
}

async function generatePDF() {
  try {
    const htmlPath = path.join(__dirname, 'BUILD_GUIDE.html');
    
    if (!fs.existsSync(htmlPath)) {
      console.error('❌ BUILD_GUIDE.html not found!');
      console.log('   Run: node convert-to-html.js first');
      process.exit(1);
    }
    
    console.log('🚀 Launching browser...');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    console.log('📖 Loading HTML file...');
    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0'
    });
    
    console.log('📄 Generating PDF...');
    const pdfPath = path.join(__dirname, 'BUILD_GUIDE.pdf');
    
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '15mm',
        bottom: '20mm',
        left: '15mm'
      },
      displayHeaderFooter: true,
      headerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%; color: #64748b;">TNT Dumpsters - Complete Build Guide</div>',
      footerTemplate: '<div style="font-size: 10px; text-align: center; width: 100%; color: #64748b;">Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>'
    });
    
    await browser.close();
    
    console.log('✅ PDF created successfully!');
    console.log(`   Location: ${pdfPath}\n`);
    
  } catch (error) {
    console.error('❌ Error generating PDF:', error.message);
    console.log('\n💡 Alternative: Open BUILD_GUIDE.html in your browser and print to PDF (Ctrl+P)');
    process.exit(1);
  }
}

generatePDF();

