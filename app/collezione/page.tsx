import type { Metadata } from 'next';
import Link from 'next/link';
import CatalogExplorer from '../components/CatalogExplorer';
import InnerHeader from '../components/InnerHeader';
import SiteImage from '../components/SiteImage';
import SiteFooter from '../components/SiteFooter';
import { business, products } from '../content';

export const metadata: Metadata = {
  title: 'Collezione e nuovi arrivi | Antonella Moda e Dintorni',
  description: 'Scopri abiti, maglieria, giacche e accessori scelti da Antonella Moda e Dintorni a Vercelli. Chiedi disponibilità e consigli su WhatsApp.',
  alternates: { canonical: '/collezione' },
};

export default function CollectionPage() {
  return (
    <main className="inner-page">
      <InnerHeader active="collezione" />
      <section className="collection-intro">
        <span className="section-index">Collezione · Vercelli</span>
        <h1>Le cose belle<br /><em>si fanno spazio.</em></h1>
        <p>Una selezione di capi femminili versatili, scelti con attenzione e pronti a incontrare il tuo modo di essere.</p>
      </section>
      <section className="collection-all">
        <div className="collection-filter"><span>{String(products.length).padStart(2, '0')} proposte in evidenza</span><span>Cerca per nome, colore o categoria</span></div>
        <CatalogExplorer products={products} />
      </section>
      <section className="collection-editorial">
        <div className="collection-editorial-image"><SiteImage src="/images/capsule-rack-v2.webp" alt="Una selezione coordinata di capi nei toni naturali" sizes="(max-width: 800px) 100vw, 50vw" /></div>
        <div className="collection-editorial-copy"><span className="section-index">Più possibilità, meno rumore</span><h2>Una collezione<br /><em>che dialoga.</em></h2><p>Ogni proposta è pensata per incontrare ciò che hai già: colori compatibili, volumi facili da sovrapporre e dettagli capaci di cambiare il tono di un look.</p><Link className="text-link" href="/magazine/guardaroba-che-ti-somiglia">Come costruire il guardaroba <span className="arrow">↗</span></Link></div>
      </section>
      <section className="collection-note"><span className="section-index">Una nota importante</span><div><h2>Ogni capo ha<br /><em>la sua storia.</em></h2><p>Taglie, colori e disponibilità possono cambiare. Le schede raccontano la proposta, ma il consiglio più preciso nasce dal confronto: scrivici e saremo felici di aiutarti.</p><a className="button button-dark" href={business.whatsappUrl} target="_blank" rel="noreferrer">Chiedi informazioni <span className="arrow">↗</span></a></div></section>
      <SiteFooter />
    </main>
  );
}
