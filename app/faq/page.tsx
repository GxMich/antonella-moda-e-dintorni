import type { Metadata } from 'next';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { faqs, whatsappLink } from '../content';

export const metadata: Metadata = {
  title: 'Domande frequenti | Antonella Moda e Dintorni, Vercelli',
  description: 'Dove si trova la boutique, orari, disponibilità dei capi, videochiamate, buoni regalo e il gruppo di lettura Un libro in borsa.',
  alternates: { canonical: '/faq' },
};

export default function FaqPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.flatMap((group) => group.items).map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  };
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page">
        <header className="page-hero">
          <h1>Domande frequenti</h1>
          <p>Le risposte alle domande che ci fate più spesso. Per tutto il resto, scrivici.</p>
        </header>
        <div className="faq">
          {faqs.map((group) => (
            <section key={group.group} aria-labelledby={`faq-${group.group.toLowerCase().replace(/\s+/g, '-')}`}>
              <h2 id={`faq-${group.group.toLowerCase().replace(/\s+/g, '-')}`}>{group.group}</h2>
              {group.items.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </section>
          ))}
        </div>
        <aside className="catalog-note">
          <h2>Non hai trovato la risposta?</h2>
          <a className="button" href={whatsappLink('Ciao Antonella, avrei una domanda: ')} target="_blank" rel="noreferrer">Chiedi su WhatsApp</a>
        </aside>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
