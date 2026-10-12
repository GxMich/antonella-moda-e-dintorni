'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'antonella-cookie-preferences-v1';

function clearPreferenceHash() {
  if (window.location.hash === '#preferenze') window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const shouldShowBanner = !window.localStorage.getItem(STORAGE_KEY);
    const shouldOpenPreferences = window.location.hash === '#preferenze';
    const frame = window.requestAnimationFrame(() => {
      setVisible(shouldShowBanner);
      if (shouldOpenPreferences) setPreferencesOpen(true);
    });
    const onHashChange = () => { if (window.location.hash === '#preferenze') setPreferencesOpen(true); };
    window.addEventListener('hashchange', onHashChange);
    return () => { window.cancelAnimationFrame(frame); window.removeEventListener('hashchange', onHashChange); };
  }, []);

  useEffect(() => {
    if (!preferencesOpen) return;
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeButtonRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setPreferencesOpen(false); clearPreferenceHash(); return; }
      if (event.key !== 'Tab') return;
      const panel = closeButtonRef.current?.closest('.cookie-panel');
      const focusable = panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [preferencesOpen]);

  const save = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ necessary: true, measurement: false }));
    setVisible(false);
    setPreferencesOpen(false);
    clearPreferenceHash();
  };

  const openPreferences = () => setPreferencesOpen(true);
  const closePreferences = () => {
    setPreferencesOpen(false);
    clearPreferenceHash();
    window.requestAnimationFrame(() => previouslyFocusedRef.current?.focus());
  };

  if (!visible && !preferencesOpen) return null;

  return (
    <>
      {visible && !preferencesOpen && <aside className="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
        <div><p className="cookie-kicker">Privacy e preferenze</p><h2 id="cookie-title">Solo cookie tecnici.</h2><p id="cookie-description">Questo sito usa solo strumenti tecnici necessari al funzionamento e non attiva cookie di profilazione o pubblicità.</p></div>
        <div className="cookie-actions"><button className="cookie-secondary" type="button" onClick={openPreferences}>Gestisci preferenze</button><button className="button" type="button" onClick={save}>Continua</button></div>
      </aside>}
      {preferencesOpen && <div className="cookie-overlay" role="presentation"><section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="preferences-title" aria-describedby="preferences-description"><div className="cookie-panel-head"><div><p className="cookie-kicker">Centro preferenze</p><h2 id="preferences-title">Le tue preferenze</h2></div><button ref={closeButtonRef} className="cookie-close" type="button" aria-label="Chiudi preferenze" onClick={closePreferences}>×</button></div><p id="preferences-description">Le impostazioni qui sotto descrivono gli strumenti attualmente presenti sul sito.</p><div className="cookie-category"><div><strong>Tecnici necessari</strong><span>Attivi sempre</span></div><p>Servono a ricordare la tua scelta sulle preferenze. Non vengono usati per profilazione.</p><span className="cookie-status">Necessari</span></div><div className="cookie-category is-muted"><div><strong>Misurazione aggregata</strong><span>Non attiva</span></div><p>Non utilizziamo strumenti di analytics o misurazione di terze parti in questa versione.</p><span className="cookie-status">Spenta</span></div><div className="cookie-panel-actions"><Link href="/cookie">Leggi la Cookie Policy</Link><button className="button" type="button" onClick={save}>Salva preferenze</button></div></section></div>}
    </>
  );
}
