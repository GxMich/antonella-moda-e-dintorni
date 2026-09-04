import type { Metadata } from 'next';
import Link from 'next/link';
import InnerHeader from '../components/InnerHeader';
import SiteFooter from '../components/SiteFooter';
import { business } from '../content';

export const metadata: Metadata = { title: 'Termini di utilizzo e servizi | Antonella Moda e Dintorni', description: 'Condizioni di utilizzo del sito e informazioni sui servizi di Antonella Moda e Dintorni.', alternates: { canonical: '/termini' }, robots: { index: false, follow: true } };

export default function TermsPage() {
  return (
    <main className="legal-page">
      <InnerHeader />
      <article className="legal-content"><span className="section-index">Documento informativo</span><h1>Termini di utilizzo<br /><em>e servizi.</em></h1><p className="legal-lede">Condizioni che regolano l’accesso a questo sito e le informazioni sui servizi presentati.</p><p className="legal-updated">Ultimo aggiornamento: 4 settembre 2026</p>
        <div className="legal-note"><strong>Da completare prima della pubblicazione definitiva</strong><p>Inserire denominazione legale, codice fiscale o partita IVA, eventuale iscrizione al Registro Imprese e verificare il testo con il titolare o un professionista. Questa pagina è una base editoriale per la demo.</p></div>
        <div className="legal-body">
          <section><h2>1. Titolare del sito</h2><p>Il sito è riferito ad Antonella Moda e Dintorni, con sede operativa indicata in {business.addressLines.join(' ')}. Contatti: <a href={`mailto:${business.email}`}>{business.email}</a> · <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>.</p></section>
          <section><h2>2. Finalità del sito</h2><p>Il sito presenta la boutique, una selezione editoriale di capi, servizi, orari, contatti e articoli informativi. Salvo diversa indicazione, non costituisce un negozio elettronico e non permette di concludere automaticamente acquisti o pagamenti online.</p></section>
          <section><h2>3. Disponibilità e caratteristiche dei capi</h2><p>Immagini, descrizioni, colori, taglie e disponibilità hanno finalità informative. Schermi, illuminazione e aggiornamenti di catalogo possono generare differenze. Le caratteristiche effettive del capo disponibile vengono confermate dalla boutique prima dell’acquisto.</p></section>
          <section><h2>4. Contatti, richieste e riserve</h2><p>Il modulo appuntamento prepara un messaggio nel browser e non trasmette né memorizza i campi sul server del sito. L’invio tramite WhatsApp, email o telefono non conclude automaticamente un contratto e non garantisce la disponibilità. Appuntamenti, eventuali riserve, tempi di ritiro, prezzi e condizioni vengono confermati direttamente dalla boutique.</p></section>
          <section><h2>5. Servizi presentati</h2><p>Consulenza personale, selezione a distanza, appuntamenti, idee regalo, outfit per occasioni, capsule guardaroba, abbinamenti e cambio stagione guidato dipendono dalla disponibilità del momento. Modalità, tempi ed eventuali costi devono essere confermati prima dell’erogazione.</p></section>
          <section><h2>6. Uso corretto del sito</h2><p>Non è consentito utilizzare il sito per attività illecite, tentare accessi non autorizzati, interferire con il funzionamento tecnico o riutilizzare sistematicamente contenuti e immagini senza autorizzazione.</p></section>
          <section><h2>7. Proprietà dei contenuti</h2><p>Testi, grafica, fotografie, struttura e segni distintivi appartengono ai rispettivi titolari o sono utilizzati con autorizzazione. È consentita la condivisione dei link alle pagine; riproduzioni ulteriori richiedono il consenso del titolare dei diritti.</p></section>
          <section><h2>8. Collegamenti esterni</h2><p>Il sito può rimandare a WhatsApp, Google Maps o altri servizi esterni. L’accesso avviene su scelta dell’utente e secondo condizioni e informative del relativo fornitore.</p></section>
          <section><h2>9. Funzionamento e aggiornamenti</h2><p>Facciamo il possibile per mantenere informazioni e sito accessibili, ma non possiamo garantire assenza assoluta di interruzioni, errori o contenuti non aggiornati. I termini possono essere modificati quando cambiano servizi, tecnologie o norme applicabili.</p></section>
          <section><h2>10. Legge applicabile e contatti</h2><p>Si applica la legge italiana. Restano salve le tutele inderogabili riconosciute ai consumatori e i criteri di competenza previsti dalla normativa. Per chiarimenti scrivi a <a href={`mailto:${business.email}`}>{business.email}</a>.</p><p>Per il trattamento dei dati consulta la <Link href="/privacy">Privacy Policy</Link> e la <Link href="/cookie">Cookie Policy</Link>.</p></section>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
