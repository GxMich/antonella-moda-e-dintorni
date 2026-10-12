import { openingHours } from '../../content';

export type VisitDay = { iso: string; label: string; short: string; slots: { id: string; label: string; range: string }[] };

const slotName = (from: string) => (Number(from.slice(0, 2)) < 13 ? 'Mattina' : 'Pomeriggio');

/** The next `count` days the boutique is open, with their real time slots. */
export function upcomingVisitDays(count = 6, now = new Date()): VisitDay[] {
  const days: VisitDay[] = [];
  const cursor = new Date(now);
  cursor.setHours(12, 0, 0, 0);
  for (let offset = 0; days.length < count && offset < 21; offset += 1) {
    const date = new Date(cursor);
    date.setDate(cursor.getDate() + offset);
    const entry = openingHours.find((day) => day.dayIndex === date.getDay());
    if (!entry?.slots.length) continue;
    const slots = entry.slots
      .filter(([, to]) => offset > 0 || Number(to.replace(':', '')) > now.getHours() * 100 + now.getMinutes() + 30)
      .map(([from, to]) => ({ id: slotName(from), label: slotName(from), range: `${from}–${to}` }));
    if (!slots.length) continue;
    const iso = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    const weekday = date.toLocaleDateString('it-IT', { weekday: 'long' });
    const dayMonth = date.toLocaleDateString('it-IT', { day: 'numeric', month: 'long' });
    const label = offset === 0 ? `Oggi, ${dayMonth}` : offset === 1 ? `Domani, ${dayMonth}` : `${weekday[0].toUpperCase()}${weekday.slice(1)} ${dayMonth}`;
    const short = offset === 0 ? 'Oggi' : offset === 1 ? 'Domani' : `${weekday[0].toUpperCase()}${weekday.slice(1, 3)} ${date.getDate()}`;
    days.push({ iso, label, short, slots });
  }
  return days;
}
