export const githubOrigin = 'https://gxmich.github.io';
export const githubBasePath = '/antonella-moda-e-dintorni';
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '');

// Set NEXT_PUBLIC_SITE_URL at launch to the exact public address, including a
// project path when the deployment is not served from the domain root.
export const siteUrl = configuredSiteUrl || `${githubOrigin}${githubBasePath}`;

export function assetPath(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${normalized}`;
}

export function assetUrl(path: string) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteUrl}${normalized}`;
}

export function pageUrl(path = '') {
  const normalized = path && !path.startsWith('/') ? `/${path}` : path;
  return `${siteUrl}${normalized}`;
}
