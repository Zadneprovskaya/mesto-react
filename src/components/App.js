import React from "react";

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
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
  const [isConfirmDeletionPopupOpen,setIsConfirmDeletionPopupOpen] = React.useState({isOpen: false, card: {}});
  const [selectedCard, setSelectedCard] = React.useState({isOpen: false, element: {}});
  const [cards, setCards] = React.useState([]);
  const [renderLoading, setRenderLoading] = React.useState(false);

  const [currentUser,setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  React.useEffect(() => {
    api.getUserData()
      .then((data) => {
        setCurrentUser(data);
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

  function handleConfirmDeletionClick(card) {
    setIsConfirmDeletionPopupOpen({...isConfirmDeletionPopupOpen, isOpen: true, card: card});
  }

  function handleCardClick(card) {
    setSelectedCard({...selectedCard, isOpen: true, element: card});
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({...selectedCard, isOpen: false});
    setIsConfirmDeletionPopupOpen({...isConfirmDeletionPopupOpen, isOpen: false});
  }

  function handleOverlayClose(event) {
    if (event.target.classList.contains("popup")) closeAllPopups();
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    
    if (isLiked) {
      api.dislikedCard(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      api.likedCard(card._id)
        .then((newCard) => {
          const newCards = cards.map((c) => c._id === card._id ? newCard : c);
          setCards(newCards);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  } 

  function handleCardDelete(card) {
    setRenderLoading(true);
    api.removeCard(card._id)
      .then(() => {
        const newCards = cards.filter((i) => i._id === card._id ? false : true);
        setCards(newCards);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setRenderLoading(false);
      });
  } 

  function handleUpdateUser(newUser) {
    setRenderLoading(true);
    api.saveUserChanges(newUser)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setRenderLoading(false);
      });
  }

  function handleUpdateAvatar(newAvatar) {
    setRenderLoading(true);
    api.changedAvatar(newAvatar)
      .then((data) => {
        setCurrentUser({...currentUser, avatar: data.avatar});
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setRenderLoading(false);
      });
  }

  function handleAddPlaceSubmit(cardData) {
    setRenderLoading(true);
    api.postNewCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards]); 
        closeAllPopups();
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setRenderLoading(false);
      });
  }
  
  return(
    <CurrentUserContext.Provider value={currentUser}>
    <div className='page'>
      <Header/>
      <Main
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}
      cards={cards}
      onCardDelete={handleConfirmDeletionClick}
      onCardLike={handleCardLike}
      />
      <Footer/>

      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
        onUpdateAvatar={handleUpdateAvatar}
        isRender={renderLoading}
      /> 

      <EditProfilePopup 
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
        onUpdateUser={handleUpdateUser}
        isRender={renderLoading}
      />

      <AddPlacePopup 
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
        onAddPlace={handleAddPlaceSubmit}
        isRender={renderLoading}
      />

      <ConfirmDeletionPopup
        deleteCard={isConfirmDeletionPopupOpen}
        onClose={closeAllPopups}
        onOverlayClose={handleOverlayClose}
        onCardDelete={handleCardDelete}
        isRender={renderLoading}
      />   

      <ImagePopup 
        card={selectedCard}
        onClose={closeAllPopups} 
        onOverlayClose={handleOverlayClose} 
      />
    </div>
    </CurrentUserContext.Provider>
  )
}
  
export default App;