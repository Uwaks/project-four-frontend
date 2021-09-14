import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { isAuthenticated } from '../lib/auth'


function Checkout() {
  const isAuth = isAuthenticated()
  const history = useHistory()

  const handleClick = () => {
    console.log('Clicked')
    // add bought_by field
    // add buyer.id to item.id to bought_by field
  }

  const login = () => {
    history.push('/auth/login/')
  }

  return (
    <>
      <h1>Checkout Page</h1>
      
      {isAuth && (
        <Button onClick={handleClick}>Buy</Button>
      )}

      {!isAuth && (
        <Button onClick={login}>Login to Buy</Button>
      )}
      
    </>
    

  )
}

export default Checkout
