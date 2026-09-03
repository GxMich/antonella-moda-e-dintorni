import Link from 'next/link';
import type { Article } from '../content';

export default function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={featured ? 'article-card is-featured' : 'article-card'}>
      <Link className="article-card-image" href={`/magazine/${article.slug}`}>
        <img src={article.image} alt={article.alt} loading={featured ? 'eager' : 'lazy'} />
      </Link>
      <div className="article-card-copy">
        <p className="article-meta">{article.category} · {article.readTime}</p>
        <h2><Link href={`/magazine/${article.slug}`}>{article.title}</Link></h2>
        <p>{article.excerpt}</p>
        <Link className="text-link" href={`/magazine/${article.slug}`}>Leggi l’articolo <span className="arrow">↗</span></Link>
      </div>
    </article>
  );
}
