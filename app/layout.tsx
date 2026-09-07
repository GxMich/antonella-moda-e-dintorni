import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import CookieConsent from './components/CookieConsent';
import { assetUrl, siteUrl } from './site';

const displayFont = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const bodyFont = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: 'Antonella Moda e Dintorni | Boutique a Vercelli',
  description: 'Scopri Antonella Moda e Dintorni, boutique di abbigliamento femminile a Vercelli. Guarda i nuovi arrivi e contattaci su WhatsApp o in boutique.',
  applicationName: 'Antonella Moda e Dintorni',
  keywords: ['boutique Vercelli', 'abbigliamento donna Vercelli', 'moda donna', 'consulenza di stile', 'nuovi arrivi donna'],
  creator: 'Antonella Moda e Dintorni',
  category: 'fashion',
  formatDetection: { telephone: true, email: true, address: true },
  alternates: { canonical: '/' },
  openGraph: { title: 'Antonella Moda e Dintorni | Boutique a Vercelli', description: 'Abbigliamento femminile scelto con cura, consulenza personale e nuove ispirazioni a Vercelli.', url: siteUrl, siteName: 'Antonella Moda e Dintorni', locale: 'it_IT', type: 'website', images: [{ url: assetUrl('/images/atelier-hero.webp'), width: 1024, height: 1536, alt: 'Antonella in atelier tra tessuti e capi appesi' }] },
  twitter: { card: 'summary_large_image', title: 'Antonella Moda e Dintorni | Boutique a Vercelli', description: 'Una boutique di prossimità, fatta di ascolto e femminilità.', images: [assetUrl('/images/atelier-hero.webp')] },
};

const localBusiness = {
  '@context': 'https://schema.org', '@type': 'ClothingStore', name: 'Antonella Moda e Dintorni', url: siteUrl, telephone: '+39 3318115966', email: 'info@antonellamodaedintorni.com',
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
  return <html lang="it" data-scroll-behavior="smooth" className={`${displayFont.variable} ${bodyFont.variable}`}><body>{children}<CookieConsent /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} /></body></html>;
}
