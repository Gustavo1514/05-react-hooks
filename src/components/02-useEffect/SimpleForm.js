import React, { useEffect, useState } from 'react'
import './effects.css'

const SimpleForm = () => {
  const [formState, setformState] = useState({
    name: '',
    email: ''
  })

  const handleInputChange = e => {
    setformState({ ...formState, [e.target.name]: e.target.value })
  }
  const { name, email } = formState
  useEffect(() => {
    // console.log('montado')
  }, [])

  useEffect(() => {
    // console.log('formstate change')
  }, [formState])

  useEffect(() => {
    // console.log('email change')
  }, [email])
  return (
    <>
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
    </>
  )
}

export default SimpleForm
