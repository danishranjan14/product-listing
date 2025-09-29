import React from 'react';

type Props = {
  value: string;
  onChange: (s: string) => void;
};

export default function SortSelect({ value, onChange }: Props) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} aria-label="Sort products">
      <option value="">Sort By</option>
      <option value="price-asc">Price: Low → High</option>
      <option value="price-desc">Price: High → Low</option>
      <option value="title-asc">Name: A → Z</option>
      <option value="rating-desc">Rating: High → Low</option>
    </select>
  );
}
