import React from 'react'
import axios from 'axios'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import ItemsIndex from './components/items/ItemsIndex'
import Home from './components/common/Home'
import Navbar from './components/common/Navbar'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/items')
      console.log(response.data)
    }
    getData()
  }, [])

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
