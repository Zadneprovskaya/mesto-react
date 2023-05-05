import React from "react";

function PopupWithForm(props) {
    return(
        <div className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : false}`} onClick={props.onOverlayClose}>
        <div className="popup__container">
          <button onClick={props.onClose} className="popup__button-close" type="button"></button>
            <form className="popup__form" name={`popup_${props.name}`} onSubmit={props.onSubmit} method="POST" noValidate>
              <h2 className={`popup__title popup__title_type_${props.name}`}>{props.title}</h2>
              <>{props.children}</>
              <button className={`popup__submit-btn popup__submit-btn_type_${props.name}`} type="submit">{props.titleBtn}</button>
            </form>
          </div>
      </div>
    )
}

export default PopupWithForm;