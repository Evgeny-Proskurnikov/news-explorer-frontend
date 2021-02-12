import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { formatDate } from '../../utils/utils';
import NewsCard from '../NewsCard/NewsCard'

function Elements({ cards, categoryStyle, favIconClass, cardsCounter, loggedIn }) {  
  return (
    <div className="elements">
      {cards.map((el, index) => {
        if (index <= cardsCounter) {
          return <NewsCard
            card={el}
            key={uuidv4()}
            category={el.category}
            categoryStyle={categoryStyle}
            favIconClass={favIconClass}
            loggedIn={loggedIn}
            formatedDate={formatDate(el.publishedAt)}
          />
        }
        return null;
      })}
    </div>
  )
}

export default Elements;
