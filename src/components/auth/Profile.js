import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import { getUserProfile } from '../lib/api'
import ItemCard from '../items/ItemCard'

function Profile() {
  const [user, setUser] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !user && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUserProfile()
        setUser(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])
  
  return (
    <Container>
      {isError && <p>Something went wrong.</p>}
      {isLoading && <p>...loading</p>}
      {user && (
        <div className="container">
          <hr />
          <Row className="account-wrapper">          
            <Col className="profile-col">
              <h1>{user.username}</h1>
            </Col>
            <Col className="profile-col">
              <h1>{user.email}</h1>
            </Col> 
          </Row>
          <hr />
          <Row className="register-wrapper">
            <h3 className="comment-title">Favorites</h3>
          </Row>
          <Row className="register-wrapper">
            {user.likedItems.length === 0 ?
              <p>No favorites yet.</p>
              :
              <div className="liked-card-deck">
                {user.likedItems.map(item => {
                  return (
                    <Link to={`/items/${item.id}`} key={item.id}>
                      <div className="liked-card">
                        <ItemCard item={item} />
                      </div>
                    </Link>
                  )
                })}
              </div>
            }
          </Row>       
          <hr />   
          <Row className="register-wrapper">
            <h3 className="comment-title">Previous Purchases</h3>
          </Row>
          <Row className="register-wrapper">
            {user.itemBought.length === 0 ?
              <p className="text-center">No purchases yet.</p>
              :
              <div className="liked-card-deck">
                {user.itemBought.map(item => {
                  return (
                    <Link to={`/items/${item.id}`} key={item.id}>
                      <div className="liked-card">
                        <ItemCard item={item} />
                      </div>
                    </Link>
                  )
                })}
              </div>
            }
          </Row>
          <hr />
          <Row className="register-wrapper">
            <h3 className="comment-title">Kits you have listed for sale:</h3>
          </Row>
          <Row className="register-wrapper">
            {user.itemToSell.length === 0 ?
              <p>You have not listed any kits yet.</p>
              :
              <div className="liked-card-deck">
                {user.itemToSell.map(item => {
                  return (                  
                    <Link to={`/items/${item.id}`} key={item.id}>
                      <div className="liked-card">
                        <ItemCard item={item} />
                      </div>
                    </Link>
                  )
                })}
              </div>
            }
          </Row>
          <hr />
        </div>
      )}

    </Container>
  )
}

export default Profile