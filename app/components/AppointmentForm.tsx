'use client';

import { FormEvent, useEffect, useState } from 'react';
import Link from 'next/link';

type ServiceOption = { slug: string; title: string };

export default function AppointmentForm({ whatsappUrl, serviceOptions, initialService = '' }: { whatsappUrl: string; serviceOptions: readonly ServiceOption[]; initialService?: string }) {
  const [preparedUrl, setPreparedUrl] = useState<string | null>(null);
  const [popupBlocked, setPopupBlocked] = useState(false);
  const [selectedService, setSelectedService] = useState(initialService);

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
    const serviceSlug = String(form.get('service') || '');
    const service = serviceOptions.find((item) => item.slug === serviceSlug)?.title || 'Da definire insieme';
    const name = String(form.get('name') || '');
    const date = String(form.get('date') || '');
    const time = String(form.get('time') || '');
    const budget = String(form.get('budget') || '');
    const notes = String(form.get('notes') || '');
    const message = [
      'Ciao Antonella, vorrei richiedere un appuntamento.',
      '',
      `Nome: ${name}`,
      `Servizio: ${service}`,
      date ? `Giorno preferito: ${date}` : '',
      time ? `Fascia oraria: ${time}` : '',
      budget ? `Fascia di spesa indicativa: ${budget}` : '',
      notes ? `Indicazioni: ${notes}` : '',
      '',
      'Attendo la conferma della disponibilità. Grazie!',
    ].filter(Boolean).join('\n');

    const destination = `${whatsappUrl}?text=${encodeURIComponent(message)}`;
    const popup = window.open(destination, '_blank', 'noopener,noreferrer');
    setPreparedUrl(destination);
    setPopupBlocked(!popup);
  }

  return (
    <form className="appointment-form" onSubmit={submitRequest}>
      <div className="form-grid">
        <label className="form-field"><span>Nome e cognome *</span><input name="name" autoComplete="name" required placeholder="Come possiamo chiamarti?" /></label>
        <label className="form-field"><span>Servizio *</span><select name="service" value={selectedService} onChange={(event) => setSelectedService(event.target.value)} required><option value="" disabled>Scegli un servizio</option>{serviceOptions.map((service) => <option value={service.slug} key={service.slug}>{service.title}</option>)}</select></label>
        <label className="form-field"><span>Giorno preferito</span><input name="date" type="date" /></label>
        <label className="form-field"><span>Fascia oraria</span><select name="time" defaultValue=""><option value="">Indifferente</option><option>Mattina</option><option>Pausa pranzo</option><option>Pomeriggio</option><option>Dopo le 18:00</option></select></label>
        <label className="form-field form-field-wide"><span>Fascia di spesa indicativa</span><select name="budget" defaultValue=""><option value="">Preferisco parlarne insieme</option><option>Fino a 100 €</option><option>100–200 €</option><option>200–350 €</option><option>Oltre 350 €</option></select></label>
        <label className="form-field form-field-wide"><span>Qualche indicazione utile</span><textarea name="notes" rows={5} maxLength={700} placeholder="Occasione, taglia abituale, colori che ami, ciò che vorresti trovare…" /></label>
      </div>
      <label className="privacy-check"><input type="checkbox" required /><span>Ho letto l’<Link href="/privacy">informativa privacy</Link> e acconsento all’invio dei dati tramite WhatsApp. *</span></label>
      <div className="form-submit"><button className="button button-dark" type="submit">Prepara il messaggio <span className="arrow" aria-hidden="true">↗</span></button><p>Il modulo non salva dati: prepara un messaggio che potrai controllare prima di inviare.</p></div>
      {preparedUrl && !popupBlocked && <p className="form-success" role="status">Il messaggio è pronto su WhatsApp. L’appuntamento sarà valido dopo la conferma della boutique.</p>}
      {preparedUrl && popupBlocked && <p className="form-success" role="alert">Il browser ha bloccato la nuova finestra. <a href={preparedUrl} target="_blank" rel="noreferrer">Apri il messaggio su WhatsApp</a>.</p>}
    </form>
  );
}
