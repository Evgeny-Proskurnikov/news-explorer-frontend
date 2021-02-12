import React from 'react';
import Elements from '../Elements/Elements';

function NewCardList({ cards, showNextCards, cardsCounter, showBtnState, loggedIn }) {
  function handleBtnClick() {
    showNextCards();
  }

  return (
    <section className="new-card-list">
      <h2 className="new-card-list__title">Результаты поиска</h2>
      <Elements cards={cards} categoryStyle={{display: 'none'}} cardsCounter={cardsCounter} loggedIn={loggedIn} />
      {showBtnState &&
        <button type="button" className="new-card-list__show-btn" onClick={handleBtnClick}>
          Показать ещё
        </button>
      }
    </section>
  )
}

export default NewCardList;
