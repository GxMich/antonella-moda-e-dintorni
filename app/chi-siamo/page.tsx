import type { Metadata } from 'next';
import Link from 'next/link';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import SiteImage from '../components/SiteImage';
import { business } from '../content';
import { assetPath } from '../site';

export const metadata: Metadata = {
  title: 'Chi siamo: Antonella Mangolini | Antonella Moda e Dintorni',
  description: 'Antonella Mangolini lavora nella moda da più di 35 anni. La sua boutique a Vercelli è dedicata alle donne che amano la femminilità: guarda il video e conosci la sua storia.',
  alternates: { canonical: '/chi-siamo' },
};

const gallery = [
  { src: '/images/boutique/interno-consolle-rosa.webp', alt: 'Interno della boutique con manichini e una consolle barocca rosa' },
  { src: '/images/boutique/manichino-perle.webp', alt: 'Manichino con camicia nera, fili di perle e jeans' },
  { src: '/images/boutique/parete-illustrata-accessori.webp', alt: 'Parete con il disegno di una donna, collane e borse rosse' },
  { src: '/images/boutique/shopping-is-my-sport.webp', alt: 'T-shirt con la scritta Shopping is my sport e gonna di paillettes' },
  { src: '/images/boutique/manichino-frange.webp', alt: 'Manichino con gonna a frange, t-shirt e giacca in denim' },
  { src: '/images/boutique/scaffale-denim.webp', alt: 'Scaffale con jeans e camicie in denim' },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page about-page">
        <div className="about-hero">
          <div>
            <h1>Antonella Mangolini</h1>
            <p className="about-lede">Chi non ha mai avuto un sogno nel cassetto? Io ne ho avuti tanti e tanti ne ho ancora, perché in questa vita è un nostro dovere sognare.</p>
            <p>Mi chiamo Antonella, sono la titolare del negozio “Antonella Moda e Dintorni” e mi piace pensare che non vendo solo abiti, ma emozioni.</p>
            <p>Sono nel campo del fashion da ben più di 35 anni, sempre attenta alle esigenze delle donne. Il tipo di abbigliamento che propongo è dedicato alle donne attente al valore della femminilità, che amano cercare sempre nuove ispirazioni per la propria immagine. Creatività e qualità, sempre con una attenzione particolare al prezzo.</p>
            <p>Capi assolutamente versatili e un unico punto di riferimento: la femminilità.</p>
            <p className="signature">{business.motto}</p>
          </div>
          <div className="frame about-portrait">
            <SiteImage src="/images/boutique/antonella-armadio-rosa.webp" alt="Antonella sorride davanti all’armadio rosa della boutique" sizes="(max-width: 800px) 90vw, 36vw" priority />
          </div>
        </div>

        <section className="video-section" aria-labelledby="video-title">
          <h2 id="video-title">Antonella ti racconta la boutique</h2>
          <video controls preload="none" playsInline poster={assetPath('/images/boutique/video-poster.webp')} width={960} height={540}>
            <source src={assetPath('/video/antonella-racconta-la-boutique.mp4')} type="video/mp4" />
            Il tuo browser non riproduce video. <a href={assetPath('/video/antonella-racconta-la-boutique.mp4')}>Scarica il video</a>.
          </video>
          <p className="video-note">Un giro tra gli stender, girato prima del trasferimento in Via Carlo III di Savoia. Un minuto e mezzo, con audio.</p>
        </section>

        <section className="about-gallery" aria-label="Dettagli della boutique">
          {gallery.map((image) => (
            <div className="about-gallery-item" key={image.src}><SiteImage src={image.src} alt={image.alt} sizes="(max-width: 700px) 50vw, 33vw" /></div>
          ))}
        </section>

        <section className="about-more">
          <div>
            <h2>Moda, e dintorni</h2>
            <p>I “dintorni” sono tutto quello che succede intorno ai vestiti: le chiacchiere al banco, i consigli sinceri, le caramelle nei pacchi, i libri. In boutique Antonella ha fondato anche <Link href="/un-libro-in-borsa">Un libro in borsa</Link>, un gruppo di lettura che si incontra una volta al mese.</p>
          </div>
          <div>
            <h2>Scrive anche lei</h2>
            <p>Nel suo <Link href="/diario">diario</Link> Antonella racconta la storia dei capi che ama di più, dal tubino nero al tailleur, «quasi tutti neri, ma ne ho anche uno fucsia».</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
