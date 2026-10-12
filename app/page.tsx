import Link from 'next/link';
import ArticleCard from './components/ArticleCard';
import HoursList from './components/HoursList';
import MapFacade from './components/MapFacade';
import BoutiqueEntrance from './components/motion/BoutiqueEntrance';
import QuoteFill from './components/motion/QuoteFill';
import Rack from './components/motion/Rack';
import OpenCamerinoButton from './components/camerino/OpenCamerinoButton';
import OpenNow from './components/OpenNow';
import ProductCard from './components/ProductCard';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import SiteImage from './components/SiteImage';
import { articles, bookEvents, business, products, reviews, services, whatsappLink } from './content';

const featuredSlugs = ['completo-bianco-quattro-bottoni', 'abito-lungo-raso', 'cappotto-rosso-doppiopetto', 'completo-magenta', 'gonna-fiori-maculata', 'tubino-nero-midi', 'blusa-floreale', 'completo-bronzo'];

export default function Home() {
  const featured = featuredSlugs.map((slug) => products.find((product) => product.slug === slug)!).filter(Boolean);
  const [videoCall, whatsappAdvice, , , giftCard] = services;
  const lastEvent = bookEvents[0];

  return (
    <>
      <SiteHeader />
      <main id="contenuto">
        <section className="hero">
          <div className="hero-copy">
            <h1><span className="line"><span>Siate icone</span></span> <span className="line"><span>di voi stesse.</span></span></h1>
            <p className="hero-lede">Boutique di abbigliamento donna a Vercelli. Abiti, completi e tailleur scelti uno per uno da Antonella Mangolini, nella moda da più di 35 anni.</p>
            <div className="hero-actions">
              <Link className="button button-fuchsia" href="/collezione">Scegli cosa provare</Link>
              <a className="button button-ghost" href={whatsappLink('Ciao Antonella, ')} target="_blank" rel="noreferrer">Scrivi su WhatsApp</a>
            </div>
            <Link className="hero-news" href="/boutique">
              <strong>Abbiamo cambiato indirizzo.</strong> Ora ci trovi in {business.street}, {business.corner}.
            </Link>
          </div>
          <figure className="hero-figure">
            <div className="frame">
              <SiteImage src="/images/boutique/antonella-armadio-rosa.webp" alt="Antonella sorride davanti all’armadio rosa della sua boutique" sizes="(max-width: 800px) 90vw, 42vw" priority />
            </div>
            <figcaption>Antonella, nella sua boutique</figcaption>
          </figure>
        </section>

        <section className="rail-section" aria-labelledby="rail-title">
          <div className="section-head">
            <h2 id="rail-title">Visti in boutique</h2>
            <p>Capi fotografati in negozio, molti della collezione Artigli. Le taglie cambiano ogni settimana: chiedi ad Antonella cosa c’è adesso.</p>
            <Link className="text-link" href="/collezione">Tutta la collezione</Link>
          </div>
          <Rack label="Capi in evidenza, scorri in orizzontale">
            {featured.map((product, index) => <ProductCard key={product.slug} product={product} priority={index < 2} sizes="(max-width: 700px) 70vw, 22vw" />)}
          </Rack>
        </section>

        <section className="fitting" aria-labelledby="fitting-title">
          <div className="fitting-copy">
            <h2 id="fitting-title">Il camerino ti aspetta già pronto.</h2>
            <p>Scegli online quello che vuoi provare, Antonella te lo prepara nella tua taglia. Arrivi, provi, decidi con calma.</p>
          </div>
          <ol className="fitting-steps">
            <li><h3>Metti i capi nel camerino</h3><p>Tocca <strong>Camerino</strong> sui capi che ti piacciono, nella collezione o nelle schede.</p></li>
            <li><h3>Dicci quando passi</h3><p>Scegli il giorno e la fascia oraria tra gli orari di apertura della boutique.</p></li>
            <li><h3>Antonella li prepara</h3><p>Riceve la tua lista su WhatsApp e ti fa trovare tutto in camerino, con qualche abbinamento in più.</p></li>
          </ol>
          <div className="fitting-actions">
            <Link className="button" href="/collezione">Scegli dalla collezione</Link>
            <OpenCamerinoButton />
          </div>
        </section>

        <section className="quote-band" aria-labelledby="quote-title">
          <div className="quote-band-image">
            <SiteImage src="/images/boutique/parete-amore-per-te-stessa.webp" alt="La parete della boutique con il disegno di una donna e la frase sull’amore per se stesse" sizes="(max-width: 800px) 100vw, 40vw" />
          </div>
          <blockquote>
            <QuoteFill id="quote-title" text="L’accessorio più bello che puoi indossare? L’amore per te stessa." />
            <footer>Scritto sulla parete della boutique</footer>
          </blockquote>
        </section>

        <section className="about-teaser">
          <div className="about-teaser-image">
            <SiteImage src="/images/boutique/antonella-maglia-bianca.webp" alt="Antonella in boutique con maglia bianca e borsa a frange" sizes="(max-width: 800px) 100vw, 36vw" />
          </div>
          <div className="about-teaser-copy">
            <h2>«Non vendo solo abiti, ma emozioni.»</h2>
            <p>Chi non ha mai avuto un sogno nel cassetto? Io ne ho avuti tanti e tanti ne ho ancora, perché in questa vita è un nostro dovere sognare.</p>
            <p>Sono nel campo del fashion da ben più di 35 anni, sempre attenta alle esigenze delle donne. Scelgo capi versatili per donne che amano cercare nuove ispirazioni per la propria immagine, con un unico riferimento: la femminilità.</p>
            <p className="signature">Antonella Mangolini</p>
            <Link className="text-link" href="/chi-siamo">Guarda il video della boutique</Link>
          </div>
        </section>

        <section className="ways" aria-labelledby="ways-title">
          <div className="section-head">
            <h2 id="ways-title">Non puoi passare? Ci pensiamo noi.</h2>
          </div>
          <div className="ways-list">
            <article>
              <h3>{videoCall.title}</h3>
              <p>{videoCall.summary}</p>
              <Link className="text-link" href={`/servizi/${videoCall.slug}`}>Come funziona</Link>
            </article>
            <article>
              <h3>{whatsappAdvice.title}</h3>
              <p>{whatsappAdvice.summary} Negli orari di negozio rispondiamo di solito in pochi minuti.</p>
              <Link className="text-link" href={`/servizi/${whatsappAdvice.slug}`}>Come funziona</Link>
            </article>
            <article>
              <h3>{giftCard.title}</h3>
              <p>{giftCard.summary}</p>
              <Link className="text-link" href={`/servizi/${giftCard.slug}`}>Scopri il buono</Link>
            </article>
          </div>
        </section>

        <section className="book-teaser" aria-labelledby="book-title">
          <div className="book-teaser-copy">
            <h2 id="book-title">Un libro in borsa</h2>
            <p className="book-teaser-lede">Moda <em>e dintorni</em>: una volta al mese la boutique diventa un salotto letterario.</p>
            <p>Ogni ospite propone un titolo, se ne estrae uno a sorte e diventa la lettura di tutte. Ogni tanto arriva anche un’autrice o un autore a raccontare il proprio libro.</p>
            <Link className="button" href="/un-libro-in-borsa">Scopri il gruppo di lettura</Link>
          </div>
          <div className="book-teaser-event">
            <p className="book-teaser-label">L’ultimo incontro</p>
            <time dateTime={lastEvent.isoDate}>{lastEvent.date}</time>
            <h3>{lastEvent.author}</h3>
            <p><cite>{lastEvent.book}</cite></p>
          </div>
        </section>

        <section className="reviews" aria-labelledby="reviews-title">
          <h2 id="reviews-title" className="visually-hidden">Cosa dicono le clienti</h2>
          {reviews.map((review) => (
            <figure key={review.author}>
              <blockquote>{review.quote}</blockquote>
              <figcaption><strong>{review.author}</strong>, {review.source}</figcaption>
            </figure>
          ))}
        </section>

        <section className="home-diary" aria-labelledby="diary-title">
          <div className="section-head">
            <h2 id="diary-title">Il diario di Antonella</h2>
            <p>Storie di capi che non passano mai di moda, raccontate a modo suo.</p>
            <Link className="text-link" href="/diario">Tutti gli articoli</Link>
          </div>
          <div className="article-grid">
            {articles.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </section>

        <BoutiqueEntrance>
          <h2 id="entrance-title">Entra pure. Ti aspettavamo.</h2>
          <address>{business.street}, {business.corner}, Vercelli</address>
          <OpenNow />
          <div className="visit-actions">
            <a className="button button-fuchsia" href={business.mapsUrl} target="_blank" rel="noreferrer">Indicazioni stradali</a>
            <a className="button button-light" href={`tel:${business.phoneHref}`}>Chiama {business.phoneDisplay}</a>
          </div>
        </BoutiqueEntrance>

        <section className="visit" aria-label="Orari e mappa">
          <div className="visit-copy">
            <h2>Orari</h2>
            <HoursList />
          </div>
          <MapFacade />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
