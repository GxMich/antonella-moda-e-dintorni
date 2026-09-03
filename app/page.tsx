import { articles, products } from './content';
import ArticleCard from './components/ArticleCard';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';

function Arrow() { return <span aria-hidden="true" className="arrow">↗</span>; }

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Boutique indipendente · Vercelli</p>
          <h1>Vestire<br /><em>la propria</em><br />storia.</h1>
          <p className="hero-lede">Abbigliamento femminile scelto con cura, consulenza personale e nuove ispirazioni a Vercelli.</p>
          <div className="hero-actions"><a className="button button-dark" href="/collezione">Scopri la collezione <Arrow /></a><a className="text-link" href="https://wa.me/393318115966" target="_blank" rel="noreferrer">Scrivici su WhatsApp <Arrow /></a></div>
        </div>
        <div className="hero-visual" aria-label="Una selezione di capi Antonella Moda e Dintorni">
          <div className="hero-swash" /><div className="hero-image-wrap"><img src="/images/atelier-hero.png" alt="Antonella in atelier accanto a tessuti e capi appesi" /></div>
          <span className="vertical-note vertical-note-top">SCELTO CON CURA</span><span className="vertical-note vertical-note-bottom">VERCELLI · ITALIA</span><span className="hero-stamp">A<br /><i>M</i><br />D</span>
        </div>
        <div className="hero-bottomline"><span>Dal 1988, un guardaroba fatto di persone.</span><span className="scroll-cue"><i /> Scorri per entrare</span></div>
      </section>

      <section className="intro section-shell"><div className="section-index">01 — Un invito</div><div className="intro-content"><p className="kicker">Non vendiamo solo abiti.</p><h2>Ti aiutiamo a trovare <em>quello che ti somiglia.</em></h2><div className="intro-bottom"><p>In boutique trovi capi versatili, qualità e un’attenzione autentica al prezzo. Soprattutto, trovi ascolto: il tempo per capire cosa cerchi e lasciarti consigliare senza fretta.</p><a className="circle-link" href="/chi-siamo" aria-label="Scopri il nostro modo"><span>Il nostro<br />modo</span><Arrow /></a></div></div></section>

      <section className="service-proof section-shell"><div className="section-index">Come funziona</div><div className="service-proof-content"><div><p className="kicker">La boutique continua online.</p><h2>Ti seguiamo<br /><em>anche a distanza.</em></h2><p className="service-proof-lede">Hai visto un capo che ti piace? Scrivici. Ti raccontiamo vestibilità, colori e disponibilità con la stessa attenzione che trovi entrando in negozio.</p><a className="text-link light-link" href="/servizi">Scopri tutti i servizi <Arrow /></a></div><div className="proof-list"><div><span>01</span><strong>Consiglio personale</strong><p>Partiamo da ciò che cerchi, dalla tua giornata e dal modo in cui desideri sentirti.</p></div><div><span>02</span><strong>Dettagli reali</strong><p>Ti mostriamo proporzioni, materiali e possibili abbinamenti senza risposte generiche.</p></div><div><span>03</span><strong>Ritiro in boutique</strong><p>Mettiamo da parte la selezione e la provi con calma quando passi a trovarci.</p></div></div></div></section>

      <section className="collection section-shell" id="collezione"><div className="section-heading"><div><div className="section-index">02 — Collezione</div><h2>Le cose belle<br /><em>si fanno spazio.</em></h2></div><a className="text-link" href="/collezione">Guarda tutti i capi <Arrow /></a></div><div className="product-grid">{products.slice(0, 3).map((product, index) => <a className={`product-card product-${index + 1}`} href={`/capo/${product.slug}`} key={product.slug}><div className="product-image"><img src={product.image} alt={product.alt} loading={index === 0 ? 'eager' : 'lazy'} />{index === 0 && <span className="new-pill">{product.badge}</span>}<span className="product-arrow"><Arrow /></span></div><div className="product-caption"><span>{product.category} · {product.badge}</span><strong>{product.name}</strong></div></a>)}</div><div className="collection-drawer" aria-label="Categorie della collezione"><span className="drawer-label">Esplora per gesto</span><div className="drawer-items" tabIndex={0}><span>Abiti</span><span>Maglieria</span><span>Pantaloni</span><span>Giacche</span><span>Accessori</span><span>Nuovi arrivi</span></div></div></section>

      <section className="story" id="storia"><div className="story-image"><img src="/images/styling-hands-v2.png" alt="Mani che scelgono e accostano tessuti in boutique" loading="lazy" /></div><div className="story-copy"><div className="section-index">03 — Il nostro modo</div><h2>Una boutique<br />con <em>memoria.</em></h2><p>Mi chiamo Antonella e da più di 35 anni ascolto le donne, le loro giornate e il desiderio di sentirsi bene nei propri abiti. Ogni capo che entra in negozio porta con sé una possibilità: quella di riconoscersi un po’ di più.</p><p>La femminilità, per noi, non è una regola. È un modo personale di stare al mondo.</p><a className="text-link story-link" href="/chi-siamo">Conosci la nostra storia <Arrow /></a><span className="signature">Antonella</span></div></section>

      <section className="home-magazine section-shell"><div className="section-heading"><div><div className="section-index">04 — Appunti di stile</div><h2>Idee da portare<br /><em>nel guardaroba.</em></h2></div><a className="text-link" href="/magazine">Tutti gli articoli <Arrow /></a></div><div className="home-article-grid">{articles.slice(0, 3).map((article, index) => <ArticleCard key={article.slug} article={article} featured={index === 0} />)}</div></section>

      <section className="visit section-shell" id="boutique"><div className="section-index">05 — Vieni a trovarci</div><div className="visit-grid"><div><h2>Ci vediamo<br /><em>in Via Dante.</em></h2><p className="visit-intro">Il modo più bello di conoscere un capo è incontrarlo dal vivo. Passa a trovarci in boutique a Vercelli.</p><a className="button button-dark" href="https://www.google.com/maps/search/?api=1&query=Via+Dante+Alighieri+10+Vercelli" target="_blank" rel="noreferrer">Indicazioni per la boutique <Arrow /></a></div><div className="visit-details"><div><span>Indirizzo</span><strong>Via Carlo III di Savoia,<br />Via Dante Alighieri, 10<br />13100 Vercelli VC</strong></div><div><span>Telefono</span><a href="tel:+393318115966">+39 331 811 5966</a></div><div><span>Scrivici</span><a href="mailto:info@antonellamodaedintorni.com">info@antonellamodaedintorni.com</a></div></div></div></section>

      <section className="closing-cta"><p className="eyebrow">Una domanda, un desiderio, un’idea?</p><h2>Parliamone<br /><em>con calma.</em></h2><a className="button button-light" href="https://wa.me/393318115966" target="_blank" rel="noreferrer">Scrivici su WhatsApp <Arrow /></a></section>
      <SiteFooter />
    </main>
  );
}
