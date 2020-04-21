import React from 'react';
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3><Link to="/">
        <img src={process.env.PUBLIC_URL + '/cat_logo.png'} alt="cat" className='header-logo' />
      </Link>
      </h3>
      <ul className="nav-links">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/breeds">Breeds</Link></li>
        <li><Link to="/facts">Facts</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
