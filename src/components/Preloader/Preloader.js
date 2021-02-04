import React from 'react';
import cn from 'classnames';

function Preloader() {
  const newsNotFound = true;

  return (
    <section className="preloader">
      <div className={cn('preloader__spinner', { "preloader__spinner_type_unfound": newsNotFound })}/>
      {newsNotFound && <h2 className="preloader__title">Ничего не найдено</h2>}
      <p className={cn('preloader__text', { "preloader__text_type_unfound": newsNotFound })}>
        {newsNotFound ? 'К сожалению по вашему запросу ничего не найдено.' : 'Идет поиск новостей...'}
      </p>
    </section>
  )
}

export default Preloader;
