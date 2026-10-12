# Antonella Moda e Dintorni

Sito vetrina della boutique di abbigliamento donna di Antonella Mangolini a Vercelli
(Via Carlo III di Savoia 10, angolo Via Dante).

**Sito online:** [gxmich.github.io/antonella-moda-e-dintorni](https://gxmich.github.io/antonella-moda-e-dintorni/)

## Cosa contiene

- Homepage con i capi visti in boutique, la storia di Antonella, i servizi a distanza,
  il gruppo di lettura “Un libro in borsa”, le recensioni e gli orari con stato
  “aperto ora / chiuso” calcolato sull’ora italiana
- Collezione con 15 capi reali fotografati in boutique (molti della collezione Artigli),
  filtri per categoria e una scheda per ogni capo
- Servizi: shopping in videochiamata WhatsApp, foto e consigli su WhatsApp, consulenza
  in boutique, abiti per cerimonie, buono regalo
- Chi siamo con il testo originale di Antonella e il video della boutique
- Diario con i suoi articoli (tubino nero, tailleur, jeans)
- Dove siamo, domande frequenti, prenotazione che prepara un messaggio WhatsApp
- Privacy, Cookie, Termini, Accessibilità; dati strutturati (ClothingStore, Product,
  Event, FAQPage, BlogPosting), sitemap e robots.txt

## Da dove vengono i contenuti

Testi, foto, logo e video provengono dal vecchio negozio online
antonellamodaedintorni.com (dominio scaduto, recuperato dall’archivio pubblico), dalle
recensioni Trustpilot, dagli articoli di Prima Vercelli sugli incontri di “Un libro in
borsa” e dai profili social della boutique. L’uso è stato autorizzato dalla titolare.
Non sono indicati prezzi né disponibilità: cambiano ogni settimana e vengono confermati
su WhatsApp.

## Identità visiva

Presa dalla boutique vera: pareti bianche, il nero del logo, il fucsia della scritta
“moda e dintorni” e dei mobili laccati del negozio. La cornice fucsia attorno alle foto
principali richiama l’armadio dalla cornice rosa del negozio. Titoli in Bodoni Moda
(Bodoni era piemontese), testo in Hanken Grotesk.

## Interazioni e animazioni

- **Il tuo camerino**: chi visita mette i capi nel camerino (con la taglia), sceglie
  giorno e fascia oraria tra gli orari reali di apertura e invia la lista ad Antonella su
  WhatsApp. I dati restano solo nel browser (`localStorage`, chiave
  `antonella-camerino-v1`). Codice in `app/components/camerino/`.
- **Entra in boutique** (homepage): scorrendo, la cornice fucsia si apre fino a mostrare
  l’interno del negozio, poi compaiono indirizzo e stato “aperto ora”.
- **Lo stender**: “Visti in boutique” è uno stender con binario e grucce; su desktop la
  sezione si blocca e lo scroll fa scorrere i capi di lato, che oscillano con la velocità.
- Transizioni di pagina con la View Transitions API (la foto del capo passa dalla card
  alla scheda), filtri della collezione animati, scroll morbido con Lenis su desktop.
- Tutto rispetta `prefers-reduced-motion`; senza JavaScript i contenuti restano visibili.
  Librerie: GSAP + ScrollTrigger, Lenis. Codice in `app/components/motion/`.

## Avvio locale

Richiede Node.js 22.13 o successivo.

```bash
npm install
npm run dev
```

Controlli prima di pubblicare:

```bash
npm run lint
npx tsc --noEmit
npm run build:pages
```

Ogni push sul branch `main` avvia `.github/workflows/deploy-pages.yml`, che genera
l’esportazione statica e aggiorna GitHub Pages.

> Su Windows con Git Bash, per provare la build con il percorso di GitHub Pages usa
> `MSYS_NO_PATHCONV=1`, altrimenti Git Bash trasforma `/antonella-moda-e-dintorni` in un
> percorso di Windows e le immagini non si caricano.

## Struttura

```text
app/
  content.ts              Tutti i dati: boutique, orari, capi, servizi, eventi, articoli
  capo/[slug]/            Scheda capo
  servizi/[slug]/         Scheda servizio
  diario/[slug]/          Articoli di Antonella
  un-libro-in-borsa/      Gruppo di lettura ed eventi
  components/             Header, footer, card, filtri, orari, modulo WhatsApp
public/images/capi/       Foto dei capi (WebP)
public/images/boutique/   Foto di Antonella e del negozio
public/images/brand/      Logo, buono regalo
public/video/             Video della boutique (compresso, 9,7 MB)
```

Per aggiornare i contenuti segui [CONTENT_HANDOFF.md](./CONTENT_HANDOFF.md).
