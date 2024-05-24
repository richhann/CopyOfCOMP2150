import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { TaskModel } from '../../models.js';


class CreateTask extends LitElement {
    static properties = {
        id: 0,
        _task: { state: true },
    };

    static styles = css`
    
        form {
            display: flex;
            flex-direction: column;
        }
        form div {
            display: grid;
            grid-template-columns: 1fr 3fr;
        }
        input, textarea, select {
            width: 100%;
        }

        button {
            background-color: green;
            color: white;
            padding: 20px;
            border: groove;
            cursor: pointer;
        }
      `;

    connectedCallback() {
        super.connectedCallback();
        this._task = TaskModel.getTask(this.id);
    }

    /**
     * _submit - private method to handle form submission. Constructs
     * a new task from the form values and then updates the task via TaskModel
     * @param {Object} event - the click event
     */
    _submit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const due = new Date(formData.get('due'));
        const newTask = {
            summary: formData.get('summary'),
            text: formData.get('text'),
            priority: formData.get('priority'),
            due: due.valueOf(),
            category: formData.get('category')

        };
        TaskModel.createTask(newTask);
        event.target.reset();
        this._hideModal();
    }


    /**
     * click handler for the button to show the editor dialog
     */
    _showModal() {
        const dialog = this.renderRoot.querySelector('#create-task-dialog');
        dialog.showModal();
    }

    /**
     * click handler to close the editor dialog
     * @param {Object} event - the click event
     */
    _hideModal() {
        const dialog = this.renderRoot.querySelector('#create-task-dialog');
        dialog.close();
    }


    render() {
        // convert due date from milliseconds time to an ISO string
        // suitable for the datetime-local form input
        return html`
        <button @click=${this._showModal}>Create Task</button>
        <dialog id="create-task-dialog">
            <form @submit="${this._submit}">
                <div><label for="summary">Summary</label><input name="summary" required></div>
                <div><label for="text">Text</label><textarea name="text" required></textarea></div>
                <div><label for="priority">Priority</label><input name="priority" type="number" min="1" max="5" required></div>
                <div><label for="due">Due</label><input name="due" type="datetime-local" required></div>
                <div>
                    <label for="category">Category</label>
                    <select name="category" required>
                        <option value="ToDo">ToDo</option>
                        <option value="Doing">Doing</option>
                        <option value="Done">Done</option>
                    </select>
                </div>
                <div>
                    <button type="button" @click="${this._hideModal}">Cancel</button>
                    <input type="submit" value="Create Task">
                </div>
            </form>
        </dialog>`;
    }
}

customElements.define('create-task', CreateTask);