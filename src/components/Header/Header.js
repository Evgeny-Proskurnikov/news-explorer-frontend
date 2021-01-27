import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ children }) {
  return (
    <div className='header'>
      <p className='header__logo'>NewsExplorer</p>
      <Navigation children={
        <li><Link to='/saved-news' className='navigation__link'>Сохранённые статьи</Link></li>
      }/>
      <button type='button' className='header__auth-btn'>Авторизоваться</button>
    </div>
  )
}

export default Header;
