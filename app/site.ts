export const githubOrigin = 'https://gxmich.github.io';
export const githubBasePath = '/antonella-moda-e-dintorni';
export const siteUrl = `${githubOrigin}${githubBasePath}`;

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
