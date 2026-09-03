import type { Metadata } from 'next';
import AppointmentForm from '../components/AppointmentForm';
import InnerHeader from '../components/InnerHeader';
import SiteFooter from '../components/SiteFooter';
import { business, services } from '../content';

export const metadata: Metadata = {
  title: 'Richiedi un appuntamento | Antonella Moda e Dintorni',
  description: 'Prepara una richiesta di appuntamento o consulenza nella boutique Antonella Moda e Dintorni a Vercelli.',
  alternates: { canonical: '/appuntamento' },
};

export default async function AppointmentPage({ searchParams }: { searchParams: Promise<{ servizio?: string | string[] }> }) {
  const query = await searchParams;
  const requestedSlug = Array.isArray(query.servizio) ? query.servizio[0] : query.servizio;
  const initialService = services.some((service) => service.slug === requestedSlug) ? requestedSlug : '';
  const serviceOptions = services.map(({ slug, title }) => ({ slug, title }));

  return (
    <main className="inner-page appointment-page">
      <InnerHeader active="servizi" />
      <section className="appointment-hero"><div><span className="section-index">Appuntamento · Vercelli</span><h1>Prepariamo il tempo<br /><em>per te.</em></h1></div><p>Compila ciò che sai già. Alla fine si aprirà WhatsApp con un messaggio pronto: potrai controllarlo, modificarlo e inviarlo direttamente ad Antonella.</p></section>
      <section className="appointment-layout section-shell"><div className="appointment-aside"><span className="section-index">Prima di iniziare</span><h2>Non serve avere<br /><em>le idee chiare.</em></h2><p>Puoi indicare soltanto il servizio e il tuo nome. Giorno, budget e dettagli ci aiutano a preparare meglio la risposta, ma potremo definirli insieme.</p><dl><div><dt>Conferma</dt><dd>Direttamente su WhatsApp</dd></div><div><dt>Durata</dt><dd>In base al servizio scelto</dd></div><div><dt>Dove</dt><dd>Via Dante Alighieri 10, Vercelli</dd></div></dl></div><AppointmentForm whatsappUrl={business.whatsappUrl} serviceOptions={serviceOptions} initialService={initialService} /></section>
      <section className="appointment-note"><span>Preferisci scrivere liberamente?</span><p>Apri WhatsApp e raccontaci in poche parole cosa stai cercando.</p><a className="text-link" href={business.whatsappUrl} target="_blank" rel="noreferrer">Scrivi ad Antonella <span className="arrow">↗</span></a></section>
      <SiteFooter />
    </main>
  );
}
