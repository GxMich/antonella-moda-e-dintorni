import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import SiteImage from '../components/SiteImage';
import { services } from '../content';

export const metadata: Metadata = {
  title: 'Servizi: videochiamata, consulenza e buoni regalo | Antonella Moda e Dintorni',
  description: 'Shopping in videochiamata WhatsApp, consigli e foto dei capi, consulenza in boutique, abiti per cerimonie e buoni regalo da 15 a 250 € a Vercelli.',
  alternates: { canonical: '/servizi' },
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page">
        <header className="page-hero">
          <h1>Servizi</h1>
          <p>In boutique o a distanza, il punto di partenza è sempre lo stesso: ascoltare cosa cerchi prima di proporti qualcosa.</p>
        </header>
        <div className="service-list">
          {services.map((service, index) => (
            <article className="service-row" key={service.slug}>
              <Link className="service-row-image" href={`/servizi/${service.slug}`} tabIndex={-1} aria-hidden="true">
                <SiteImage src={service.image} alt="" sizes="(max-width: 800px) 100vw, 30vw" priority={index === 0} />
              </Link>
              <div>
                <h2><Link href={`/servizi/${service.slug}`}>{service.title}</Link></h2>
                <p>{service.summary}</p>
                <Link className="text-link" href={`/servizi/${service.slug}`}>Come funziona</Link>
              </div>
            </article>
          ))}
          <article className="service-row">
            <Link className="service-row-image" href="/un-libro-in-borsa" tabIndex={-1} aria-hidden="true">
              <SiteImage src="/images/boutique/interno-consolle-rosa.webp" alt="" sizes="(max-width: 800px) 100vw, 30vw" />
            </Link>
            <div>
              <h2><Link href="/un-libro-in-borsa">Un libro in borsa</Link></h2>
              <p>Il gruppo di lettura della boutique: un incontro al mese e serate con autrici e autori.</p>
              <Link className="text-link" href="/un-libro-in-borsa">Scopri il gruppo</Link>
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
