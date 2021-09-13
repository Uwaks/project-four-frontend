import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ItemsIndex from './components/items/ItemsIndex'
import Home from './components/common/Home'
import ItemShow from './components/items/ItemShow'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Cart from './components/cart/Cart'

function App() {
  const [cartItems, setCartItems] = React.useState([])

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/items/:itemId">
          <ItemShow 
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </Route>  
        <Route path="/items">
          <ItemsIndex />
        </Route>
        <Route path="/cart">
          <Cart cartItems={cartItems}/>
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
