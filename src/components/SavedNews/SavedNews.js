import React from 'react';
import Elements from '../Elements/Elements';

function SavedNews({ cards, loggedIn, removeFromFavorite }) {
  return (
    (cards.length > 0) ?
    <section className='savednews'>
      <Elements
        cards={cards}
        favIconClass='card__favorite-btn_type_savednews'
        cardsCounter='100'
        loggedIn={loggedIn}
        removeFromFavorite={removeFromFavorite}
      />
    </section>
    :
    <section className="preloader">
      <div className="preloader__spinner preloader__spinner_type_unfound"/>
    </section>
  )
}

export default SavedNews;
