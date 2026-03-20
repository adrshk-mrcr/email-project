import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const assetsDir = path.resolve('public/assets');

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true });
}

async function convertSvgAsset(fileName) {
  const inputPath = path.join(assetsDir, fileName);
  const source = await readFile(inputPath, 'utf8');

  if (!source.trimStart().startsWith('<svg')) {
    return false;
  }

  const pngBuffer = await sharp(Buffer.from(source)).png().toBuffer();
  await writeFile(inputPath, pngBuffer);
  return true;
}

async function main() {
  await ensureDir(assetsDir);
  const files = await readdir(assetsDir);
  let converted = 0;

  for (const fileName of files) {
    if (!fileName.endsWith('.png')) {
      continue;
    }

    if (await convertSvgAsset(fileName)) {
      converted += 1;
    }
  }

  console.log(`Converted ${converted} asset(s) to PNG.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
