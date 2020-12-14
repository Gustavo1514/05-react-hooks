import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import Small from './Small'
import '../02-useEffect/effects.css'
const Memorize = () => {
  const { counter, increment } = useCounter(10)
  const [show, setshow] = useState(true)
  //   console.log(show);
  return (
    <div>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
      <button className='btn btn-primary' onClick={increment}>
        Incrementar
      </button>

      <button className='btn btn-danger ml-3' onClick={() => setshow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}

export default Memorize
