import type { MetadataRoute } from 'next';
import { articles, products, services } from './content';
import { siteUrl } from './site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number, changeFrequency: 'weekly' | 'monthly' | 'yearly' = 'monthly') => ({ url: `${siteUrl}${path}`, lastModified: now, changeFrequency, priority });
  return [
    page('', 1, 'weekly'),
    page('/collezione', 0.9, 'weekly'),
    page('/boutique', 0.9),
    page('/servizi', 0.8),
    page('/un-libro-in-borsa', 0.8),
    page('/chi-siamo', 0.75, 'yearly'),
    page('/diario', 0.7),
    page('/appuntamento', 0.7),
    page('/faq', 0.65),
    ...products.map((product) => ({ url: `${siteUrl}/capo/${product.slug}`, lastModified: new Date(product.updatedAt), changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...services.map((service) => page(`/servizi/${service.slug}`, 0.7)),
    ...articles.map((article) => ({ url: `${siteUrl}/diario/${article.slug}`, lastModified: new Date(article.isoDate), changeFrequency: 'yearly' as const, priority: 0.6 })),
  ];
}
