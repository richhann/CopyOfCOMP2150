import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

class BMIWidget extends LitElement {
  static properties = {
    _weight: {state: true},
    _height: {state: true},
  };

  static styles = css`
    :host {
        display: block;
        width: 250px;
        height: 250px;
        background-color: forestgreen;
        color: yellow;
    }
    :host input {
        width: 5em;
    }
  `;

  constructor() {
    super();
    this._weight = 60;
    this._height = 1.5;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  bmi() {
    return this._weight / this._height**2;
  }

  _updateHeight(event) {
    this._height = event.target.value;
  }

  _updateWeight(event) {
    this._weight = event.target.value;
  }

  render() {
    return html`
        <h3>BMI Calculator</h3>
        <form>
            <p>
                Height (m): 
                <input @change=${this._updateHeight} name='height'
                type=number value=${this._height}>
            </p>
            <p>
                Weight (kg): 
                <input @change=${this._updateWeight} name='weight' 
                type=number value=${this._weight}>
            </p>
        </form>
        <p>Your BMI is ${Math.round(10*this.bmi())/10}</p>
    `;
  }
}

customElements.define('bmi-widget', BMIWidget);
