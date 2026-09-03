import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import InnerHeader from '../../components/InnerHeader';
import ProductCard from '../../components/ProductCard';
import SiteFooter from '../../components/SiteFooter';
import { business, products } from '../../content';

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: 'Capo non trovato | Antonella Moda e Dintorni' };
  return {
    title: `${product.name} | Antonella Moda e Dintorni`,
    description: product.description,
    alternates: { canonical: `/capo/${product.slug}` },
    openGraph: { title: product.name, description: product.description, images: [{ url: product.image, alt: product.alt }] },
    twitter: { card: 'summary_large_image', title: product.name, description: product.description, images: [product.image] },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const productIndex = products.findIndex((item) => item.slug === slug);
  if (productIndex < 0) notFound();
  const product = products[productIndex];
  const related = [...products.slice(productIndex + 1), ...products.slice(0, productIndex)].slice(0, 3);
  const message = encodeURIComponent(`Ciao Antonella, vorrei avere informazioni su “${product.name}”.`);
  const productSchema = { '@context': 'https://schema.org', '@type': 'Product', name: product.name, image: `https://antonellamodaedintorni.com${product.image}`, description: product.description, category: product.category, brand: { '@type': 'Brand', name: business.name } };

  return (
    <main className="product-detail-page">
      <InnerHeader active="collezione" />
      <section className="detail-layout">
        <div className="detail-image"><img src={product.image} alt={product.alt} /></div>
        <div className="detail-copy">
          <span className="section-index">Dettaglio capo</span>
          <p className="eyebrow">{product.category} · {product.badge}</p>
          <h1>{product.name}</h1>
          <p className="detail-description">{product.description}</p>
          <p className="detail-story">{product.story}</p>
          <dl className="product-facts">
            <div><dt>Taglie</dt><dd>{product.sizes}</dd></div>
            <div><dt>Colori</dt><dd>{product.colors}</dd></div>
            <div><dt>Vestibilità</dt><dd>{product.fit}</dd></div>
          </dl>
          <div className="product-features"><span>Dettagli</span><ul>{product.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
          <p className="detail-note">Disponibilità, composizione esatta e varianti vengono confermate direttamente dalla boutique. Le immagini e i dati di questa demo sono rappresentativi.</p>
          <a className="button button-dark" href={`${business.whatsappUrl}?text=${message}`} target="_blank" rel="noreferrer">Chiedi informazioni su WhatsApp <span className="arrow">↗</span></a>
          <Link className="detail-back" href="/collezione">← Continua a esplorare</Link>
        </div>
      </section>
      <section className="related-products section-shell"><div className="section-heading"><div><div className="section-index">Potrebbero piacerti</div><h2>Altre possibilità<br /><em>da provare.</em></h2></div><Link className="text-link" href="/collezione">Tutta la collezione <span className="arrow">↗</span></Link></div><div className="related-grid">{related.map((item, index) => <ProductCard product={item} index={index} compact key={item.slug} />)}</div></section>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </main>
  );
}
