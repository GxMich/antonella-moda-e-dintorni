import type { MetadataRoute } from 'next';
import { articles, products, services } from './content';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://antonellamodaedintorni.com';
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/collezione`, lastModified: new Date(), changeFrequency: 'weekly', priority: .9 },
    { url: `${base}/servizi`, lastModified: new Date(), changeFrequency: 'monthly', priority: .85 },
    { url: `${base}/appuntamento`, lastModified: new Date(), changeFrequency: 'monthly', priority: .8 },
    { url: `${base}/chi-siamo`, lastModified: new Date(), changeFrequency: 'yearly', priority: .75 },
    { url: `${base}/magazine`, lastModified: new Date(), changeFrequency: 'monthly', priority: .8 },
    { url: `${base}/boutique`, lastModified: new Date(), changeFrequency: 'monthly', priority: .8 },
    { url: `${base}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: .65 },
    ...products.map(({ slug }) => ({ url: `${base}/capo/${slug}`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: .7 })),
    ...services.map(({ slug }) => ({ url: `${base}/servizi/${slug}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: .72 })),
    ...articles.map(({ slug, isoDate }) => ({ url: `${base}/magazine/${slug}`, lastModified: new Date(isoDate), changeFrequency: 'monthly' as const, priority: .65 })),
  ];
}
