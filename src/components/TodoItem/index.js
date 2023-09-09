// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, uniqueId, deleteItem} = props

  const onDelete = () => {
    deleteItem(uniqueId)
  }

  return (
    <li className="todo-Items-list">
      <p className="todoItem-title">{todoItem}</p>
      <button type="button" className="button-style" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
