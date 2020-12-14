import React, { useCallback, useEffect, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallBackHook = () => {
  const [counter, setcounter] = useState(10)

  //   const increment = () => {
  //     setcounter(counter + 1)
  //   }

  const increment = useCallback(
    num => {
      setcounter(c => c + num)
    },
    [setcounter]
  )

  return (
    <div>
      <h1>useCallback Hooks: {counter}</h1>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  )
}

export default CallBackHook
