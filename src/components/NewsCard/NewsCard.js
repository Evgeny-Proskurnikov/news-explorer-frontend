import React from "react";
// import { CurrentUserContext } from "../contexts/CurrentUserContext"

function NewsCard({ card, date, description, source }) {
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
      <div className="card__conteiner">
        <button type="button" className="card__favorite-btn" onClick={handleLikeClick}/>
        <img src={card ? card.link : ''} alt={card ? card.name : ''} className="card__image" onClick={handleClick}/>
        <div className="card__conteiner">
          <p className="card__date">{card ? card.date : ''}</p>
          <h2 className="card__title">{card ? card.name : ''}</h2>
          <p className="card__text">{card ? card.description : ''}</p>
        </div>
      </div>
      <p className="card__news-source">{card ? card.source : ''}</p>
    </div>
  );
}

export default NewsCard;
