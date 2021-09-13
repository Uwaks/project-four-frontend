import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { getAllItems, getSingleItem } from '../lib/api'
import ItemCard from './ItemCard'
// import ItemCard from './ItemCard'

function ItemShow() {

  const { itemId } = useParams()
  const [item, setItem] = React.useState(null)
  const [items, setItems] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !item && !isError
  const [cart, setCart] = React.useState([])
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

  

  // ** setting item into state & adding to local storage **
  const addToCart = () => {
    const cartItem = [...cart, item]
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
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
      
    </div>    
  )
}

export default ItemShow