import React, { useState } from 'react'
import '../02-useEffect/effects.css'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'
const ReactExampleRef = () => {
  const [show, setshow] = useState()

  return (
    <div>
      <h1>React example ref</h1>
      <hr />

      {show && <MultipleCustomHooks />}

      <button className='btn btn-primary' onClick={() => setshow(!show)}>
        Show / Hide
      </button>
    </div>
  )
}

export default ReactExampleRef
