import {Component} from 'react'

import TodoItem from '../TodoItem'

import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todosList: initialTodosList, todoInput: ''}

  deleteItem = uniqueId => {
    const {todosList} = this.state
    const filteredTodosList = todosList.filter(
      eachTodo => eachTodo.id !== uniqueId,
    )
    this.setState({todosList: filteredTodosList})
  }

  onChangeTodo = event => {
    this.setState({todoInput: event.target.value})
  }

  onAddTodo = () => {
    const {todosList, todoInput} = this.state
    const inputArray = todoInput.split(' ')
    const lastInputValue = inputArray[inputArray.length - 1]
    const checkCount = Number.isInteger(Number(lastInputValue))

    if (checkCount) {
      const newTodos = []
      inputArray.pop()
      for (
        let i = todosList.length + 1;
        i <= todosList.length + Number(lastInputValue);
        i += 1
      ) {
        const newId = i
        const modifiedInputTodo = inputArray.join(' ')
        const newTodo = {id: newId, title: modifiedInputTodo}
        newTodos.push(newTodo)
      }
      console.log(newTodos)
      this.setState(prevState => ({
        todosList: [...prevState.todosList, ...newTodos],
      }))
    } else {
      const newId = todosList.length + 1
      const newTodo = {id: newId, title: todoInput}
      this.setState(prevState => ({
        todosList: [...prevState.todosList, newTodo],
      }))
    }
  }

  render() {
    const {todosList, todoInput} = this.state

    return (
      <div className="simpletodos-bg">
        <div className="simpletodos-container">
          <h1 className="todos-title">Simple Todos</h1>
          <input
            className="add-todo-input"
            type="text"
            placeholder="Add Todo"
            onChange={this.onChangeTodo}
            value={todoInput}
          />
          <button className="add-button" type="button" onClick={this.onAddTodo}>
            Add
          </button>
          <ul className="unordered-list">
            {todosList.map(eachTodo => (
              <TodoItem
                todoItem={eachTodo.title}
                key={eachTodo.id}
                uniqueId={eachTodo.id}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
