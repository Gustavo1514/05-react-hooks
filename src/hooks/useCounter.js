import { useState } from 'react'

export const useCounter = (initialState = 10) => {
  const [counter, setcounter] = useState(initialState)

  const increment = () => {
    setcounter(counter + 1)
  }

  const decrement = (factor = 1) => {
    setcounter(counter - factor)
  }

  const reset = () => {
    setcounter(initialState)
  }
  return {
    counter,
    increment,
    decrement,
    reset
  }
}

export default useCounter
