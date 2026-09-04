# Antonella Moda e Dintorni

Sito vetrina completo per una boutique indipendente di abbigliamento femminile a Vercelli. Il progetto è pensato come demo commerciale realistica e come base pronta da personalizzare prima della consegna definitiva al cliente.

**Sito online:** [gxmich.github.io/antonella-moda-e-dintorni](https://gxmich.github.io/antonella-moda-e-dintorni/)

## Cosa contiene

- Homepage editoriale e responsive
- Catalogo con otto proposte, ricerca e filtri per categoria
- Schede dettagliate dei capi
- Otto servizi con pagina dedicata e percorso spiegato
- Richiesta appuntamento che prepara un messaggio WhatsApp senza salvare dati sul sito
- Magazine con sei articoli completi e relative pagine
- Pagine Chi siamo, Boutique, orari, contatti e FAQ
- Privacy Policy, Cookie Policy, Termini di utilizzo e Accessibilità
- Banner e centro preferenze cookie
- Metadata SEO, Open Graph, dati strutturati, sitemap e robots.txt
- Immagini originali create per la demo e servite localmente

## Tecnologie

- Next.js 16 App Router
- React 19
- TypeScript
- Esportazione statica e deploy automatico su GitHub Pages
- CSS responsive personalizzato, senza librerie UI esterne

## Avvio locale

Richiede Node.js 22.13 o successivo.

```bash
npm install
npm run dev
```

Il sito sarà disponibile all’indirizzo indicato dal terminale. Per una build di produzione:

```bash
npm run build
```

Ogni push sul branch `main` avvia il workflow in `.github/workflows/deploy-pages.yml`, genera l’esportazione statica e aggiorna GitHub Pages.

Per il controllo dei tipi:

```bash
npx tsc --noEmit
```

## Struttura principale

```text
app/
  capo/[slug]/          Schede prodotto
  servizi/[slug]/       Schede servizio
  magazine/[slug]/      Articoli completi
  appuntamento/         Modulo WhatsApp
  components/           Componenti condivisi e interattivi
  content.ts            Contenuti centralizzati
public/images/          Immagini della demo
```

## Prima della consegna al cliente

I dati commerciali e legali presenti sono una base editoriale di demo. Prima del lancio definitivo vanno confermati con il titolare:

- denominazione legale, codice fiscale o partita IVA;
- indirizzo, telefono, email e orari;
- prezzi, disponibilità, taglie e composizioni reali;
- fornitore di hosting e tempi di conservazione;
- testo definitivo delle informative legali;
- dominio ufficiale e profili social.

Le immagini dei capi e gli articoli attuali sono rappresentativi e possono essere sostituiti modificando `app/content.ts` e i file in `public/images`.

## Licenza

Progetto dimostrativo. Tutti i diritti sui contenuti, sul design e sulle immagini sono riservati, salvo accordi diversi con il titolare del progetto.
