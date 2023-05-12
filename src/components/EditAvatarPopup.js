import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const currentAvatar = React.useRef();

  React.useEffect(() => {
    currentAvatar.current.value = '';
  }, [props.isOpen]); 

  function handleSubmit(event) {
    event.preventDefault();
    props.onUpdateAvatar(currentAvatar.current.value);
  }
  
  return (
    <PopupWithForm
    name='avatar'
    title='Обновить аватар'
    titleBtn={props.isRender ? 'Сохранение...' : 'Сохранить'}
    isOpen={props.isOpen}
    onClose={props.onClose}
    onOverlayClose={props.onOverlayClose}
    onSubmit={handleSubmit}
    >
      <input 
        ref={currentAvatar}
        id="link-avatar-input" 
        className="popup__text" 
        type="url" 
        placeholder="Ссылка на картинку" 
        name ="link" 
        required
        />
      <span className="link-avatar-input-error popup__text-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;