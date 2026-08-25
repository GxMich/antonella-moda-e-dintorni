import type { Metadata } from 'next';
import Link from 'next/link';

const catalog = {
  'morbida-presenza': { name: 'Morbida presenza', category: 'Abito · Nuovo arrivo', description: 'Una silhouette morbida, pensata per accompagnare il movimento e lasciare spazio alla persona.', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=88' },
  'linea-quotidiana': { name: 'Linea quotidiana', category: 'Completo · Versatile', description: 'Un completo da interpretare ogni giorno, tra comfort, qualità e una linea che non chiede permesso.', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=88' },
  'un-gesto-leggero': { name: 'Un gesto leggero', category: 'Maglieria · Essenziale', description: 'La maglieria essenziale che entra nel guardaroba e resta, stagione dopo stagione.', image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1400&q=88' },
  'tono-di-casa': { name: 'Tono di casa', category: 'Giacca · Nuovo arrivo', description: 'Una giacca da indossare con naturalezza, tra struttura morbida e il calore di un colore che sa accogliere.', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=88' },
} as const;

type Slug = keyof typeof catalog;

export function generateStaticParams() { return Object.keys(catalog).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = catalog[slug as Slug];
  return { title: product ? `${product.name} | Antonella Moda e Dintorni` : 'Capo | Antonella Moda e Dintorni', description: product?.description };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = catalog[slug as Slug] ?? catalog['morbida-presenza'];
  const message = encodeURIComponent(`Ciao Antonella, vorrei avere informazioni su “${product.name}”.`);

  return <main className="product-detail-page"><header className="detail-header"><Link className="wordmark" href="/"><span>Antonella</span><small>Moda e Dintorni</small></Link><Link className="text-link" href="/">Torna alla collezione <span className="arrow">↙</span></Link></header><section className="detail-layout"><div className="detail-image"><img src={product.image} alt={product.name} /></div><div className="detail-copy"><span className="section-index">Dettaglio capo</span><p className="eyebrow">{product.category}</p><h1>{product.name}</h1><p className="detail-description">{product.description}</p><p className="detail-note">Per taglie, colori e disponibilità, scrivici direttamente: Antonella ti risponderà con piacere.</p><a className="button button-dark" href={`https://wa.me/393318115966?text=${message}`} target="_blank" rel="noreferrer">Chiedi informazioni su WhatsApp <span className="arrow">↗</span></a><Link className="detail-back" href="/">← Continua a esplorare</Link></div></section></main>;
}
