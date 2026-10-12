'use client';

import { HangerIcon } from './CamerinoButton';
import { useCamerino } from './CamerinoProvider';

export default function OpenCamerinoButton() {
  const { items, ready, open } = useCamerino();
  const count = ready ? items.length : 0;
  return (
    <button type="button" className="button button-ghost" onClick={open}>
      <HangerIcon size={20} /> {count ? `Apri il camerino (${count})` : 'Apri il camerino'}
    </button>
  );
}
