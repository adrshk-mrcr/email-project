import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir = path.resolve('public/assets');
const targetSizes = {
  'code-chip-icon.png': { width: 40, height: 40 },
  'code-decor.png': { width: 720, height: 720 },
  'code-divider.png': { width: 992, height: 2 },
  'code-linkedin.png': { width: 56, height: 56 },
  'code-logo.png': { width: 228, height: 32 },
  'code-x.png': { width: 58, height: 56 },
  'table-chip-icon.png': { width: 40, height: 40 },
  'table-decor.png': { width: 720, height: 720 },
  'table-divider.png': { width: 920, height: 2 },
  'table-linkedin.png': { width: 56, height: 56 },
  'table-logo.png': { width: 228, height: 32 },
  'table-x.png': { width: 58, height: 56 }
};

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function convertSvgAsset(fileName) {
  const inputPath = path.join(assetsDir, fileName);
  const source = await readFile(inputPath, 'utf8');

  if (!source.trimStart().startsWith('<svg')) {
    return false;
  }

  const image = sharp(Buffer.from(source));
  const metadata = await image.metadata();
  const width = metadata.width ? metadata.width * 2 : undefined;
  const height = metadata.height ? metadata.height * 2 : undefined;
  const pngBuffer = await image.resize(width, height).png().toBuffer();
  await writeFile(inputPath, pngBuffer);
  return true;
}

async function ensureTargetPngSize(fileName) {
  const target = targetSizes[fileName];

  if (!target) {
    return false;
  }

  const inputPath = path.join(assetsDir, fileName);
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  if (metadata.width === target.width && metadata.height === target.height) {
    return false;
  }

  const pngBuffer = await image.resize(target.width, target.height).png().toBuffer();
  await writeFile(inputPath, pngBuffer);
  return true;
}

async function main() {
  await ensureDir(assetsDir);
  const files = await readdir(assetsDir);
  let converted = 0;
  let resized = 0;

  for (const fileName of files) {
    if (!fileName.endsWith('.png')) {
      continue;
    }

    if (await convertSvgAsset(fileName)) {
      converted += 1;
    }

    if (await ensureTargetPngSize(fileName)) {
      resized += 1;
    }
  }

  console.log(`Converted ${converted} asset(s) to PNG.`);
  console.log(`Resized ${resized} asset(s) to target 2x dimensions.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
