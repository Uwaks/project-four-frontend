import React from 'react'
import { useParams, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button, Toast } from 'react-bootstrap'

import { getAllItems, getSingleItem, getUserProfile, likeItem } from '../lib/api'
import { isAuthenticated } from '../lib/auth'
import ItemCard from './ItemCard'

function ItemShow() {
  const { itemId } = useParams()
  const history = useHistory()
  const isAuth = isAuthenticated()
  const [item, setItem] = React.useState(null)
  const [items, setItems] = React.useState(null)
  const [currentUser, setCurrentUser] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !item && !isError
  const [cartItems, setCartItems] = React.useState(() => {
    const inStorage = localStorage.getItem('cartItem')
    if (inStorage) {
      return JSON.parse(inStorage)
    }
    return []
  })
  const sameTeamArray = []
  const [showB, setShowB] = React.useState(false)
  

  React.useEffect(()=> {
    const getData = async () => {
      try {
        const response = await getSingleItem(itemId)
        setItem(response.data)
        const res = await getAllItems()       
        setItems(res.data)
        const resp = await getUserProfile()
        setCurrentUser(resp.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [itemId])

  React.useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItems))
  }, [cartItems])

  // ** setting item into state & adding to local storage **
  const addToCart = () => {
    setCartItems([...cartItems, item])
    toggleShowB()
    // localStorage.setItem('cartItem', JSON.stringify(cartItems))
  }

  const toggleShowB = () => setShowB(!showB)

  const removeFromCart = () => {
    
    setCartItems(cartItems.filter(cartItem => {
      console.log('cartItem.id', cartItem.id) 
      console.log('itemId', itemId)
      return Number(cartItem.id) !== Number(itemId)
    }
    ))
  }

  // * Comment Handlers
  const handleComment = () => {
    console.log('itemId', itemId)
    console.log('history', history)
    history.push(`/items/${itemId}/comments`)
  }

  const handleLogin = () => {
    history.push('/auth/login/')
  }

  // * Like/Favorite Handlers

  const isLiked = item?.likedBy.some(like => {
    return like.id === currentUser?.id
  })

  const handleLike = async () => {
    try { 
      await likeItem(itemId, item)
      const response = await getSingleItem(itemId)
      setItem(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  // * Function to display similar items based on teamName
  const teamMatchCheck = (arr1, arr2) => {
    const matchingTeams = []
    const filteredArray = arr1.filter(kit => {
      return kit.teamName.includes(arr2)
    })
    filteredArray.map(element => {
      matchingTeams.push(element)
    })
    const uniqueMatchingTeams = matchingTeams.filter(kit => {
      return kit.playerName !== item.playerName
    })
    uniqueMatchingTeams.map(element => {
      return sameTeamArray.push(element)
    })
  }
  items ? teamMatchCheck(items, item.teamName) : console.log('no items')

  return (
    <div>
      {isError && <p>Sorry, something went wrong.</p>}
      {isLoading && <p>...loading</p>}
      {item && (
        <Container fluid>
          <Row>
            <Col className="name-col text-center">
              <h1 className='title'>{item.teamName}</h1>            
            </Col>  
          </Row>
          <Row>
            <Col className="image-col">
              <img className="show-image" src={item.image} alt={item.name} />
            </Col>
            <Col>
              <h2>{item.playerName}</h2>
              <h3>About this kit:</h3>
              <p>{item.description}</p>
              <p>Condition: {item.condition}</p>
              <h2>£{item.price}</h2>
              <Col xs={6} className="my-1">
                <Toast onClose={toggleShowB} show={showB} animation={false}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    {/* <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small> */}
                  </Toast.Header>
                  <Toast.Body>Your item has been added to the cart</Toast.Body>
                </Toast>
              </Col>
              <Button 
                className="btn-outline-secondary show-btn" 
                variant="light" 
                onClick={addToCart}>Add to cart</Button>
              {isAuth ?
                
                <Button 
                  onClick={handleLike}
                  className="btn-outline-secondary show-btn" 
                  variant="light" 
                >
                  {isLiked ? 'unlike' : 'Like'}</Button>
                :
                <Button 
                  onClick={handleLogin}
                  className="btn-outline-secondary show-btn" 
                  variant="light" 
                >login to </Button>
              }     
              <Button 
                onClick={removeFromCart}
                className="btn-outline-secondary show-btn" 
                variant="light" 
              >Remove Item</Button>
            </Col>
          </Row>
        </Container>
      )
      }
      <Container>
        <Row>
          <Col>
            {items && (
              <><p>You might also like:</p><div className="card-deck">
                {sameTeamArray.map(kit => {
                  return (
                    <Link key={kit.id} to={`/items/${kit.id}/`}>
                      <ItemCard item={kit} />
                    </Link>
                  )
                })}
              </div></>            
            )}
          </Col>
          <Col>
            <p className="comment-title">Comments:</p>
            {isAuth && (
              <div>
                <Button 
                  className="btn-outline-secondary show-btn" 
                  variant="light" 
                  onClick={handleComment}
                >
        Leave a Comment
                </Button>  
              </div>
            )}
            {!isAuth && (
              <div>
                <Button 
                  className="btn-outline-secondary show-btn" 
                  variant="light" 
                  onClick={handleLogin}
                >
            Login to Comment  
                </Button>  
              </div>  
            )} 

            {item?.comments.length === 0 ? 
              <p>No comments yet</p> 
              :
              item?.comments.map(comment => {
                return (
                  <div className="comment" key={comment.id}>
                    <p className="comment-text">{comment.text}</p>
                    <p>{comment.owner.username}</p>
                    <p>{comment.createdAt}</p>
                  </div> 
                )
              })
            }
            
          </Col>  
        </Row> 
      </Container> 
      

      
      <Col xs={6}>
        {/* <Button onClick={toggleShowB}>
          Toggle Toast <strong>without</strong> Animation
        </Button> */}
      </Col>
      
    </div>    
  )
}

export default ItemShow