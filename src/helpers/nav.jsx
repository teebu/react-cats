import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import ImageHolder from './ImageHolder';

function Nav() {
  return (
    <nav className="nav">
      <h3>
        <Link to="/">
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
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cats">Cats</Link>
        </li>
        <li>
          <Link to="/breeds">Breeds</Link>
        </li>
        <li>
          <Link to="/facts">Facts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
