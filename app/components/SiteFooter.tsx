import Link from 'next/link';
import { business, whatsappLink } from '../content';
import { assetPath } from '../site';
import HoursList from './HoursList';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath('/images/brand/logo.png')} alt={business.name} width={455} height={430} loading="lazy" />
          <p className="footer-motto">{business.motto}</p>
        </div>
        <div className="footer-col">
          <h2>Vieni a trovarci</h2>
          <address>{business.addressLines.map((line) => <span key={line}>{line}</span>)}</address>
          <a href={business.mapsUrl} target="_blank" rel="noreferrer">Apri in Google Maps</a>
          <a href={`tel:${business.phoneHref}`}>Telefono {business.phoneDisplay}</a>
          <a href={whatsappLink('Ciao Antonella, ')} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
        <div className="footer-col">
          <h2>Orari</h2>
          <HoursList compact />
        </div>
        <div className="footer-col">
          <h2>Esplora</h2>
          <Link href="/collezione">Collezione</Link>
          <Link href="/servizi">Servizi</Link>
          <Link href="/un-libro-in-borsa">Un libro in borsa</Link>
          <Link href="/diario">Diario di Antonella</Link>
          <Link href="/chi-siamo">Chi siamo</Link>
          <Link href="/faq">Domande frequenti</Link>
        </div>
        <div className="footer-col">
          <h2>Seguici</h2>
          {business.socials.map((social) => <a key={social.label} href={social.href} target="_blank" rel="noreferrer">{social.label}</a>)}
        </div>
      </div>
      <div className="footer-legal">
        <span>© {new Date().getFullYear()} {business.name}, P. IVA {business.vatNumber}</span>
        <nav aria-label="Informazioni legali">
          <Link href="/privacy">Privacy</Link>
          <Link href="/cookie">Cookie</Link>
          <Link href="/termini">Termini</Link>
          <Link href="/accessibilita">Accessibilità</Link>
        </nav>
      </div>
    </footer>
  );
}
