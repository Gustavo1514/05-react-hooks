import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'
// import { useForm } from '../../hooks/useForm'
import TodoList from './TodoList'
import TodoAdd from './TodoAdd'

// const initialState = [
//   {
//     id: new Date().getTime(),
//     description: 'Aprender React',
//     done: false
//   }
// ]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init)
  // console.log(todos)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // console.log(todos)

  const handleDelete = todoId => {
    // console.log(todo)

    const action = {
      type: 'delete',
      payload: todoId
    }
    dispatch(action)
  }

  const handleToogle = todoId => {
    dispatch({
      type: 'toggle',
      payload: todoId
    })
  }

  const handleAddTodo = newTodo => {
    dispatch({
      type: 'add',
      payload: newTodo
    })
  }
  return (
    <div>
      <h1>
        Todo App <small>({todos.length})</small>
      </h1>
      <hr />
      <div className='row'>
        <div className='col-sm-7'>
          <TodoList
            handleToogle={handleToogle}
            handleDelete={handleDelete}
            todos={todos}
          />
        </div>
        <div className='col-sm-5'>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  )
}

export default TodoApp
