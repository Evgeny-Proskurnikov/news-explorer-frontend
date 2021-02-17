import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewsCard from '../NewsCard/NewsCard'

function Elements({
  cards,
  keywordStyle,
  favIconClass,
  cardsCounter,
  loggedIn,
  addToFavorite,
  removeFromFavorite,
  spinnerState
}) {  
  return (
    <div className="elements">
      {cards.map((el, index) => {
        if (index <= cardsCounter) {
          return <NewsCard
            card={el}
            key={uuidv4()}
            keywordStyle={keywordStyle}
            favIconClass={favIconClass} 
            loggedIn={loggedIn}
            addToFavorite={addToFavorite}
            removeFromFavorite={removeFromFavorite}
            spinnerState={spinnerState}
          />
        }
        return null;
      })}
    </div>
  )
}

export default Elements;
