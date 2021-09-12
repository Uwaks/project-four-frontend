import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ItemsIndex from './components/items/ItemsIndex'
import Home from './components/common/Home'
import ItemShow from './components/items/ItemShow'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/items/:itemId">
          <ItemShow />
        </Route>  
        <Route path="/items">
          <ItemsIndex />
        </Route>
        <Route path="/auth/register">
          <Register />
        </Route>
        <Route path="/auth/login">
          <Login />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
