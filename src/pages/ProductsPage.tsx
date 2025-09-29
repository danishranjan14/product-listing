import React, { useEffect, useMemo, useState } from 'react';
import { Product } from '../types';
import SearchBar from '../components/SearchBar';
import SortSelect from '../components/SortSelect';
import Pagination from '../components/Pagination';
import ProductRow from '../components/ProductRow';
import SkeletonRow from '../components/SkeletonRow';
import styles from '../components/styles/Table.module.css';

const PRODUCTS_API = 'https://fakestoreapi.com/products'; // Option A

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(PRODUCTS_API);
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = (await res.json()) as Product[];
        setProducts(data);
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // filtered & sorted
  const filtered = useMemo(() => {
    let arr = products.filter(p => p.title.toLowerCase().includes(search.toLowerCase()));
    if (sort === 'price-asc') arr = arr.slice().sort((a,b)=> a.price - b.price);
    else if (sort === 'price-desc') arr = arr.slice().sort((a,b)=> b.price - a.price);
    else if (sort === 'title-asc') arr = arr.slice().sort((a,b)=> a.title.localeCompare(b.title));
    else if (sort === 'rating-desc') arr = arr.slice().sort((a,b)=> (b.rating?.rate ?? 0) - (a.rating?.rate ?? 0));
    return arr;
  }, [products, search, sort]);

  // pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages, page]);

  const paged = useMemo(() => {
    const start = (page - 1) * itemsPerPage;
    return filtered.slice(start, start + itemsPerPage);
  }, [filtered, page]);

  return (
    <div>
      <h1>Products</h1>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 12 }}>
        <SearchBar value={search} onChange={setSearch} />
        <SortSelect value={sort} onChange={setSort} />
      </div>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <table className={styles.table ?? ''}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            // show a few skeleton rows
            Array.from({ length: 6 }).map((_, i) => <SkeletonRow key={i} />)
          ) : paged.length ? (
            paged.map(p => <ProductRow key={p.id} product={p} />)
          ) : (
            <tr>
              <td colSpan={5} style={{ padding: 12 }}>No products found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <Pagination page={page} total={totalPages} setPage={setPage} />
    </div>
  );
}
