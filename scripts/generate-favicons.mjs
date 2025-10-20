#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const projectRoot = process.cwd();
const sourcePng = path.join(projectRoot, 'public', 'images', 'favicon.png');
const publicDir = path.join(projectRoot, 'public');

const outputs = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'favicon-64x64.png', size: 64 },
  { name: 'favicon-96x96.png', size: 96 },
  { name: 'favicon-180x180.png', size: 180 }, // Apple touch
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function ensureSourceExists() {
  if (!fs.existsSync(sourcePng)) {
    console.error(`Source favicon not found at: ${sourcePng}`);
    process.exit(1);
  }
}

async function generatePngSizes() {
  const buffer = fs.readFileSync(sourcePng);
  const jobs = outputs.map(async ({ name, size }) => {
    const target = path.join(publicDir, name);
    await sharp(buffer)
      .resize(size, size, { fit: 'cover' })
      .png({ compressionLevel: 9, palette: true, quality: 80 })
      .toFile(target);
    return target;
  });
  return Promise.all(jobs);
}

async function generateIco() {
  // Build multi-size ICO from 16,32,48
  const icoPath = path.join(publicDir, 'favicon.ico');
  const sizes = [16, 32, 48];
  const images = await Promise.all(
    sizes.map((s) => sharp(sourcePng).resize(s, s, { fit: 'cover' }).png().toBuffer())
  );

  // Minimal ICO encoder to avoid extra deps
  function pngToIco(buffers) {
    const num = buffers.length;
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type icon
    header.writeUInt16LE(num, 4); // count

    const dirEntries = [];
    let offset = 6 + num * 16;
    const parts = [header];

    for (let i = 0; i < num; i++) {
      const img = buffers[i];
      const entry = Buffer.alloc(16);
      const size = sizes[i];
      entry.writeUInt8(size === 256 ? 0 : size, 0); // width
      entry.writeUInt8(size === 256 ? 0 : size, 1); // height
      entry.writeUInt8(0, 2); // colors in palette
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // color planes
      entry.writeUInt16LE(32, 6); // bits per pixel
      entry.writeUInt32LE(img.length, 8); // size of image data
      entry.writeUInt32LE(offset, 12); // offset of image data
      dirEntries.push(entry);
      parts.push(entry);
      offset += img.length;
      parts.push(img);
    }

    return Buffer.concat(parts);
  }

  const icoBuffer = pngToIco(images);
  fs.writeFileSync(icoPath, icoBuffer);
  return icoPath;
}

async function writeManifest() {
  const manifest = {
    name: 'TNT Dumpsters',
    short_name: 'TNT',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ]
  };
  fs.writeFileSync(path.join(publicDir, 'site.webmanifest'), JSON.stringify(manifest, null, 2));
}

async function main() {
  await ensureSourceExists();
  await generatePngSizes();
  await generateIco();
  await writeManifest();
  console.log('Favicons generated successfully.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


