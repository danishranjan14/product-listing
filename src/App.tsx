import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import FavoritesPage from './pages/FavoritesPage';
import './App.css';

function App() {
  return (
    <div>
      <header style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link to="/">Products</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
