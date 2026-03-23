const DEFAULT_ASSET_BASE_URL = 'https://cdn.jsdelivr.net/gh/adrshk-mrcr/email-project@main/public/assets';

export function assetUrl(fileName) {
  if (typeof window !== 'undefined') {
    const base =
      typeof import.meta !== 'undefined' &&
      import.meta.env &&
      typeof import.meta.env.BASE_URL === 'string'
        ? import.meta.env.BASE_URL
        : '/';
    return `${base.replace(/\/$/, '')}/assets/${fileName}`;
  }

  const envBaseUrl =
    typeof process !== 'undefined' && process.env && process.env.ASSET_BASE_URL
      ? process.env.ASSET_BASE_URL
      : '';
  const baseUrl = (envBaseUrl || DEFAULT_ASSET_BASE_URL).replace(/\/$/, '');
  return `${baseUrl}/${fileName}`;
}
