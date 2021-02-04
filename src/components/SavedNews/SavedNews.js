import React from 'react';
import Elements from '../Elements/Elements';

function SavedNews({ cards }) {
  return (
    <section className='savednews'>
      <Elements cards={cards} favIconClass='card__favorite-btn_type_savednews' />
    </section>
  )
}

export default SavedNews;
