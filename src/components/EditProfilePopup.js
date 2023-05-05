import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  
  return (
    <PopupWithForm 
      name='profile'
      title='Редактировать профиль'
      isOpen={props.isOpen}
      titleBtn='Сохранить'
      onClose={props.onClose}
      onOverlayClose={props.onOverlayClose}
      >
        <input 
          id="name-input" 
          className="popup__text" 
          type="text" 
          placeholder="Имя" 
          name ="newName" 
          minLength="2" 
          maxLength="40" 
          required/>
        <span className="name-input-error popup__text-error"></span>
        <input 
          id="description-input" 
          className="popup__text" 
          type="text" 
          placeholder="Описание" 
          name="newDescription" 
          minLength="2" 
          maxLength="200" 
          required/>
        <span className="description-input-error popup__text-error"></span>
    </PopupWithForm>
    )
}

export default EditProfilePopup;