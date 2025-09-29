import React from 'react';

type Props = {
  value: string;
  onChange: (s: string) => void;
  placeholder?: string;
};

export default function SearchBar({ value, onChange, placeholder = 'Search products...' }: Props) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{ padding: '8px 10px', width: '100%', maxWidth: 420 }}
      aria-label="search products"
    />
  );
}
