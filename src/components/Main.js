import React from 'react';
import Card from './Card.js';
import api from '../utils/api.js';

function Main(props) {
    const [userName,setUserName] = React.useState(null);
    const [userDescription,setUserDescription] = React.useState(null);
    const [userAvatar,setUserAvatar] = React.useState(null);

    React.useEffect(() => {
        api.getUserData()
          .then(data => {
            setUserName(data.name);
            setUserDescription(data.about);
            setUserAvatar(data.avatar);
          })
          .catch(err => {
            console.log(err);
          })
      }, []);
    
    return(
      <main className="container">
        <section className="profile">
          <div className="profile-image">
            <img className="profile-image__avatar" src={userAvatar} alt="Аватар"/>
            <button className="profile-image__change-button" onClick={props.onEditAvatar} type="button" aria-label="Изменить аватар"></button>
          </div>
          <div className="profile-info">
              <h1 className="profile-info__name">{userName}</h1>
              <button className="profile-info__edit-button" onClick={props.onEditProfile} type="button"></button>
              <p className="profile-info__description">{userDescription}</p>
          </div>
          <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
        </section>
        <section className="list-of-elements" aria-label="Список карточек">
            <ul className="elements">
              {props.cards.map((card) => (
              <Card
                key={card['_id']}
                card={card}
                onCardClick={props.onCardClick}
                onCardDelete={props.onCardDelete} 
                />)
              )}
            </ul>
        </section>
      </main>
    )
}

export default Main;