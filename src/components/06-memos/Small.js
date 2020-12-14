import React, { memo } from 'react'

const Small = memo(({ value }) => {
  console.log('se vuelve a mostrar :(')
  return <small>{value}</small>
})

export default Small
