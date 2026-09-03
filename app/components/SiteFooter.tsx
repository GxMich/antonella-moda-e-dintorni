import Link from 'next/link';
import { business } from '../content';

export default function SiteFooter() {
  return (
    <footer className="global-footer">
      <div className="global-footer-brand">
        <Link className="footer-brand" href="/"><span>Antonella</span><small>Moda e Dintorni</small></Link>
        <p>Una boutique indipendente fatta di ascolto, femminilità e scelte che durano.</p>
      </div>
      <div className="global-footer-column">
        <strong>Esplora</strong>
        <Link href="/collezione">Collezione</Link>
        <Link href="/servizi">Servizi</Link>
        <Link href="/chi-siamo">Chi siamo</Link>
        <Link href="/magazine">Magazine</Link>
      </div>
      <div className="global-footer-column">
        <strong>In boutique</strong>
        <Link href="/appuntamento">Richiedi un appuntamento</Link>
        <Link href="/boutique">Dove siamo e orari</Link>
        <Link href="/faq">Domande frequenti</Link>
        <a href={business.whatsappUrl} target="_blank" rel="noreferrer">Scrivici su WhatsApp</a>
        <a href={`mailto:${business.email}`}>{business.email}</a>
      </div>
      <div className="global-footer-column">
        <strong>Informazioni</strong>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/cookie">Cookie Policy</Link>
        <Link href="/termini">Termini di utilizzo</Link>
        <Link href="/accessibilita">Accessibilità</Link>
      </div>
      <div className="global-footer-bottom">
        <span>Vercelli · Italia</span>
        <span>© {new Date().getFullYear()} {business.name}</span>
      </div>
    </footer>
  );
}
