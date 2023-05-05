import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  
  return (
    <PopupWithForm
    name='avatar'
    title='Обновить аватар'
    titleBtn='Сохранить'
    isOpen={props.isOpen}
    onClose={props.onClose}
    onOverlayClose={props.onOverlayClose}
    >
      <input 
        id="link-avatar-input" 
        className="popup__text" 
        type="url" 
        placeholder="Ссылка на картинку" 
        name ="link" 
        required/>
      <span className="link-avatar-input-error popup__text-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;