import type { Product } from '../content';
import QuickAdd from './camerino/QuickAdd';
import TransitionLink from './motion/TransitionLink';
import SiteImage from './SiteImage';

export default function ProductCard({ product, priority = false, sizes = '(max-width: 700px) 50vw, 25vw' }: { product: Product; priority?: boolean; sizes?: string }) {
  const [cover, second] = product.images;
  return (
    <div className="product-card" style={{ viewTransitionName: `card-${product.slug}` } as React.CSSProperties}>
      <TransitionLink className="product-card-link" href={`/capo/${product.slug}`}>
        <div className="product-card-image" style={{ viewTransitionName: `capo-${product.slug}` } as React.CSSProperties}>
          <SiteImage src={cover.src} alt={cover.alt} sizes={sizes} priority={priority} />
          {second && <span className="product-card-alt"><SiteImage src={second.src} alt="" sizes={sizes} /></span>}
        </div>
        <h3>{product.name}</h3>
        <p>{product.brand ? `${product.brand}, ` : ''}{product.colors.toLocaleLowerCase('it')}</p>
      </TransitionLink>
      <QuickAdd slug={product.slug} name={product.name} />
    </div>
  );
}
