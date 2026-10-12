'use client';

import { useMemo, useState } from 'react';
import { flushSync } from 'react-dom';
import { categories, type Product } from '../content';
import ProductCard from './ProductCard';

export default function CatalogExplorer({ products }: { products: readonly Product[] }) {
  const [category, setCategory] = useState<string>('Tutti');
  const counts = useMemo(() => Object.fromEntries(categories.map((item) => [item, products.filter((product) => product.category === item).length])), [products]);
  const visible = category === 'Tutti' ? products : products.filter((product) => product.category === category);

  // Cards glide to their new places instead of jumping (View Transitions API).
  function changeCategory(next: string) {
    if (next === category) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('startViewTransition' in document) || reduce) { setCategory(next); return; }
    document.startViewTransition(() => { flushSync(() => setCategory(next)); });
  }

  return (
    <div className="catalog">
      <div className="catalog-filters" role="group" aria-label="Filtra per categoria">
        {['Tutti', ...categories].map((item) => (
          <button type="button" key={item} aria-pressed={category === item} onClick={() => changeCategory(item)}>
            {item} <span>{item === 'Tutti' ? products.length : counts[item]}</span>
          </button>
        ))}
      </div>
      <p className="visually-hidden" aria-live="polite">{visible.length} capi mostrati</p>
      <div className="product-grid">
        {visible.map((product, index) => <ProductCard key={product.slug} product={product} priority={index < 4} />)}
      </div>
    </div>
  );
}
