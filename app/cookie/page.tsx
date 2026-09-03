import type { Metadata } from 'next';
import Link from 'next/link';
import InnerHeader from '../components/InnerHeader';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = { title: 'Cookie Policy | Antonella Moda e Dintorni', description: 'Informativa sui cookie e sulle tecnologie locali usate dal sito Antonella Moda e Dintorni.', alternates: { canonical: '/cookie' }, robots: { index: false, follow: true } };

export default function CookiePage() {
  return (
    <main className="legal-page">
      <InnerHeader />
      <article className="legal-content"><span className="section-index">Documento informativo</span><h1>Cookie<br /><em>Policy.</em></h1><p className="legal-lede">Informativa sull’uso di cookie, memoria locale e tecnologie analoghe sul sito antonellamodaedintorni.com.</p><p className="legal-updated">Ultimo aggiornamento: 3 settembre 2026</p>
        <div className="legal-note"><strong>Configurazione prevista per il lancio</strong><p>Il sito non attiva cookie di profilazione, pubblicità, feed social, video incorporati o analytics di terze parti. Se la configurazione cambierà, questa pagina e il centro preferenze dovranno essere aggiornati prima dell’attivazione.</p></div>
        <div className="legal-body">
          <section><h2>1. Cosa sono cookie e tecnologie analoghe</h2><p>I cookie sono piccoli file che un sito o un servizio può salvare sul dispositivo. La memoria locale del browser svolge una funzione simile, ma resta accessibile al sito che l’ha creata. Entrambi possono essere tecnici oppure, in altri contesti, usati per misurazione e profilazione.</p></section>
          <section><h2>2. Strumento presente sul sito</h2><div className="cookie-table"><div><strong>antonella-cookie-preferences-v1</strong><span>Memoria locale del browser</span><em>Necessaria</em></div><div><strong>Finalità</strong><span>Ricordare che l’informativa è stata mostrata</span><em>Tecnica</em></div><div><strong>Durata</strong><span>Fino alla cancellazione dei dati del browser</span><em>Persistente</em></div></div><p>La preferenza contiene solo lo stato delle categorie tecniche e l’indicazione che misurazione e marketing non sono attivi. Non identifica direttamente l’utente e non viene usata per pubblicità.</p></section>
          <section><h2>3. Categorie non attive</h2><div className="legal-table"><div><strong>Analytics e misurazione</strong><span>Non attivi</span></div><div><strong>Pubblicità e profilazione</strong><span>Non attivi</span></div><div><strong>Pixel social</strong><span>Non attivi</span></div><div><strong>Video o mappe incorporati</strong><span>Non presenti</span></div></div></section>
          <section><h2>4. Link verso servizi esterni</h2><p>WhatsApp e Google Maps non sono incorporati nella pagina: si aprono solo dopo un tuo clic. Dal momento dell’apertura, il servizio esterno può utilizzare cookie o altri strumenti secondo la propria informativa e le impostazioni del tuo account o browser.</p></section>
          <section><h2>5. È necessario il consenso?</h2><p>Gli strumenti strettamente necessari al funzionamento o alla memorizzazione di una scelta non richiedono normalmente un consenso preventivo, ma devono essere descritti con trasparenza. Il pannello presente sul sito ha quindi funzione informativa e di controllo.</p></section>
          <section><h2>6. Come cancellare la preferenza</h2><p>Puoi eliminare la memoria locale dalle impostazioni del browser relative ai dati del sito. Alla visita successiva l’informativa verrà mostrata di nuovo. Puoi anche riaprire il pannello dal collegamento qui sotto.</p><a className="button button-dark" href="#preferenze">Apri le preferenze <span className="arrow">↘</span></a></section>
          <section><h2>7. Attivazioni future</h2><p>Prima di aggiungere analytics, campagne, video incorporati, mappe o strumenti non necessari sarà effettuata una nuova valutazione. Quando richiesto, tali strumenti verranno bloccati fino a una scelta valida dell’utente.</p></section>
          <section><h2>8. Aggiornamenti e privacy</h2><p>La versione pubblicata in questa pagina è quella vigente. Per informazioni sul trattamento dei dati personali consulta la <Link href="/privacy">Privacy Policy</Link>; per le condizioni generali consulta i <Link href="/termini">Termini di utilizzo</Link>.</p></section>
        </div>
      </article>
      <span id="preferenze" className="cookie-anchor" aria-hidden="true" />
      <SiteFooter />
    </main>
  );
}
