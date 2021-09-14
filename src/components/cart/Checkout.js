import React from 'react'
import { Button } from 'react-bootstrap'

const handleClick = () => {
  console.log('Clicked')
  // add bought_by field
}

function Checkout() {
  return (
    <>
      <h1>Checkout Page</h1>
      <Button onClick={handleClick}>Buy</Button>
    </>
    

  )
}

export default Checkout
