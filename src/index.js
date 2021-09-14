import React from 'react'
import ReactDOM from 'react-dom'
import './styles/main.scss'
import App from './App'
import { CartProvider } from 'react-use-cart'

ReactDOM.render(
  <CartProvider><App /></CartProvider>, 
  document.getElementById('root')
)