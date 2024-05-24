import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { TaskModel } from '../../models.js';


class DeleteTask extends LitElement {
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
            cursor: pointer;
            padding: 4px 8px;
            background-color:red;
            color: #ffffff;
            border: color-mix(in hsl shorter hue, color percentage, color percentage);
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          }

        
      `;

    connectedCallback() {
        super.connectedCallback();
        this._task = TaskModel.getTask(this.id);
        console.log(this.id + " connectedCallBaCK");
    }

    /**
     * _submit - private method to handle form submission. Constructs
     * a new task from the form values and then updates the task via TaskModel
     * @param {Object} event - the click event
     */
    _submit(event) {
        event.preventDefault();
        console.log(this.id)
        TaskModel.deleteTask(this.id);
        this._hideModal();
    }


    /**
     * click handler for the button to show the editor dialog
     */
    _showModal() {
        const dialog = this.renderRoot.querySelector('#delete-task-dialog');
        dialog.showModal();
    }

    /**
     * click handler to close the editor dialog
     * @param {Object} event - the click event
     */
    _hideModal() {
        const dialog = this.renderRoot.querySelector('#delete-task-dialog');
        dialog.close();
    }


    render() {

        return html`
        <button @click=${this._showModal}>Delete</button>
        <dialog id="delete-task-dialog">
            <form @submit="${this._submit}">
                </div>
                <div>
                    <button type="button" @click="${this._hideModal}">Cancel</button>
                    <input type="submit" value="Delete Task">
                </div>
            </form>
        </dialog>`;
    }
}

customElements.define('delete-task', DeleteTask);