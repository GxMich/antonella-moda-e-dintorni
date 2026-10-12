import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { business } from '../content';

export const metadata: Metadata = { title: 'Privacy Policy | Antonella Moda e Dintorni', description: 'Informativa sul trattamento dei dati personali del sito Antonella Moda e Dintorni.', alternates: { canonical: '/privacy' }, robots: { index: false, follow: true } };

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page legal-page">
      <article className="legal-content"><h1>Privacy Policy.</h1><p className="legal-lede">Informativa sul trattamento dei dati personali di questo sito, resa ai sensi dell’articolo 13 del Regolamento (UE) 2016/679.</p><p className="legal-updated">Ultimo aggiornamento: 12 ottobre 2026</p>
        <div className="legal-body">
          <section><h2>1. Titolare del trattamento</h2><p>Il titolare del trattamento è Antonella Moda e Dintorni, P. IVA {business.vatNumber}, con sede in {business.addressLines.join(' ')}.</p><p>Contatti privacy: <a href={business.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a> · <a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a>.</p></section>
          <section><h2>2. Ambito dell’informativa</h2><p>L’informativa riguarda la navigazione, il modulo che prepara localmente una richiesta di appuntamento e i contatti inviati scegliendo di utilizzare email, telefono o WhatsApp. I servizi esterni applicano proprie condizioni e informative dal momento in cui vengono aperti.</p></section>
          <section><h2>3. Dati di navigazione</h2><p>I sistemi che rendono disponibile il sito possono trattare indirizzo IP, data e ora della richiesta, pagina visitata, informazioni sul browser e dati tecnici necessari alla sicurezza e alla consegna dei contenuti. Questi dati non vengono utilizzati dal sito per creare profili commerciali.</p></section>
          <section><h2>4. Dati comunicati volontariamente</h2><p>Quando contatti la boutique possono essere trattati nome, recapito, contenuto del messaggio, taglia indicata, preferenze relative ai capi e altre informazioni che scegli di condividere. Il modulo appuntamento elabora i campi esclusivamente nel browser per comporre un testo: il sito non li salva e non li invia autonomamente. I dati vengono comunicati alla boutique solo se scegli di inviare il messaggio tramite WhatsApp. Evita dati non necessari o particolarmente sensibili.</p></section>
          <section><h2>5. Finalità e basi giuridiche</h2><div className="legal-table"><div><strong>Rispondere alle richieste</strong><span>Misure precontrattuali o richiesta dell’interessato</span></div><div><strong>Gestire disponibilità, riserve e appuntamenti</strong><span>Esecuzione di misure richieste dall’interessato</span></div><div><strong>Sicurezza e continuità tecnica</strong><span>Legittimo interesse del titolare</span></div><div><strong>Adempimenti amministrativi o legali</strong><span>Obbligo di legge</span></div></div></section>
          <section><h2>6. Modalità del trattamento</h2><p>I dati sono trattati con strumenti digitali e, quando necessario, cartacei, adottando misure proporzionate per ridurre accessi non autorizzati, perdita, alterazione o divulgazione impropria.</p></section>
          <section><h2>7. Destinatari e fornitori</h2><p>Possono accedere ai dati il titolare, persone autorizzate e fornitori strettamente necessari, come hosting, posta elettronica e strumenti di comunicazione. I nominativi e i ruoli effettivi devono essere verificati e documentati prima del lancio.</p></section>
          <section><h2>8. Trasferimenti fuori dallo Spazio economico europeo</h2><p>Alcuni servizi esterni scelti dall’utente, tra cui WhatsApp, possono comportare trattamenti internazionali secondo le proprie informative. Il titolare verificherà le garanzie applicabili ai fornitori tecnici effettivamente utilizzati.</p></section>
          <section><h2>9. Tempi di conservazione</h2><p>I messaggi vengono conservati per il tempo necessario a rispondere, gestire la relazione e adempiere agli obblighi applicabili. I log tecnici seguono i tempi del fornitore di hosting. I periodi definitivi devono essere stabiliti in base all’organizzazione reale della boutique.</p></section>
          <section><h2>10. Diritti dell’interessato</h2><p>Quando previsti, puoi chiedere accesso, rettifica, cancellazione, limitazione, opposizione, portabilità e revoca del consenso senza pregiudicare i trattamenti precedenti. Puoi inoltre proporre reclamo al Garante per la protezione dei dati personali.</p></section>
          <section><h2>11. Minori</h2><p>Il sito non è progettato per raccogliere consapevolmente dati di minori. Se ritieni che siano stati trasmessi dati non necessari relativi a un minore, contatta il titolare.</p></section>
          <section><h2>12. Collegamenti esterni</h2><p>WhatsApp, telefono, email e Google Maps si attivano solo quando selezioni il relativo collegamento. Anche il modulo appuntamento apre WhatsApp soltanto dopo la pressione del pulsante e lascia all’utente il controllo sull’invio. Non incorporiamo chat o feed social. La mappa di Google Maps si carica solo se premi “Mostra la mappa”: da quel momento si applica l’informativa di Google. Il video della pagina Chi siamo è ospitato sul sito stesso e si carica solo quando premi play.</p></section>
          <section><h2>13. Aggiornamenti e contatti</h2><p>Questa informativa viene aggiornata quando cambiano sito, fornitori o trattamenti. Per domande scrivi a <a href={business.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>. Consulta anche la <Link href="/cookie">Cookie Policy</Link> e i <Link href="/termini">Termini di utilizzo</Link>.</p></section>
        </div>
      </article>
    </main>
      <SiteFooter />
    </>
  );
}
