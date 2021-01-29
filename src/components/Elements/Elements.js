import React from 'react';
import NewsCard from '../NewsCard/NewsCard'

function Elements({ cards }) {  
  return (
    <div className="elements">
      {cards.map(el => <NewsCard card={el} key={el._id} />)}
    </div>
  )
}

export default Elements;
