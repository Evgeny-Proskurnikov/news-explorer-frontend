import React from 'react';

function SavedNewsHeader({ currentUser, }) {
  return (
    <section className='savednews-header'>
      <p className="savednews-header__text">Сохранённые статьи</p>
      <h2 className="savednews-header__title">{currentUser.name}, у вас 5 сохранённых статей</h2>
      <p className="savednews-header__keywords">
        По ключевым словам:&ensp;
        <span className="savednews-header__keywords_type_bold">Природа</span>,&ensp;
        <span className="savednews-header__keywords_type_bold">Тайга</span>&ensp;
        и&ensp;
        <span className="savednews-header__keywords_type_bold">2-м другим</span>
      </p>
    </section>
  )
}

export default SavedNewsHeader;
