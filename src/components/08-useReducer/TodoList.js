import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ handleDelete, handleToogle, todos }) => {
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, i) => (
        <TodoListItem
          todo={todo}
          handleDelete={handleDelete}
          handleToogle={handleToogle}
          i={i}
          key={todo.id}
        />
      ))}
    </ul>
  )
}

export default TodoList
