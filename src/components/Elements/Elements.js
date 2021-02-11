import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewsCard from '../NewsCard/NewsCard'

function Elements({ cards, categoryStyle, favIconClass, cardsCounter }) {  
  return (
    <div className="elements">
      {cards.map((el, index) => {
        if (index <= cardsCounter) {
          return <NewsCard card={el} key={uuidv4()} category={el.category} categoryStyle={categoryStyle} favIconClass={favIconClass} />
        }
        return null;
      })}
    </div>
  )
}

export default Elements;
