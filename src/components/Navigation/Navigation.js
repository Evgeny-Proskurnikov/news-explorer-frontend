import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ children, rootLinkClassName }) {
  return (
    <nav>
      <ul className="navigation">
        <li><Link to='/' className={`navigation__link ${rootLinkClassName}`}>Главная</Link></li>
        {children}
      </ul>
    </nav>
  )
}

export default Navigation;
