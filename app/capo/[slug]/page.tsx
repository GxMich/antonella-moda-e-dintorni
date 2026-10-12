import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AddToCamerino from '../../components/camerino/AddToCamerino';
import ProductCard from '../../components/ProductCard';
import SiteFooter from '../../components/SiteFooter';
import SiteHeader from '../../components/SiteHeader';
import SiteImage from '../../components/SiteImage';
import { business, products, whatsappLink } from '../../content';
import { assetUrl, pageUrl } from '../../site';

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: 'Capo non trovato | Antonella Moda e Dintorni' };
  const title = `${product.name}${product.brand ? ` ${product.brand}` : ''} | Antonella Moda e Dintorni, Vercelli`;
  return {
    title,
    description: product.description,
    alternates: { canonical: `/capo/${product.slug}` },
    openGraph: { title: product.name, description: product.description, images: [{ url: assetUrl(product.images[0].src), alt: product.images[0].alt }] },
    twitter: { card: 'summary_large_image', title: product.name, description: product.description, images: [assetUrl(product.images[0].src)] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = products.findIndex((item) => item.slug === slug);
  if (index < 0) notFound();
  const product = products[index];
  const sameCategory = products.filter((item) => item.category === product.category && item.slug !== product.slug);
  const others = products.filter((item) => item.category !== product.category);
  const related = [...sameCategory, ...others].slice(0, 4);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    image: product.images.map((image) => assetUrl(image.src)),
    description: product.description,
    category: product.category,
    color: product.colors,
    url: pageUrl(`/capo/${product.slug}`),
    ...(product.brand ? { brand: { '@type': 'Brand', name: product.brand } } : {}),
  };

  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page product-page">
        <nav className="breadcrumb" aria-label="Percorso">
          <Link href="/collezione">Collezione</Link> <span aria-hidden="true">/</span> <span>{product.category}</span>
        </nav>
        <div className="product-layout">
          <div className="product-gallery" tabIndex={0} aria-label="Foto del capo, scorri per vederle tutte">
            {product.images.map((image, imageIndex) => (
              <div className={imageIndex === 0 ? 'product-photo frame' : 'product-photo'} key={image.src} style={imageIndex === 0 ? { viewTransitionName: `capo-${product.slug}` } as React.CSSProperties : undefined}>
                <SiteImage src={image.src} alt={image.alt} sizes="(max-width: 800px) 88vw, 40vw" priority={imageIndex === 0} />
              </div>
            ))}
          </div>
          <div className="product-info">
            {product.brand && <p className="product-brand">{product.brand}</p>}
            <h1>{product.name}</h1>
            <p className="product-description">{product.description}</p>
            <dl className="product-facts">
              <div><dt>Colore</dt><dd>{product.colors}</dd></div>
              <div><dt>Categoria</dt><dd>{product.category}</dd></div>
              <div><dt>Dettagli</dt><dd><ul>{product.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></dd></div>
            </dl>
            <AddToCamerino slug={product.slug} />
            <div className="product-ask">
              <a className="button button-ghost" href={whatsappLink(`Ciao Antonella, è ancora disponibile “${product.name}”? La mia taglia è …`)} target="_blank" rel="noreferrer">Chiedi taglia e prezzo</a>
              <a className="button button-ghost" href={whatsappLink(`Ciao Antonella, vorrei vedere “${product.name}” in videochiamata. Sarei libera il giorno … alle ore …`)} target="_blank" rel="noreferrer">Vedilo in videochiamata</a>
            </div>
            <p className="product-note">Foto scattate nella boutique. Taglie, prezzo e disponibilità te li conferma Antonella, di solito in pochi minuti negli orari di negozio. Oppure passa in {business.street}, a Vercelli.</p>
          </div>
        </div>
        <section className="related" aria-labelledby="related-title">
          <h2 id="related-title">Potrebbe piacerti anche</h2>
          <div className="product-grid">{related.map((item) => <ProductCard key={item.slug} product={item} />)}</div>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
