import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/ProcesoPesado'
import useCounter from '../../hooks/useCounter'

import '../02-useEffect/effects.css'
const MemoHook = () => {
  const { counter, increment } = useCounter(5000)
  const [show, setshow] = useState(true)
  //   console.log(show);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>
        Counter: <small>{counter} </small>
      </h3>
      <hr />

      <p>{memoProcesoPesado} </p>
      <button className='btn btn-primary' onClick={increment}>
        Incrementar
      </button>

      <button className='btn btn-danger ml-3' onClick={() => setshow(!show)}>
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}

export default MemoHook