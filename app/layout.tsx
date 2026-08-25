import type { Metadata } from 'next';
import './globals.css';
import CookieConsent from './components/CookieConsent';

export const metadata: Metadata = {
  metadataBase: new URL('https://antonellamodaedintorni.com'),
  title: 'Antonella Moda e Dintorni | Boutique a Vercelli',
  description: 'Scopri Antonella Moda e Dintorni, boutique di abbigliamento femminile a Vercelli. Guarda i nuovi arrivi e contattaci su WhatsApp o in boutique.',
  alternates: { canonical: '/' },
  openGraph: { title: 'Antonella Moda e Dintorni | Boutique a Vercelli', description: 'Abbigliamento femminile scelto con cura, consulenza personale e nuove ispirazioni a Vercelli.', url: 'https://antonellamodaedintorni.com', siteName: 'Antonella Moda e Dintorni', locale: 'it_IT', type: 'website', images: [{ url: '/images/atelier-hero.png', width: 1024, height: 1536, alt: 'Antonella in atelier tra tessuti e capi appesi' }] },
  twitter: { card: 'summary_large_image', title: 'Antonella Moda e Dintorni | Boutique a Vercelli', description: 'Una boutique di prossimità, fatta di ascolto e femminilità.', images: ['/images/atelier-hero.png'] },
};

const localBusiness = {
  '@context': 'https://schema.org', '@type': 'ClothingStore', name: 'Antonella Moda e Dintorni', url: 'https://antonellamodaedintorni.com', telephone: '+39 3318115966', email: 'info@antonellamodaedintorni.com',
  address: { '@type': 'PostalAddress', streetAddress: 'Via Carlo III di Savoia, Via Dante Alighieri, 10', postalCode: '13100', addressLocality: 'Vercelli', addressRegion: 'VC', addressCountry: 'IT' },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Monday', opens: '16:00', closes: '19:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '12:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '16:00', closes: '19:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '10:00', closes: '12:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Saturday', opens: '16:00', closes: '19:30' },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="it"><body>{children}<CookieConsent /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} /></body></html>;
}
