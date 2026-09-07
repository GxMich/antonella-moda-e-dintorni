import Link from 'next/link';
import type { Product } from '../content';
import SiteImage from './SiteImage';

export default function ProductCard({ product, index = 0, compact = false }: { product: Product; index?: number; compact?: boolean }) {
  return (
    <Link className={compact ? 'catalog-card is-compact' : 'catalog-card'} href={`/capo/${product.slug}`}>
      <div className="catalog-card-image">
        <SiteImage src={product.image} alt={product.alt} sizes={compact ? '(max-width: 800px) 100vw, 33vw' : '(max-width: 800px) 50vw, 50vw'} priority={index < 2} />
        <span className="new-pill">{product.badge}</span>
        <span className="product-arrow"><span className="arrow">↗</span></span>
      </div>
      <div className="product-caption"><span>{product.category}</span><strong>{product.name}</strong></div>
    </Link>
  );
}
