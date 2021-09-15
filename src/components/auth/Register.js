import React from 'react'
import { useHistory } from 'react-router'
import { Button, Container, Row } from 'react-bootstrap'

import { registerUser } from '../lib/api'

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  profileImage: '',
}

function Register() {
  const history = useHistory()
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)
  
  const handleChange = event => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
    setFormData({ ...formData, [event.target.name]: value })
    setFormErrors({ ...formErrors, [event.target.name]: '' })
    console.log(formData)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await registerUser(formData)
      history.push('/auth/login')
    } catch (err) {
      console.log(err.response.data)
    }
  }

  return (
    <Container className="form-container">
      <Row className="register-wrapper">
        <h1 className="comment-title">Register</h1>
      </Row>
      <Row className="register-wrapper">
        <form onSubmit={handleSubmit} className="form-wrapper">
          <div className="form-group">
            <label htmlFor="username">Username</label>
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
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              className="form-control" 
              aria-describedby="emailHelp" 
              placeholder="Enter Email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />  
            <small className="form-text text-muted">We never share your email with anyone else.</small>
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
          <div className="form-group">
            <label htmlFor="inputPassword">Confirm Password</label>
            <input 
              type="password" 
              className="form-control" 
              id="inputPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              name="passwordConfirmation"
              value={formData.passwordConfirmation}
            />    
          </div>
          <div className="btn-group btn-block">
            <Button 
              className="btn btn-block" 
              type="submit"
              variant="secondary"
            >
              Sign me up!
            </Button>
          </div>
        </form>
      </Row>
      
    </Container>
    
  )
}

export default Register