import { React, useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewCardList from '../NewCardList/NewCardList';
import About from '../About/About';
import { savedCards } from '../../utils/data';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import AuthModal from '../AuthModal/AuthModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import SuccessModal from '../SuccessModal/SuccessModal';
import newsRequest from '../../utils/NewsApi';
import NewCardListErr from '../NewCardListErr/NewCardListErr';

function App() {
  const [ sliderOpened, setSliderOpened ] = useState(false);
  const [ authModalState, setAuthModalState ] = useState(false);
  const [ regModalState, setRegModalState ] = useState(false);
  const [ successModalState, setSuccessModalState ] = useState(false);
  const [ cards, setCards ] = useState([]);
  const [ cardsCounter, setCardsCounter ] = useState(2);
  const [ formLoadingState, setFormLoadingState ] = useState(false);
  const [ errState, setErrState ] = useState(false);
  const [ preloaderState, setPreloaderState ] = useState(false);
  const [ newsNotFound, setNewsNotFound ] = useState(false);
  const [ newsFound, setNewsFound ] = useState(false);
  const [ showBtnState, setShowBtnState ] = useState(true);
  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    // получаем массив ключей localStorage, если в массиве есть cards
    // достаём из хранилища карточки и записываем в стейт
    if (Object.keys(localStorage).includes('cards')) {
      const storedCards = JSON.parse(localStorage.getItem('cards'));
      setCards(storedCards);
      setNewsFound(true);
    }
  }, [])

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

  // поиск новостей
  function handleSearch(query) {
    setErrState(false);
    setNewsFound(false);
    setNewsNotFound(false);
    setFormLoadingState(true);
    setPreloaderState(true);
    setShowBtnState(true);
    setCardsCounter(2);

    newsRequest.getNews(query)
      .then(res => {
        if (res.articles.length === 0) {
          return setNewsNotFound(true);
        }
        localStorage.setItem('cards', JSON.stringify(res.articles));
        setCards(res.articles);
        setNewsNotFound(false);
        setNewsFound(true);
        setPreloaderState(false);
      })
      .catch(err => {
        console.log(err);
        setErrState(true);
        setPreloaderState(false);
      })
      .finally(() => {
        setFormLoadingState(false);
      });
  }

  // отображение следующих трёх карточек массива
  function showNextCards() {
    const counter = cardsCounter + 3;
    setCardsCounter(counter);
    if (counter >= cards.length - 1) {
      setShowBtnState(false);
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
            loggedIn={loggedIn}
          />
          <Main children={
            <>
              <SearchForm submitForm={handleSearch} formLoadingState={formLoadingState} />
              {preloaderState && <Preloader newsNotFound={newsNotFound} />}
              {newsFound &&
                <NewCardList 
                  cards={cards} 
                  showNextCards={showNextCards} 
                  cardsCounter={cardsCounter}
                  showBtnState={showBtnState}
                  loggedIn={loggedIn}
                />
              }
              {errState && <NewCardListErr />}
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
      <RegisterModal isOpen={regModalState} onClose={closeAllPopups} openAuthModal={openAuthModal} />
      <SuccessModal isOpen={successModalState} onClose={closeAllPopups} openAuthModal={openAuthModal} />
      <Footer />
    </div>
  );
}

export default App;
