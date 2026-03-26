const DEFAULT_ASSET_BASE_URL = 'https://cdn.jsdelivr.net/gh/adrshk-mrcr/email-project@main/public/assets';

export function assetUrl(fileName) {
  if (typeof window !== 'undefined') {
    const basePath = (window.location.pathname || '/').startsWith('/email-project/')
      ? '/email-project/assets'
      : '/assets';
    return `${window.location.origin}${basePath}/${fileName}`;
  }

  const envBaseUrl =
    typeof process !== 'undefined' && process.env && process.env.ASSET_BASE_URL
      ? process.env.ASSET_BASE_URL
      : '';
  const baseUrl = (envBaseUrl || DEFAULT_ASSET_BASE_URL).replace(/\/$/, '');
  return `${baseUrl}/${fileName}`;
}
