import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';

function App() {
  return (
    <div className='page'>
      <Header children={
        <>
          <Link to='/saved-news' className='header__nav-link'>Сохранённые статьи</Link>
          <button type='button' className='header__auth-btn'>Авторизоваться</button>
        </>
      }/>

      <Switch>
        <Route exact path='/'>
          <Main />
        </Route>
        <Route path='/saved-news'>
          <SavedNews />    
        </Route>
      </Switch>

    </div>
  );
}

export default App;
