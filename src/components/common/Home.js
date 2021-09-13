
import React from 'react'

import { Link } from 'react-router-dom'
import { Container, Jumbotron } from 'react-bootstrap'
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
    <Container>
      <div className="row">
        {isError && <p>Oops! Something went wrong 😢</p>}
        {isLoading && <p>...loading</p>}       
        <Jumbotron>      
          <div className="jumbo-div">
            <h1>SWAPxSHOP</h1>     
          </div>   
        </Jumbotron>
      </div>
      <div>
        {items && (
          recentlyAdded.map(item => {
            item.map(card => {
              return (
                <div key={card.id}>
                  <p>{card.playerName}</p>
                  <Link key={card.id} to={`/items/${card.id}`}>
                    <ItemCard card={ item } />
                  </Link> 
                </div>                
              )
            })  
          })
        )}
      </div>
    </Container>
  )
}

export default Home
