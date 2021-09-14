import React from 'react'
import { useParams, useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { getAllItems, getSingleItem } from '../lib/api'
import { isAuthenticated } from '../lib/auth'
import ItemCard from './ItemCard'

function ItemShow() {
  

  const { itemId } = useParams()
  const history = useHistory()
  const isAuth = isAuthenticated()
  const [item, setItem] = React.useState(null)
  const [items, setItems] = React.useState(null)
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
  

  React.useEffect(()=> {
    const getData = async () => {
      try {
        const response = await getSingleItem(itemId)
        setItem(response.data)
        const res = await getAllItems()       
        setItems(res.data)
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
    // localStorage.setItem('cartItem', JSON.stringify(cartItems))
  }

  const removeFromCart = () => {
    
    setCartItems(cartItems.filter(cartItem => {
      console.log('cartItem.id', cartItem.id) 
      console.log('itemId', itemId)
      return Number(cartItem.id) !== Number(itemId)
    }
    ))
    
  }
  const handleComment = () => {
    console.log('itemId', itemId)
    console.log('history', history)
    history.push(`/items/${itemId}/comments`)
  }

  const handleLogin = () => {
    history.push('/auth/login/')
  }


  // * Work to try and display similar items based on teamName
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
            <Col className="text-center">
              <h1>{item.teamName}</h1>            
            </Col>  
          </Row>
          <Row>
            <Col>
              <img className="show-image" src={item.image} alt={item.name} />
            </Col>
            <Col>
              <h2>{item.playerName}</h2>
              <h3>About this kit:</h3>
              <p>{item.description}</p>
              <p>Condition: {item.condition}</p>
              <h2>£{item.price}</h2>
              <Button onClick={addToCart}>Add to cart</Button>
              <Button onClick={removeFromCart}>Remove Item</Button>
            </Col>
          </Row>
        </Container>
      )
      }
      {items && (
        <div>
          <p>You might also like</p>
          <div className="card-deck">
            {sameTeamArray.map(kit => {
              return (
                <Link key={kit.id} to={`/items/${kit.id}/`}>
                  <ItemCard item={ kit } />
                </Link>
              )
            })
            }
          </div>
        </div> 
      )}
      {item?.comments.length === 0 ? 
        <p>No comments yet</p> 
        :
        item?.comments.map(comment => {
          return (
            <div key={comment.id}>
              <p>{comment.text}</p>
              <p>{comment.owner.username}</p>
              <p>{comment.createdAt}</p>
            </div> 
          )
        })
      }
      {isAuth && (
        <div>
          <Button 
            className="Button is-info"
            onClick={handleComment}
          >
        Leave a Comment
          </Button>  
        </div>
      )}
      {!isAuth && (
        <div>
          <Button 
            className="Button is-info"
            onClick={handleLogin}
          >
            Login to Comment  
          </Button>  
        </div>  
      )}  
    </div>    
  )
}

export default ItemShow