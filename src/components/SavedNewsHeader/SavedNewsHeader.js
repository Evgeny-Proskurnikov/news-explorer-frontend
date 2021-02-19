import React from 'react';
import { formatTitle, formatKeywords } from '../../utils/utils';

function SavedNewsHeader({ currentUser, cards }) {
  const keywords = formatKeywords(cards);

  return (
    <section className='savednews-header'>
      <p className="savednews-header__text">Сохранённые статьи</p>
      <h2 className="savednews-header__title">{currentUser.name}, у вас {formatTitle(cards)}</h2>
      <p className="savednews-header__keywords">
        По ключевым словам:&ensp;
        {keywords.length <= 3 ?
          <>
            <span className="savednews-header__keywords_type_bold">{keywords[0]}</span>
            {keywords[1] && <span className="savednews-header__keywords_type_bold">,&ensp;{keywords[1]}</span>}
            {keywords[2] && <span className="savednews-header__keywords_type_bold">,&ensp;{keywords[2]}</span>}
          </>
          :
          <>
            <span className="savednews-header__keywords_type_bold">{keywords[0]},</span>&ensp;
            <span className="savednews-header__keywords_type_bold">{keywords[1]}</span>&ensp;
            и&ensp;
            <span className="savednews-header__keywords_type_bold">2-м другим</span>
          </>
        }
      </p>
    </section>
  )
}

export default SavedNewsHeader;
