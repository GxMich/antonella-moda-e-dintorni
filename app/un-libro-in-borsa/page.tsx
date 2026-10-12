import type { Metadata } from 'next';
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import SiteImage from '../components/SiteImage';
import { bookEvents, business, whatsappLink } from '../content';
import { siteUrl } from '../site';

export const metadata: Metadata = {
  title: 'Un libro in borsa: gruppo di lettura a Vercelli | Antonella Moda e Dintorni',
  description: 'Un libro in borsa è il gruppo di lettura nato nella boutique Antonella Moda e Dintorni a Vercelli: un incontro al mese e serate con autrici e autori.',
  alternates: { canonical: '/un-libro-in-borsa' },
};

export default function BookClubPage() {
  const schema = bookEvents.map((event) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: `Un libro in borsa: ${event.author}, ${event.book}`,
    startDate: event.isoDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: { '@type': 'Place', name: business.name, address: { '@type': 'PostalAddress', streetAddress: business.street, addressLocality: business.city, postalCode: business.postalCode, addressCountry: 'IT' } },
    organizer: { '@type': 'Organization', name: business.name, url: siteUrl },
    performer: { '@type': 'Person', name: event.author },
  }));

  return (
    <>
      <SiteHeader />
      <main id="contenuto" className="page book-page">
        <div className="book-hero">
          <div>
            <h1>Un libro in borsa</h1>
            <p className="book-lede">Il gruppo di lettura nato in boutique da un’idea di Antonella.</p>
            <p>Ci si incontra una volta al mese per parlare dell’ultimo libro letto. «Ogni ospite propone un titolo», racconta Antonella: ognuna lo scrive su un foglietto, se ne estrae uno a sorte e quello diventa la lettura comune del mese.</p>
            <p>Ogni tanto il salotto si allarga e arriva un’autrice o un autore a presentare il proprio libro, con firmacopie.</p>
            <a className="button" href={whatsappLink('Ciao Antonella, vorrei partecipare a Un libro in borsa. Quando è il prossimo incontro?')} target="_blank" rel="noreferrer">Chiedi del prossimo incontro</a>
          </div>
          <div className="frame book-hero-image">
            <SiteImage src="/images/boutique/interno-consolle-rosa.webp" alt="L’interno della boutique con la consolle barocca rosa e i manichini" sizes="(max-width: 800px) 90vw, 40vw" priority />
          </div>
        </div>

        <section className="timeline" aria-labelledby="timeline-title">
          <h2 id="timeline-title">Gli ultimi incontri con gli autori</h2>
          <ol>
            {bookEvents.map((event) => (
              <li key={event.isoDate}>
                <time dateTime={event.isoDate}>{event.date}</time>
                <div>
                  <h3>{event.author}</h3>
                  <p><cite>{event.book}</cite></p>
                  <p>{event.note}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="timeline-note">Le date dei prossimi incontri vengono annunciate su <a href={business.socials[0].href} target="_blank" rel="noreferrer">Instagram</a> e <a href={business.socials[1].href} target="_blank" rel="noreferrer">Facebook</a>.</p>
        </section>
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
