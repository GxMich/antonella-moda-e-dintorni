import type { Metadata } from 'next';
import Link from 'next/link';
import InnerHeader from '../components/InnerHeader';
import SiteFooter from '../components/SiteFooter';
import { business } from '../content';

export const metadata: Metadata = { title: 'Accessibilità | Antonella Moda e Dintorni', description: 'Impegno e informazioni sull’accessibilità del sito Antonella Moda e Dintorni.', alternates: { canonical: '/accessibilita' }, robots: { index: false, follow: true } };

export default function AccessibilityPage() {
  return (
    <main className="legal-page">
      <InnerHeader />
      <article className="legal-content"><span className="section-index">Accessibilità del sito</span><h1>Un sito aperto<br /><em>a più persone.</em></h1><p className="legal-lede">L’obiettivo è offrire un’esperienza comprensibile, navigabile e utilizzabile anche con tecnologie assistive e modalità di interazione diverse.</p><p className="legal-updated">Ultimo aggiornamento: 1 settembre 2026</p>
        <div className="legal-note"><strong>Stato della dichiarazione</strong><p>Questa pagina descrive le misure integrate nella demo e non costituisce una certificazione formale di conformità. Prima della pubblicazione definitiva sono consigliati test con utenti e strumenti assistivi.</p></div>
        <div className="legal-body">
          <section><h2>1. Misure adottate</h2><ul><li>Struttura semantica con titoli, sezioni, navigazione e piè di pagina.</li><li>Testi alternativi per le immagini informative.</li><li>Contrasto visivo e dimensioni di testo responsive.</li><li>Stati di focus visibili per la navigazione da tastiera.</li><li>Riduzione delle animazioni quando il dispositivo lo richiede.</li><li>Link descrittivi e pulsanti con etichette comprensibili.</li></ul></section>
          <section><h2>2. Navigazione da tastiera</h2><p>Le funzioni principali possono essere raggiunte usando Tab e Shift+Tab. Il focus viene evidenziato e i contenuti interattivi nativi, come collegamenti, pulsanti e sezioni espandibili, mantengono il comportamento previsto dal browser.</p></section>
          <section><h2>3. Immagini e contenuti</h2><p>Le immagini che comunicano un prodotto, un ambiente o un’azione includono descrizioni alternative. Gli elementi puramente decorativi non dovrebbero introdurre informazioni indispensabili.</p></section>
          <section><h2>4. Limiti conosciuti</h2><p>I collegamenti verso servizi esterni, tra cui WhatsApp e Google Maps, conducono a piattaforme la cui accessibilità non è controllata dal titolare del sito. Alcune fotografie editoriali potrebbero richiedere descrizioni più specifiche dopo la sostituzione con le immagini definitive.</p></section>
          <section><h2>5. Segnalazioni</h2><p>Se incontri una barriera, indica la pagina, il problema riscontrato, il dispositivo e il browser utilizzati. Scrivi a <a href={`mailto:${business.email}`}>{business.email}</a> oppure chiama <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>. Faremo il possibile per offrire l’informazione in un formato alternativo e correggere il problema.</p></section>
          <section><h2>6. Miglioramento continuo</h2><p>L’accessibilità viene verificata quando cambiano struttura, contenuti o funzionalità. Gli aggiornamenti rilevanti verranno descritti in questa pagina.</p><p>Torna alla <Link href="/">homepage</Link> oppure consulta le <Link href="/faq">domande frequenti</Link>.</p></section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
