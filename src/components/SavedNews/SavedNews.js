import React from 'react';
import Elements from '../Elements/Elements';

function SavedNews({ cards }) {
  return (
    <section className='savednews'>
      <Elements cards={cards} />
    </section>
  )
}

export default SavedNews;
