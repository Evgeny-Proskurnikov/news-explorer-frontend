import { React, useState, } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewCardList from '../NewCardList/NewCardList';
import About from '../About/About';
import { cards, savedCards } from '../../utils/data';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import AuthModal from '../AuthModal/AuthModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import SuccessModal from '../SuccessModal/SuccessModal';

function App() {
  const [ sliderOpened, setSliderOpened ] = useState(false);
  const [ authModalState, setAuthModalState ] = useState(false);
  const [ regModalState, setRegModalState ] = useState(false);
  const [ successModalState, setSuccessModalState ] = useState(false);

  // открытие слайд-меню
  function handleSliderOpen() {
    setSliderOpened(!sliderOpened);
  }

  // открытие модальных окон
  function openAuthModal() {
    closeAllPopups();
    setAuthModalState(true);
    setEscListener();
  }
  function openRegModal() {
    closeAllPopups();
    setRegModalState(true);
    setEscListener();
  }

  // добавление обработчика закрытия модалок на ESC
  function setEscListener() {
    document.addEventListener('keyup', handleEscPopupClose);
  }

  // закрытие всех модальных окон
  function closeAllPopups() {
    setAuthModalState(false);
    setRegModalState(false);
    setSuccessModalState(false);
    document.removeEventListener('keyup', handleEscPopupClose);
  }

  // закрытие модалки на Esc
  function handleEscPopupClose(evt) {
    if (evt.key === 'Escape') {
      closeAllPopups();
    }
  }

  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Header 
            rootLinkClass='border_white' 
            handleSliderOpen={handleSliderOpen}
            sliderOpened={sliderOpened}
            handleModalOpen={openAuthModal}
          />
          <Main children={
            <>
              <SearchForm />
              <Preloader />
              <NewCardList cards={cards}/>
              <About />
            </>
          }/>
        </Route>
        <Route path='/saved-news'>
          <Header 
            headerClass='header_type_news'
            logoutImgClass='header__logout_type_news'
            newsLinkClass='border_dark'
            newsLinkBorderWhite='border_white'
            sliderBtnClass='header__slider-btn_type_news'
            handleSliderOpen={handleSliderOpen}
            sliderOpened={sliderOpened}
            handleModalOpen={openAuthModal}
          /> 
          <Main children={
            <>
              <SavedNewsHeader />
              <SavedNews cards={savedCards} />
            </>
          }/>
        </Route>
      </Switch>

      <AuthModal isOpen={authModalState} onClose={closeAllPopups} openRegModal={openRegModal} />
      <RegisterModal isOpen={regModalState} onClose={closeAllPopups} openAuthModal={openAuthModal}/>
      <SuccessModal isOpen={successModalState} onClose={closeAllPopups} openAuthModal={openAuthModal}/>
      <Footer />
    </div>
  );
}

export default App;
