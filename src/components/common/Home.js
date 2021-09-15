
import React from 'react'

import { Link } from 'react-router-dom'
import { Container, Jumbotron, Carousel, Row } from 'react-bootstrap'
import ItemCard from '../items/ItemCard'

import { getAllItems } from '../lib/api'

function Home() {
  
  const [items, setItems] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const isLoading = !items && !isError
  const recentlyAdded = []

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllItems()
        setItems(res.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])


  const filterItems = () => {
    console.log(items)
    items.sort((a, b) => (a.id < b.id))
    recentlyAdded.push(items)
    console.log('recently added', recentlyAdded)
  }

  items ? filterItems() : console.log('no items')

  
  return (
    <>
      <Jumbotron>      
        <div className="jumbo-div">
          <Link to="/items">
            <h1>SWAPxSHOP</h1>
          </Link>     
        </div>   
      </Jumbotron>
      <Container>
        <div className="row">
          {isError && <p>Oops! Something went wrong 😢</p>}
          {isLoading && <p>...loading</p>}               
        </div>
        <Row className="justify-content-center">
          <p>Recently Added Kits:</p>
        </Row>
        <div className="card-deck">
          {items && (
            recentlyAdded.map(item => {
              return (
                item.slice(0, 3).map(card => (  
                  <Link key={card.id} to={`items/${card.id}/`}>   
                    <ItemCard item={ card } />
                  </Link>  
                ))
              ) 
            })  
          )}    
        </div>
      </Container>
    </>
  )
}

export default Home
