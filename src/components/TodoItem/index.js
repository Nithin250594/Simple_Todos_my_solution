import {Component} from 'react'
import './index.css'

class TodoItem extends Component {
  state = {
    isEdit: true,
    isTodoChecked: false,
    todoItemInput: '',
  }

  componentDidMount() {
    const {todoItem} = this.props
    this.setState({todoItemInput: todoItem})
  }

  onClickEdit = () => {
    this.setState(prevState => ({isEdit: !prevState.isEdit}))
  }

  onChangeChecked = () => {
    this.setState(prevState => ({isTodoChecked: !prevState.isTodoChecked}))
  }

  onChangeInputEdit = event => {
    this.setState({todoItemInput: event.target.value})
  }

  render() {
    const {isEdit, isTodoChecked, todoItemInput} = this.state
    const {todoItem, uniqueId, deleteItem, editTodoItem} = this.props

    const onDelete = () => {
      deleteItem(uniqueId)
    }

    const onClickSave = () => {
      editTodoItem(uniqueId, todoItemInput)
    }

    const editOrSaveButton = isEdit ? 'Edit' : 'Save'
    const saveButtonStyle = isEdit ? 'edit-button' : 'save-button'
    const todoTitleStyle = isTodoChecked ? 'todo-checked' : 'todo-unchecked'

    return (
      <li className="todo-Items-list" key={uniqueId}>
        <div className="each-todo-section">
          <input type="checkbox" onChange={this.onChangeChecked} />
          {isEdit ? (
            <p className={`todoItem-title ${todoTitleStyle}`}>{todoItem}</p>
          ) : (
            <input
              type="text"
              className="todo-title-edit"
              value={todoItemInput}
              onChange={this.onChangeInputEdit}
            />
          )}
        </div>

        <div>
          <button
            className={`edit-save-button ${saveButtonStyle}`}
            type="button"
            onClick={() => {
              this.onClickEdit()
              onClickSave()
            }}
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
