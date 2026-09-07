'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { business } from '../content';

type Props = { active?: 'collezione' | 'servizi' | 'magazine' | 'boutique' };

export default function InnerHeader({ active }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    ['collezione', '/collezione', 'Collezione'],
    ['servizi', '/servizi', 'Servizi'],
    ['magazine', '/magazine', 'Magazine'],
    ['boutique', '/boutique', 'Boutique'],
  ] as const;

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="detail-header">
      <Link className="wordmark" href="/" aria-label="Antonella Moda e Dintorni, homepage">
        <span>Antonella</span><small>Moda e Dintorni</small>
      </Link>
      <nav id="inner-main-nav" className={`inner-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigazione principale">
        {links.map(([key, href, label]) => <Link key={key} href={href} onClick={closeMenu} aria-current={active === key ? 'page' : undefined}>{label}</Link>)}
      </nav>
      <a className="text-link" href={business.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <span className="arrow">↗</span></a>
      <button className="menu-toggle inner-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="inner-main-nav" onClick={() => setMenuOpen((open) => !open)}>
        <span>{menuOpen ? 'Chiudi' : 'Menu'}</span>
      </button>
    </header>
  );
}
