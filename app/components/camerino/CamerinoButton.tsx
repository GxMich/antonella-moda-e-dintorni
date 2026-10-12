'use client';

import { useEffect, useRef, useState } from 'react';
import { useCamerino } from './CamerinoProvider';

export function HangerIcon({ size = 24 }: { size?: number }) {
  return (
    <svg viewBox="0 0 32 32" width={size} height={size} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 9.5a3 3 0 1 1 4.2 2.75c-.75.33-1.2 1.07-1.2 1.88V15" />
      <path d="M16 15 4.6 22.6A1.4 1.4 0 0 0 5.4 25.2h21.2a1.4 1.4 0 0 0 .8-2.6L16 15Z" />
    </svg>
  );
}

export default function CamerinoButton() {
  const { items, ready, open } = useCamerino();
  const [bump, setBump] = useState(false);
  const previous = useRef(items.length);

  useEffect(() => {
    if (!ready) return;
    if (items.length > previous.current) {
      const start = window.setTimeout(() => setBump(true), 600);
      const stop = window.setTimeout(() => setBump(false), 1100);
      previous.current = items.length;
      return () => { window.clearTimeout(start); window.clearTimeout(stop); };
    }
    previous.current = items.length;
  }, [items.length, ready]);

  const count = ready ? items.length : 0;
  return (
    <button type="button" className={bump ? 'camerino-button is-bumping' : 'camerino-button'} onClick={open} data-camerino-target aria-label={`Il tuo camerino, ${count} ${count === 1 ? 'capo' : 'capi'}`}>
      <HangerIcon />
      <span className="camerino-button-label">Camerino</span>
      <span className={count ? 'camerino-count' : 'camerino-count is-empty'} aria-hidden="true">{count}</span>
    </button>
  );
}
