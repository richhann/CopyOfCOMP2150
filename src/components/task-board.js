import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { TaskModel } from '../models.js';
import './task-card.js';

/**
 * TaskBoard <task-board category="XXX">
 * Display tasks in the given category
 */
class TaskBoard extends LitElement {
  static properties = {
    category: {},
    _tasks: { state: true },
    _message: { state: true },
    rotation: { type: Number }
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      background-color: #494d5f;
      color: #e5eaf5;
      border: 10px solid #8458b3;
      border-radius: 0 30px 0 0;
      padding: 10px;
      margin: 10px;
      width: 80%;
      height: 80vh; 

      overflow: auto; /*adds a scroll Bar ! */
  
    }
    :host input {
        width: 5em;
    }
    .task-actions {
      display: block;
    }
    .task-actions li {
      display: inline-block;
    }

    h3{
        background-color: #007bff;
        font-size: large;
        font-variant: small-caps;
        color: #ffffff;
        text-align: center;
        font-family: "Comic Sans MS", "Comic Sans", cursive;
        border-radius: 0 10px 0 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    
  `;
  //sorry comic san is just supreme

  constructor() {
    super();
    // set an event listener to refresh the display when the data is ready
    window.addEventListener('tasks', () => {
      this._loadData();
    });

    this.rotation = Math.round(Math.random() * 12) - 6; //random Rotation (0 - 1 * range ) - (chance to tilt on negative direction)
  }
  /*
  MODDED
  */
  _loadData() {
    // get the up to date task list
    // trimming category to remove whitespace... hopefully this works
    const trimmedCategory = this.category.trim();
    this._tasks = TaskModel.getTasks(trimmedCategory);
    this.render();
  }

  render() {
    if (this._message) {
      return html`<h3>${this.category}</h3> <p>${this._message}</p>`;
    } else if (this._tasks) {
      return html`
          <div>
            <h3>${this.category}</h3>

            <div class="card-list">
              ${this._tasks.map((task) => {
        return html`
        <task-card id=${task.id} style="transform: rotate(${this.rotation}deg);" ></task-card>`;
      })}
            </div>
          </div>
        `;
    } else {
      return html`<h3>${this.category}</h3><p>Loading....</p>`;
    }
  }
}

customElements.define('task-board', TaskBoard);
