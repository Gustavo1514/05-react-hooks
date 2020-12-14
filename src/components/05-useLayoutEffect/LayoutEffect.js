import React, { useLayoutEffect, useRef, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './layout.css'
const Layout = () => {
  // const [numCuote, setnumCuote]=useState('1')

  const { counter, increment } = useCounter(1)
  //   console.log(counter)
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  //   console.log(state)
  const { data } = state
  const { quote } = !!data && data[0]
  const pTag = useRef()
  const [boxSize, setboxSize] = useState({})
  //   console.log(author, quote)
  //   console.log(data)

  useLayoutEffect(() => {
    // console.log('hay')

    console.log(pTag.current.getBoundingClientRect())
    setboxSize(pTag.current.getBoundingClientRect())
  }, [quote])
  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className='blockquote text-right'>
        <p className='mb-0' ref={pTag}>
          {quote}
        </p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className='btn btn-primary' onClick={increment}>
        Nueva Frase
      </button>
    </div>
  )
}

export default Layout
