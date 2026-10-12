'use client';

import Link from 'next/link';
import CamerinoButton from './camerino/CamerinoButton';
import TransitionLink from './motion/TransitionLink';
import OpenNow from './OpenNow';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { business, whatsappLink } from '../content';
import { assetPath } from '../site';

const links = [
  ['/collezione', 'Collezione'],
  ['/servizi', 'Servizi'],
  ['/un-libro-in-borsa', 'Un libro in borsa'],
  ['/diario', 'Diario'],
  ['/chi-siamo', 'Chi siamo'],
  ['/boutique', 'Dove siamo'],
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    document.documentElement.classList.add('menu-is-open');
    return () => {
      document.removeEventListener('keydown', closeOnEscape);
      document.documentElement.classList.remove('menu-is-open');
    };
  }, [menuOpen]);

  const isActive = (href: string) => pathname === href || pathname?.startsWith(`${href}/`) || (href === '/collezione' && pathname?.startsWith('/capo/'));

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={`${business.name}, homepage`} onClick={() => setMenuOpen(false)}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetPath('/images/brand/logo.png')} alt="" width={455} height={430} />
      </Link>
      <nav id="main-nav" className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Navigazione principale">
        {links.map(([href, label]) => (
          <TransitionLink key={href} href={href} aria-current={isActive(href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{label}</TransitionLink>
        ))}
        <div className="main-nav-contact">
          <a href={`tel:${business.phoneHref}`}>Chiama {business.phoneDisplay}</a>
          <span>{business.street}, {business.corner}, Vercelli</span>
        </div>
      </nav>
      <div className="header-actions">
        <Link className="header-open" href="/boutique" onClick={() => setMenuOpen(false)}><OpenNow compact /></Link>
        <CamerinoButton />
        <a className="button button-small header-whatsapp" href={whatsappLink('Ciao Antonella, ')} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
      <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen((open) => !open)}>
        <span className="menu-toggle-lines" aria-hidden="true" />
        <span>{menuOpen ? 'Chiudi' : 'Menu'}</span>
      </button>
    </header>
  );
}
