import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { isAuthenticated } from '../lib/auth'

function Cart({ setCartItems, cartItems, itemId }) {
  const history = useHistory()
  let cart = JSON.parse(localStorage.getItem('cartItem')) || []  
  const [isEmpty, setIsEmpty ] = React.useState(true)
  const isAuth = isAuthenticated

  React.useEffect(() => {
    const getCart = () => {
      if (cart.length !== 0)
        setIsEmpty(!isEmpty)
    }
    getCart()
  }, [])

  const removeFromCart = () => {
    localStorage.removeItem('cartItem')
    cart = []
    setIsEmpty(!isEmpty)
  }

  const checkout = () => {
    console.log('Clicked')
    history.push('/cart/checkout')
  }

  const backToShop = () => {
    history.push('/items')
  }

  return (
    <section>
      {console.log('This is the cart', cart)}
      <div>
        {cart.length === 0 && (
          <div>Your cart is empty</div>
        )}
      </div>
      
      <div>
        {cart.map(item => (
          <Container key={item.id}>
            <Row>
              <Col>
                <Link  to={`/items/${item.id}/`}>
                  <img src={item.image} alt={item.playerName}/>
                </Link>
              </Col>
              <Col>
                <div>{item.playerName}</div>
                <div>{item.price}</div>
                <Button onClick={removeFromCart}>Empty Cart</Button>
              </Col>
            </Row>
          </Container>
        ))}
        <Col>
          <div>
          Total: £<span> {cart.reduce((sum, price) => {
              return sum + Number(price.price)
            }, 0)}</span>
          </div>
          {console.log(cart, isEmpty)}
          {!isEmpty && (
            <div>
              <Button onClick={checkout}>Proceed to Checkout</Button>
            </div>
          )}
          <div><Button onClick={backToShop}>Continue Shopping</Button></div>
        </Col>
      </div>  
    </section>
  )
}
export default Cart
