'use client';

import { useMemo, useState } from 'react';
import type { Product } from '../content';
import ProductCard from './ProductCard';

export default function CatalogExplorer({ products }: { products: readonly Product[] }) {
  const [category, setCategory] = useState('Tutto');
  const [query, setQuery] = useState('');
  const categories = useMemo(() => ['Tutto', ...Array.from(new Set(products.map((product) => product.category)))], [products]);
  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase('it');
    return products.filter((product) => {
      const matchesCategory = category === 'Tutto' || product.category === category;
      const searchableText = `${product.name} ${product.category} ${product.description} ${product.colors}`.toLocaleLowerCase('it');
      return matchesCategory && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [category, products, query]);

  return (
    <div className="catalog-explorer">
      <div className="catalog-toolbar">
        <div className="catalog-search">
          <label htmlFor="catalog-query">Cerca nella selezione</label>
          <input id="catalog-query" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Es. salvia, giacca, regalo…" />
        </div>
        <div className="catalog-count" aria-live="polite">
          <strong>{String(visibleProducts.length).padStart(2, '0')}</strong>
          <span>{visibleProducts.length === 1 ? 'proposta trovata' : 'proposte trovate'}</span>
        </div>
      </div>
      <div className="filter-chips" aria-label="Filtra per categoria">
        {categories.map((item) => (
          <button className="filter-chip" type="button" aria-pressed={category === item} onClick={() => setCategory(item)} key={item}>{item}</button>
        ))}
      </div>
      {visibleProducts.length > 0 ? (
        <div className="catalog-grid">{visibleProducts.map((product, index) => <ProductCard product={product} index={index} key={product.slug} />)}</div>
      ) : (
        <div className="catalog-empty"><p>Nessuna proposta corrisponde alla ricerca.</p><button type="button" className="text-link" onClick={() => { setCategory('Tutto'); setQuery(''); }}>Azzera i filtri</button></div>
      )}
    </div>
  );
}
