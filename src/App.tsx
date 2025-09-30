import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ProductsPage from './pages/ProductsPage';
import FavoritesPage from './pages/FavoritesPage';
import './App.css';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <header style={{ padding: '1rem', borderBottom: '1px solid #eee' }}>
        <nav style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Link to="/">Products</Link>
          <Link to="/favorites">Favorites</Link>
        </nav>
      </header>

      {/* Main */}
      <main style={{ flex: 1, padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: '1rem',
          borderTop: '1px solid #eee',
          textAlign: 'center',
          fontSize: '0.9rem',
          color: '#555',
        }}
      >
        Made with ❤️ for PharmEasy Assignment
      </footer>
    </div>
  );
}

export default App;
