import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import InnerHeader from '../../components/InnerHeader';
import SiteFooter from '../../components/SiteFooter';
import { business, services } from '../../content';

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: 'Servizio non trovato | Antonella Moda e Dintorni' };
  return {
    title: `${service.title} | Antonella Moda e Dintorni`,
    description: service.summary,
    alternates: { canonical: `/servizi/${service.slug}` },
    openGraph: { title: service.title, description: service.summary, images: [{ url: service.image, alt: service.alt }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceIndex = services.findIndex((item) => item.slug === slug);
  if (serviceIndex < 0) notFound();
  const service = services[serviceIndex];
  const related = [...services.slice(serviceIndex + 1), ...services.slice(0, serviceIndex)].slice(0, 3);
  const message = encodeURIComponent(service.message);
  const schema = { '@context': 'https://schema.org', '@type': 'Service', name: service.title, description: service.summary, provider: { '@type': 'ClothingStore', name: business.name, telephone: business.phoneDisplay, address: { '@type': 'PostalAddress', streetAddress: 'Via Dante Alighieri 10', addressLocality: 'Vercelli', postalCode: '13100', addressCountry: 'IT' } }, areaServed: 'Vercelli' };

  return (
    <main className="inner-page service-detail-page">
      <InnerHeader active="servizi" />
      <section className="service-detail-hero"><div className="service-detail-copy"><p className="article-meta">{service.number} · {service.kicker}</p><h1>{service.title}</h1><p className="service-detail-lede">{service.summary}</p><div className="service-hero-actions"><Link className="button button-dark" href={`/appuntamento?servizio=${service.slug}`}>Richiedi un appuntamento <span className="arrow">↗</span></Link><a className="text-link" href={`${business.whatsappUrl}?text=${message}`} target="_blank" rel="noreferrer">Fai una domanda su WhatsApp <span className="arrow">↗</span></a></div><dl className="service-quick-facts"><div><dt>Tempo indicativo</dt><dd>{service.duration}</dd></div><div><dt>Modalità</dt><dd>{service.location}</dd></div></dl></div><div className="service-detail-image"><img src={service.image} alt={service.alt} /></div></section>
      <section className="service-benefits section-shell"><div><span className="section-index">Quando può esserti utile</span><h2>Una scelta costruita<br /><em>intorno a te.</em></h2><p>{service.detail}</p></div><div className="service-checklists"><div><h3>Ideale per</h3><ul>{service.idealFor.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Cosa comprende</h3><ul>{service.includes.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
      <section className="service-detail-process"><div className="section-shell"><span className="section-index">Come funziona</span><ol>{service.steps.map((step, index) => <li key={step.title}><span>{String(index + 1).padStart(2, '0')}</span><h2>{step.title}</h2><p>{step.text}</p></li>)}</ol></div></section>
      <section className="related-services section-shell"><div className="section-heading"><div><span className="section-index">Esplora ancora</span><h2>Altri modi<br /><em>per aiutarti.</em></h2></div><Link className="text-link" href="/servizi">Tutti i servizi <span className="arrow">↗</span></Link></div><div className="related-service-grid">{related.map((item) => <Link className="related-service-card" href={`/servizi/${item.slug}`} key={item.slug}><span>{item.number} · {item.kicker}</span><h3>{item.title}</h3><p>{item.summary}</p><strong>Scopri il servizio <span className="arrow">↗</span></strong></Link>)}</div></section>
      <section className="service-booking"><p className="eyebrow">Possiamo preparare la selezione prima del tuo arrivo</p><h2>Cominciamo<br /><em>da qui.</em></h2><p>Invia una richiesta con giorno, fascia oraria e qualche indicazione. Ti confermeremo direttamente la disponibilità.</p><Link className="button button-light" href={`/appuntamento?servizio=${service.slug}`}>Prepara la richiesta <span className="arrow">↗</span></Link></section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
