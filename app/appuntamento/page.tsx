import type { Metadata } from 'next';
import AppointmentForm from '../components/AppointmentForm';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import { business, services } from '../content';

export const metadata: Metadata = {
  title: 'Prenota una videochiamata o un appuntamento | Antonella Moda e Dintorni',
  description: 'Prepara in un minuto la richiesta di videochiamata o appuntamento in boutique a Vercelli: si apre WhatsApp con il messaggio già scritto.',
  alternates: { canonical: '/appuntamento' },
};

export default function AppointmentPage() {
  const serviceOptions = services.map(({ slug, title }) => ({ slug, title }));
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page">
        <header className="page-hero">
          <h1>Prenota con Antonella</h1>
          <p>Compila quello che sai già. Alla fine si apre WhatsApp con il messaggio pronto: lo controlli e lo invii tu. La prenotazione vale quando Antonella ti risponde.</p>
        </header>
        <div className="appointment-layout">
          <AppointmentForm whatsappUrl={business.whatsappUrl} serviceOptions={serviceOptions} />
          <aside className="appointment-aside">
            <h2>Preferisci telefonare?</h2>
            <p><a href={`tel:${business.phoneHref}`}>{business.phoneDisplay}</a></p>
            <p>La boutique è in {business.street}, {business.corner}, a Vercelli. Non serve appuntamento per entrare negli orari di apertura.</p>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
