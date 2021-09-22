import React from 'react' 
import { Button, Container, Toast, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { isAuthenticated } from '../lib/auth'
import { getUserProfile } from '../lib/api'
// import ItemComment from '../items/ItemComment'


function Checkout() {
  const isAuth = isAuthenticated()
  const history = useHistory()
  const cart = JSON.parse(localStorage.getItem('cartItem')) || []
  // eslint-disable-next-line no-unused-vars
  const [currentUser, setCurrentUser] = React.useState(null)
  const [showB, setShowB] = React.useState(false)

  React.useEffect(() => {
    const getUser = async () => {
      try {
        const res = await getUserProfile()
        setCurrentUser(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getUser()
  }, [])

  const handleClick = () => {
    // return currentUser.id
    toggleShowB()
    // add bought_by field
    // add buyer.id to item.id to bought_by field
    // const itemId = cart?.map(item => {
    //   const owner = { ...item, boughtBy: currentUser.id }
    //   return item.id.map(id )
    //   console.log('Cart mapped', owner)
    //   console.log(currentUser)
    // })
    // itemId()
    // const getData = async () => {
    //   const res = await boughtBy()
    //   console.log(res.data)
    // } 
    // getData()
  }

  const toggleShowB = () => setShowB(!showB)

  const login = () => {
    history.push('/auth/login/')
  }

  return (
    <Container className="checkout-wrapper">
      <div className="checkout-left">
        {cart.map(item => (
          <div className="checkout-card" key={item.id}>
            <img 
              src={item.image} 
              alt={item.playerName}
              className="checkout-image"
            />
            <div className="checkout-card-right">
              <div className="check-item">Player Name: {item.playerName}</div>
              <div className="check-item">Price £: {item.price}</div>
            </div>
            
          </div>
        ))}
      </div>
      <div className="checkout-right">
        <div className="price-wrapper">
          Total To Pay: £<span className="price"> {cart.reduce((sum, price) => {
            return sum + Number(price.price)
          }, 0)}</span>
        </div>
      
        {isAuth && (
          <>
            <Col xs={6} className="my-1">
              <Toast onClose={toggleShowB} show={showB} animation={false}>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Click to close</strong>
                </Toast.Header>
                <Toast.Body>Thank You for your purchase. Stripe/Paypal Integration</Toast.Body>
              </Toast>
            </Col>
            <Button 
              variant="light" 
              className="btn-outline-secondary show-btn" 
              onClick={handleClick}>
          Buy
            </Button>
          </>
        )}

        {!isAuth && (
          <Button 
            variant="light" 
            className="btn-outline-secondary show-btn" 
            onClick={login}>
          Login to Buy
          </Button>
        )}

      </div>
    </Container>
    

  )
}

export default Checkout
