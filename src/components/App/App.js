import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Main from '../Main/Main';
import SavedNews from '../SavedNews/SavedNews';
import './App.css';

function App() {
  return (
    <div className='page'>
      <Switch>
        <Route exact path='/'>
          <Main children={
           <Link to='/saved-news'>SavedNews</Link>
          }/>
        </Route>
        <Route path='/saved-news'>
          <SavedNews children={
           <Link to='/'>Main</Link>
          }/>    
        </Route>
      </Switch>
    </div>
  );
}

export default App;
