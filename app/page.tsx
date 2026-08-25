'use client';

import { useEffect, useState } from 'react';

const products = [
  { name: 'Morbida presenza', category: 'Abito · Nuovo arrivo', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85', tone: 'rosa' },
  { name: 'Linea quotidiana', category: 'Completo · Versatile', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=85', tone: 'sage' },
  { name: 'Un gesto leggero', category: 'Maglieria · Essenziale', image: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=85', tone: 'terracotta' },
];

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <main>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="wordmark" href="#top" aria-label="Antonella Moda e Dintorni, torna all'inizio"><span>Antonella</span><small>Moda e Dintorni</small></a>
        <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigazione principale">
          <a href="#collezione" onClick={() => setMenuOpen(false)}>Collezione</a>
          <a href="#storia" onClick={() => setMenuOpen(false)}>Il nostro modo</a>
          <a href="#boutique" onClick={() => setMenuOpen(false)}>Boutique</a>
        </nav>
        <div className="header-actions">
          <a className="text-link header-whatsapp" href="https://wa.me/393318115966" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a>
          <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}><span>{menuOpen ? 'Chiudi' : 'Menu'}</span></button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Boutique indipendente · Vercelli</p>
          <h1>Vestire<br /><em>la propria</em><br />storia.</h1>
          <p className="hero-lede">Abbigliamento femminile scelto con cura, consulenza personale e nuove ispirazioni a Vercelli.</p>
          <div className="hero-actions"><a className="button button-dark" href="#collezione">Scopri la collezione <Arrow /></a><a className="text-link" href="https://wa.me/393318115966" target="_blank" rel="noreferrer">Scrivici su WhatsApp <Arrow /></a></div>
        </div>
        <div className="hero-visual" aria-label="Una selezione di capi Antonella Moda e Dintorni">
          <div className="hero-swash" /><div className="hero-image-wrap"><img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=88" alt="Donna con abito morbido color crema" /></div>
          <span className="vertical-note vertical-note-top">SCELTO CON CURA</span><span className="vertical-note vertical-note-bottom">VERCELLI · ITALIA</span><span className="hero-stamp">A<br /><i>M</i><br />D</span>
        </div>
        <div className="hero-bottomline"><span>Dal 1988, un guardaroba fatto di persone.</span><span className="scroll-cue"><i /> Scorri per entrare</span></div>
      </section>

      <section className="intro section-shell"><div className="section-index">01 — Un invito</div><div className="intro-content"><p className="kicker">Non vendiamo solo abiti.</p><h2>Ti aiutiamo a trovare <em>quello che ti somiglia.</em></h2><div className="intro-bottom"><p>In boutique trovi capi versatili, qualità e un’attenzione autentica al prezzo. Soprattutto, trovi ascolto: il tempo per capire cosa cerchi e lasciarti consigliare senza fretta.</p><a className="circle-link" href="#storia" aria-label="Scopri il nostro modo"><span>Il nostro<br />modo</span><Arrow /></a></div></div></section>

      <section className="collection section-shell" id="collezione"><div className="section-heading"><div><div className="section-index">02 — Collezione</div><h2>Le cose belle<br /><em>si fanno spazio.</em></h2></div><a className="text-link" href="#tutti-i-capi">Guarda tutti i capi <Arrow /></a></div><div className="product-grid" id="tutti-i-capi">{products.map((product, index) => <a className={`product-card product-${index + 1}`} href={`/capo/${product.name.toLowerCase().replaceAll(' ', '-')}`} key={product.name}><div className={`product-image ${product.tone}`}><img src={product.image} alt={product.name} loading={index === 0 ? 'eager' : 'lazy'} />{index === 0 && <span className="new-pill">Nuovo arrivo</span>}<span className="product-arrow"><Arrow /></span></div><div className="product-caption"><span>{product.category}</span><strong>{product.name}</strong></div></a>)}</div><div className="collection-drawer" aria-label="Categorie della collezione"><span className="drawer-label">Esplora per gesto</span><div className="drawer-items" tabIndex={0}><span>Abiti</span><span>Maglieria</span><span>Pantaloni</span><span>Giacche</span><span>Accessori</span><span>Nuovi arrivi</span></div></div></section>

      <section className="story" id="storia"><div className="story-image"><img src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1400&q=88" alt="Dettaglio di un tessuto e di un capo appeso in atelier" loading="lazy" /></div><div className="story-copy"><div className="section-index">03 — Il nostro modo</div><h2>Una boutique<br />con <em>memoria.</em></h2><p>Mi chiamo Antonella e da più di 35 anni ascolto le donne, le loro giornate e il desiderio di sentirsi bene nei propri abiti. Ogni capo che entra in negozio porta con sé una possibilità: quella di riconoscersi un po’ di più.</p><p>La femminilità, per noi, non è una regola. È un modo personale di stare al mondo.</p><span className="signature">Antonella</span></div></section>

      <section className="visit section-shell" id="boutique"><div className="section-index">04 — Vieni a trovarci</div><div className="visit-grid"><div><h2>Ci vediamo<br /><em>in Via Dante.</em></h2><p className="visit-intro">Il modo più bello di conoscere un capo è incontrarlo dal vivo. Passa a trovarci in boutique a Vercelli.</p><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Via+Dante+Alighieri+10+Vercelli" target="_blank" rel="noreferrer">Indicazioni per la boutique <Arrow /></a></div><div className="visit-details"><div><span>Indirizzo</span><strong>Via Carlo III di Savoia,<br />Via Dante Alighieri, 10<br />13100 Vercelli VC</strong></div><div><span>Telefono</span><a href="tel:+393318115966">+39 331 811 5966</a></div><div><span>Scrivici</span><a href="mailto:info@antonellamodaedintorni.com">info@antonellamodaedintorni.com</a></div></div></div></section>

      <section className="closing-cta"><p className="eyebrow">Una domanda, un desiderio, un’idea?</p><h2>Parliamone<br /><em>con calma.</em></h2><a className="button button-light" href="https://wa.me/393318115966" target="_blank" rel="noreferrer">Scrivici su WhatsApp <Arrow /></a></section>
      <footer className="site-footer"><div className="footer-brand"><span>Antonella</span><small>Moda e Dintorni</small></div><div className="footer-links"><a href="#collezione">Collezione</a><a href="#storia">Il nostro modo</a><a href="#boutique">Boutique</a></div><div className="footer-meta"><span>Vercelli · Italia</span><span>© {new Date().getFullYear()} Antonella Moda e Dintorni</span></div></footer>
    </main>
  );
}
