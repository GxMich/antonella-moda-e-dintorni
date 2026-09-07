import type { Metadata } from 'next';
import Link from 'next/link';
import InnerHeader from '../components/InnerHeader';
import SiteImage from '../components/SiteImage';
import SiteFooter from '../components/SiteFooter';
import { business, services } from '../content';

export const metadata: Metadata = { title: 'Servizi in boutique | Antonella Moda e Dintorni', description: 'Consulenza personale, selezione su WhatsApp, appuntamenti e idee regalo nella boutique Antonella Moda e Dintorni a Vercelli.', alternates: { canonical: '/servizi' } };

export default function ServicesPage() {
  const message = encodeURIComponent('Ciao Antonella, vorrei avere informazioni sui servizi della boutique.');
  return (
    <main className="inner-page services-page">
      <InnerHeader active="servizi" />
      <section className="services-hero"><div><span className="section-index">Servizi · Il nostro modo</span><h1>Il tempo giusto<br /><em>per scegliere.</em></h1><p>Ogni servizio nasce dallo stesso gesto: ascoltare prima di proporre. In boutique o a distanza, l’obiettivo è aiutarti a trovare qualcosa che userai davvero.</p></div><div className="services-hero-image"><SiteImage src="/images/styling-hands-v2.webp" alt="Consulenza di stile con tessuti e colori su un tavolo" sizes="(max-width: 800px) 100vw, 50vw" priority /></div></section>
      <section className="services-list section-shell"><div className="section-index">Cosa possiamo fare insieme</div><div className="service-rows">{services.map((service) => <article key={service.number}><span>{service.number}</span><h2><Link href={`/servizi/${service.slug}`}>{service.title}</Link></h2><div><p>{service.summary}</p><p className="service-detail">{service.detail}</p><Link className="service-row-link" href={`/servizi/${service.slug}`}>Scopri come funziona <span className="arrow">↗</span></Link></div></article>)}</div></section>
      <section className="service-process"><div><span className="section-index">Da dove iniziamo</span><h2>Tre passi,<br /><em>nessuna fretta.</em></h2></div><ol><li><span>01</span><strong>Raccontaci</strong><p>Un’esigenza, un’occasione o semplicemente ciò che ti piacerebbe cambiare.</p></li><li><span>02</span><strong>Prepariamo</strong><p>Una piccola selezione coerente con stile, taglia, colori e budget indicato.</p></li><li><span>03</span><strong>Proviamo</strong><p>In boutique verifichiamo insieme vestibilità e abbinamenti, senza forzature.</p></li></ol></section>
      <section className="service-booking"><p className="eyebrow">Vuoi prepararci qualche indicazione?</p><h2>Scrivici cosa<br /><em>stai cercando.</em></h2><p>Puoi includere occasione, taglia abituale, colori preferiti e una fascia di spesa. Ti risponderemo con la disponibilità del servizio.</p><Link className="button button-light" href="/appuntamento">Richiedi un appuntamento <span className="arrow">↗</span></Link><a className="text-link light-link" href={`${business.whatsappUrl}?text=${message}`} target="_blank" rel="noreferrer">Oppure scrivi liberamente su WhatsApp</a><Link className="text-link light-link" href="/faq">Leggi le domande frequenti</Link></section>
      <SiteFooter />
    </main>
  );
}
