import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ItemsIndex from './components/items/ItemsIndex'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/items">
          <ItemsIndex />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
