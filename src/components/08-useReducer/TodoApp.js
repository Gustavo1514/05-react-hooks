import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'
import { useForm } from '../../hooks/useForm'

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
  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  const handleSubmit = e => {
    e.preventDefault()
    if (description.trim() === '') {
      return
    }
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    const action = {
      type: 'add',
      payload: newTodo
    }

    dispatch(action)
    reset()
  }

  console.log(todos)
  return (
    <div>
      <h1>
        Todo App <small>({todos.length})</small>
      </h1>
      <hr />
      <div className='row'>
        <div className='col-sm-7'>
          <ul className='list-group list-group-flush'>
            {todos.map((todo, i) => (
              <li className='list-group-item' key={todo.id}>
                <p className='text-center '>
                  {i + 1}. {todo.description}
                </p>
                <button className='btn btn-danger'>Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-sm-5'>
          <h4>Agregar TODO</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='description'
              id=''
              placeholder='aprender ...'
              autoComplete='off'
              className='form-control'
              value={description}
              onChange={handleInputChange}
            />

            <button type='submit' className='btn btn-outline-primary mt-2'>
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TodoApp
