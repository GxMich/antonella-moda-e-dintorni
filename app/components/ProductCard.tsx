import Link from 'next/link';
import type { Product } from '../content';

export default function ProductCard({ product, index = 0, compact = false }: { product: Product; index?: number; compact?: boolean }) {
  return (
    <Link className={compact ? 'catalog-card is-compact' : 'catalog-card'} href={`/capo/${product.slug}`}>
      <div className="catalog-card-image">
        <img src={product.image} alt={product.alt} loading={index < 2 ? 'eager' : 'lazy'} />
        <span className="new-pill">{product.badge}</span>
        <span className="product-arrow"><span className="arrow">↗</span></span>
      </div>
      <div className="product-caption"><span>{product.category}</span><strong>{product.name}</strong></div>
    </Link>
  );
}
