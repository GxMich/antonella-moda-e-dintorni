import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://antonellamodaedintorni.com';
  const products = ['morbida-presenza', 'linea-quotidiana', 'un-gesto-leggero', 'tono-di-casa'];
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/collezione`, lastModified: new Date(), changeFrequency: 'weekly', priority: .9 },
    { url: `${base}/boutique`, lastModified: new Date(), changeFrequency: 'monthly', priority: .8 },
    ...products.map((slug) => ({ url: `${base}/capo/${slug}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: .7 })),
  ];
}
