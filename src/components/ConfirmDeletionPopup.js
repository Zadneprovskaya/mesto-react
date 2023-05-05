import React from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmDeletionPopup(props) {
  
  return (
    <PopupWithForm
    name='confirm'
    title='Вы уверены?'
    titleBtn='Да' 
    isOpen={props.isOpen}
    onClose={props.onClose}
    onOverlayClose={props.onOverlayClose}
    >
    </PopupWithForm>   
  )
}

export default ConfirmDeletionPopup;