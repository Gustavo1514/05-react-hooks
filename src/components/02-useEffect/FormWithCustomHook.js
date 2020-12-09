import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import './effects.css'

const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  // const handleInputChange = e => {
  //   setformState({ ...formState, [e.target.name]: e.target.value })
  // }
  const { name, email, password } = formValues
  useEffect(() => {
    console.log('email cambio ')
  }, [email])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>UseEffect</h1>
      <hr />

      <div className='form-group'>
        <input
          type='text'
          name='name'
          className='form-control'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          name='email'
          className='form-control'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          type='password'
          name='password'
          className='form-control'
          placeholder='****'
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type='submit' className='btn btn-primary'>
        Guardar
      </button>
    </form>
  )
}

export default FormWithCustomHook
