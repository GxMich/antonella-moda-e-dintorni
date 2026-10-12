import type { Metadata } from 'next';
import Link from 'next/link';
import HoursList from '../components/HoursList';
import MapFacade from '../components/MapFacade';
import OpenNow from '../components/OpenNow';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import SiteImage from '../components/SiteImage';
import { business, whatsappLink } from '../content';

export const metadata: Metadata = {
  title: 'Dove siamo e orari: Via Carlo III di Savoia 10, Vercelli | Antonella Moda e Dintorni',
  description: 'La boutique Antonella Moda e Dintorni si trova a Vercelli in Via Carlo III di Savoia 10, angolo Via Dante. Orari di apertura, telefono e indicazioni.',
  alternates: { canonical: '/boutique' },
};

export default function BoutiquePage() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page boutique-page">
        <div className="boutique-hero">
          <div>
            <h1>Dove siamo</h1>
            <p className="boutique-news">Dal 2026 la boutique ha una nuova casa, all’angolo con Via Dante.</p>
            <address className="boutique-address">{business.addressLines.map((line) => <span key={line}>{line}</span>)}</address>
            <OpenNow />
            <div className="visit-actions">
              <a className="button" href={business.mapsUrl} target="_blank" rel="noreferrer">Apri in Google Maps</a>
              <a className="button button-ghost" href={`tel:${business.phoneHref}`}>Chiama {business.phoneDisplay}</a>
            </div>
            <p className="boutique-small">Se vieni da fuori Vercelli o vuoi essere sicura di trovare un capo, <a href={whatsappLink('Ciao Antonella, passo in boutique il giorno … Mi tieni da parte …?')} target="_blank" rel="noreferrer">scrivici prima su WhatsApp</a>: te lo teniamo da parte.</p>
          </div>
          <div className="boutique-hours">
            <h2>Orari di apertura</h2>
            <HoursList />
            <p className="boutique-small">Nei giorni festivi gli orari possono cambiare: li annunciamo su Instagram e Facebook.</p>
          </div>
        </div>
        <section className="boutique-map" aria-label="Mappa">
          <MapFacade />
        </section>
        <section className="boutique-strip" aria-label="Interni della boutique">
          <div><SiteImage src="/images/boutique/stender-neri.webp" alt="Capi neri, borse e collane esposti in boutique" sizes="(max-width: 700px) 100vw, 33vw" /></div>
          <div><SiteImage src="/images/boutique/parete-amore-per-te-stessa.webp" alt="La parete illustrata della boutique" sizes="(max-width: 700px) 100vw, 33vw" /></div>
          <div><SiteImage src="/images/boutique/stender-camicie.webp" alt="Stender con camicie e capi in denim" sizes="(max-width: 700px) 100vw, 33vw" /></div>
        </section>
        <section className="boutique-faq">
          <h2>Prima di venire</h2>
          <p>Non serve appuntamento. Se cerchi qualcosa per un’occasione precisa, <Link href="/appuntamento">prenota</Link> e ti facciamo trovare una selezione pronta. Altre risposte nelle <Link href="/faq">domande frequenti</Link>.</p>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
