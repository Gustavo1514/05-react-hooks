import React from 'react'

const TodoListItem = ({ todo, handleToogle, handleDelete, i }) => {
  return (
    <li className='list-group-item' >
      <p
        className={`${todo.done && 'complete'}`}
        onClick={() => handleToogle(todo.id)}
      >
        {i + 1}. {todo.description}
      </p>
      <button className='btn btn-danger' onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  )
}

export default TodoListItem
