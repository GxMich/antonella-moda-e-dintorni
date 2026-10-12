# Aggiornare i contenuti

Tutti i contenuti stanno in `app/content.ts`. Header, footer, pagine e dati
strutturati per Google leggono da lì: modifichi una volta, cambia ovunque.

## Da confermare con Antonella prima del lancio

- **Indirizzo**: Via Carlo III di Savoia 10, angolo Via Dante (dal 2026, secondo Prima
  Vercelli e Facebook). Le schede di alcune directory e la bio Instagram riportano
  ancora Viale/Corso Garibaldi 46: vanno aggiornate.
- **Orari**: quelli attuali vengono dal brief; verificare che siano gli stessi dopo il
  trasloco.
- **Email**: `info@antonellamodaedintorni.com` non funziona più perché il dominio è
  scaduto, quindi il sito usa solo telefono e WhatsApp. Se Antonella ha un’altra email,
  aggiungila in `business`.
- **Dominio**: conviene ricomprare `antonellamodaedintorni.com` e puntarlo su questo sito
  (variabile `SITE_URL` nel repository GitHub).
- **Foto della nuova sede**: le foto del negozio e il video sono della sede precedente.
- **Prossimi incontri di “Un libro in borsa”**: aggiungerli in `bookEvents`.

## Aggiungere un capo

1. Salva le foto in `public/images/capi/` come `nome-capo-1.webp`, `nome-capo-2.webp`
   (WebP, lato lungo circa 1200 px, verticali 3:4).
2. In `app/content.ts` copia un oggetto dell’array `products` e cambia i campi.
   `images: img('nome-capo', 2, 'Descrizione del capo')` crea da solo i percorsi e i
   testi alternativi delle foto.
3. Non scrivere prezzi, taglie o composizioni se non sono verificati: la scheda invita
   già a chiederli su WhatsApp.

## Aggiungere un evento del gruppo di lettura

Aggiungi in cima a `bookEvents` data leggibile, data ISO, autore, titolo e una nota.
La homepage mostra sempre il primo dell’elenco come “L’ultimo incontro”.

## Quando serve un CMS

Questa base va bene se gli aggiornamenti passano da te. Se Antonella vuole pubblicare
da sola dal telefono, il passo successivo è collegare un CMS (per esempio Sanity) con
gli stessi campi di `Product` e un webhook che avvia la build su GitHub.
