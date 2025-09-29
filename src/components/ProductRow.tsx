import React from 'react';
import { Product } from '../types';
import { useFavorites } from '../context/FavoritesContext';

type Props = {
  product: Product;
};

export default function ProductRow({ product }: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();
  return (
    <tr>
      <td style={{ padding: 8 }}>
        <img src={product.image} alt={product.title} style={{ width: 60, height: 60, objectFit: 'contain' }} />
      </td>
      <td style={{ padding: 8 }}>{product.title}</td>
      <td style={{ padding: 8 }}>${product.price.toFixed(2)}</td>
      <td style={{ padding: 8 }}>{product.rating?.rate ?? '-'}</td>
      <td style={{ padding: 8 }}>
        <button onClick={() => toggleFavorite(product.id)} aria-pressed={isFavorite(product.id)}>
          {isFavorite(product.id) ? '★ Unfavorite' : '☆ Favorite'}
        </button>
      </td>
    </tr>
  );
}
