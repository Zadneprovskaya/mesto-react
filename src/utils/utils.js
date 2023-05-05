export const validationConfig = {
  popupSelector: '.popup',
  inputSelector: '.popup__text',
  inputException: 'name-card-input',
  submitButtonSelector: '.popup__submit-btn',
  inactiveButtonClass: 'popup__submit-btn_type_invalid',
  inputErrorClass: 'popup__text_type_error'

};

export const container = document.querySelector('.container');
export const profileInfo = container.querySelector('.profile-info');
export const editButton = profileInfo.querySelector('.profile-info__edit-button');
export const addButton = container.querySelector('.profile__add-button');
export const changeAvatarButton = container.querySelector('.profile-image__change-button');
export const profilePopup = document.querySelector('.popup-profile');
export const addCardPopup = document.querySelector('.popup-add');
export const avatarPopup = document.querySelector('.popup-avatar');
export const formPopup = document.forms.popupForm;
export const id = null;
