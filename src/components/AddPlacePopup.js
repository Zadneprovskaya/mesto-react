import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');
  
  function handleAddName(event) {
    setName(event.target.value);
  }
  
  function handleAddLink(event) {
    setLink(event.target.value);
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    props.onAddPlace({ name, link });
  }

  React.useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]); 
    
  return (
  <PopupWithForm
    name='add'
    title='Новое место'
    isOpen={props.isOpen}
    titleBtn={props.isRender ? 'Сохранение...' :'Создать'}
    onClose={props.onClose}
    onOverlayClose={props.onOverlayClose}
    onSubmit={handleSubmit}
    >
      <input 
        value={name} 
        onChange={handleAddName}
        id="name-card-input" 
        className="popup__text" 
        type="text" 
        placeholder="Название" 
        name ="name" 
        minLength="2" 
        maxLength="30" 
        required
        />
      <span className="name-card-input-error popup__text-error"></span>
      <input 
        value={link} 
        onChange={handleAddLink}
        id="link-input" 
        className="popup__text" 
        type="url" 
        placeholder="Ссылка на картинку" 
        name="link" 
        required
        />
      <span className="link-input-error popup__text-error"></span>
  </PopupWithForm>
  )
}

export default AddPlacePopup;