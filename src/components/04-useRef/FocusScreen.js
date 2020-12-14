import React, { useRef } from 'react'
import '../02-useEffect/effects.css'
const FocusScreen = () => {
  const inputRef = useRef()
  console.log(inputRef)
  const handleClick = () => {
    // document.querySelector('input').select()
    inputRef.current.select()
    console.log(inputRef)
  }
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        type='text'
        name=''
        id=''
        className='form-control'
        placeholder='Su nombre'
        ref={inputRef}
      />

      <button className='btn btn-primary boton-focus' onClick={handleClick}>
        Focus
      </button>
    </div>
  )
}

export default FocusScreen
