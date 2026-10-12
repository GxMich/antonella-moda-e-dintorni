/**
 * Every fact in this file comes from a public source about the boutique:
 * the former online shop antonellamodaedintorni.com (archived 2024–2025),
 * Trustpilot, Prima Vercelli and the boutique's social profiles.
 * When something changes, update it here: header, footer, pages and JSON-LD
 * all read from this single file.
 */

export const business = {
  name: 'Antonella Moda e Dintorni',
  owner: 'Antonella Mangolini',
  phoneDisplay: '331 811 5966',
  phoneHref: '+393318115966',
  whatsappUrl: 'https://wa.me/393318115966',
  street: 'Via Carlo III di Savoia, 10',
  corner: 'angolo Via Dante',
  postalCode: '13100',
  city: 'Vercelli',
  province: 'VC',
  addressLines: ['Via Carlo III di Savoia, 10', 'angolo Via Dante', '13100 Vercelli (VC)'],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Via+Carlo+III+di+Savoia+10+13100+Vercelli',
  vatNumber: '02545230027',
  motto: '#siateiconedivoistesse',
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/antonellamodaedintorni/' },
    { label: 'Facebook', href: 'https://www.facebook.com/antonellamodaedintorni' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@antonellamodaedintorni' },
    { label: 'YouTube', href: 'https://www.youtube.com/@antonellamodaedintorni588' },
  ],
} as const;

export function whatsappLink(message: string) {
  return `${business.whatsappUrl}?text=${encodeURIComponent(message)}`;
}

/** Day index follows Date.getDay(): 0 is Sunday. Times are 24h "HH:MM". */
export const openingHours: readonly { day: string; dayIndex: number; slots: readonly (readonly [string, string])[] }[] = [
  { day: 'Lunedì', dayIndex: 1, slots: [['16:00', '19:30']] },
  { day: 'Martedì', dayIndex: 2, slots: [['09:00', '12:30'], ['16:00', '19:30']] },
  { day: 'Mercoledì', dayIndex: 3, slots: [['09:00', '12:30'], ['16:00', '19:30']] },
  { day: 'Giovedì', dayIndex: 4, slots: [['09:00', '12:30'], ['16:00', '19:30']] },
  { day: 'Venerdì', dayIndex: 5, slots: [['09:00', '12:30'], ['16:00', '19:30']] },
  { day: 'Sabato', dayIndex: 6, slots: [['10:00', '12:30'], ['16:00', '19:30']] },
  { day: 'Domenica', dayIndex: 0, slots: [] },
];

export type ProductImage = { src: string; alt: string };

export type Product = {
  slug: string;
  name: string;
  brand?: string;
  category: 'Abiti' | 'Completi' | 'Capispalla' | 'Bluse' | 'Gonne';
  colors: string;
  description: string;
  details: readonly string[];
  images: readonly ProductImage[];
  /** ISO date, used by the sitemap. */
  updatedAt: string;
};

const img = (slug: string, count: number, label: string): ProductImage[] =>
  Array.from({ length: count }, (_, index) => ({
    src: `/images/capi/${slug}-${index + 1}.webp`,
    alt: index === 0 ? `${label}, indossato in boutique` : `${label}, altra vista`,
  }));

export const products: readonly Product[] = [
  {
    slug: 'tubino-nero-midi',
    name: 'Tubino nero midi',
    brand: 'Artigli',
    category: 'Abiti',
    colors: 'Nero',
    description: 'Il tubino che Antonella indossa «per ogni occasione importante, e anche per il lavoro»: scollo squadrato, spalline larghe, linea asciutta.',
    details: ['Scollo squadrato', 'Spalline larghe', 'Linea aderente', 'Da rendere più easy con gli accessori'],
    images: img('tubino-nero-midi', 2, 'Tubino nero midi Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'abito-viola-alette-bottoni',
    name: 'Abito con alette e bottoni',
    brand: 'Artigli',
    category: 'Abiti',
    colors: 'Viola',
    description: 'Un tubino smanicato color viola, con alette e bottoni gioiello in vita che disegnano la figura.',
    details: ['Smanicato', 'Alette con bottoni in vita', 'Spacco posteriore', 'Lunghezza al ginocchio'],
    images: img('abito-viola-alette-bottoni', 3, 'Abito viola con alette e bottoni Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'abito-lurex-monospalla',
    name: 'Abito lungo in lurex monospalla',
    brand: 'Artigli',
    category: 'Abiti',
    colors: 'Champagne',
    description: 'Lungo, luminoso, con una sola manica e lo spacco laterale: un abito da sera che si muove con te.',
    details: ['Tessuto lurex', 'Monospalla con una manica lunga', 'Spacco laterale', 'Lunghezza a terra'],
    images: img('abito-lurex-monospalla', 3, 'Abito lungo in lurex monospalla Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'abito-lungo-raso',
    name: 'Abito lungo in raso',
    brand: 'Artigli',
    category: 'Abiti',
    colors: 'Ocra dorato',
    description: 'Raso color ocra, scollo a V e gonna ampia fino a terra. Per una cerimonia, una cena, un’occasione da ricordare.',
    details: ['Raso', 'Scollo a V', 'Smanicato', 'Gonna lunga e ampia'],
    images: img('abito-lungo-raso', 2, 'Abito lungo in raso color ocra Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'abito-floreale',
    name: 'Abito floreale',
    brand: 'Artigli',
    category: 'Abiti',
    colors: 'Panna con stampa botanica',
    description: 'Stampa botanica su fondo panna, maniche lunghe e linea morbida: da portare da solo o sopra un pantalone.',
    details: ['Stampa floreale', 'Maniche lunghe svasate', 'Scollo a V', 'Linea morbida'],
    images: img('abito-floreale', 3, 'Abito floreale Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'blusa-floreale',
    name: 'Blusa floreale',
    brand: 'Artigli',
    category: 'Bluse',
    colors: 'Rosa cipria con fiori bordeaux e verdi',
    description: 'Una blusa leggera a fiori su fondo cipria: in boutique l’abbiamo abbinata a un pantalone verde bosco.',
    details: ['Fantasia floreale', 'Maniche lunghe', 'Scollo tondo', 'Si porta dentro o fuori dal pantalone'],
    images: img('blusa-floreale', 2, 'Blusa floreale Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'completo-bronzo',
    name: 'Completo color bronzo',
    brand: 'Artigli',
    category: 'Completi',
    colors: 'Bronzo',
    description: 'Giacca e pantalone dello stesso tono caldo, quasi metallico. Insieme è un tailleur; separati vanno con tutto.',
    details: ['Giacca doppiopetto', 'Pantalone a sigaretta', 'Tono su tono', 'Capi indossabili anche separati'],
    images: img('completo-bronzo', 3, 'Completo giacca e pantalone color bronzo Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'completo-bianco-quattro-bottoni',
    name: 'Completo bianco a quattro bottoni',
    brand: 'Artigli',
    category: 'Completi',
    colors: 'Bianco latte',
    description: 'Giacca doppiopetto con quattro bottoni dorati e pantalone coordinato: il tailleur chiaro che illumina.',
    details: ['Giacca doppiopetto', 'Quattro bottoni dorati', 'Pantalone a gamba ampia', 'Tasche con pattina'],
    images: img('completo-bianco-quattro-bottoni', 2, 'Completo bianco con giacca a quattro bottoni Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'completo-panna-due-bottoni',
    name: 'Completo panna a due bottoni',
    brand: 'Artigli',
    category: 'Completi',
    colors: 'Panna',
    description: 'Giacca monopetto a due bottoni e pantalone slim, in un panna morbido. Elegante senza sforzo.',
    details: ['Giacca monopetto', 'Due bottoni', 'Pantalone slim', 'Revers classico'],
    images: img('completo-panna-due-bottoni', 3, 'Completo panna con giacca a due bottoni Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'completo-ilaria-nero',
    name: 'Completo Ilaria con bottoni',
    brand: 'Artigli',
    category: 'Completi',
    colors: 'Nero',
    description: 'Il tailleur nero con bottoni dorati in rilievo. Antonella dice di averne «almeno una dozzina, quasi tutti neri»: c’è un motivo.',
    details: ['Giacca doppiopetto', 'Bottoni dorati in rilievo', 'Pantalone coordinato', 'Taglio sciancrato'],
    images: img('completo-ilaria-nero', 2, 'Completo nero Ilaria con bottoni dorati Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'completo-gessato',
    name: 'Completo gessato',
    brand: 'Artigli',
    category: 'Completi',
    colors: 'Grigio antracite gessato',
    description: 'Gessato grigio, giacca doppiopetto e pantalone dritto: il classico maschile, portato da una donna.',
    details: ['Tessuto gessato', 'Giacca doppiopetto', 'Pantalone dritto'],
    images: img('completo-gessato', 2, 'Completo gessato grigio Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'completo-magenta',
    name: 'Completo magenta',
    brand: 'Artigli',
    category: 'Completi',
    colors: 'Magenta prugna',
    description: 'Giacca sciancrata e pantalone a zampa nello stesso magenta intenso. Per chi vuole farsi notare con eleganza.',
    details: ['Giacca a un bottone', 'Pantalone a zampa', 'Tasche con pattina', 'Colore pieno'],
    images: img('completo-magenta', 3, 'Completo magenta giacca e pantalone Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'cappotto-rosso-doppiopetto',
    name: 'Cappotto rosso doppiopetto',
    brand: 'Artigli',
    category: 'Capispalla',
    colors: 'Rosso',
    description: 'Rosso pieno, doppiopetto, con pieghe che danno movimento. Un cappotto che fa il look da solo.',
    details: ['Doppiopetto', 'Pieghe eleganti', 'Bottoni dorati', 'Lunghezza al ginocchio'],
    images: img('cappotto-rosso-doppiopetto', 2, 'Cappotto rosso doppiopetto Artigli'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'giacca-frange-ecopelle',
    name: 'Giacca con frange in ecopelle',
    category: 'Capispalla',
    colors: 'Nero',
    description: 'Ecopelle nera e frange lunghe che si muovono a ogni passo. Sopra un abito, cambia subito il carattere del look.',
    details: ['Ecopelle', 'Frange lunghe', 'Linea corta'],
    images: img('giacca-frange-ecopelle', 2, 'Giacca nera con frange in ecopelle'),
    updatedAt: '2025-07-15',
  },
  {
    slug: 'gonna-fiori-maculata',
    name: 'Gonna a fiori e maculato',
    brand: 'Artigli',
    category: 'Gonne',
    colors: 'Rose rosse su fondo animalier',
    description: 'Rose rosse su base maculata: una gonna lunga che non chiede permesso. In boutique l’abbiamo provata con un blazer nero.',
    details: ['Fantasia rose e animalier', 'Lunghezza maxi', 'Vita alta'],
    images: img('gonna-fiori-maculata', 2, 'Gonna lunga a fiori su fondo maculato Artigli'),
    updatedAt: '2025-07-15',
  },
];

export const categories = ['Abiti', 'Completi', 'Capispalla', 'Bluse', 'Gonne'] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  body: readonly string[];
  steps: readonly { title: string; text: string }[];
  image: string;
  alt: string;
  cta: string;
  message: string;
};

export const services: readonly Service[] = [
  {
    slug: 'shopping-in-videochiamata',
    title: 'Shopping in videochiamata',
    summary: 'Scrivi giorno e ora: Antonella ti chiama su WhatsApp e ti mostra i capi in diretta, dal negozio.',
    body: [
      'È il modo più vicino a entrare in boutique senza muoverti da casa. Vedi i capi in tempo reale, chiedi di avvicinare un tessuto, di mostrare il retro di una giacca o di provare un abbinamento.',
      'Antonella ti dà consigli di stile come farebbe al banco, con la stessa sincerità: se un capo non è quello giusto per te, te lo dice.',
    ],
    steps: [
      { title: 'Scrivi su WhatsApp', text: 'Indica giorno e ora in cui vuoi essere chiamata e, se vuoi, cosa stai cercando.' },
      { title: 'Ricevi la chiamata', text: 'All’ora concordata Antonella ti videochiama dal negozio.' },
      { title: 'Scegli con calma', text: 'Ti fai mettere da parte quello che ti piace, oppure passi a provarlo.' },
    ],
    image: '/images/boutique/interno-stender.webp',
    alt: 'Stender con giacche e camicie colorate all’interno della boutique',
    cta: 'Prenota la videochiamata',
    message: 'Ciao Antonella, vorrei prenotare una videochiamata per vedere i capi. Sarei libera il giorno … alle ore …',
  },
  {
    slug: 'consigli-su-whatsapp',
    title: 'Foto e consigli su WhatsApp',
    summary: 'Hai visto un capo qui o sui social? Mandaci il nome o uno screenshot: ti rispondiamo con foto, taglie e abbinamenti.',
    body: [
      'Negli orari di negozio rispondiamo di solito entro pochi minuti. Puoi chiedere una taglia, un colore, una foto del retro o un consiglio su cosa metterci sotto.',
      'Se il capo ti convince, possiamo metterlo da parte per qualche giorno così passi a provarlo.',
    ],
    steps: [
      { title: 'Mandaci il capo', text: 'Il nome che trovi sul sito, uno screenshot da Instagram o una foto.' },
      { title: 'Ti rispondiamo', text: 'Foto reali, taglie disponibili e idee per abbinarlo.' },
      { title: 'Lo mettiamo da parte', text: 'Se ti piace, te lo teniamo e lo provi quando passi.' },
    ],
    image: '/images/boutique/stender-neri.webp',
    alt: 'Capi neri, borse e accessori esposti in boutique',
    cta: 'Scrivi su WhatsApp',
    message: 'Ciao Antonella, vorrei qualche informazione su un capo che ho visto.',
  },
  {
    slug: 'consulenza-in-boutique',
    title: 'Consulenza in boutique',
    summary: 'Più di 35 anni di esperienza a tua disposizione: vieni, racconta cosa cerchi e prova senza fretta.',
    body: [
      'Non serve appuntamento per entrare. Se però hai un’occasione precisa, una cerimonia o un guardaroba da rinnovare, avvisaci prima: prepariamo una selezione di capi nelle tue taglie.',
      'Lavoriamo su versatilità e femminilità, con un’attenzione particolare al prezzo.',
    ],
    steps: [
      { title: 'Raccontaci l’occasione', text: 'Un evento, il lavoro, un cambio di stagione o solo la voglia di qualcosa di nuovo.' },
      { title: 'Prepariamo la selezione', text: 'Capi, colori e taglie pensati per te, pronti quando arrivi.' },
      { title: 'Provi con calma', text: 'Abbinamenti, alternative e un parere sincero.' },
    ],
    image: '/images/boutique/antonella-maglia-bianca.webp',
    alt: 'Antonella in boutique con maglia bianca traforata e gonna nera',
    cta: 'Chiedi un appuntamento',
    message: 'Ciao Antonella, vorrei venire in boutique per una consulenza. Cerco …',
  },
  {
    slug: 'outfit-per-cerimonie',
    title: 'Abiti per cerimonie ed eventi',
    summary: 'Abiti lunghi in raso e lurex, completi e tailleur: troviamo insieme il look per il tuo giorno importante.',
    body: [
      'Matrimoni, comunioni, lauree, cene di gala. Partiamo da dove si svolge l’evento, dall’orario e da come vuoi sentirti, poi costruiamo il look completo di accessori.',
      'Ti aiutiamo anche a pensare a dopo: un buon abito da cerimonia, con gli accessori giusti, si porta di nuovo.',
    ],
    steps: [
      { title: 'Dicci l’evento', text: 'Tipo di cerimonia, data, luogo e dress code se c’è.' },
      { title: 'Scegliamo il protagonista', text: 'Abito lungo, completo o tailleur, nelle tue taglie.' },
      { title: 'Completiamo il look', text: 'Borsa, gioielli e dettagli per chiudere l’insieme.' },
    ],
    image: '/images/capi/abito-lungo-raso-1.webp',
    alt: 'Abito lungo in raso color ocra indossato in boutique',
    cta: 'Raccontaci l’evento',
    message: 'Ciao Antonella, cerco un look per una cerimonia il giorno …',
  },
  {
    slug: 'buono-regalo',
    title: 'Buono regalo',
    summary: 'Da 15 a 250 €: lasci scegliere a lei, con i consigli di Antonella.',
    body: [
      'Quando non conosci la taglia o vuoi lasciare libertà di scelta, il buono regalo è la soluzione più semplice. Puoi scegliere l’importo tra 15 e 250 €.',
      'Chi lo riceve lo usa in boutique e si fa consigliare da Antonella.',
    ],
    steps: [
      { title: 'Scegli l’importo', text: 'Da 15 a 250 €.' },
      { title: 'Lo prepariamo', text: 'Passi a ritirarlo oppure ci accordiamo su WhatsApp.' },
      { title: 'Lei sceglie', text: 'In boutique, con tutto il tempo che vuole.' },
    ],
    image: '/images/brand/buono-regalo.webp',
    alt: 'Una donna sorridente tiene in mano un buono regalo con fiocco rosso',
    cta: 'Chiedi un buono regalo',
    message: 'Ciao Antonella, vorrei un buono regalo da … €.',
  },
];

export type BookEvent = {
  date: string;
  isoDate: string;
  author: string;
  book: string;
  note: string;
};

/** Public events reported by Prima Vercelli. */
export const bookEvents: readonly BookEvent[] = [
  {
    date: 'Giovedì 19 marzo 2026, ore 21',
    isoDate: '2026-03-19',
    author: 'Laura Monza',
    book: 'Diario di bordo per navigatori in cerca di rotta',
    note: 'Mental trainer e ricercatrice spirituale, ha parlato di crescita personale e benessere. Incontro nella nuova boutique di Via Carlo III di Savoia.',
  },
  {
    date: 'Giovedì 11 dicembre 2025, ore 21',
    isoDate: '2025-12-11',
    author: 'Valentina Petri',
    book: 'Non ti sento (Rizzoli)',
    note: 'Incontro con l’autrice e firmacopie.',
  },
  {
    date: 'Giugno 2025',
    isoDate: '2025-06-26',
    author: 'Moreno Orlandi',
    book: 'Bottoni',
    note: 'Presentazione della raccolta poetica.',
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isoDate: string;
  image: string;
  alt: string;
  sections: readonly { heading?: string; paragraphs: readonly string[] }[];
};

/** Antonella's own articles, first published on her online shop in 2024. */
export const articles: readonly Article[] = [
  {
    slug: 'il-tubino-nero-non-passa-mai-di-moda',
    title: 'Il tubino nero non passa mai di moda',
    excerpt: 'Sapete che cos’è l’LBD? Tranquille, non è un nuovo farmaco, né tantomeno una nuova tassa da pagare.',
    date: '17 marzo 2024',
    isoDate: '2024-03-17',
    image: '/images/diario/tubino-nero.webp',
    alt: 'Copertina dell’articolo sul tubino nero',
    sections: [
      { paragraphs: ['Sapete che cos’è l’LBD? Tranquille, non è un nuovo farmaco, né tantomeno una nuova tassa da pagare. Semplicemente è il “little black dress”, che tradotto letteralmente è “piccolo abito nero”, ovvero il tubino.', 'Io adoro il tubino, altro capo must che ogni donna dovrebbe avere nell’armadio.'] },
      { heading: 'Storia del tubino', paragraphs: ['Il tubino nero fu avvistato per la prima volta nel 1926, in un bozzetto di Coco Chanel. “Un capo che tutto il mondo avrebbe indossato”: così lo definì la stilista francese, con l’intenzione di democratizzare l’eleganza. Un abito semplice, lungo fino al polpaccio e con la vita bassa.', 'Negli anni, ovviamente, ha subito delle variazioni, in conseguenza delle mode, ma non ha mai perso il suo fascino.'] },
      { heading: 'Icone del tubino', paragraphs: ['Il volto più noto, tra quelli associati al tubino, è quello di Audrey Hepburn, che in “Colazione da Tiffany” ci ha fatto sognare indossando una creazione di Givenchy. In Italia, chi non ricorda Anita Ekberg in “La Dolce Vita” con il famosissimo abito firmato dalle Sorelle Fontana.', 'Persino Barbie ha reso omaggio a questo capo iconico nel 1964, quando si spoglia dei suoi abiti colorati per ispirarsi a Holly Golightly.'] },
      { heading: 'Il tubino nella vita di tutti i giorni', paragraphs: ['E poi, beh, ci sono io, Antonella, che lo indosso per ogni occasione importante, e anche per il lavoro, rendendolo più easy giocando con gli accessori. Ma di questo ne parlerò prossimamente.'] },
    ],
  },
  {
    slug: 'la-moda-passa-il-tailleur-resta',
    title: 'La moda passa, il tailleur resta',
    excerpt: 'Alzi la mano chi non ha un tailleur nell’armadio. Io, sistemando il mio, ne ho trovati almeno una dozzina.',
    date: '16 marzo 2024',
    isoDate: '2024-03-16',
    image: '/images/diario/tailleur.webp',
    alt: 'Copertina dell’articolo sul tailleur',
    sections: [
      { paragraphs: ['Alzi la mano chi non ha un tailleur nell’armadio! Per intenderci, un completo pantalone e giacca, oppure giacca e gonna tubino.', 'Il tailleur è un capo di abbigliamento femminile utilizzato solitamente come divisa da lavoro, elegante e seducente allo stesso tempo. Esiste da molti secoli e, più che un capo d’abbigliamento, è un vero e proprio status symbol: racchiude in sé la storia del potere conferito alla donna.'] },
      { heading: 'Una dozzina, quasi tutti neri', paragraphs: ['Qualche tempo fa, sistemando il mio armadio, ho scoperto di averne almeno una dozzina, quasi tutti neri, che indosso al lavoro con sotto una t-shirt logata, e altri di vari colori. Ne ho anche uno fucsia.', 'Insomma, viva il tailleur, che è versatile all’ennesima potenza.'] },
      { heading: 'Da Redfern a Saint Laurent', paragraphs: ['Ad inventare il tailleur è stato un uomo, tale John Redfern, nel 1885: lo disegnò per la principessa del Galles. Ovviamente non aveva i pantaloni, ma una gonna lunga.', 'Per arrivare al tailleur che tutte dovremmo avere nell’armadio dobbiamo attraversare varie epoche storiche, e soprattutto icone della moda come Coco Chanel e Christian Dior.', 'Solo nel 1966, anno in cui nacquero i Pooh, esattamente un anno prima che io nascessi, Yves Saint Laurent disegna il tailleur come noi lo conosciamo, con il pantalone.'] },
      { heading: 'Armani, Versace e noi', paragraphs: ['Giorgio Armani, negli anni ’80, lo rende vero simbolo della donna di potere ed emancipata. Le spalline si ingrandiscono per sottolineare il punto vita.', 'Gianni Versace negli anni ’90 accorcia le gonne ai minimi termini, i colori sono sempre più accesi, per un modello super femminile.', 'È assolutamente un capo versatile, che ha mantenuto e mantiene il suo fascino e il suo potere simbolico.'] },
    ],
  },
  {
    slug: 'la-storia-dei-jeans',
    title: 'La storia dei jeans, da Genova al mondo',
    excerpt: 'Nati come abito da lavoro, diventati simbolo di libertà: il viaggio di un capo che ha cambiato il guardaroba di tutti.',
    date: '17 aprile 2024',
    isoDate: '2024-04-17',
    image: '/images/diario/jeans.webp',
    alt: 'Copertina dell’articolo sulla storia dei jeans',
    sections: [
      { paragraphs: ['Nell’universo della moda, pochi capi possono vantare una storia tanto ricca e un appeal così universale quanto i jeans. Nati come abbigliamento da lavoro per la loro resistenza e praticità, hanno attraversato secoli, culture e classi sociali, trasformandosi in un simbolo di stile, ribellione e identità.'] },
      { heading: 'Le origini', paragraphs: ['I jeans trovano le loro radici in due città distanti: Genova e Nîmes. A Genova i marinai indossavano indumenti di un robusto tessuto di cotone, noto come “Genoese” o “jeane”. Quasi contemporaneamente a Nîmes si sviluppò un tessuto simile, il “denim” (da “de Nîmes”).', 'Si deve però a Levi Strauss, immigrato tedesco arrivato a San Francisco durante la corsa all’oro, e al sarto Jacob Davis l’invenzione dei jeans come li conosciamo: nel 1873 brevettarono i rivetti di metallo per rinforzare i punti più sollecitati dei pantaloni da lavoro.'] },
      { heading: 'Da divisa da lavoro a simbolo', paragraphs: ['Nel Novecento i jeans escono dai luoghi di lavoro. Negli anni ’50 e ’60 diventano il simbolo della gioventù ribelle, grazie a icone come James Dean e Marlon Brando. Negli anni ’70 e ’80, con il rock e la cultura pop, si adattano a ogni stile, dagli hippie al punk.'] },
      { heading: 'I jeans oggi', paragraphs: ['Oggi sono un capo essenziale, apprezzato per la versatilità: skinny, a vita alta, bootcut, boyfriend. Continuano a reinventarsi restando sempre attuali.', 'Sono molto più di un paio di pantaloni: un’affermazione di individualità e una testimonianza della nostra storia. Alcuni classici, semplicemente, non passano mai di moda.'] },
    ],
  },
];

/** Verified public reviews (Trustpilot, 2024). */
export const reviews = [
  {
    quote: 'Grazie mille, abito bellissimo, velocità nella consegna… impeccabile! La signora Antonella è stata molto cordiale, puntuale e ha ascoltato ogni mia esigenza. Grazie mille per aver accompagnato al pacco delle gustose caramelle… la consiglio!',
    author: 'Alessandro',
    source: 'Trustpilot, maggio 2024',
  },
  {
    quote: 'Tutto perfetto! Arrivato nei tempi!',
    author: 'Elisabetta',
    source: 'Trustpilot, luglio 2024',
  },
] as const;

export const faqs: readonly { group: string; items: readonly (readonly [string, string])[] }[] = [
  {
    group: 'La boutique',
    items: [
      ['Dove si trova Antonella Moda e Dintorni?', 'A Vercelli, in Via Carlo III di Savoia 10, all’angolo con Via Dante. Dal 2026 è questa la nuova sede della boutique.'],
      ['Quali sono gli orari?', 'Lunedì 16:00–19:30. Da martedì a venerdì 9:00–12:30 e 16:00–19:30. Sabato 10:00–12:30 e 16:00–19:30. Domenica chiuso. Nei giorni festivi gli orari possono cambiare: in caso di dubbio scrivici.'],
      ['Che cosa trovo in boutique?', 'Abbigliamento donna versatile e femminile: abiti, completi e tailleur, cappotti e giacche, bluse, gonne, pantaloni e accessori. Tra i marchi c’è Artigli. Qualità e creatività, con un’attenzione particolare al prezzo.'],
      ['Chi è Antonella?', 'Antonella Mangolini, titolare della boutique, lavora nella moda da più di 35 anni. Sceglie personalmente ogni capo e consiglia le clienti una per una.'],
    ],
  },
  {
    group: 'Capi e disponibilità',
    items: [
      ['I capi sul sito sono ancora disponibili?', 'Il sito mostra capi fotografati in boutique, che cambiano ogni stagione. Per sapere cosa c’è adesso, taglie e prezzi, scrivici su WhatsApp con il nome del capo: rispondiamo negli orari di negozio.'],
      ['Posso vedere i capi senza venire in negozio?', 'Sì. Puoi chiederci foto su WhatsApp oppure prenotare una videochiamata: Antonella ti mostra i capi in diretta dal negozio.'],
      ['Posso far mettere da parte un capo?', 'Sì, per qualche giorno, così passi a provarlo con calma.'],
      ['Si può acquistare online?', 'Il negozio online non è più attivo. Per acquistare passa in boutique o contattaci su WhatsApp: troviamo insieme la soluzione più comoda.'],
    ],
  },
  {
    group: 'Servizi',
    items: [
      ['Che cos’è “Un libro in borsa”?', 'È il gruppo di lettura nato in boutique da un’idea di Antonella. Ci si incontra una volta al mese: ogni ospite propone un titolo, se ne estrae uno a sorte e diventa la lettura comune. Ci sono anche serate con autrici e autori.'],
      ['Fate buoni regalo?', 'Sì, da 15 a 250 €. Si usano in boutique.'],
      ['Serve un appuntamento per entrare?', 'No. L’appuntamento è utile solo se vuoi che prepariamo una selezione prima del tuo arrivo, per esempio per una cerimonia.'],
    ],
  },
];
