import React from 'react'

function Cart({ cartItems }) {
  // const [cartItems, setCartItems] = React.useState([])
  
  // const addToCart = () => {
  //   setCartItems([...cartItems, item])
  // }
  console.log(cartItems)
  return (
    <section>
      <h1>Cart items = {cartItems}</h1>
      {/* <div>
        {cartItems.length === 0 && (
          <div>Your cart is empty</div>
        )}
      </div>
      {cartItems.map(item => (
        <div key={item.id}>
          <CartItem />
        </div>
      ))} */}
    </section>
  )
}

export default Cart
