'use client';

import { useCamerino } from './CamerinoProvider';

/** Small "+" on product cards. Sits outside the card link (no nested interactive elements). */
export default function QuickAdd({ slug, name }: { slug: string; name: string }) {
  const { add, remove, has, ready } = useCamerino();
  const added = ready && has(slug);
  return (
    <button
      type="button"
      className={added ? 'quick-add is-added' : 'quick-add'}
      aria-pressed={added}
      aria-label={added ? `${name} è nel camerino. Togli` : `Metti ${name} nel camerino`}
      onClick={(event) => {
        if (added) { remove(slug); return; }
        add(slug, '', event.currentTarget.closest<HTMLElement>('.product-card'));
      }}
    >
      <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
        {added
          ? <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2" />
          : <path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" strokeWidth="2" />}
      </svg>
      <span className="quick-add-label">{added ? 'Nel camerino' : 'Camerino'}</span>
    </button>
  );
}
