import React from "react";

import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import EditProfilePopup from "./EditProfilePopup";
import ConfirmDeletionPopup from "./ConfirmDeletionPopup";

import api from '../utils/api.js';

function App() {
  const [isEditAvatarPopupOpen,setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen,setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen,setIsAddPlacePopupOpen] = React.useState(false);
  const [isConfirmDeletionPopupOpen,setIsConfirmDeletionPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({isOpen: false, element: {}});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleConfirmDeletionClick() {
    setIsConfirmDeletionPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard({...selectedCard, isOpen: true, element: card});
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({...selectedCard, isOpen: false});
    setIsConfirmDeletionPopupOpen(false);
  }

  function handleOverlayClose(event) {
    if (event.target.classList.contains("popup")) closeAllPopups();
  }
  
  return(
    
    <div className='page'>
      <Header/>
      <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
      cards={cards}
      onCardDelete={handleConfirmDeletionClick}
      />
      <Footer/>

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
      /> 

      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
      />

      <AddPlacePopup 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
      />

      <ConfirmDeletionPopup
        isOpen={isConfirmDeletionPopupOpen}
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
      />   

      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups} 
        onOverlayClose={handleOverlayClose} 
      />
    </div>
    
  )
}
  
export default App;