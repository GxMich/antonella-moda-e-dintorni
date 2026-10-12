import type { Metadata } from 'next';
import ArticleCard from '../components/ArticleCard';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { articles } from '../content';

export const metadata: Metadata = {
  title: 'Il diario di Antonella: storie di moda | Antonella Moda e Dintorni',
  description: 'Il tubino nero, il tailleur, i jeans: Antonella racconta la storia dei capi che non passano mai di moda.',
  alternates: { canonical: '/diario' },
};

export default function DiaryPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page">
        <header className="page-hero">
          <h1>Il diario di Antonella</h1>
          <p>Storie dei capi che non passano mai di moda, raccontate da chi li indossa tutti i giorni.</p>
        </header>
        <div className="article-grid">
          {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
