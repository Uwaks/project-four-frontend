import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { isAuthenticated } from '../lib/auth'
import { boughtBy, getUserProfile } from '../lib/api'
import ItemComment from '../items/ItemComment'


function Checkout() {
  const isAuth = isAuthenticated()
  const history = useHistory()
  const cart = JSON.parse(localStorage.getItem('cartItem')) || []
  console.log(cart)
  const [currentUser, setCurrentUser] = React.useState(null)

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const res = await getUserProfile()
        setCurrentUser(res.data)
        console.log(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [])

  const handleClick = () => {
    // return currentUser.id
    console.log('This is the cart ', cart)
    // add bought_by field
    // add buyer.id to item.id to bought_by field
    // const itemId = cart?.map(item => {
    //   const owner = { ...item, boughtBy: currentUser.id }
    //   return item.id.map(id )
    //   console.log('Cart mapped', owner)
    //   console.log(currentUser)
    // })
    // itemId()
    const getData = async () => {
      const res = await boughtBy()
      console.log(res.data)
    } 
    getData()
  }

  const login = () => {
    history.push('/auth/login/')
  }

  return (
    <>
      <h1>Checkout Page</h1>
      {console.log(cart)}
      <div>{cart.image}</div>
      
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
