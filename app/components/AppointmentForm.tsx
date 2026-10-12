'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';

type ServiceOption = { slug: string; title: string };

export default function AppointmentForm({ whatsappUrl, serviceOptions }: { whatsappUrl: string; serviceOptions: readonly ServiceOption[] }) {
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);
  const [popupBlocked, setPopupBlocked] = useState(false);
  const [selectedService, setSelectedService] = useState(serviceOptions[0]?.slug ?? '');

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('servizio');
    const frame = window.requestAnimationFrame(() => {
      if (requested && serviceOptions.some((service) => service.slug === requested)) setSelectedService(requested);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [serviceOptions]);

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const service = serviceOptions.find((item) => item.slug === form.get('service'))?.title ?? 'Da definire insieme';
    const field = (name: string) => String(form.get(name) || '').trim();
    const date = field('date');
    const formattedDate = date ? new Date(`${date}T12:00:00`).toLocaleDateString('it-IT', { weekday: 'long', day: 'numeric', month: 'long' }) : '';
    const message = [
      'Ciao Antonella, vorrei prenotare.',
      '',
      `Nome: ${field('name')}`,
      `Servizio: ${service}`,
      formattedDate ? `Giorno: ${formattedDate}` : null,
      field('time') ? `Orario: ${field('time')}` : null,
      field('size') ? `Taglia abituale: ${field('size')}` : null,
      field('notes') ? `Cosa cerco: ${field('notes')}` : null,
      '',
      'Grazie!',
    ].filter((line) => line !== null).join('\n');

    const destination = `${whatsappUrl}?text=${encodeURIComponent(message)}`;
    const popup = window.open(destination, '_blank', 'noopener,noreferrer');
    setPreparedUrl(destination);
    setPopupBlocked(!popup);
  }

  return (
    <form className="appointment-form" onSubmit={submitRequest}>
      <label className="field">
        <span>Nome</span>
        <input name="name" autoComplete="given-name" required />
      </label>
      <label className="field">
        <span>Cosa ti serve</span>
        <select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required>
          {serviceOptions.map((service) => <option value={service.slug} key={service.slug}>{service.title}</option>)}
        </select>
      </label>
      <div className="field-row">
        <label className="field">
          <span>Giorno preferito</span>
          <input name="date" type="date" />
        </label>
        <label className="field">
          <span>Orario</span>
          <select name="time" defaultValue="">
            <option value="">Indifferente</option>
            <option>Mattina</option>
            <option>Pomeriggio</option>
            <option>Verso sera</option>
          </select>
        </label>
      </div>
      <label className="field">
        <span>Taglia abituale <small>(facoltativo)</small></span>
        <input name="size" placeholder="Per esempio 44 o M" />
      </label>
      <label className="field">
        <span>Cosa cerchi <small>(facoltativo)</small></span>
        <textarea name="notes" rows={4} maxLength={600} placeholder="Un’occasione, un colore, un capo visto sul sito…" />
      </label>
      <label className="check">
        <input type="checkbox" required />
        <span>Ho letto l’<Link href="/privacy">informativa privacy</Link> e voglio inviare questi dati tramite WhatsApp.</span>
      </label>
      <button className="button" type="submit">Apri WhatsApp con il messaggio</button>
      <p className="form-hint">Il sito non salva nulla: prepara solo il testo, che potrai modificare prima di inviarlo.</p>
      {preparedUrl && !popupBlocked && <p className="form-status" role="status">Messaggio pronto su WhatsApp. Ricordati di premere invio.</p>}
      {preparedUrl && popupBlocked && <p className="form-status" role="alert">Il browser ha bloccato la nuova finestra. <a href={preparedUrl} target="_blank" rel="noreferrer">Apri WhatsApp da qui</a>.</p>}
    </form>
  );
}
