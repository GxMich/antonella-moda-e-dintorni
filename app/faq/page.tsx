import type { Metadata } from 'next';
import Link from 'next/link';
import InnerHeader from '../components/InnerHeader';
import SiteFooter from '../components/SiteFooter';
import { business } from '../content';

export const metadata: Metadata = { title: 'Domande frequenti | Antonella Moda e Dintorni', description: 'Risposte su disponibilità dei capi, taglie, WhatsApp, appuntamenti, orari e servizi della boutique Antonella Moda e Dintorni.', alternates: { canonical: '/faq' } };

type FaqGroup = { title: string; items: readonly (readonly [string, string])[] };

const groups: readonly FaqGroup[] = [
  { title: 'Capi e disponibilità', items: [
    ['Le disponibilità indicate sul sito sono in tempo reale?', 'No. Le schede presentano una selezione editoriale e la disponibilità può cambiare rapidamente. Scrivici indicando il nome del capo per una conferma aggiornata.'],
    ['Come posso conoscere taglie e colori?', 'Ogni scheda contiene indicazioni generali. Per le varianti effettivamente disponibili ti rispondiamo su WhatsApp, telefono o direttamente in boutique.'],
    ['Le immagini mostrano esattamente il prodotto?', 'Le immagini descrivono stile, palette e vestibilità della proposta. Prima dell’acquisto o della prenotazione confermeremo fotografia, composizione e dettagli del capo disponibile.'],
    ['Posso mettere da parte un capo?', 'Quando possibile possiamo concordare una breve riserva per permetterti di provarlo in boutique. Durata e condizioni vengono confermate nel messaggio.'],
  ] },
  { title: 'Consulenza e contatti', items: [
    ['Devo prendere appuntamento per entrare?', 'No, puoi passare durante gli orari di apertura. Un appuntamento è utile solo se desideri una ricerca più specifica o più tempo dedicato.'],
    ['Cosa devo scrivere su WhatsApp?', 'Puoi indicare il capo, la taglia abituale, l’occasione e ciò che ti interessa sapere. Anche uno screenshot della pagina è sufficiente per iniziare.'],
    ['È possibile ricevere consigli a distanza?', 'Sì, possiamo fare una prima selezione e mostrarti dettagli e abbinamenti. La prova in boutique resta il modo più preciso per verificare la vestibilità.'],
    ['Quanto tempo serve per ricevere risposta?', 'Rispondiamo appena possibile durante le giornate di apertura. Nei momenti di maggiore affluenza potrebbe essere necessario attendere.'],
    ['Come richiedo un appuntamento?', 'Puoi usare la pagina appuntamento: scegli il servizio, indica giorno e fascia oraria e il sito preparerà un messaggio WhatsApp. La prenotazione è valida dopo la conferma della boutique.'],
  ] },
  { title: 'Boutique e servizi', items: [
    ['Dove si trova la boutique?', `Siamo a Vercelli, in ${business.addressLines.join(' ')}`],
    ['Gli orari possono cambiare?', 'Sì, in occasione di festività, eventi o ferie. Se vieni da fuori città ti consigliamo una verifica telefonica o su WhatsApp.'],
    ['Sono disponibili confezioni regalo?', 'Sono previste proposte regalo e, quando disponibile, una confezione dedicata. Contattaci per le opzioni del momento.'],
    ['Il sito permette acquisti e pagamenti online?', 'In questa versione il sito è una vetrina: non gestisce carrello o pagamenti. Per disponibilità e modalità di acquisto devi contattare direttamente la boutique.'],
  ] },
];

export default function FaqPage() {
  const allItems = groups.flatMap((group) => group.items);
  const schema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: allItems.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) };
  return (
    <main className="inner-page faq-page">
      <InnerHeader />
      <section className="faq-hero"><span className="section-index">Domande frequenti</span><h1>Prima di chiedere,<br /><em>forse è già qui.</em></h1><p>Abbiamo raccolto le informazioni più utili su capi, disponibilità, servizi e visita in boutique.</p></section>
      <section className="faq-groups section-shell">{groups.map((group, groupIndex) => <div className="faq-group" key={group.title}><div><span>{String(groupIndex + 1).padStart(2, '0')}</span><h2>{group.title}</h2></div><div className="faq-list">{group.items.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div>)}</section>
      <section className="faq-contact"><p className="eyebrow">Non hai trovato la risposta?</p><h2>Chiedilo<br /><em>direttamente a noi.</em></h2><Link className="button button-light" href="/appuntamento">Richiedi un appuntamento <span className="arrow">↗</span></Link><a className="text-link light-link" href={business.whatsappUrl} target="_blank" rel="noreferrer">Oppure scrivi su WhatsApp</a></section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
