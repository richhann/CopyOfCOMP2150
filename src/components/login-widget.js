import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { getUser, storeUser, deleteUser } from '../auth.js';
import { BASE_URL } from '../config.js';

/**
 * LoginWidget <login-widget>
 * Present a login form and handle user authentication, if a user
 * is logged in, display their name and a logout button
 */
class LoginWidget extends LitElement {
  static properties = {
    _loginUrl: { type: String, state: true },
    _user: { type: String, state: true },
    _errorMessage: { type: String, state: true },
  };

  static styles = css`
    :host {
        display: block;
        padding: 16px;
        border: 2px solid #e0e0e0;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        background-color: #fff;
        max-width: 300px;
        margin: 0 auto;
    }
    
    button {
      cursor: pointer;
      padding: 4px 8px;
      background-color: #007bff;
      color: #ffffff;
      border: color-mix(in hsl shorter hue, color percentage, color percentage);
      border-radius: 5px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    }
    
    button, input[type="submit"] {
      cursor: pointer;
      padding: 8px 16px;
      background-color: #007bff;
      color: #ffffff;
      border: none;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      margin-top: 10px;
    }

    input[type="text"], input[type="password"] {
      padding: 8px;
      margin: 10px 0;
      display: block;
      width: calc(100% - 22px); /* Adjusting for padding and border */
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    input[type="text"], input[type="Username"] {
      padding: 8px;
      margin: 10px 0;
      display: block;
      width: calc(100% - 22px); /* Adjusting for padding and border */
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    form{
      color: black;
      font-family: "Comic Sans MS", "Comic Sans", cursive;
    }

    p{
      color: black;
    }
    `;
  //sorry comic sans <3

  constructor() {
    super();
    this._loginUrl = `${BASE_URL}users/login`;
    const user = getUser();
    if (user) {
      this._user = user;
    }
  }

  _submitForm(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    fetch(this._loginUrl, {
      method: 'post',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    }).then((result) => result.json()).then((response) => {
      if (response.error) {
        this._errorMessage = response.error;
      } else {
        this._user = response;
        storeUser(response);
      }
    });
  }

  _logout() {
    deleteUser();
    this._user = null;
  }

  render() {
    if (this._user) {
      return html`<p>Logged in as ${this._user.name}</p>
              <button @click=${this._logout}>Logout</button>`;
    }
    return html`
      <p>${this._errorMessage}</p>
      <form @submit=${this._submitForm}>
          Username: <input type="username" name="username">
          Password: <input type="password" name="password">
          <input type='submit' value='Login'>
      </form>`;
  }
}

customElements.define('login-widget', LoginWidget);
