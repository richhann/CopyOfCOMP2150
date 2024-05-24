import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { TaskModel } from '../models.js';
import './task-buttons/edit-task.js';

/**
 * TaskCard <task-card id=N>
 * Display the details of the task with id N in a 'card'
 * as part of the task board
 */
class TaskCard extends LitElement {
  static properties = {
    id: 0,
    _task: { state: true },
  };

  static styles = css`
    :host {
        display: block;
        width: 200px;
        background-color: #e5eaf5;
        color: #494D5F;
        margin: 10px;
        border-style: outset;
        color:#000;
        background:#ffc;
        padding:1em;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
    }
    :host input {
        width: 5em;
    }
    
    h2 {
      background-color: #007bff;
      font-size: large;
      font-variant: small-caps;
      color: #ffffff;
      text-align: center;
      font-family: 'Arial', sans-serif;
      border-radius: 8px 8px 0 0;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    .task-priority {
      padding: 5px 10px;
      color: #fff;
      border-radius: 4px;
      font-weight: bold;
      display: inline-block;
      margin-top: 10px;
      background-color: #f44336;
    }

    
  `;

  connectedCallback() {
    super.connectedCallback();
    this._loadData();
    // set up an event listener to load new tasks when they change
    window.addEventListener('tasks', () => {
      this._loadData();
    });
  }

  _loadData() {
    this._task = TaskModel.getTask(this.id);
  }


  render() {
    if (this._task) {
      const ts = new Date(parseInt(this._task.timestamp));
      const due = new Date(parseInt(this._task.due));
      return html`
      <div>
        <h2>${this._task.summary}</h2>
        <p class='task-timestamp'>${ts.toDateString()}</p>
        <p class='task-due'>${due.toDateString()}</p>
        <p class='task-content'>${this._task.text}</p>
        <p class='task-priority'>${this._task.priority}</p>

        <edit-task id=${this.id}></edit-task>
        
        <delete-task id=${this.id}></delete-task>
  
      </div>
      `;
    } else {
      return html`<div>Loading...</div>`;
    }
  }
}
customElements.define('task-card', TaskCard);
