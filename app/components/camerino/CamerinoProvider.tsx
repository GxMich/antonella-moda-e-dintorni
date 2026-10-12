'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

/**
 * "Il tuo camerino": the visitor collects the pieces she wants to try,
 * picks a day, and sends the list to Antonella on WhatsApp so they are
 * ready in the fitting room when she arrives. Stored only in this browser.
 */

export type CamerinoItem = { slug: string; size: string };

type CamerinoContextValue = {
  items: CamerinoItem[];
  ready: boolean;
  isOpen: boolean;
  has: (slug: string) => boolean;
  add: (slug: string, size?: string, origin?: HTMLElement | null) => void;
  remove: (slug: string) => void;
  setSize: (slug: string, size: string) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
};

const STORAGE_KEY = 'antonella-camerino-v1';
const CamerinoContext = createContext<CamerinoContextValue | null>(null);

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Fly a copy of the product photo into the header fitting-room button. */
function flyToCamerino(origin: HTMLElement) {
  const target = document.querySelector<HTMLElement>('[data-camerino-target]');
  const image = origin.querySelector('img') ?? (origin instanceof HTMLImageElement ? origin : null);
  if (!target || !image || prefersReducedMotion()) return;
  const from = image.getBoundingClientRect();
  const to = target.getBoundingClientRect();
  if (!from.width || !to.width) return;

  const ghost = image.cloneNode() as HTMLImageElement;
  ghost.removeAttribute('srcset');
  ghost.src = image.currentSrc || image.src;
  ghost.alt = '';
  Object.assign(ghost.style, {
    position: 'fixed', left: `${from.left}px`, top: `${from.top}px`, width: `${from.width}px`, height: `${from.height}px`,
    objectFit: 'cover', zIndex: '80', pointerEvents: 'none', border: '6px solid #d3307a', margin: '0', transformOrigin: 'top left',
  });
  document.body.appendChild(ghost);
  const dx = to.left + to.width / 2 - (from.left + from.width / 2);
  const dy = to.top + to.height / 2 - (from.top + from.height / 2);
  const scale = Math.max(0.08, 36 / from.width);
  const animation = ghost.animate(
    [
      { transform: 'translate(0, 0) scale(1)', opacity: 1, borderRadius: '0px' },
      { transform: `translate(${dx * 0.55}px, ${dy * 0.35 - 60}px) scale(${(1 + scale) / 2.4})`, opacity: 1, offset: 0.55 },
      { transform: `translate(${dx + from.width * (1 - scale) / 2}px, ${dy + from.height * (1 - scale) / 2}px) scale(${scale})`, opacity: 0.2, borderRadius: '50%' },
    ],
    { duration: 720, easing: 'cubic-bezier(0.5, 0, 0.2, 1)' },
  );
  animation.onfinish = () => ghost.remove();
  animation.oncancel = () => ghost.remove();
}

export function CamerinoProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CamerinoItem[]>([]);
  const [ready, setReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const loaded = useRef(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? '[]');
        if (Array.isArray(saved)) setItems(saved.filter((item) => typeof item?.slug === 'string').map((item) => ({ slug: item.slug, size: String(item.size ?? '') })));
      } catch { /* storage unavailable: start empty */ }
      loaded.current = true;
      setReady(true);
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!loaded.current) return;
    try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items)); } catch { /* ignore */ }
  }, [items]);

  const add = useCallback((slug: string, size = '', origin?: HTMLElement | null) => {
    if (origin) flyToCamerino(origin);
    setItems((current) => current.some((item) => item.slug === slug)
      ? current.map((item) => item.slug === slug ? { ...item, size: size || item.size } : item)
      : [...current, { slug, size }]);
  }, []);

  const value = useMemo<CamerinoContextValue>(() => ({
    items,
    ready,
    isOpen,
    has: (slug) => items.some((item) => item.slug === slug),
    add,
    remove: (slug) => setItems((current) => current.filter((item) => item.slug !== slug)),
    setSize: (slug, size) => setItems((current) => current.map((item) => item.slug === slug ? { ...item, size } : item)),
    clear: () => setItems([]),
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }), [add, isOpen, items, ready]);

  return <CamerinoContext.Provider value={value}>{children}</CamerinoContext.Provider>;
}

export function useCamerino() {
  const context = useContext(CamerinoContext);
  if (!context) throw new Error('useCamerino must be used inside CamerinoProvider');
  return context;
}
