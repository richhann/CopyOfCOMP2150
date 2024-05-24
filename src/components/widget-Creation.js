import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


/**
 * WidgetBlock <widget-block header="Sample Widget">
 * Base example for a widget, used as a placeholder in design for unimplemented
 * widgets
 */
class WidgetBlock extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
        display: block;
        width: 250px;
        height: 250px;
        border-radius: 20px;
        color:white;
        background: rgb(55, 57, 59);
        background: radial-gradient(circle, rgba(55, 57, 59, 1) 79%, rgba(98, 98, 98, 0.9071925754060325) 90%, rgba(255, 255, 255, 0.08120649651972156) 100%);
    }
  `;

  constructor() {
    super();
    this.header = 'Widget';
  }

  render() {
    return html`
        <h3> Creation & Boom </h3>
        <create-task></create-task>
    `;
  }
}

customElements.define('widget-block', WidgetBlock);
