import React from 'react'
import useCounter from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import '../02-useEffect/effects.css'
const MultipleCustomHooks = () => {
  // const [numCuote, setnumCuote]=useState('1')

  const { counter, increment } = useCounter(1)
  console.log(counter)
  const state = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

  console.log(state)
  const { loading, data } = state
  const { author, quote } = !!data && data[0]
  //   console.log(author, quote)
  //   console.log(data)
  return (
    <div>
      <h1>Breaing Bad Cuotes</h1>
      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>Loading</div>
      ) : (
        <blockquote className='blockquote text-right'>
          <p className='mb-0'>{quote}</p>

          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      )}
      <button className='btn btn-primary' onClick={increment}>
        Nueva Frase
      </button>
    </div>
  )
}

export default MultipleCustomHooks
