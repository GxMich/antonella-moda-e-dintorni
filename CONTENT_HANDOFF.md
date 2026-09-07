# Aggiornare il sito senza toccare il design

Il sito è già predisposto per sostituire i contenuti dimostrativi. Finché non
hai dati e fotografie reali, non pubblicare il catalogo come se fosse stock
disponibile: le pagine attuali lo indicano già come selezione rappresentativa.

## 1. Dati della boutique

Apri `app/content.ts` e modifica solo il blocco `business` iniziale quando i
dati sono confermati: telefono, email, indirizzo e link Maps. La stessa fonte
aggiorna automaticamente header, footer, contatti e dati strutturati.

Prima della pubblicazione, completa anche la denominazione legale, codice
fiscale/partita IVA, hosting e tempi di conservazione nelle pagine Privacy e
Termini. Non lasciare note che parlano di demo sul sito pubblico definitivo.

## 2. Nuove fotografie

1. Salva le fotografie in `public/images/` con nomi chiari, per esempio
   `abito-verde-01.webp`, `abito-verde-02.webp` e `abito-verde-03.webp`.
2. Esporta preferibilmente in WebP, lato lungo 1600–2200 px, qualità 80–85.
3. Non sovrascrivere l'originale: conserva i file ad alta risoluzione in una
   cartella esterna di archivio.

Le immagini già usate dal sito sono WebP ottimizzati. I PNG originali sono
stati mantenuti nel progetto solo come archivio delle immagini dimostrative.

## 3. Aggiungere o aggiornare un capo

In `app/content.ts`, copia un oggetto già presente nell'array `products`.
Aggiorna ogni campo fra virgolette e aggiungi almeno una foto. Per una scheda
prodotto completa, aggiungi anche `gallery` e `updatedAt`:

```ts
{
  slug: 'abito-verde-smeraldo',
  name: 'Nome reale del capo',
  category: 'Abito',
  badge: 'Nuovo arrivo',
  image: '/images/abito-verde-01.webp',
  alt: 'Descrizione concreta della foto e del capo',
  description: 'Descrizione breve, reale e verificata.',
  story: 'Dettagli utili sulla vestibilità e sugli abbinamenti.',
  details: ['Dettaglio reale 1', 'Dettaglio reale 2'],
  sizes: 'Taglie realmente disponibili',
  colors: 'Colori realmente disponibili',
  fit: 'Vestibilità realmente verificata',
  gallery: [
    { src: '/images/abito-verde-01.webp', alt: 'Vista frontale dell’abito verde' },
    { src: '/images/abito-verde-02.webp', alt: 'Dettaglio del tessuto dell’abito verde' },
    { src: '/images/abito-verde-03.webp', alt: 'Vista laterale dell’abito verde' },
  ],
  updatedAt: '2026-09-04',
}
```

La prima immagine è usata nelle card; quando aggiungi più immagini, la pagina
del capo crea automaticamente una galleria. Non inserire prezzi, composizioni,
taglie o disponibilità se non sono stati verificati.

## 4. Dominio e SEO prima del lancio

Nel repository GitHub, aggiungi la variabile `SITE_URL` con l'indirizzo pubblico
esatto del sito (ad esempio `https://www.esempio.it`). Alla build successiva
canonical, Open Graph, sitemap e JSON-LD useranno il dominio reale.

Se cambi anche percorso di pubblicazione GitHub Pages, aggiorna nello stesso
workflow `NEXT_PUBLIC_BASE_PATH` e `GITHUB_PAGES_BASE_PATH`. Verifica poi che
immagini e link funzionino dal dominio finale, non solo dall'URL GitHub.

## 5. Controllo prima di una pubblicazione

- Sostituiti tutti i contenuti di esempio che verranno mostrati al pubblico.
- Ogni capo ha almeno una foto reale, una descrizione e un messaggio WhatsApp
  sensato.
- Orari, telefono, indirizzo e disponibilità confermati dalla boutique.
- Privacy, Cookie e Termini verificati con il titolare o un professionista.
- Eseguiti `npm run lint`, `npx tsc --noEmit` e `npm run build:pages` dalla
  cartella `site`.
- Provati da telefono: menu, ricerca, scheda capo, WhatsApp e appuntamento.

## 6. Quando serve un vero CMS

Questa base permette aggiornamenti concentrati in un solo file e non richiede
servizi esterni. Quando Antonella dovrà pubblicare da smartphone senza accedere
al codice, il passo successivo sarà collegare un CMS con questi stessi campi e
un webhook di deploy. Non dichiarare gli aggiornamenti “istantanei” finché quel
flusso non è stato configurato e provato.
