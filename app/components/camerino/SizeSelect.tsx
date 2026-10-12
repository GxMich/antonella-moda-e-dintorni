'use client';

export const sizeOptions = ['38', '40', '42', '44', '46', '48', '50', '52', 'S', 'M', 'L', 'XL'] as const;

export function SizeSelect({ id, value, onChange, compact = false }: { id: string; value: string; onChange: (size: string) => void; compact?: boolean }) {
  return (
    <label className={compact ? 'size-select is-compact' : 'size-select'} htmlFor={id}>
      <span>{compact ? 'Taglia' : 'La tua taglia'}</span>
      <select id={id} value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="">Non so, consigliami</option>
        <optgroup label="Taglie italiane">
          {sizeOptions.filter((size) => /\d/.test(size)).map((size) => <option key={size} value={size}>{size}</option>)}
        </optgroup>
        <optgroup label="Taglie internazionali">
          {sizeOptions.filter((size) => !/\d/.test(size)).map((size) => <option key={size} value={size}>{size}</option>)}
        </optgroup>
      </select>
    </label>
  );
}
