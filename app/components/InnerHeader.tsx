import Link from 'next/link';
import { business } from '../content';

type Props = { active?: 'collezione' | 'servizi' | 'magazine' | 'boutique' };

export default function InnerHeader({ active }: Props) {
  const links = [
    ['collezione', '/collezione', 'Collezione'],
    ['servizi', '/servizi', 'Servizi'],
    ['magazine', '/magazine', 'Magazine'],
    ['boutique', '/boutique', 'Boutique'],
  ] as const;

  return (
    <header className="detail-header">
      <Link className="wordmark" href="/" aria-label="Antonella Moda e Dintorni, homepage">
        <span>Antonella</span><small>Moda e Dintorni</small>
      </Link>
      <nav className="inner-nav" aria-label="Navigazione principale">
        {links.map(([key, href, label]) => <Link key={key} href={href} aria-current={active === key ? 'page' : undefined}>{label}</Link>)}
      </nav>
      <a className="text-link" href={business.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp <span className="arrow">↗</span></a>
    </header>
  );
}
