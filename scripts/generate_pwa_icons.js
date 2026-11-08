import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

function crc32(buf) {
  let table = [];
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
    }
    table[i] = c;
  }
  let crc = 0 ^ (-1);
  for (let i = 0; i < buf.length; i++) {
    crc = (crc >>> 8) ^ table[(crc ^ buf[i]) & 0xff];
  }
  return (crc ^ (-1)) >>> 0;
}

function makeChunk(type, data) {
  const typeBuf = Buffer.from(type);
  const lenBuf = Buffer.alloc(4);
  lenBuf.writeUInt32BE(data.length, 0);
  const crcBuf = Buffer.alloc(4);
  const toCrc = Buffer.concat([typeBuf, data]);
  crcBuf.writeUInt32BE(crc32(toCrc), 0);
  return Buffer.concat([lenBuf, toCrc, crcBuf]);
}

function createPng(width, height, rgbaBuffer) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // 8 bit
  ihdr[9] = 6; // RGBA
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = makeChunk('IHDR', ihdr);

  const rawData = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    rawData[y * (1 + width * 4)] = 0; // Filter: None
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * 4;
      const dstIdx = y * (1 + width * 4) + 1 + x * 4;
      rawData[dstIdx] = rgbaBuffer[srcIdx];
      rawData[dstIdx + 1] = rgbaBuffer[srcIdx + 1];
      rawData[dstIdx + 2] = rgbaBuffer[srcIdx + 2];
      rawData[dstIdx + 3] = rgbaBuffer[srcIdx + 3];
    }
  }

  const compressed = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([sig, ihdrChunk, idatChunk, iendChunk]);
}

// Draw NETCORE icon into a buffer
function renderNetcoreIcon(size, isMaskable = false) {
  const buf = Buffer.alloc(size * size * 4);
  const cx = size / 2;
  const cy = size / 2;
  const maxR = size / 2;
  const scale = isMaskable ? 0.72 : 0.88; // safe zone margin for maskable

  // Helper to set pixel with alpha blending
  function setPixel(x, y, r, g, b, a) {
    if (x < 0 || x >= size || y < 0 || y >= size) return;
    const idx = (Math.floor(y) * size + Math.floor(x)) * 4;
    const currentA = buf[idx + 3] / 255;
    const newA = a / 255;
    const outA = newA + currentA * (1 - newA);
    if (outA <= 0) return;

    buf[idx] = Math.round((r * newA + buf[idx] * currentA * (1 - newA)) / outA);
    buf[idx + 1] = Math.round((g * newA + buf[idx + 1] * currentA * (1 - newA)) / outA);
    buf[idx + 2] = Math.round((b * newA + buf[idx + 2] * currentA * (1 - newA)) / outA);
    buf[idx + 3] = Math.round(outA * 255);
  }

  function drawCircle(x0, y0, radius, r, g, b, alpha) {
    const minX = Math.max(0, Math.floor(x0 - radius - 2));
    const maxX = Math.min(size - 1, Math.ceil(x0 + radius + 2));
    const minY = Math.max(0, Math.floor(y0 - radius - 2));
    const maxY = Math.min(size - 1, Math.ceil(y0 + radius + 2));

    for (let py = minY; py <= maxY; py++) {
      for (let px = minX; px <= maxX; px++) {
        const dist = Math.hypot(px - x0, py - y0);
        if (dist <= radius) {
          const edge = radius - dist;
          const a = edge >= 1 ? alpha : alpha * edge;
          setPixel(px, py, r, g, b, a);
        }
      }
    }
  }

  function drawLine(x1, y1, x2, y2, thickness, r, g, b, alpha) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy);
    if (len === 0) return;
    const ux = dx / len;
    const uy = dy / len;
    const px = -uy;
    const py = ux;

    const steps = Math.ceil(len * 2);
    for (let s = 0; s <= steps; s++) {
      const t = s / steps;
      const lx = x1 + dx * t;
      const ly = y1 + dy * t;
      for (let w = -thickness; w <= thickness; w += 0.5) {
        const dist = Math.abs(w);
        if (dist <= thickness) {
          const a = dist >= thickness - 0.5 ? alpha * (thickness - dist) * 2 : alpha;
          setPixel(lx + px * w, ly + py * w, r, g, b, a);
        }
      }
    }
  }

  // 1. Fill background (Midnight dark navy)
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dist = Math.hypot(x - cx, y - cy);
      // Subtle radial highlight in center
      const radial = Math.max(0, 1 - dist / (size * 0.7));
      const bgR = Math.round(3 + radial * 14);
      const bgG = Math.round(7 + radial * 26);
      const bgB = Math.round(18 + radial * 55);

      if (isMaskable) {
        // Full bleed for maskable
        setPixel(x, y, bgR, bgG, bgB, 255);
      } else {
        // Rounded squircle/soft rounded rect for any
        const cornerR = size * 0.22;
        const qx = Math.abs(x - cx) - (size / 2 - cornerR);
        const qy = Math.abs(y - cy) - (size / 2 - cornerR);
        const outsideDist = Math.hypot(Math.max(0, qx), Math.max(0, qy));
        if (qx <= 0 || qy <= 0 || outsideDist <= cornerR) {
          setPixel(x, y, bgR, bgG, bgB, 255);
        }
      }
    }
  }

  // Outer ambient glowing ring
  const ringRadius = 140 * (size / 512) * scale * 1.7;
  for (let angle = 0; angle < Math.PI * 2; angle += 0.005) {
    const rx = cx + Math.cos(angle) * ringRadius;
    const ry = cy + Math.sin(angle) * ringRadius;
    setPixel(rx, ry, 56, 189, 248, 45);
  }

  // Define network nodes (central hub + 4 satellite nodes)
  const nodeOffset = 110 * (size / 512) * scale;
  const nodes = [
    { x: cx, y: cy - nodeOffset, r: 18 * (size / 512) * scale }, // Top
    { x: cx + nodeOffset, y: cy, r: 18 * (size / 512) * scale }, // Right
    { x: cx, y: cy + nodeOffset, r: 18 * (size / 512) * scale }, // Bottom
    { x: cx - nodeOffset, y: cy, r: 18 * (size / 512) * scale }, // Left
  ];

  // Draw connecting network lines with cyan glow
  nodes.forEach((node) => {
    // Outer glow line
    drawLine(cx, cy, node.x, node.y, 7 * (size / 512) * scale, 6, 182, 212, 60);
    // Core line
    drawLine(cx, cy, node.x, node.y, 3 * (size / 512) * scale, 56, 189, 248, 240);
  });

  // Cross perimeter lines connecting satellites (Diamond mesh topology)
  for (let i = 0; i < nodes.length; i++) {
    const next = nodes[(i + 1) % nodes.length];
    drawLine(nodes[i].x, nodes[i].y, next.x, next.y, 4 * (size / 512) * scale, 14, 116, 144, 100);
    drawLine(nodes[i].x, nodes[i].y, next.x, next.y, 1.8 * (size / 512) * scale, 56, 189, 248, 200);
  }

  // Draw satellite nodes
  nodes.forEach((node) => {
    // Outer pulse halo
    drawCircle(node.x, node.y, node.r * 1.7, 56, 189, 248, 50);
    // Dark border
    drawCircle(node.x, node.y, node.r, 15, 23, 42, 255);
    // Node body
    drawCircle(node.x, node.y, node.r * 0.75, 14, 165, 233, 255);
    // White core
    drawCircle(node.x, node.y, node.r * 0.35, 255, 255, 255, 255);
  });

  // Central Hub Node (Router / Core Switch)
  const centerR = 36 * (size / 512) * scale;
  // Ambient radial pulse
  drawCircle(cx, cy, centerR * 2.2, 56, 189, 248, 40);
  drawCircle(cx, cy, centerR * 1.5, 6, 182, 212, 90);
  // Outer ring
  drawCircle(cx, cy, centerR, 2, 132, 199, 255);
  // Center dark well
  drawCircle(cx, cy, centerR * 0.85, 3, 7, 18, 255);
  // Electric cyan inner core
  drawCircle(cx, cy, centerR * 0.65, 56, 189, 248, 255);
  // Bright white point
  drawCircle(cx, cy, centerR * 0.28, 255, 255, 255, 255);

  return buf;
}

// Generate all required icons
const iconsDir = path.resolve('public/icons');
fs.mkdirSync(iconsDir, { recursive: true });

console.log('Generating PWA icons in', iconsDir);

// 1. icon-192.png
const buf192 = renderNetcoreIcon(192, false);
fs.writeFileSync(path.join(iconsDir, 'icon-192.png'), createPng(192, 192, buf192));
console.log('✓ Created public/icons/icon-192.png');

// 2. icon-512.png
const buf512 = renderNetcoreIcon(512, false);
fs.writeFileSync(path.join(iconsDir, 'icon-512.png'), createPng(512, 512, buf512));
console.log('✓ Created public/icons/icon-512.png');

// 3. icon-512-maskable.png (with safe-zone margin)
const buf512Maskable = renderNetcoreIcon(512, true);
fs.writeFileSync(path.join(iconsDir, 'icon-512-maskable.png'), createPng(512, 512, buf512Maskable));
console.log('✓ Created public/icons/icon-512-maskable.png');

// 4. apple-touch-icon.png (180x180)
const buf180 = renderNetcoreIcon(180, false);
fs.writeFileSync(path.join(iconsDir, 'apple-touch-icon.png'), createPng(180, 180, buf180));
console.log('✓ Created public/icons/apple-touch-icon.png');

// Also copy apple-touch-icon to public root for maximum legacy browser compatibility
fs.writeFileSync(path.resolve('public/apple-touch-icon.png'), createPng(180, 180, buf180));

// 5. SVG icon
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0c1a32" />
      <stop offset="100%" stop-color="#030712" />
    </radialGradient>
    <linearGradient id="cyanBlue" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="8" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <rect width="512" height="512" rx="112" fill="url(#bg)" />
  <circle cx="256" cy="256" r="210" fill="none" stroke="#38bdf8" stroke-opacity="0.15" stroke-width="2" />
  <g filter="url(#glow)">
    <!-- Links -->
    <line x1="256" y1="256" x2="256" y2="120" stroke="#38bdf8" stroke-width="5" />
    <line x1="256" y1="256" x2="392" y2="256" stroke="#38bdf8" stroke-width="5" />
    <line x1="256" y1="256" x2="256" y2="392" stroke="#38bdf8" stroke-width="5" />
    <line x1="256" y1="256" x2="120" y2="256" stroke="#38bdf8" stroke-width="5" />
    <!-- Mesh lines -->
    <line x1="256" y1="120" x2="392" y2="256" stroke="#0ea5e9" stroke-width="2.5" stroke-dasharray="6,4" />
    <line x1="392" y1="256" x2="256" y2="392" stroke="#0ea5e9" stroke-width="2.5" stroke-dasharray="6,4" />
    <line x1="256" y1="392" x2="120" y2="256" stroke="#0ea5e9" stroke-width="2.5" stroke-dasharray="6,4" />
    <line x1="120" y1="256" x2="256" y2="120" stroke="#0ea5e9" stroke-width="2.5" stroke-dasharray="6,4" />
    <!-- Satellites -->
    <circle cx="256" cy="120" r="22" fill="#0b1528" stroke="#38bdf8" stroke-width="4" />
    <circle cx="256" cy="120" r="10" fill="#38bdf8" />
    <circle cx="392" cy="256" r="22" fill="#0b1528" stroke="#38bdf8" stroke-width="4" />
    <circle cx="392" cy="256" r="10" fill="#38bdf8" />
    <circle cx="256" cy="392" r="22" fill="#0b1528" stroke="#38bdf8" stroke-width="4" />
    <circle cx="256" cy="392" r="10" fill="#38bdf8" />
    <circle cx="120" cy="256" r="22" fill="#0b1528" stroke="#38bdf8" stroke-width="4" />
    <circle cx="120" cy="256" r="10" fill="#38bdf8" />
    <!-- Central Hub -->
    <circle cx="256" cy="256" r="48" fill="url(#cyanBlue)" />
    <circle cx="256" cy="256" r="38" fill="#030712" />
    <circle cx="256" cy="256" r="24" fill="#38bdf8" />
    <circle cx="256" cy="256" r="10" fill="#ffffff" />
  </g>
</svg>`;

fs.writeFileSync(path.join(iconsDir, 'icon.svg'), svgContent);
fs.writeFileSync(path.resolve('public/icon.svg'), svgContent);
console.log('✓ Created public/icons/icon.svg & public/icon.svg');
