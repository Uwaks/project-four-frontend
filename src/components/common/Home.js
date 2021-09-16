
import React from 'react'

import { Link } from 'react-router-dom'
import { Container, Carousel, Row } from 'react-bootstrap'
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
    items.sort((a, b) => (a.id < b.id))
    recentlyAdded.push(items)
  }

  items ? filterItems() : console.log('no items')

  
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.gannett-cdn.com/-mm-/7222ab99f5f32771edbbf8a0663d8c9407320dad/c=0-227-4455-2744/local/-/media/2016/12/16/Bergen/NorthJersey/636174848685852947-AP-457130363469.jpg?width=2560"
            alt="First slide"
          />
          <Carousel.Caption className="title-wrapper">
            <Link className="title-text-link" to='/items'>
              <h1 className="title-text">SWAPxSHOP</h1>
            </Link>
            <p>Post A Kit, Sell A Kit, Buy A Kit</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.gannett-cdn.com/-mm-/147222021a4df3ce80871baf403b0602b2fc3b03/c=0-70-2292-1365/local/-/media/2015/06/21/USATODAY/USATODAY/635705006182852176-USP-SOCCER-WOMEN-S-WORLD-CUP-SPAIN-AT-COSTA-RICA-73669516.JPG?width=2560"
            alt="Second slide"
          />
          <Carousel.Caption className="title-wrapper">
            <Link className="title-text-link" to='/items'>
              <h1 className="title-text">SWAPxSHOP</h1>
            </Link>
            <p>Post A Kit, Sell A Kit, Buy A Kit</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.belfasttelegraph.co.uk/sport/football/premier-league/4fb90/34528347.ece/AUTOCROP/w1240/PANews%20BT_P-702dd505-ba02-456d-bf8b-d1682fea5deb_I1.jpg"
            alt="Third slide"
          />
          <Carousel.Caption className="title-wrapper">
            <Link className="title-text-link" to='/items'>
              <h1 className="title-text">SWAPxSHOP</h1>
            </Link>
            <p>Post A Kit, Sell A Kit, Buy A Kit</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

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
