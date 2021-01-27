import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {
  const { setuser } = useContext(UserContext)
  
  return (
    <div>
      <h1>LoginScreen</h1>

      <hr />

      <button
        className='btn btn-primary'
        onClick={() => setuser({ id: 2, name: 'Henry' })}
      >
        LOGIN
      </button>
    </div>
  )
}

export default LoginScreen
