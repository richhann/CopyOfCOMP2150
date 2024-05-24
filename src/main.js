import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './components/widget-Creation.js';
import './components/blog-block.js';
import './components/widget-container.js';
import './components/ad-widget.js';
import './components/login-widget.js';
import './components/task-manager.js';
import './components/mood-widget.js';
import './components/timer-widget.js';
import './components/task-buttons/edit-task.js';
import './components/task-buttons/create-task.js'
import './components/task-buttons/delete-task.js'
/**
 * Comp2110TaskManager component constructs the main UI of the application
 */
class Comp2110TaskManager extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host { 
      font-size: 14pt;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
    }

    main {
      display: grid;
      grid-template-rows: auto 2fr 1fr auto;
    }

    .app-footer {
      background-color: #8458B3;
      color: #e5eaf5;
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      grid-row: 4;
      margin-left: 5px;
    }

    widget-container {
      grid-row: 3;
      background: #a0d2eb;
      color:  #e5eaf5;
      border: 2px solid #8458b3;
      z-index:100;
    }

    task-manager {
      
      grid-row : 2;
      align-items: center;
      display: block;
      margin-top: 40px;
    }

    header {
      color: #e5eaf5;
      font-family: courier;
      background: rgb(252,70,107);
      background: linear-gradient(0deg, rgba(252,70,107,0) 10%, rgba(207,76,142,1) 40%, rgba(63,94,251,1) 100%);

    }
    
    header h1{
      background-color: #000000;
      color: #fffff;
      text-align: center;
      font-family: 'Arial', sans-serif;
      font-size: 40px;
      grid-row: 1;
      padding: 10px;
    }
    
`;

  constructor() {
    super();
    this.header = 'COMP2110 Task Manager';
  }

  render() {
    return html`
      <header>
        <h1>${this.header}</h1>
        <login-widget></login-widget>
      </header>

      <main>      
        <task-manager></task-manager>     
        <widget-container header="Widgets">
          <ad-widget></ad-widget>
          <mood-widget></mood-widget>
          <timer-widget></timer-widget>
          <widget-block></widget-block>
        </widget-container>
      </main>

      <p class="app-footer">
        🚽 Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}

customElements.define('comp2110-task-manager', Comp2110TaskManager);
