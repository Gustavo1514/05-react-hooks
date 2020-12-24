import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const AboutScreen = () => {
  const { user, setuser } = useContext(UserContext)

  const handleClick = () => {
    setuser({})
  }
  return (
    <div>
      <h1>AboutScreen</h1>
      <hr />

      <pre>{JSON.stringify(user, null, 3)}</pre>

      <button className='btn btn-danger' onClick={handleClick}>
        Logout
      </button>
    </div>
  )
}

export default AboutScreen
