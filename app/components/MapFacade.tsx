'use client';

import { useState } from 'react';
import { business } from '../content';

const embedUrl = `https://www.google.com/maps?q=${encodeURIComponent(`${business.street}, ${business.postalCode} ${business.city}`)}&z=17&output=embed`;

/**
 * Google Maps loads only after a click: no third-party requests or cookies
 * before the visitor asks for the map.
 */
export default function MapFacade() {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="map-frame">
        <iframe title={`Mappa: ${business.name}, ${business.street}, Vercelli`} src={embedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
      </div>
    );
  }

  return (
    <div className="map-frame map-facade">
      <svg className="map-streets" viewBox="0 0 400 260" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
        <path d="M-10 70 L410 40 M-10 190 L410 170 M60 -10 L110 270 M250 -10 L230 270 M330 -10 L380 270 M-10 130 L410 120" />
      </svg>
      <span className="map-pin" aria-hidden="true">
        <svg viewBox="0 0 24 32" width="34" height="46"><path d="M12 31s10-11.2 10-19A10 10 0 0 0 2 12c0 7.8 10 19 10 19Z" fill="#d3307a" /><circle cx="12" cy="12" r="4" fill="#fff" /></svg>
      </span>
      <div className="map-facade-copy">
        <strong>{business.street}</strong>
        <span>{business.corner}, Vercelli</span>
        <button type="button" className="button button-small" onClick={() => setLoaded(true)}>Mostra la mappa</button>
        <small>Carica Google Maps, che usa i propri cookie.</small>
      </div>
    </div>
  );
}
