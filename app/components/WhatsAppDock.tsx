import { business, whatsappLink } from '../content';

/** Thumb-reach contact bar, shown on small screens only (see globals.css). */
export default function WhatsAppDock() {
  return (
    <div className="whatsapp-dock">
      <a className="dock-whatsapp" href={whatsappLink('Ciao Antonella, ')} target="_blank" rel="noreferrer">
        <svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.4.8 3.2.6.5 0 1.5-.6 1.8-1.2.2-.6.2-1.1.1-1.2l-.5-.3Z" /></svg>
        Scrivi ad Antonella
      </a>
      <a className="dock-call" href={`tel:${business.phoneHref}`}>Chiama</a>
    </div>
  );
}
