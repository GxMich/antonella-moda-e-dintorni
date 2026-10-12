import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import SiteImage from '../../components/SiteImage';
import { business, services, whatsappLink } from '../../content';
import { assetUrl, siteUrl } from '../../site';

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return { title: 'Servizio non trovato | Antonella Moda e Dintorni' };
  return {
    title: `${service.title} | Antonella Moda e Dintorni, Vercelli`,
    description: service.summary,
    alternates: { canonical: `/servizi/${service.slug}` },
    openGraph: { title: service.title, description: service.summary, images: [{ url: assetUrl(service.image), alt: service.alt }] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const others = services.filter((item) => item.slug !== service.slug);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.summary,
    areaServed: 'Vercelli',
    provider: { '@type': 'ClothingStore', name: business.name, url: siteUrl, telephone: business.phoneHref },
  };

  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page service-page">
        <nav className="breadcrumb" aria-label="Percorso"><Link href="/servizi">Servizi</Link></nav>
        <div className="service-hero">
          <div>
            <h1>{service.title}</h1>
            <p className="service-lede">{service.summary}</p>
            {service.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <a className="button" href={whatsappLink(service.message)} target="_blank" rel="noreferrer">{service.cta}</a>
          </div>
          <div className="frame service-hero-image">
            <SiteImage src={service.image} alt={service.alt} sizes="(max-width: 800px) 90vw, 38vw" priority />
          </div>
        </div>
        <section className="steps" aria-labelledby="steps-title">
          <h2 id="steps-title">Come funziona</h2>
          <ol>
            {service.steps.map((step) => <li key={step.title}><h3>{step.title}</h3><p>{step.text}</p></li>)}
          </ol>
        </section>
        <section className="other-services" aria-labelledby="other-title">
          <h2 id="other-title">Altri servizi</h2>
          <ul>
            {others.map((item) => <li key={item.slug}><Link href={`/servizi/${item.slug}`}>{item.title}</Link><span>{item.summary}</span></li>)}
          </ul>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
