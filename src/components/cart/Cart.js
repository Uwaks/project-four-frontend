import React from 'react'

function Cart() {
  const cart = JSON.parse(localStorage.getItem('cartItem')) || []  
  console.log(cart) 
  console.log(cart.length) 

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
          <div key={item.id}>
            <img src={item.image} alt={item.playerName}/>
            <div>{item.playerName}</div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Cart
