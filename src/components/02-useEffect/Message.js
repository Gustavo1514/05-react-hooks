import React, { useEffect, useState } from 'react'

export const Message = () => {
  const [coors, setcoors] = useState({ x: 0, y: 0 })

  const { x, y } = coors
  useEffect(() => {
    // console.log('componenente montado')
    const mouseMove = e => {
      //   console.log(' :) ')
      const coords = { x: e.x, y: e.y }
      setcoors(coords)
    }

    window.addEventListener('mousemove', mouseMove)
    // window.addEventListener('mousemove', e => {
    //   console.log(e)
    //   const coors = { x: e.x, y: e.y }
    //   console.log(coors)
    //   console.log('  :)  ')
    // })

    return () => {
      console.log('componenente desmontado')
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])
  return (
    <div>
      <h3>You are awesome</h3>
      <p>
        x:{x} y:{y}
      </p>
    </div>
  )
}
