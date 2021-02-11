import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext"

function NewsCard({ card, category, categoryStyle, favIconClass }) {
  // const currentUser = React.useContext(CurrentUserContext);

  // // Определяем, являемся ли мы владельцем текущей карточки
  // const isOwn = card.owner === currentUser._id;
  // // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  // const isLiked = card.likes.some(i => i === currentUser._id);

  // const cardLikeButtonClassName = `${isLiked ? "card__like-button card__like-button_status_active" : "card__like-button"}`; 

  function handleClick() {
    // onCardClick(card);
  }

  function handleLikeClick() {
    // onCardLike(card);
  }

  return (
    <div className="card">
      <div>
        <div className="card__category" style={categoryStyle}>{category}</div>
        <button type="button" className={`card__favorite-btn ${favIconClass}`} onClick={handleLikeClick}/>
        <div className="card__tooltip">Убрать из сохранённых</div>
        <a href={card ? card.url : '#'} target='_blank' rel="noreferrer">
          <img src={card ? card.urlToImage : ''} alt={card ? card.title : ''} className="card__image" onClick={handleClick}/>
        </a>
        <div className="card__container">
          <p className="card__date">{card ? card.publishedAt : ''}</p>
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
