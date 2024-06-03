import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {isEdit: true, isTodoChecked: false}

  onClickEdit = () => {
    this.setState(prevState => ({isEdit: !prevState.isEdit}))
  }

  onChangeChecked = () => {
    this.setState(prevState => ({isTodoChecked: !prevState.isTodoChecked}))
  }

  render() {
    const {isEdit, isTodoChecked} = this.state
    const {todoItem, uniqueId, deleteItem} = this.props

    const onDelete = () => {
      deleteItem(uniqueId)
    }

    const editOrSaveButton = isEdit ? 'Edit' : 'Save'
    const saveButtonStyle = isEdit ? 'edit-button' : 'save-button'
    const todoTitleStyle = isTodoChecked ? 'todo-checked' : 'todo-unchecked'

    return (
      <li className="todo-Items-list" key={uniqueId}>
        <div className="each-todo-section">
          <input type="checkbox" onChange={this.onChangeChecked} />
          <p className={`todoItem-title ${todoTitleStyle}`}>{todoItem}</p>
        </div>

        <div>
          <button
            className={`edit-save-button ${saveButtonStyle}`}
            type="button"
            onClick={this.onClickEdit}
          >
            {editOrSaveButton}
          </button>
          <button type="button" className="button-style" onClick={onDelete}>
            Delete
          </button>
        </div>
      </li>
    )
  }
}

export default TodoItem
