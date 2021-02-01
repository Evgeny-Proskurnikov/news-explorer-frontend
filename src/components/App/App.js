import React from 'react';
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

function App() {
  const [ sliderOpened, setSliderOpened ] = React.useState(false);

  function handleSliderOpen() {
    setSliderOpened(!sliderOpened);
  }

  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Header 
            rootLinkClass='border_white' 
            handleSliderOpen={handleSliderOpen}
            sliderOpened={sliderOpened}
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
          /> 
          <Main children={
            <>
              <SavedNewsHeader />
              <SavedNews cards={savedCards} />
            </>
          }/>
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
