import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { useLocation, useHistory } from 'react-router-dom'
import { isAuthenticated, removeToken } from '../lib/auth'

function Header() {
  const isAuth = isAuthenticated()
  console.log('isAuthenticated', isAuth)
  const [isOpen, setIsOpen] = React.useState(false)
  const { pathname } = useLocation()
  const history = useHistory()

  // const handleToggle = () => {
  //   setIsOpen(!isOpen)
  // }

  React.useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const logOut = () => {
    removeToken()
    history.push('/')
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand>SWAPxSHOP</Navbar.Brand>
        </LinkContainer>
          
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <LinkContainer to='/items/'>
            <Nav.Link>
            Shop
            </Nav.Link>
          </LinkContainer>
        
          <Nav className="ml-auto">
            
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className='fas fa-shopping-cart'></i>Cart
              </Nav.Link>
            </LinkContainer>
            {!isAuth && (
              <LinkContainer to='/auth/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i>Sign In
                </Nav.Link>
              </LinkContainer>
            )}
            {isAuth && (
              <LinkContainer to='/items/new/'>
                <Nav.Link>
                  <i className=''></i>Create New Shirt
                </Nav.Link>
              </LinkContainer>
            )}
            {isAuth && (
              <Button onClick={logOut}>Log Out</Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header