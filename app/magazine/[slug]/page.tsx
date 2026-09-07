import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleCard from '../../components/ArticleCard';
import InnerHeader from '../../components/InnerHeader';
import SiteImage from '../../components/SiteImage';
import SiteFooter from '../../components/SiteFooter';
import { articles } from '../../content';
import { assetUrl, pageUrl } from '../../site';

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return { title: 'Articolo non trovato | Antonella Moda e Dintorni' };
  return {
    title: `${article.title} | Antonella Moda e Dintorni`,
    description: article.excerpt,
    alternates: { canonical: `/magazine/${article.slug}` },
    openGraph: { type: 'article', title: article.title, description: article.excerpt, publishedTime: article.isoDate, images: [{ url: assetUrl(article.image), alt: article.alt }] },
    twitter: { card: 'summary_large_image', title: article.title, description: article.excerpt, images: [assetUrl(article.image)] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articleIndex = articles.findIndex((item) => item.slug === slug);
  if (articleIndex < 0) notFound();
  const article = articles[articleIndex];
  const related = [...articles.slice(articleIndex + 1), ...articles.slice(0, articleIndex)].slice(0, 2);
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.excerpt, image: assetUrl(article.image), datePublished: article.isoDate, dateModified: article.isoDate, author: { '@type': 'Person', name: 'Antonella' }, publisher: { '@type': 'Organization', name: 'Antonella Moda e Dintorni' }, mainEntityOfPage: pageUrl(`/magazine/${article.slug}`) };
  return (
    <main className="inner-page article-page">
      <InnerHeader active="magazine" />
      <article>
        <header className="article-hero"><div className="article-hero-copy"><p className="article-meta">{article.category} · {article.date} · {article.readTime}</p><h1>{article.title}</h1><p>{article.excerpt}</p></div><div className="article-hero-image"><SiteImage src={article.image} alt={article.alt} sizes="(max-width: 800px) 100vw, 50vw" priority /></div></header>
        <div className="article-layout"><aside><span>In questo articolo</span>{article.sections.map((section, index) => <a href={`#sezione-${index + 1}`} key={section.heading}>{String(index + 1).padStart(2, '0')} · {section.heading}</a>)}</aside><div className="article-body"><p className="article-intro">{article.intro}</p>{article.sections.map((section, index) => <section id={`sezione-${index + 1}`} key={section.heading}><span>{String(index + 1).padStart(2, '0')}</span><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<div className="article-end"><p>Vuoi trasformare queste idee in abbinamenti adatti a te?</p><Link className="button button-dark" href="/servizi">Scopri la consulenza <span className="arrow">↗</span></Link></div></div></div>
      </article>
      <section className="related-articles section-shell"><div className="section-heading"><div><div className="section-index">Continua a leggere</div><h2>Altri appunti<br /><em>di stile.</em></h2></div><Link className="text-link" href="/magazine">Tutti gli articoli <span className="arrow">↗</span></Link></div><div className="related-article-grid">{related.map((item) => <ArticleCard key={item.slug} article={item} />)}</div></section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
