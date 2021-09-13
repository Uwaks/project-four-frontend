import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap'

import { loginUser } from '../lib/api'
import { setToken } from '../lib/auth'

function Login() {
  const history = useHistory()
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  })
  const [isError, setIsError] = React.useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await loginUser(formData)
      setToken(data.token)
      history.push('/cart')
    } catch (err) {
      setIsError(true)
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="inputPassword">Username</label>
          <input 
            type="username" 
            className="form-control" 
            id="username"
            placeholder="Username"
            onChange={handleChange}
            name="username"
            value={formData.username}
          /> 
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="inputPassword"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={formData.password}
          />    
        </div>
        <div className="btn-group">
          <Button className="btn-info" type="submit">Login</Button>
        </div>
      </form>
    </section>      
  )
}

export default Login