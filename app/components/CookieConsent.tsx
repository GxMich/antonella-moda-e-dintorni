'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'antonella-cookie-preferences';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    setVisible(!window.localStorage.getItem(STORAGE_KEY));
    if (window.location.hash === '#preferenze') setPreferencesOpen(true);
    const onHashChange = () => { if (window.location.hash === '#preferenze') setPreferencesOpen(true); };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const save = () => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ necessary: true, measurement: false }));
    setVisible(false);
    setPreferencesOpen(false);
  };

  const openPreferences = () => setPreferencesOpen(true);

  if (!visible && !preferencesOpen) return null;

  return (
    <>
      {visible && !preferencesOpen && <aside className="cookie-banner" role="dialog" aria-labelledby="cookie-title" aria-describedby="cookie-description">
        <div><p className="cookie-kicker">Privacy e preferenze</p><h2 id="cookie-title">Un piccolo gesto di chiarezza.</h2><p id="cookie-description">Questo sito usa solo strumenti tecnici necessari al funzionamento e non attiva cookie di profilazione o pubblicità.</p></div>
        <div className="cookie-actions"><button className="cookie-secondary" type="button" onClick={openPreferences}>Gestisci preferenze</button><button className="button button-dark" type="button" onClick={save}>Continua</button></div>
      </aside>}
      {preferencesOpen && <div className="cookie-overlay" role="presentation"><section className="cookie-panel" role="dialog" aria-modal="true" aria-labelledby="preferences-title"><div className="cookie-panel-head"><div><p className="cookie-kicker">Centro preferenze</p><h2 id="preferences-title">Scegli con calma.</h2></div><button className="cookie-close" type="button" aria-label="Chiudi preferenze" onClick={() => setPreferencesOpen(false)}>×</button></div><p>Le impostazioni qui sotto descrivono gli strumenti attualmente presenti sul sito.</p><div className="cookie-category"><div><strong>Tecnici necessari</strong><span>Attivi sempre</span></div><p>Servono a ricordare la tua scelta sulle preferenze. Non vengono usati per profilazione.</p><span className="cookie-status">Necessari</span></div><div className="cookie-category is-muted"><div><strong>Misurazione aggregata</strong><span>Non attiva</span></div><p>Non utilizziamo strumenti di analytics o misurazione di terze parti in questa versione.</p><span className="cookie-status">Spenta</span></div><div className="cookie-panel-actions"><a href="/cookie">Leggi la Cookie Policy</a><button className="button button-dark" type="button" onClick={save}>Salva preferenze</button></div></section></div>}
    </>
  );
}
