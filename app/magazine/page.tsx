import type { Metadata } from 'next';
import ArticleCard from '../components/ArticleCard';
import InnerHeader from '../components/InnerHeader';
import SiteFooter from '../components/SiteFooter';
import { articles } from '../content';

export const metadata: Metadata = { title: 'Magazine e consigli di stile | Antonella Moda e Dintorni', description: 'Idee pratiche su guardaroba, colori, abbinamenti e scelte consapevoli dal magazine di Antonella Moda e Dintorni.', alternates: { canonical: '/magazine' } };

export default function MagazinePage() {
  return (
    <main className="inner-page magazine-page">
      <InnerHeader active="magazine" />
      <section className="magazine-hero"><span className="section-index">Magazine · Appunti di stile</span><h1>Parole da mettere<br /><em>nel guardaroba.</em></h1><p>Consigli concreti, abbinamenti e piccoli esercizi per scegliere con più libertà ciò che indossi ogni giorno.</p></section>
      <section className="magazine-list section-shell"><ArticleCard article={articles[0]} featured /><div className="magazine-grid">{articles.slice(1).map((article) => <ArticleCard key={article.slug} article={article} />)}</div></section>
      <section className="magazine-note"><span className="section-index">Un consiglio su misura</span><div><h2>Ogni guardaroba<br /><em>fa storia a sé.</em></h2><p>Gli articoli sono un punto di partenza. Se desideri capire come applicare un’idea ai tuoi capi o a una nuova occasione, passa in boutique oppure scrivici.</p><a className="button button-dark" href="https://wa.me/393318115966" target="_blank" rel="noreferrer">Fai una domanda <span className="arrow">↗</span></a></div></section>
      <SiteFooter />
    </main>
  );
}
