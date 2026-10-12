import type { Metadata } from 'next';
import CatalogExplorer from '../components/CatalogExplorer';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { products, whatsappLink } from '../content';

export const metadata: Metadata = {
  title: 'Collezione: abiti, completi e cappotti donna | Antonella Moda e Dintorni',
  description: 'Abiti, completi, tailleur, cappotti, bluse e gonne fotografati nella boutique Antonella Moda e Dintorni a Vercelli, molti della collezione Artigli. Chiedi disponibilità e taglie su WhatsApp.',
  alternates: { canonical: '/collezione' },
};

export default function CollectionPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page">
        <header className="page-hero">
          <h1>Collezione</h1>
          <p>Capi fotografati in boutique, indossati da noi e dalle nostre clienti. Molti sono della collezione Artigli. Le disponibilità cambiano spesso: tocca un capo per vederlo da vicino e chiedere ad Antonella se c’è la tua taglia.</p>
        </header>
        <CatalogExplorer products={products} />
        <aside className="catalog-note">
          <h2>Cerchi qualcosa che qui non vedi?</h2>
          <p>In boutique arrivano capi nuovi ogni settimana, non tutti finiscono online. Dicci cosa cerchi e ti mandiamo le foto.</p>
          <a className="button" href={whatsappLink('Ciao Antonella, sto cercando ')} target="_blank" rel="noreferrer">Chiedi su WhatsApp</a>
        </aside>
      </main>
      <SiteFooter />
    </>
  );
}
