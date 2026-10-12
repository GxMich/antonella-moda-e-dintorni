'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useMemo, useRef, useState } from 'react';
import { business, products } from '../../content';
import { assetPath } from '../../site';
import { useCamerino } from './CamerinoProvider';
import { upcomingVisitDays } from './visitSlots';
import { SizeSelect } from './SizeSelect';

export default function CamerinoDrawer() {
  const { items, isOpen, close, remove, setSize, clear } = useCamerino();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [visible, setVisible] = useState(false);
  const [day, setDay] = useState('');
  const [slot, setSlot] = useState('');
  const [name, setName] = useState('');
  const [sent, setSent] = useState(false);
  const days = useMemo(() => (isOpen ? upcomingVisitDays() : []), [isOpen]);
  const selectedDay = days.find((entry) => entry.iso === day);
  const entries = items.map((item) => ({ item, product: products.find((product) => product.slug === item.slug) })).filter((entry) => entry.product);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) {
      dialog.showModal();
      const frame = window.requestAnimationFrame(() => { setVisible(true); setSent(false); });
      document.documentElement.classList.add('camerino-is-open');
      return () => window.cancelAnimationFrame(frame);
    }
    if (!isOpen && dialog.open) {
      const frame = window.requestAnimationFrame(() => setVisible(false));
      const timer = window.setTimeout(() => { dialog.close(); document.documentElement.classList.remove('camerino-is-open'); }, 280);
      return () => { window.cancelAnimationFrame(frame); window.clearTimeout(timer); };
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (event: Event) => { event.preventDefault(); close(); };
    dialog.addEventListener('cancel', onCancel);
    return () => dialog.removeEventListener('cancel', onCancel);
  }, [close]);

  function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const lines = entries.map(({ item, product }, index) => `${index + 1}. ${product!.name}${product!.brand ? ` (${product!.brand})` : ''}${item.size ? `, taglia ${item.size}` : ''}`);
    const when = selectedDay ? `${selectedDay.label.toLocaleLowerCase('it')}${slot ? `, ${slot.toLocaleLowerCase('it')}` : ''}` : 'appena posso';
    const message = [
      `Ciao Antonella, sono ${name.trim() || 'una cliente'}.`,
      'Vorrei provare in boutique questi capi:',
      ...lines,
      '',
      `Passerei ${when}.`,
      'Me li prepari in camerino? Grazie!',
    ].join('\n');
    window.open(`${business.whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setSent(true);
  }

  return (
    <dialog ref={dialogRef} className={visible ? 'camerino is-visible' : 'camerino'} aria-labelledby="camerino-title" onClick={(event) => { if (event.target === dialogRef.current) close(); }}>
      <div className="camerino-panel">
        <header className="camerino-head">
          <h2 id="camerino-title">Il tuo camerino</h2>
          <button type="button" className="camerino-close" onClick={close} aria-label="Chiudi il camerino">
            <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" /></svg>
          </button>
        </header>

        {entries.length === 0 ? (
          <div className="camerino-empty">
            <p>Il camerino è vuoto.</p>
            <p>Aggiungi i capi che vuoi provare: Antonella te li fa trovare pronti, nella tua taglia, quando passi in boutique.</p>
            <Link className="button" href="/collezione" onClick={close}>Scegli dalla collezione</Link>
          </div>
        ) : (
          <form className="camerino-body" onSubmit={send}>
            <ul className="camerino-items">
              {entries.map(({ item, product }) => (
                <li key={item.slug}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={assetPath(product!.images[0].src)} alt="" width={72} height={96} />
                  <div>
                    <Link href={`/capo/${product!.slug}`} onClick={close}>{product!.name}</Link>
                    <SizeSelect id={`size-${item.slug}`} value={item.size} onChange={(size) => setSize(item.slug, size)} compact />
                  </div>
                  <button type="button" className="camerino-remove" onClick={() => remove(item.slug)} aria-label={`Togli ${product!.name} dal camerino`}>
                    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" /></svg>
                  </button>
                </li>
              ))}
            </ul>

            <fieldset className="camerino-days">
              <legend>Quando passi?</legend>
              <div className="chip-row">
                {days.map((entry) => (
                  <label key={entry.iso} className="chip">
                    <input type="radio" name="day" value={entry.iso} checked={day === entry.iso} onChange={() => { setDay(entry.iso); setSlot(''); }} />
                    <span>{entry.short}</span>
                  </label>
                ))}
              </div>
              {selectedDay && (
                <div className="chip-row">
                  {selectedDay.slots.map((entry) => (
                    <label key={entry.id} className="chip chip-wide">
                      <input type="radio" name="slot" value={entry.label} checked={slot === entry.label} onChange={() => setSlot(entry.label)} />
                      <span>{entry.label} <small>{entry.range}</small></span>
                    </label>
                  ))}
                </div>
              )}
            </fieldset>

            <label className="field">
              <span>Il tuo nome</span>
              <input value={name} onChange={(event) => setName(event.target.value)} autoComplete="given-name" required />
            </label>

            <div className="camerino-foot">
              <button className="button button-fuchsia" type="submit">Invia ad Antonella su WhatsApp</button>
              {sent
                ? <p className="form-status" role="status">Messaggio pronto su WhatsApp: premi invio. Antonella ti risponde negli orari di negozio.</p>
                : <p className="form-hint">Si apre WhatsApp con la lista già scritta. Non ti impegni ad acquistare.</p>}
              <button type="button" className="camerino-clear" onClick={clear}>Svuota il camerino</button>
            </div>
          </form>
        )}
      </div>
    </dialog>
  );
}
