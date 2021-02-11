import React from 'react';

function NewCardListErr() {
  return (
    <section className="new-card-list">
      <h2 className="new-card-list__title">
        Во время запроса произошла ошибка.<br/><br/>
        Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
      </h2>
    </section>
  )
}

export default NewCardListErr;
