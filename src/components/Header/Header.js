import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ headerStyle, logoutImgStyle, authBtnStyle, rootLinkClassName, newsLinkClassName }) {
  const loggedIn = true;
  const currentUser = 'Грета';

  return (
    <header className='header' style={headerStyle}>
      <p className='header__logo'>NewsExplorer</p>
      <Navigation 
        rootLinkClassName={rootLinkClassName}
        children={
          loggedIn && <li><Link to='/saved-news' className={`navigation__link ${newsLinkClassName}`}>Сохранённые статьи</Link></li>
        }
      />
      <button type='button' className='header__auth-btn' style={authBtnStyle}>
        {loggedIn ? currentUser : 'Авторизоваться'}
        {loggedIn && <span className='header__logout' style={logoutImgStyle}/>}
      </button>
    </header>
  )
}

export default Header;
