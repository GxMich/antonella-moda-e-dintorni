import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ArticleCard from '../../components/ArticleCard';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import SiteImage from '../../components/SiteImage';
import { articles, business } from '../../content';
import { assetUrl, pageUrl } from '../../site';

export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return { title: 'Articolo non trovato | Antonella Moda e Dintorni' };
  return {
    title: `${article.title} | Il diario di Antonella`,
    description: article.excerpt,
    alternates: { canonical: `/diario/${article.slug}` },
    openGraph: { type: 'article', title: article.title, description: article.excerpt, publishedTime: article.isoDate, images: [{ url: assetUrl(article.image), alt: article.alt }] },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();
  const related = articles.filter((item) => item.slug !== article.slug);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: assetUrl(article.image),
    datePublished: article.isoDate,
    author: { '@type': 'Person', name: business.owner },
    publisher: { '@type': 'Organization', name: business.name },
    mainEntityOfPage: pageUrl(`/diario/${article.slug}`),
  };

  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page">
        <article className="article">
          <nav className="breadcrumb" aria-label="Percorso"><Link href="/diario">Il diario di Antonella</Link></nav>
          <header className="article-header">
            <h1>{article.title}</h1>
            <p className="article-byline">Di Antonella Mangolini, <time dateTime={article.isoDate}>{article.date}</time></p>
          </header>
          <div className="article-cover"><SiteImage src={article.image} alt={article.alt} sizes="(max-width: 900px) 100vw, 860px" priority /></div>
          <div className="article-body">
            {article.sections.map((section, index) => (
              <section key={section.heading ?? index}>
                {section.heading && <h2>{section.heading}</h2>}
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>
        </article>
        <section className="related" aria-labelledby="related-title">
          <h2 id="related-title">Continua a leggere</h2>
          <div className="article-grid">{related.map((item) => <ArticleCard key={item.slug} article={item} />)}</div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
