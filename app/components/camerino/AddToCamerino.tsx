'use client';

import { useState } from 'react';
import { HangerIcon } from './CamerinoButton';
import { useCamerino } from './CamerinoProvider';
import { SizeSelect } from './SizeSelect';

/** Product page: choose a size and put the piece in the fitting room. */
export default function AddToCamerino({ slug }: { slug: string }) {
  const { add, has, items, open, ready } = useCamerino();
  const saved = items.find((item) => item.slug === slug);
  const [size, setSize] = useState('');
  const inCamerino = ready && has(slug);
  const currentSize = size || saved?.size || '';

  return (
    <div className="add-camerino">
      <SizeSelect id={`size-${slug}`} value={currentSize} onChange={(value) => { setSize(value); if (inCamerino) add(slug, value); }} />
      {inCamerino ? (
        <button type="button" className="button button-fuchsia is-added" onClick={open}>
          <HangerIcon size={22} /> Nel camerino: apri e prenota la prova
        </button>
      ) : (
        <button type="button" className="button button-fuchsia" onClick={() => add(slug, currentSize, document.querySelector<HTMLElement>('.product-photo.frame'))}>
          <HangerIcon size={22} /> Mettilo nel camerino
        </button>
      )}
      <p className="add-camerino-hint">Raccogli i capi che vuoi provare e indica quando passi: Antonella te li prepara nella tua taglia. Non ti impegni ad acquistare.</p>
    </div>
  );
}
