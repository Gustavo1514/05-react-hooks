import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import './styles.css'

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Aprender React',
    done: false
  }
]
const TodoApp = () => {
  const [todos] = useReducer(todoReducer, initialState)
  console.log(todos)
  return (
    <div>
      <h1>
        Todo App <small>({todos.length})</small>
      </h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <ul className='list-group list-group-flush'>
            {todos.map((todo, i) => (
              <li className='list-group-item' key={todo.id}>
                <p className='text-center'>
                  {i + 1}. {todo.description}
                </p>
                <button className='btn btn-danger'>Borrar</button>
              </li>
            ))}
          </ul>
        </div>
        <div className='col-5'>Agregar</div>
      </div>
    </div>
  )
}

export default TodoApp
