import React from 'react';
import NewsCard from '../NewsCard/NewsCard'

function Elements({ cards, categoryStyle, favIconClass }) {  
  return (
    <div className="elements">
      {cards.map(el => <NewsCard card={el} key={el._id} category={el.category} categoryStyle={categoryStyle} favIconClass={favIconClass} />)}
    </div>
  )
}

export default Elements;
