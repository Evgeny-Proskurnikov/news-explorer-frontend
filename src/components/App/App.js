import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import logoutImage from '../../images/logout.svg'
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import NewCardList from '../NewCardList/NewCardList';
import About from '../About/About';
import { cards, savedCards } from '../../utils/data';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function App() {
  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Header rootLinkClassName='navigation__link_type_root' />
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
            headerStyle={{color: '#1A1B22'}}
            logoutImgStyle={{backgroundImage: `url(${logoutImage})`}}
            authBtnStyle={{border: '1px solid #1A1B22'}}
            newsLinkClassName='navigation__link_type_news'
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
