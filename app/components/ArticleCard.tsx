import Link from 'next/link';
import type { Article } from '../content';
import SiteImage from './SiteImage';

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <article className="article-card">
      <Link className="article-card-image" href={`/diario/${article.slug}`} tabIndex={-1} aria-hidden="true">
        <SiteImage src={article.image} alt="" sizes="(max-width: 700px) 100vw, 33vw" />
      </Link>
      <time dateTime={article.isoDate}>{article.date}</time>
      <h3><Link href={`/diario/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.excerpt}</p>
    </article>
  );
}
