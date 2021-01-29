import React from 'react';
import Elements from '../Elements/Elements';

function NewCardList({ cards }) {
  return (
    <section className="new-card-list">
      <h2 className="new-card-list__title">Результаты поиска</h2>
      <Elements cards={cards} />
      <button type="button" className="new-card-list__show-btn">Показать ещё</button>
    </section>
  )
}

export default NewCardList;
