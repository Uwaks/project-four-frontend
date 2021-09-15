import React from 'react'
// import { ButtonGroup } from 'react-bootstrap'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import Select from 'react-select'

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

  // * SEARCH by TEAM

  const teamOptions = [
    { value: '', label: 'All Teams' },
    { value: 'arsenal', label: 'Arsenal Football Club' },
    { value: 'aston', label: 'Aston Villa Football Club' },
    { value: 'brentford', label: 'Brentford Football Club' },
    { value: 'brighton', label: 'Brighton & Hove Albion Football Club' },
    { value: 'burnley', label: 'Burnley Football Club' },
    { value: 'chelsea', label: 'Chelsea Football Club' },
    { value: 'crystal', label: 'Crystal Palace Football Club' },
    { value: 'everton', label: 'Everton Football Club' },
    { value: 'leeds', label: 'Leeds United Football Club' },
    { value: 'leicester', label: 'Leicester City Football Club' },
    { value: 'liverpool', label: 'Liverpool Football Club' },
    { value: 'manchester city', label: 'Manchester City Football Club' },
    { value: 'manchester united', label: 'Manchester United Football Club' },
    { value: 'newcastle', label: 'Newcastle United Football Club' },
    { value: 'norwich', label: 'Norwich City Football Club' },
    { value: 'southampton', label: 'Southampton Football Club' },
    { value: 'tottenham', label: 'Tottenham Hotspur Football Club' },
    { value: 'watford', label: 'Watford Football Club' },
    { value: 'west', label: 'West Ham United Football Club' },
    { value: 'wolverhampton', label: 'Wolverhampton Football Club' }
  ]

  const handleTeamSearch = (e) => {
    console.log('team search', e.value)
    setSearchValue(e.value)
    // const selectedItems = selected ? selected.value : []
    // setFormData({ ...formData, [name]: selectedItems })
  }

  // * SEARCH by PLAYER
  const handleSearch = (e) => {
    setSearchValue(e.target.value)
  }

  
  const filteredItems = () => {
    return items.sort(compareRecentlyAdded).filter(item => {
      return (item.playerName.toLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      item.teamName.toLowerCase().includes(searchValue))
    })
  }
  // * NAV from bottom of page
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
      <div className="form-group">
        <label htmlFor="teamName">Team</label>
        <Select
          options={teamOptions}
          defaultValue="Search by Team"
          onChange={selected =>
            handleTeamSearch(selected, 'teamName')
          }
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