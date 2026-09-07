import type { Metadata } from 'next';
import Link from 'next/link';
import InnerHeader from '../components/InnerHeader';
import SiteImage from '../components/SiteImage';
import SiteFooter from '../components/SiteFooter';

export const metadata: Metadata = { title: 'La nostra storia | Antonella Moda e Dintorni', description: 'Scopri la storia e il modo di scegliere di Antonella Moda e Dintorni, boutique indipendente di abbigliamento femminile a Vercelli.', alternates: { canonical: '/chi-siamo' } };

export default function AboutPage() {
  return (
    <main className="inner-page about-page">
      <InnerHeader />
      <section className="about-hero"><div className="about-hero-copy"><span className="section-index">La nostra storia · Dal 1988</span><h1>Prima di un capo,<br /><em>viene la persona.</em></h1><p>Antonella Moda e Dintorni è una boutique indipendente a Vercelli. Da più di trentacinque anni accompagna donne diverse nella ricerca di un modo personale, concreto e sereno di vestirsi.</p></div><div className="about-hero-image"><SiteImage src="/images/atelier-hero.webp" alt="Antonella in una boutique tra abiti e tessuti" sizes="(max-width: 800px) 100vw, 50vw" priority /></div></section>
      <section className="about-manifesto section-shell"><div className="section-index">Il nostro punto di vista</div><div><p className="kicker">La moda passa. Il sentirsi bene resta.</p><h2>Non inseguiamo<br /><em>un’unica idea di donna.</em></h2><div className="about-columns"><p>Ogni persona porta con sé abitudini, desideri, giornate piene e occasioni speciali. Per questo la scelta non parte da ciò che “si deve” indossare, ma da ciò che può diventare davvero tuo.</p><p>Cerchiamo qualità percepibile, linee versatili e prezzi coerenti. Poi costruiamo gli abbinamenti con ascolto, esperienza e quella sincerità che permette anche di dire: questo capo non è quello giusto.</p></div></div></section>
      <section className="about-values"><article><span>01</span><h2>Ascolto</h2><p>Le domande vengono prima dei consigli. Capire la tua vita rende ogni proposta più precisa.</p></article><article><span>02</span><h2>Misura</h2><p>Non serve riempire l’armadio. Serve aggiungere possibilità a ciò che possiedi già.</p></article><article><span>03</span><h2>Memoria</h2><p>Ricordare gusti, proporzioni e occasioni trasforma una vendita in una relazione nel tempo.</p></article></section>
      <section className="about-quote"><blockquote>“La femminilità non è una regola. È un modo personale di stare al mondo.”</blockquote><span>Antonella</span></section>
      <section className="about-next section-shell"><div><span className="section-index">Entrare è semplice</span><h2>Vieni come sei.<br /><em>Il resto lo vediamo insieme.</em></h2></div><div><p>Puoi passare negli orari di apertura, scriverci prima su WhatsApp oppure dare un’occhiata alla collezione e salvare ciò che ti incuriosisce.</p><div className="about-actions"><Link className="button button-dark" href="/boutique">Scopri la boutique <span className="arrow">↗</span></Link><Link className="text-link" href="/collezione">Esplora i capi <span className="arrow">↗</span></Link></div></div></section>
      <SiteFooter />
    </main>
  );
}
