import React from 'react'

import { Link } from 'react-router-dom'
import { Card, Container, Jumbotron } from 'react-bootstrap'

import { getAllItems } from '../lib/api'

function Home() {
  
  const [items, setItems] = React.useState('')
  const [isError, setIsError] = React.useState(false)
  const isLoading = !items && !isError

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
    </Container>
  )
}

export default Home
