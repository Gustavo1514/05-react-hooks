import React, { useState } from 'react'
import AppRouter from './AppRouter'
import { UserContext } from './UserContext'

const MainApp = () => {
  const [user, setuser] = useState({})

  return (
    <div>
      {/* <h1>MainApp</h1> */}
      <hr />

      <UserContext.Provider
        value={{
          user,
          setuser,
        
        }}
      >
        <AppRouter />
      </UserContext.Provider>
    </div>
  )
}

export default MainApp
