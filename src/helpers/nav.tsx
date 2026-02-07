import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../styles/Nav.css';
import ImageHolder from './ImageHolder';
import ThemeToggle from '../components/ThemeToggle';
import { useFavorites } from '../context/FavoritesContext';

function Nav() {
  const { favoritesCount } = useFavorites();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="nav">
      <h3>
        <Link to="/" onClick={closeMenu}>
          <ImageHolder
            style={{
              width: 70,
              height: 63,
              borderRadius: '30px',
              display: 'inline-block',
            }}
            className="header-logo"
            delay={1000}
            src="/cat_logo.png"
            alt="cat"
          />
        </Link>
      </h3>
      <button
        className="nav-toggle"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger"></span>
        <span className="hamburger"></span>
        <span className="hamburger"></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'nav-links-open' : ''}`}>
        <li>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li>
          <Link to="/cats" onClick={closeMenu}>Cats</Link>
        </li>
        <li>
          <Link to="/breeds" onClick={closeMenu}>Breeds</Link>
        </li>
        <li>
          <Link to="/facts" onClick={closeMenu}>Facts</Link>
        </li>
        <li>
          <Link to="/favorites" className="favorites-link" onClick={closeMenu}>
            Favorites
            {favoritesCount > 0 && (
              <span className="favorites-badge">{favoritesCount}</span>
            )}
          </Link>
        </li>
      </ul>
      <div className="nav-actions">
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Nav;
