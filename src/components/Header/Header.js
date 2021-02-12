import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ 
  headerClass, 
  logoutImgClass, 
  rootLinkClass, 
  newsLinkClass,
  newsLinkBorderWhite,
  sliderBtnClass, 
  handleSliderOpen, 
  sliderOpened,
  handleModalOpen,
  loggedIn,
}) {
  const currentUser = 'Грета';

  function handleSliderClick() {
    handleSliderOpen();
  }

  function handleAuthClick() {
    handleModalOpen();
  }

  return (
    <header className={sliderOpened ? 'header header_opened' : `header ${headerClass}`}>
      <p className='header__logo'>NewsExplorer</p>

      <div 
        className={sliderOpened ? 'header__slider-btn header__slider-btn_active' : `header__slider-btn ${sliderBtnClass}`} 
        onClick={handleSliderClick}
      />

      <div className={`header__container ${sliderOpened && 'header__container_opened'}`}>
        <Navigation 
          rootLinkClass={rootLinkClass}
          children={loggedIn && 
            <li>
              <Link 
                to='/saved-news' 
                className={sliderOpened ? `navigation__link ${newsLinkBorderWhite}` : `navigation__link ${newsLinkClass}`}
              >
                Сохранённые статьи
              </Link>
            </li>
          }
        />
        <button type='button' className='header__auth-btn' onClick={handleAuthClick}>
          {loggedIn ? currentUser : 'Авторизоваться'}
          {loggedIn && <span className={sliderOpened ? 'header__logout' : `header__logout ${logoutImgClass}`}/>}
        </button>
      </div>
    </header>
  )
}

export default Header;
