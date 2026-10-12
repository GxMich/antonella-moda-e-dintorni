'use client';

import { useEffect, useState } from 'react';
import { openingHours } from '../content';

type Status = { open: boolean; text: string; today: number };

const toMinutes = (time: string) => {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
};

function romeNow() {
  const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).formatToParts(new Date());
  const get = (type: string) => parts.find((part) => part.type === type)?.value ?? '';
  const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(get('weekday'));
  return { day, minutes: Number(get('hour')) * 60 + Number(get('minute')) };
}

function computeStatus(): Status {
  const { day, minutes } = romeNow();
  const today = openingHours.find((entry) => entry.dayIndex === day);
  const current = today?.slots.find(([from, to]) => minutes >= toMinutes(from) && minutes < toMinutes(to));
  if (current) return { open: true, text: `Aperto ora, fino alle ${current[1]}`, today: day };

  const laterToday = today?.slots.find(([from]) => toMinutes(from) > minutes);
  if (laterToday) return { open: false, text: `Chiuso ora, riapre oggi alle ${laterToday[0]}`, today: day };

  for (let offset = 1; offset <= 7; offset += 1) {
    const next = openingHours.find((entry) => entry.dayIndex === (day + offset) % 7);
    if (next?.slots.length) {
      const when = offset === 1 ? 'domani' : next.day.toLocaleLowerCase('it');
      return { open: false, text: `Chiuso ora, riapre ${when} alle ${next.slots[0][0]}`, today: day };
    }
  }
  return { open: false, text: 'Chiuso', today: day };
}

/** Live open/closed badge (Europe/Rome time). Renders nothing until hydrated. */
export default function OpenNow({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const update = () => setStatus(computeStatus());
    const frame = window.requestAnimationFrame(update);
    const timer = window.setInterval(update, 60_000);
    return () => { window.cancelAnimationFrame(frame); window.clearInterval(timer); };
  }, []);

  useEffect(() => {
    if (!status) return;
    document.querySelectorAll<HTMLElement>('.hours-list [data-day]').forEach((row) => {
      row.classList.toggle('is-today', Number(row.dataset.day) === status.today);
    });
  }, [status]);

  const base = compact ? 'open-now is-compact' : 'open-now';
  if (!status) return <p className={base} aria-hidden="true">&nbsp;</p>;
  const text = compact ? (status.open ? 'Aperto ora' : 'Chiuso ora') : status.text;
  return <p className={status.open ? `${base} is-open` : base} role={compact ? undefined : 'status'} title={compact ? status.text : undefined}><span aria-hidden="true" />{text}</p>;
}
