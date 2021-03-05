import React from "react";
import cn from "classnames";
// import Spinner from "../Spinner/Spinner";

function NewsCard({
  card,
  addToFavorite,
  removeFromFavorite,
  keywordStyle,
  favIconClass,
  loggedIn,
  spinnerState
}) {
  const favBtnClass = cn(
    `card__favorite-btn ${favIconClass}`, 
    { "card__favorite-btn_inactive": !loggedIn, "card__favorite-btn_marked": card.isMarked }
  );

  function handleClick() {
    card.isMarked ? removeFromFavorite(card) : addToFavorite(card);
  }

  return (
    <div className="card">
      <div>
        <div className="card__category" style={keywordStyle}>{card.keyword}</div>
        <button type="button" className={favBtnClass} onClick={handleClick} disabled={!loggedIn}/>
        <div className="card__tooltip">
          {loggedIn ? 'Убрать из сохранённых' : 'Войдите, чтобы сохранять статьи'}
        </div>
        <a href={card ? card.link : '#'} target='_blank' rel="noreferrer">
          {/* {spinnerState && <Spinner />} */}
          <img src={card ? card.image : ''} alt={card ? card.title : ''} className="card__image"/>
        </a>
        <div className="card__container">
          <p className="card__date">{card ? card.date : ''}</p>
          <h2 className="card__title">{card ? card.title : ''}</h2>
          <p className="card__text">{card ? card.text : ''}</p>
        </div>
      </div>
      <a className="card__news-source" href={card ? card.link : '#'} target='_blank' rel="noreferrer">
        {card ? card.source : ''}
      </a>
    </div>
  );
}

export default NewsCard;
