
class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._userUrl = `${this._baseUrl}/users/me`;
    this._cardsUrl = `${this._baseUrl}/cards`;
    this._likesUrl = `${this._baseUrl}/cards/likes`;
    this._token = headers['authorization'];
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`)
  }

  getUserData() {
    return fetch(this._userUrl, {
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
  }

  saveUserChanges({ name, about }) {
    console.log(name);
    return fetch(this._userUrl, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about,
        })
      })
      .then(this._checkResponse)
  }

  changedAvatar(src) {
    return fetch(`${this._userUrl}/avatar`, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          avatar: src,
        })
      })
      .then(this._checkResponse)
  }

  getInitialCards() {
    return fetch(this._cardsUrl, {
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
  }

  postNewCard({ name, link }) {
    return fetch(this._cardsUrl, {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          link: link,
        })
      })
      .then(this._checkResponse)
  }

  removeCard(cardId) {
    return fetch(`${this._cardsUrl}/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
  }

  likedCard(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
        method: 'PUT',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
  }

  dislikedCard(cardId) {
    return fetch(`${this._likesUrl}/${cardId}`, {
        method: 'DELETE',
        headers: {
          authorization: this._token,
        }
      })
      .then(this._checkResponse)
  }
}

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-63',
  headers: {
    authorization: 'a1f9f0af-27ca-45f0-9642-1f29074bddcb',
    'Content-Type': 'application/json'
  }
});

export default api;


