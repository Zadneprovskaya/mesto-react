import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleChangeName(event) {
    setName(event.target.value);
  }
  
  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  } 
  
  return (
    <PopupWithForm 
      name='profile'
      title='Редактировать профиль'
      isOpen={props.isOpen}
      titleBtn={props.isRender ? 'Сохранение...' : 'Сохранить'}
      onClose={props.onClose}
      onOverlayClose={props.onOverlayClose}
      onSubmit={handleSubmit}
      >
        <input 
          value={name || ''}
          onChange={handleChangeName}
          id="name-input" 
          className="popup__text" 
          type="text" 
          placeholder="Имя" 
          name ="newName" 
          minLength="2" 
          maxLength="40" 
          required
          />
        <span className="name-input-error popup__text-error"></span>
        <input 
          value={description || ''}
          onChange={handleChangeDescription}
          id="description-input" 
          className="popup__text" 
          type="text" 
          placeholder="Описание" 
          name="newDescription" 
          minLength="2" 
          maxLength="200" 
          required
          />
        <span className="description-input-error popup__text-error"></span>
    </PopupWithForm>
    )
}

export default EditProfilePopup;