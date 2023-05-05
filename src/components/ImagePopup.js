import React from "react";

function ImagePopup(props) {
    return(
        <div 
          className={`popup popup-image ${props.card.isOpen ? 'popup_opened' : false}`} 
          onClick={props.onOverlayClose}>
        <div className="popup-image__container">
          <button 
            className="popup__button-close" 
            onClick={props.onClose} 
            type="button">
          </button>
          <img 
            className="popup-image__image" 
            src={props.card.element.link} 
            alt={`Картинка - ${props.card.element.name}`} />
          <p className="popup-image__title">{props.card.element.name}</p>
        </div>
      </div>
    )
}

export default ImagePopup;