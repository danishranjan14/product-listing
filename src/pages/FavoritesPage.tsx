import React, { useEffect, useState } from 'react';
import { Product } from '../types';
import { useFavorites } from '../context/FavoritesContext';
import ProductRow from '../components/ProductRow';
import SkeletonRow from '../components/SkeletonRow';

const PRODUCTS_API = 'https://fakestoreapi.com/products';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const res = await fetch(PRODUCTS_API);
        const data = (await res.json()) as Product[];
        setProducts(data);
      } catch {
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const favProducts = products.filter(p => favorites.includes(p.id));

  return (
    <div>
      <h1>Favorites</h1>

      <table>
        <thead>
          <tr>
            <th>Image</th><th>Title</th><th>Price</th><th>Rating</th><th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            Array.from({ length: 4 }).map((_, i) => <SkeletonRow key={i} />)
          ) : favProducts.length ? (
            favProducts.map(p => <ProductRow key={p.id} product={p} />)
          ) : (
            <tr>
              <td colSpan={5} style={{ padding: 12 }}>No favorites yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
