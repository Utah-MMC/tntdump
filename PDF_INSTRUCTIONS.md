# PDF Generation Instructions

## Option 1: Automatic PDF Generation (Recommended)

If you have Node.js installed, you can automatically generate a PDF:

1. **Install Puppeteer** (one-time setup):
   ```bash
   npm install puppeteer --save-dev
   ```

2. **Generate PDF**:
   ```bash
   node convert-to-pdf.js
   ```

This will create `BUILD_GUIDE.pdf` in the project root.

## Option 2: Manual PDF Generation (No Installation Required)

1. **Open the HTML file**:
   - Navigate to `I:\tnt\BUILD_GUIDE.html`
   - Double-click to open in your default browser

2. **Print to PDF**:
   - Press `Ctrl+P` (or `Cmd+P` on Mac)
   - Select "Save as PDF" or "Microsoft Print to PDF" as the printer
   - Click "Save"
   - Choose a location and filename (e.g., `BUILD_GUIDE.pdf`)

## Option 3: Using Online Tools

You can also use online HTML to PDF converters:
- Upload `BUILD_GUIDE.html` to a service like:
  - https://www.ilovepdf.com/html-to-pdf
  - https://www.freepdfconvert.com/html-to-pdf
  - https://www.pdf24.org/en/html-to-pdf

## Files Created

- ✅ `BUILD_GUIDE.md` - Markdown source file
- ✅ `BUILD_GUIDE.html` - HTML version (ready for PDF conversion)
- ⏳ `BUILD_GUIDE.pdf` - PDF version (will be created)

## Notes

- The HTML file is optimized for printing with proper page breaks
- All styling is embedded in the HTML file
- The PDF will maintain formatting, colors, and structure
- Recommended PDF size: A4 format

