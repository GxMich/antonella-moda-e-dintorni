import { openingHours } from '../content';

export function formatSlots(slots: readonly (readonly [string, string])[]) {
  if (!slots.length) return 'Chiuso';
  return slots.map(([from, to]) => `${from}–${to}`).join(' e ');
}

export default function HoursList({ compact = false }: { compact?: boolean }) {
  return (
    <dl className={compact ? 'hours-list is-compact' : 'hours-list'}>
      {openingHours.map(({ day, dayIndex, slots }) => (
        <div key={day} data-day={dayIndex}>
          <dt>{day}</dt>
          <dd>{formatSlots(slots)}</dd>
        </div>
      ))}
    </dl>
  );
}
