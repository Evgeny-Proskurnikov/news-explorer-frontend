import React from "react";
import cn from "classnames";
// import { CurrentUserContext } from "../contexts/CurrentUserContext"

function NewsCard({ card, category, categoryStyle, favIconClass, loggedIn, favBtnMarked, formatedDate }) {
  // const currentUser = React.useContext(CurrentUserContext);

  // // Определяем, являемся ли мы владельцем текущей карточки
  // const isOwn = card.owner === currentUser._id;
  // // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  // const isLiked = card.likes.some(i => i === currentUser._id);

  // const cardLikeButtonClassName = `${isLiked ? "card__like-button card__like-button_status_active" : "card__like-button"}`; 
  const favBtnClass = cn(
    `card__favorite-btn ${favIconClass}`, 
    { "card__favorite-btn_inactive": !loggedIn, "card__favorite-btn_marked": favBtnMarked }
  );

  function handleLikeClick() {
    // onCardLike(card);
  }

  return (
    <div className="card">
      <div>
        <div className="card__category" style={categoryStyle}>{category}</div>
        <button type="button" className={favBtnClass} onClick={handleLikeClick} disabled={!loggedIn}/>
        <div className="card__tooltip">
          {loggedIn ? 'Убрать из сохранённых' : 'Войдите, чтобы сохранять статьи'}
        </div>
        <a href={card ? card.url : '#'} target='_blank' rel="noreferrer">
          <img src={card ? card.urlToImage : ''} alt={card ? card.title : ''} className="card__image"/>
        </a>
        <div className="card__container">
          <p className="card__date">{card ? formatedDate : ''}</p>
          <h2 className="card__title">{card ? card.title : ''}</h2>
          <p className="card__text">{card ? card.description : ''}</p>
        </div>
      </div>
      <a className="card__news-source" href={card ? card.url : '#'} target='_blank' rel="noreferrer">
        {card ? card.source.name : ''}
      </a>
    </div>
  );
}

export default NewsCard;
