import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Collezione | Antonella Moda e Dintorni',
  description: 'Scopri i nuovi arrivi e i capi versatili scelti da Antonella Moda e Dintorni a Vercelli.',
  alternates: { canonical: '/collezione' },
};

const products = [
  { slug: 'morbida-presenza', name: 'Morbida presenza', category: 'Abito · Nuovo arrivo', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'linea-quotidiana', name: 'Linea quotidiana', category: 'Completo · Versatile', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'un-gesto-leggero', name: 'Un gesto leggero', category: 'Maglieria · Essenziale', image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'tono-di-casa', name: 'Tono di casa', category: 'Giacca · Nuovo arrivo', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85' },
];

export default function CollectionPage() {
  return <main className="inner-page"><header className="detail-header"><Link className="wordmark" href="/"><span>Antonella</span><small>Moda e Dintorni</small></Link><nav className="inner-nav"><Link href="/collezione" aria-current="page">Collezione</Link><Link href="/boutique">Boutique</Link></nav><Link className="text-link" href="https://wa.me/393318115966" target="_blank" rel="noreferrer">WhatsApp <span className="arrow">↗</span></Link></header><section className="collection-intro"><span className="section-index">Collezione · Vercelli</span><h1>Le cose belle<br /><em>si fanno spazio.</em></h1><p>Una selezione di capi femminili versatili, scelti con attenzione e pronti a incontrare il tuo modo di essere.</p></section><section className="collection-all"><div className="collection-filter"><span>04 capi in evidenza</span><span>Nuovi arrivi · Essenziali · Versatili</span></div><div className="all-product-grid">{products.map((product, index) => <Link className={`all-product all-product-${index + 1}`} href={`/capo/${product.slug}`} key={product.slug}><div className="all-product-image"><img src={product.image} alt={product.name} loading={index > 1 ? 'lazy' : 'eager'} /><span className="product-arrow"><span className="arrow">↗</span></span></div><div className="product-caption"><span>{product.category}</span><strong>{product.name}</strong></div></Link>)}</div></section><section className="collection-note"><span className="section-index">Una nota importante</span><div><h2>Ogni capo ha<br /><em>la sua storia.</em></h2><p>Taglie, colori e disponibilità possono cambiare. Per conoscere i dettagli del capo che ti piace, scrivici su WhatsApp: saremo felici di aiutarti.</p><a className="button button-dark" href="https://wa.me/393318115966" target="_blank" rel="noreferrer">Chiedi informazioni <span className="arrow">↗</span></a></div></section><footer className="simple-footer"><Link href="/privacy">Privacy</Link><Link href="/cookie">Cookie</Link><span>© {new Date().getFullYear()} Antonella Moda e Dintorni</span></footer></main>;
}
