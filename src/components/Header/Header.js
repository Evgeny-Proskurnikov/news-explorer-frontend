import React from 'react';
import { Link } from 'react-router-dom';

function Header({ children }) {
  return (
    <div className='header'>
      <p className='header__logo'>NewsExplorer</p>
      <Link to='/' className='header__nav-link'>Главная</Link>
      {children}
    </div>
  )
}

export default Header;
