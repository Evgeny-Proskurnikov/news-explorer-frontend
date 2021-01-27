import React from 'react';
import { Link } from 'react-router-dom';

function Navigation({ linkClassName, children }) {
  return (
    <nav>
      <ul className="navigation">
        <li><Link to='/' className={`navigation__link ${linkClassName}`}>Главная</Link></li>
        {children}
      </ul>
    </nav>
  )
}

export default Navigation;
