import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ItemsIndex from './components/items/ItemsIndex'
import Home from './components/common/Home'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/items">
          <ItemsIndex />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}

export default App
