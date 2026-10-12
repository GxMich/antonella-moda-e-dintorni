import type { Metadata, Viewport } from 'next';
import { Bodoni_Moda, Hanken_Grotesk } from 'next/font/google';
import './globals.css';
import CookieConsent from './components/CookieConsent';
import WhatsAppDock from './components/WhatsAppDock';
import CamerinoDrawer from './components/camerino/CamerinoDrawer';
import { CamerinoProvider } from './components/camerino/CamerinoProvider';
import MotionRoot from './components/motion/MotionRoot';
import { business, openingHours } from './content';
import { assetUrl, siteUrl } from './site';

// Bodoni was a Piedmontese typographer (Saluzzo, 1740): the fashion-magazine
// serif feels at home in a Vercelli boutique.
const displayFont = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  style: ['normal', 'italic'],
  display: 'swap',
});

const bodyFont = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const description = 'Boutique di abbigliamento donna a Vercelli, in Via Carlo III di Savoia 10 angolo Via Dante. Abiti, completi e tailleur scelti da Antonella Mangolini. Scrivi su WhatsApp o prenota una videochiamata.';

export const metadata: Metadata = {
  metadataBase: new URL(`${siteUrl}/`),
  title: 'Antonella Moda e Dintorni | Abbigliamento donna a Vercelli',
  description,
  applicationName: business.name,
  keywords: ['abbigliamento donna Vercelli', 'boutique Vercelli', 'negozio vestiti donna Vercelli', 'Artigli Vercelli', 'abiti cerimonia Vercelli', 'tailleur donna', 'Un libro in borsa'],
  creator: business.name,
  category: 'fashion',
  formatDetection: { telephone: true, address: true },
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Antonella Moda e Dintorni, boutique donna a Vercelli',
    description: 'Siate icone di voi stesse. Abbigliamento donna scelto da Antonella, in Via Carlo III di Savoia 10 a Vercelli.',
    url: siteUrl,
    siteName: business.name,
    locale: 'it_IT',
    type: 'website',
    images: [{ url: assetUrl('/images/boutique/antonella-armadio-rosa.webp'), width: 800, height: 1000, alt: 'Antonella nella sua boutique davanti all’armadio rosa' }],
  },
  twitter: { card: 'summary_large_image', title: 'Antonella Moda e Dintorni', description, images: [assetUrl('/images/boutique/antonella-armadio-rosa.webp')] },
};

export const viewport: Viewport = { themeColor: '#ffffff' };

const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'ClothingStore',
  name: business.name,
  url: siteUrl,
  image: assetUrl('/images/boutique/antonella-armadio-rosa.webp'),
  logo: assetUrl('/images/brand/logo.png'),
  telephone: business.phoneHref,
  vatID: `IT${business.vatNumber}`,
  founder: { '@type': 'Person', name: business.owner },
  address: { '@type': 'PostalAddress', streetAddress: business.street, postalCode: business.postalCode, addressLocality: business.city, addressRegion: business.province, addressCountry: 'IT' },
  openingHoursSpecification: openingHours.flatMap(({ dayIndex, slots }) => slots.map(([opens, closes]) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: dayNames[dayIndex], opens, closes }))),
  sameAs: business.socials.map((social) => social.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" data-scroll-behavior="smooth" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <a className="skip-link" href="#contenuto">Vai al contenuto</a>
        <CamerinoProvider>
          {children}
          <WhatsAppDock />
          <CamerinoDrawer />
        </CamerinoProvider>
        <MotionRoot />
        <CookieConsent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      </body>
    </html>
  );
}
