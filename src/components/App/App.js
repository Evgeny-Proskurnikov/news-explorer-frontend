import { React, useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { CurrentUserContext, userObj } from '../../contexts/CurrentUserContext';
import * as auth from '../../utils/auth';
import newsRequest from '../../utils/NewsApi';
import apiRequest from '../../utils/api';
import { formatDate } from '../../utils/utils';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewCardList from '../NewCardList/NewCardList';
import About from '../About/About';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import AuthModal from '../AuthModal/AuthModal';
import RegisterModal from '../RegisterModal/RegisterModal';
import SuccessModal from '../SuccessModal/SuccessModal';
import NewCardListErr from '../NewCardListErr/NewCardListErr';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {
  const [ sliderOpened, setSliderOpened ] = useState(false);
  const [ authModalState, setAuthModalState ] = useState(false);
  const [ regModalState, setRegModalState ] = useState(false);
  const [ successModalState, setSuccessModalState ] = useState(false);
  const [ cards, setCards ] = useState([]);
  const [ favoriteCards, setFavoriteCards ] = useState([]);
  const [ cardsCounter, setCardsCounter ] = useState(2);
  const [ formLoadingState, setFormLoadingState ] = useState(false);
  const [ headerSpinnerState, setHeaderSpinnerState ] = useState(false);
  const [ cardSpinnerState, setCardSpinnerState ] = useState(false);
  const [ errState, setErrState ] = useState(false);
  const [ preloaderState, setPreloaderState ] = useState(false);
  const [ newsNotFound, setNewsNotFound ] = useState(false);
  const [ newsFound, setNewsFound ] = useState(false);
  const [ showBtnState, setShowBtnState ] = useState(true);
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ isUserExist, setUserExist ] = useState(false);
  const history = useHistory();
  const [ currentUser, setCurrentUser ] = useState(userObj);

  useEffect(() => {
    // получаем массив ключей localStorage, если в массиве есть cards
    // достаём из хранилища карточки и записываем в стейт
    if (Object.keys(localStorage).includes('cards')) {
      const storedCards = JSON.parse(localStorage.getItem('cards'));
      setCards(storedCards);
      setNewsFound(true);
    }
    tokenCheck();
  }, []) // eslint-disable-line

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
  function openSuccessModal() {
    closeAllPopups();
    setSuccessModalState(true);
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
        const cards = res.articles.map(el => {
          return {
            keyword: query,
            title: el.title,
            text: el.description,
            date: formatDate(el.publishedAt),
            source: el.source.name, 
            link: el.url, 
            image: el.urlToImage,
            isMarked: false
          }
        });
        localStorage.setItem('cards', JSON.stringify(cards));
        setCards(cards);
        setNewsNotFound(false);
        setNewsFound(true);
        setPreloaderState(false);
      })
      .catch(err => {
        console.log(err);
        setErrState(true);
        setPreloaderState(false);
      })
      .finally(() => setFormLoadingState(false));
  }

  // отображение следующих трёх карточек массива
  function showNextCards() {
    const counter = cardsCounter + 3;
    setCardsCounter(counter);
    if (counter >= cards.length - 1) {
      setShowBtnState(false);
    }
  }

  // добавление карточки в избранное
  function handleAddToFavorite(card) {
    setCardSpinnerState(true);
    // отделяем ненужные поля деструктуризацией
    const { __v, isMarked, ...favCard } = card;
    
    apiRequest.saveArticle(favCard)
      .then((newCard) => {
        const markedCard = {...newCard, isMarked: true};
        setFavoriteCards([markedCard, ...favoriteCards]);

        // создаем новый массив чтобы не мутировать стейт
        // по индексу заменяем в массиве карточку
        const refreshedCards = [...cards];
        const index = cards.findIndex(el => el.link === card.link);
        refreshedCards.splice(index, 1, markedCard);
        setCards(refreshedCards);
        localStorage.setItem('cards', JSON.stringify(refreshedCards));
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setCardSpinnerState(false));
  }

  // получение массива избранных карточек
  function getFavoriteCards() {
    apiRequest.getArticles()
      .then(cards => {
        const markedCards = cards.map(c => {
          return {...c, isMarked: true};
        });
        setFavoriteCards(markedCards);
      })
      .catch(err => console.log(err))
  }
 
  // удаление избранной карточки
  function removeFromFavorite(card) {
    setCardSpinnerState(true);
    apiRequest.deleteArticle(card._id)
      .then(res => {
        console.log(res)
        // filter возвращает новый массив элементов удовлетворяющих условию
        const newFavoriteCards = favoriteCards.filter(c => c._id !== card._id);
        setFavoriteCards(newFavoriteCards);

        const { _id, ...newCard } = card;
        const refreshedCards = [...cards];
        const index = cards.findIndex(el => el.link === card.link);
        refreshedCards.splice(index, 1, {...newCard, isMarked: false});
        setCards(refreshedCards);
        localStorage.setItem('cards', JSON.stringify(refreshedCards)); 
      })
      .catch(err => console.log(err))
      .finally(() => setCardSpinnerState(false));
  }

  // регистрация пользователя
  function handleRegister({ name, email, password }) {
    setUserExist(false);
    setFormLoadingState(true);

    auth.register({ name, email, password })
      .then(user => {
        if (user) {
          openSuccessModal();
          localStorage.setItem('user', JSON.stringify(user));
        }
      })
      .catch(err => {
        if (err.status === 409) {
          setUserExist(true);
        }
        console.log(err);
      })
      .finally(() => setFormLoadingState(false));
  }

  // логин пользователя
  function handleLogin({ email, password }) {
    setFormLoadingState(true);
    function authorizeHandler(user) {
      setCurrentUser(user);
      setLoggedIn(true);
      closeAllPopups();
      history.push('/saved-news');
    }

    auth.authorize({ email, password })
      .then(res => {
        if (res) {
          localStorage.setItem('token', res.token);
          getFavoriteCards();
          const storageUser = JSON.parse(localStorage.getItem('user'));
          if (!storageUser) {
            return auth.getUserData(res.token)
              .then(user => {
                if (user.email) {
                  authorizeHandler(user);
                }
              })
              .catch(err => console.log(err));
          }
          if (storageUser.email === email) {
            return authorizeHandler(storageUser);
          }
        }
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setFormLoadingState(false));
  }

  // проверка токена
  function tokenCheck() {
    const jwt = localStorage.getItem('token');
    if (jwt) {
      setHeaderSpinnerState(true);
      auth.getUserData(jwt)
        .then(res => {
          if (res.email) {
            getFavoriteCards();
            setCurrentUser(res);
            setLoggedIn(true);
            history.push('/');
          }
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => setHeaderSpinnerState(false));
    }
  }

  // выйти из аккаунта, очистить локальное хранилище
  function handleLogOut() {
    setLoggedIn(false);
    localStorage.clear();
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <Switch>
          <Route exact path='/'>
            <Header 
              rootLinkClass='border_white' 
              handleSliderOpen={handleSliderOpen}
              sliderOpened={sliderOpened}
              onLogin={openAuthModal}
              loggedIn={loggedIn}
              onLogout={handleLogOut}
              spinnerState={headerSpinnerState}
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
                    addToFavorite={handleAddToFavorite}
                    removeFromFavorite={removeFromFavorite}
                    spinnerState={cardSpinnerState}
                  />
                }
                {errState && <NewCardListErr />}
                <About />
              </>
            }/>
          </Route>
          <ProtectedRoute
            exact
            path='/saved-news'
            loggedIn={loggedIn}
            mainComponent={Main}
            headerComponent={Header}
            headerClass='header_type_news'
            logoutImgClass='header__logout_type_news'
            newsLinkClass='border_dark'
            newsLinkBorderWhite='border_white'
            sliderBtnClass='header__slider-btn_type_news'
            handleSliderOpen={handleSliderOpen}
            sliderOpened={sliderOpened}
            onLogin={openAuthModal}
            onLogout={handleLogOut}
            children={
              <>
                <SavedNewsHeader currentUser={currentUser} cards={favoriteCards} />
                <SavedNews cards={favoriteCards} loggedIn={loggedIn} removeFromFavorite={removeFromFavorite} />
              </>
            }
          />
        </Switch>

        <AuthModal
          isOpen={authModalState}
          onClose={closeAllPopups}
          openRegModal={openRegModal}
          onLogin={handleLogin}
          formLoadingState={formLoadingState}
        />
        <RegisterModal
          isOpen={regModalState}
          onClose={closeAllPopups}
          openAuthModal={openAuthModal}
          onRegister={handleRegister}
          isUserExist={isUserExist}
          formLoadingState={formLoadingState}
        />
        <SuccessModal isOpen={successModalState} onClose={closeAllPopups} openAuthModal={openAuthModal} />
        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
