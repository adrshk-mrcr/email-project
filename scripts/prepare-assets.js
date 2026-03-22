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
  'table-chip-icon.png': { width: 80, height: 80 },
  'table-decor.png': { width: 720, height: 720 },
  'table-divider.png': { width: 920, height: 2 },
  'table-linkedin.png': { width: 112, height: 112 },
  'table-linkedin-glyph.png': { width: 112, height: 112 },
  'table-logo.png': { width: 228, height: 32 },
  'table-x.png': { width: 116, height: 112 },
  'table-x-glyph.png': { width: 116, height: 112 }
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

async function buildTrustpilotBlock() {
  const logoPath = path.join(assetsDir, 'table-trustpilot-logo.png');
  const ratingPath = path.join(assetsDir, 'table-trustpilot-rating-raw.png');
  const outputPath = path.join(assetsDir, 'table-trustpilot-block.png');

  const canvas = sharp({
    create: {
      width: 359,
      height: 40,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 }
    }
  });

  const logo = await sharp(logoPath).resize(165, 40).png().toBuffer();
  const rating = await sharp(ratingPath).resize(177, 33).png().toBuffer();

  const pngBuffer = await canvas
    .composite([
      { input: logo, top: 0, left: 0 },
      { input: rating, top: 5, left: 182 }
    ])
    .png()
    .toBuffer();

  await writeFile(outputPath, pngBuffer);
}

async function buildDarkLogo() {
  const logoPath = path.join(assetsDir, 'table-logo.png');
  const outputPath = path.join(assetsDir, 'table-logo-dark.png');
  const pngBuffer = await sharp(logoPath).negate({ alpha: false }).png().toBuffer();
  await writeFile(outputPath, pngBuffer);
}

async function buildDarkDecor() {
  const decorPath = path.join(assetsDir, 'table-decor.png');
  const outputPath = path.join(assetsDir, 'table-decor-dark.png');
  const pngBuffer = await sharp(decorPath).linear(1.4, 40).png().toBuffer();
  await writeFile(outputPath, pngBuffer);
}

async function buildDarkSocialIcons() {
  for (const name of ['table-linkedin', 'table-x']) {
    const inputPath = path.join(assetsDir, `${name}.png`);
    const outputPath = path.join(assetsDir, `${name}-dark.png`);
    const pngBuffer = await sharp(inputPath).linear(1.08, 10).png().toBuffer();
    await writeFile(outputPath, pngBuffer);
  }
}

async function buildTrustpilotStarOnly() {
  const inputPath = path.join(assetsDir, 'trustpilot-star.png');
  const outputPath = path.join(assetsDir, 'trustpilot-star-only.png');
  const pngBuffer = await sharp(inputPath)
    .extract({ left: 0, top: 0, width: 196, height: 196 })
    .resize(40, 40)
    .png()
    .toBuffer();
  await writeFile(outputPath, pngBuffer);
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

  await buildTrustpilotBlock();
  await buildDarkLogo();
  await buildDarkDecor();
  await buildDarkSocialIcons();
  await buildTrustpilotStarOnly();

  console.log(`Converted ${converted} asset(s) to PNG.`);
  console.log(`Resized ${resized} asset(s) to target 2x dimensions.`);
  console.log('Built table-trustpilot-block.png');
  console.log('Built table-logo-dark.png');
  console.log('Built table-decor-dark.png');
  console.log('Built table-linkedin-dark.png and table-x-dark.png');
  console.log('Built trustpilot-star-only.png');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
