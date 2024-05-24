import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

/**
 * WidgetContainer
 * <widget-container header="Widgets">
 *    <widget-block></widget-block>
 *    <widget-block></widget-block>
 * </widget-container>
 * Container for a collection of widgets
 */
class WidgetContainer extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    div {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    h2 {
      background-color: #000000;
      color: #fffff;
      text-align: center;
      font-family: 'Arial', sans-serif;
      font-size: 40px;
      grid-row: 1;
      padding: 10px;
      margin-top: 0;
    }
  `;

  constructor() {
    super();
    this.header = 'Widgets';
  }

  render() {
    return html`
    <h2>${this.header}</h2>
      <div>
        <slot></slot>
      </div>
    `;
  }
}

customElements.define('widget-container', WidgetContainer);
