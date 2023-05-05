import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
    
  return (
  <PopupWithForm
    name='add'
    title='Новое место'
    isOpen={props.isOpen}
    titleBtn='Создать'
    onClose={props.onClose}
    onOverlayClose={props.onOverlayClose}
    >
      <input id="name-card-input" className="popup__text" type="text" placeholder="Название" name ="name" minLength="2" maxLength="30" required/>
      <span className="name-card-input-error popup__text-error"></span>
      <input id="link-input" className="popup__text" type="url" placeholder="Ссылка на картинку" name="link" required/>
      <span className="link-input-error popup__text-error"></span>
  </PopupWithForm>
  )
}

export default AddPlacePopup;