'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { business } from '../content';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Link className="wordmark" href="/#top" aria-label="Antonella Moda e Dintorni, torna all’inizio"><span>Antonella</span><small>Moda e Dintorni</small></Link>
      <nav id="main-nav" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigazione principale">
        <Link href="/collezione" onClick={closeMenu}>Collezione</Link>
        <Link href="/servizi" onClick={closeMenu}>Servizi</Link>
        <Link href="/magazine" onClick={closeMenu}>Magazine</Link>
        <Link href="/boutique" onClick={closeMenu}>Boutique</Link>
      </nav>
      <div className="header-actions">
        <a className="text-link header-whatsapp" href={business.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <span className="arrow" aria-hidden="true">↗</span></a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen((open) => !open)}><span>{menuOpen ? 'Chiudi' : 'Menu'}</span></button>
      </div>
    </header>
  );
}
