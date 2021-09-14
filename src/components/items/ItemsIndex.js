import React from 'react'
// import { ButtonGroup } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { getAllItems } from '../lib/api'
import ItemCard from './ItemCard'

function ItemsIndex() {
  const [items, setItems] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !items && !isError
  const [searchValue, setSearchValue] = React.useState('')
  const history = useHistory()
  const rootElement = document.documentElement

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllItems()
        setItems(response.data)
      } catch (err) {
        setIsError(true)
      } 
    }
    getData()
  }, [])

  const compareRecentlyAdded = (a, b) => {
    const bandA = a.id
    const bandB = b.id
    let comparison = 0
    
    if (bandA > bandB) {
      comparison = 1
    } else {
      comparison = -1
    }
    console.log('comparison', comparison)
    return comparison
  }

  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  const filteredItems = () => {
    return items.sort(compareRecentlyAdded).filter(item => {
      return (item.playerName.toLowerCase().includes(searchValue.toLocaleLowerCase()))
    })
  }

  const handleHome = () => {
    history.push('/')
  }

  const handleScrollToTop = () => {
    rootElement.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <section className="Container">
      <div>  
        <h1>Swap/Shop</h1>
      </div>
      <div className="search-bar">
        <label htmlFor="header-search">
          <span className="visually-hidden">Search by player</span>
        </label>
        <input  
          type="text"
          id="header-search"
          placeholder="Search by player"
          name="s"
          onChange={handleSearch}
        />  
      </div>
      <div className="card-deck">
        {isLoading && <p>...loading</p>}
        {items && filteredItems().map(item => (
          <Link key={item.id} to={`/items/${item.id}/`}>
            <ItemCard item={ item } />
          </Link>
        )
        )}
      </div> 
      <div className="btn-group">
        <button 
          className="btn btn-outline-info" 
          onClick={handleHome}>
            Home
        </button>
        <button
          className="btn btn-outline-info"
          onClick={handleScrollToTop}
        >↑ to top</button>  
      </div>
          
    </section>
    
  )
}

export default ItemsIndex