import Link from 'next/link';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page not-found">
        <h1>Questa pagina non c’è più.</h1>
        <p>Forse il capo che cercavi è già stato venduto, o l’indirizzo è cambiato. Dalla collezione trovi quello che c’è adesso.</p>
        <div><Link className="button" href="/collezione">Vai alla collezione</Link></div>
      </main>
      <SiteFooter />
    </>
  );
}
