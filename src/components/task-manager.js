import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { TaskModel } from '../models.js';
import './task-board.js';

/**
 * TaskManager <task-manager>
 * Display a set of task boards for three categories of task
 * Todo, Doing and Done
 */
class TaskManager extends LitElement {
  static properties = {
    _tasks: { state: true },
    _message: { state: true },
  };

  static styles = css`
    .task-manager {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
  `;

  constructor() {
    super();
    // trigger loading of task data
    TaskModel.loadData();
  }

  connectedCallback() {
    super.connectedCallback();
  }

  render() {
    return html`
      <div class='task-manager'>
        <task-board category='ToDo'></task-board>
        <task-board category='Doing'></task-board>
        <task-board category='Done'></task-board>
      </div>`;
  }
}

customElements.define('task-manager', TaskManager);
