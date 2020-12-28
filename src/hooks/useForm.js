import { useState } from 'react'

export const useForm = (initialState = {}) => {
  const [values, setvalues] = useState(initialState)

  const reset = () => {
    setvalues(initialState)
  }
  const handleInputChange = e => {
    // console.log('event',e);
    setvalues({ ...values, [e.target.name]: e.target.value })
  }

  return [values, handleInputChange, reset]
}
