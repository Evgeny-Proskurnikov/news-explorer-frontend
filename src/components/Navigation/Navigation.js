import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ children, rootLinkClass }) {
  return (
    <nav className="nav">
      <ul className="navigation">
        <li><Link to='/' className={`navigation__link ${rootLinkClass}`}>Главная</Link></li>
        {children}
      </ul>
    </nav>
  )
}

export default Navigation;
