import type { Metadata } from 'next';
import Link from 'next/link';
import InnerHeader from '../components/InnerHeader';
import SiteImage from '../components/SiteImage';
import SiteFooter from '../components/SiteFooter';
import { business, hours } from '../content';

export const metadata: Metadata = { title: 'Boutique, orari e contatti | Antonella Moda e Dintorni', description: 'Vieni a trovare Antonella Moda e Dintorni in Via Dante Alighieri 10 a Vercelli. Consulta orari, contatti e servizi disponibili.', alternates: { canonical: '/boutique' } };

const faqs = [
  { question: 'Dove si trova Antonella Moda e Dintorni?', answer: `La boutique si trova in ${business.addressLines.join(' ')}` },
  { question: 'Devo prendere appuntamento?', answer: 'Non è necessario durante gli orari di apertura. Se desideri più tempo per una consulenza personale, puoi scriverci prima su WhatsApp.' },
  { question: 'Posso chiedere di mettere da parte un capo?', answer: 'Sì, dopo aver verificato la disponibilità possiamo concordare un breve ritiro in boutique.' },
  { question: 'Posso ricevere foto o dettagli su WhatsApp?', answer: 'Sì. Indica il nome del capo oppure inviaci uno screenshot e ti risponderemo con taglie, colori e indicazioni sulla vestibilità.' },
  { question: 'Sono disponibili confezioni regalo?', answer: 'Contattaci per verificare le opzioni disponibili e preparare una proposta adatta all’occasione.' },
  { question: 'Gli orari possono cambiare?', answer: 'In occasione di festività o eventi gli orari possono variare. Se vieni da fuori Vercelli, ti consigliamo di contattarci prima.' },
];

export default function BoutiquePage() {
  const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) };
  return (
    <main className="inner-page boutique-page">
      <InnerHeader active="boutique" />
      <section className="boutique-hero"><span className="section-index">Boutique · Vercelli</span><h1>Vieni a trovarci<br /><em>con calma.</em></h1><p>Il modo più bello di conoscere un capo è incontrarlo dal vivo. Siamo in Via Dante, nel cuore di Vercelli.</p></section>
      <section className="address-section"><div className="address-visual"><SiteImage src="/images/boutique-interior-v2.webp" alt="Interno luminoso e accogliente di una boutique indipendente" sizes="(max-width: 800px) 100vw, 50vw" priority /></div><div className="address-copy"><span className="section-index">Dove siamo</span><h2>La porta è<br /><em>aperta.</em></h2><address>{business.addressLines.map((line) => <span key={line}>{line}<br /></span>)}</address><div className="address-actions"><a className="button button-dark" href={business.mapsUrl} target="_blank" rel="noreferrer">Indicazioni <span className="arrow">↗</span></a><a className="text-link" href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a></div><p className="address-note">Se desideri verificare un orario o la disponibilità di un capo prima di partire, scrivici: ti risponderemo appena possibile.</p></div></section>
      <section className="hours-section"><div><span className="section-index">Quando trovarci</span><h2>Gli orari<br /><em>della boutique.</em></h2><p className="hours-note">Gli orari indicati sono quelli ordinari. Festività e aperture speciali vengono comunicate direttamente dalla boutique.</p></div><div className="hours-list">{hours.map(([day, time]) => <div key={day}><span>{day}</span><strong>{time}</strong></div>)}</div></section>
      <section className="boutique-contact-strip"><div><span>Telefono</span><a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a></div><div><span>Email</span><a href={`mailto:${business.email}`}>{business.email}</a></div><div><span>WhatsApp</span><a href={business.whatsappUrl} target="_blank" rel="noreferrer">Apri la conversazione ↗</a></div></section>
      <section className="faq-section"><span className="section-index">Domande frequenti</span><h2>Prima di venire,<br /><em>se vuoi sapere.</em></h2><div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div><div className="faq-more"><Link className="button button-dark" href="/faq">Tutte le domande frequenti <span className="arrow">↗</span></Link></div></section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
