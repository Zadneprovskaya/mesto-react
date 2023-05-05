import React from 'react';

function Card(props) {

  function handleClick(event) {
    if(!event.target.classList.contains('element__trash')) {
      props.onCardClick(props.card);
    }
  }

  return(
    <li className="element">
      <div className="element__image" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}>
        <button className="element__trash element__trash_visible" onClick={props.onCardDelete} type="button"></button>
      </div>
      <div className="element__group">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__group-like">
          <button className="element__like"  type="button"></button>
          <p className="element__count-like">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;