const DEFAULT_ASSET_BASE_URL = 'https://cdn.jsdelivr.net/gh/adrshk-mrcr/email-project@main/public/assets';
const PREVIEW_ASSET_BASE_URL = 'https://adrshk-mrcr.github.io/email-project/assets';

export function assetUrl(fileName) {
  if (typeof window !== 'undefined') {
    return `${PREVIEW_ASSET_BASE_URL}/${fileName}`;
  }

  const envBaseUrl =
    typeof process !== 'undefined' && process.env && process.env.ASSET_BASE_URL
      ? process.env.ASSET_BASE_URL
      : '';
  const baseUrl = (envBaseUrl || DEFAULT_ASSET_BASE_URL).replace(/\/$/, '');
  return `${baseUrl}/${fileName}`;
}
