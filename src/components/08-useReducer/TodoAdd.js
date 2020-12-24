import React from 'react'
import { useForm } from '../../hooks/useForm'

const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = e => {
    e.preventDefault()
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      done: false
    }

    handleAddTodo(newTodo)
    reset()
  }
  return (
    <>
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
    </>
  )
}

export default TodoAdd
