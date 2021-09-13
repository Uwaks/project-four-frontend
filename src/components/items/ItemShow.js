import React from 'react'
import { useParams } from 'react-router'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { getAllItems, getSingleItem } from '../lib/api'
// import ItemCard from './ItemCard'

function ItemShow() {

  const { itemId } = useParams()
  const [item, setItem] = React.useState(null)
  const [items, setItems] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !item && !isError
  const [cart, setCart] = React.useState([])

  React.useEffect(()=> {
    const getData = async () => {
      try {
        const response = await getSingleItem(itemId)
        setItem(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  },[itemId])

  // React.useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const response = await getAllItems()
  //       setItems(response.data)
  //     } catch (err) {
  //       setIsError(true)
  //     }
  //   }
  //   getData()
  // }, [])

  // ** setting item into state & adding to local storage **
  const addToCart = () => {
    const cartItem = [...cart, item]
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
  }


  // * Work to try and display similar items based on teamName
  // let similarItems = []
  // const findSimilarItems = () => {
  //   similarItems = items.filter(kit => {
  //     return kit.teamName === item.teamName
  //   })
  //   console.log(similarItems)
  // }

  // const teamMatchCheck = (arr1, arr2) => {
  //   const matchingItems = []
  //   const filteredArray = arr1.filter(kit => {
  //     kit.teamName.includes(arr2[0]) || kit.teamName.includes(arr2[1]) || kit.teamName.includes(arr2[2])
  //   })
  //   filteredArray.map(element => {
  //     matchingItems.push(element)
  //   })
  //   const uniqueMatchingItems = matchingItems.filter(uniqueKit => {
  //     uniqueKit.teamName !== item.teamName
  //   })
  //   return uniqueMatchingItems.map(element => {
  //     similarItems.push(element)
  //   })
  // }

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
              <h3>About</h3>
              <p>{item.description}</p>
              <p>Condition: {item.condition}</p>
              <h2>£{item.price}</h2>
              <Button onClick={addToCart}>Add to cart</Button>
            </Col>
          </Row>
        </Container>
      )
      } 
      <p>You might also like</p>
      <div className="card-deck">
        {/* {items &&} */}
      </div>
    </div>    
  )
}

export default ItemShow