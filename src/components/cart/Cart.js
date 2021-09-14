import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

function Cart() {
  const history = useHistory()
  const cart = JSON.parse(localStorage.getItem('cartItem')) || []  

  const removeFromCart = () => {
    // localStorage.removeItem()
  }

  const checkout = () => {
    console.log('Clicked')
    history.push('/cart/checkout')
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
                <Button onClick={removeFromCart}>Remove item</Button>
              </Col>
            </Row>
          </Container>
        ))}
        <Col>
          <div>
            <Button onClick={checkout}>Proceed to Checkout</Button>
          </div>
        </Col>
      </div>  
    </section>
  )
}
export default Cart
