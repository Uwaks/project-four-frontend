import React from 'react'
import { useParams } from 'react-router'
import { Container, Row, Col, Button } from 'react-bootstrap'

import { getSingleItem } from '../lib/api'

function ItemShow() {

  const { itemId } = useParams()
  const [item, setItem] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !item && !isError
  
  console.log(itemId)

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
              <img src={item.image} alt={item.name} />
            </Col>
            <Col>
              <h2>{item.playerName}</h2>
              <h3>About</h3>
              <p>{item.description}</p>
              <p>Condition: {item.condition}</p>
              <h2>£{item.price}</h2>
              <Button>Add to cart</Button>
            </Col>
          </Row>
        </Container>
      )
      } 
    </div>    
  )
}

export default ItemShow