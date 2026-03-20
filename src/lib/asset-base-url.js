const DEFAULT_ASSET_BASE_URL = 'https://cdn.jsdelivr.net/gh/adrshk-mrcr/email-project@main/public/assets';

export function assetUrl(fileName) {
  const baseUrl = (process.env.ASSET_BASE_URL || DEFAULT_ASSET_BASE_URL).replace(/\/$/, '');
  return `${baseUrl}/${fileName}`;
}
