import React from 'react';
import { Link } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Navigation from '../Navigation/Navigation';
import Spinner from '../Spinner/Spinner';

function Header({ 
  headerClass, 
  logoutImgClass, 
  rootLinkClass, 
  newsLinkClass,
  newsLinkBorderWhite,
  sliderBtnClass, 
  handleSliderOpen, 
  sliderOpened,
  onLogin,
  loggedIn,
  onLogout,
  spinnerState
}) {
  const currentUser = React.useContext(CurrentUserContext);

  function handleSliderClick() {
    handleSliderOpen();
  }

  function handleAuthClick() {
    loggedIn ? onLogout() : onLogin();
  }
  
  return (
    <header className={sliderOpened ? 'header header_opened' : `header ${headerClass}`}>
      <p className='header__logo'>NewsExplorer</p>

      {!spinnerState &&
        <div 
          className={sliderOpened ? 'header__slider-btn header__slider-btn_active' : `header__slider-btn ${sliderBtnClass}`} 
          onClick={handleSliderClick}
        />
      }

      {spinnerState ? 
        <Spinner typeClass='spinner_type_header' />
        // <div className='preloader__spinner preloader__spinner_type_header'/>
        :
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
            {loggedIn ? currentUser.name : 'Авторизоваться'}
            {loggedIn && <span className={sliderOpened ? 'header__logout' : `header__logout ${logoutImgClass}`}/>}
          </button>
        </div>
      }
    </header>
  )
}

export default Header;
