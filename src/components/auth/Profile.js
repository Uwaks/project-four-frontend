import React from 'react'
import { Link } from 'react-router-dom'

import { getUserProfile } from '../lib/api'
import ItemCard from '../items/ItemCard'

function Profile() {
  const [user, setUser] = React.useState(null)
  const [isError, setIsError] = React.useState(false)
  const isLoading = !user && !isError

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getUserProfile()
        setUser(response.data)
      } catch (err) {
        setIsError(true)
      }
    }
    getData()
  }, [])
  
  return (
    <section className="container">
      {isError && <p>Something went wrong.</p>}
      {isLoading && <p>...loading</p>}
      {user && (
        <div className="container">
          <div className="row">
            <h1>{user.username}</h1>
            <p>{user.email}</p>
          </div>
          <div className="row">
            <h3>Favorites</h3>
            {user.likedItems.length === 0 ?
              <p>No favorites yet.</p>
              :
              <div>
                {user.likedItems.map(item => {
                  return (
                    <Link to={`/items/${item.id}`} key={item.id}>
                      <ItemCard item={item} />
                    </Link>
                  )
                })}
              </div>
            }
          </div>
          <div className="row">
            <h3>Previous Purchases</h3>
            {user.itemBought.length === 0 ?
              <p>No purchases yet.</p>
              :
              <div>
                {user.itemBought.map(item => {
                  return (
                    <Link to={`/items/${item.id}`} key={item.id}>
                      <ItemCard item={item} />
                    </Link>
                  )
                })}
              </div>
            }
          </div>
          <div className="row">
            <h3>Kits you have listed for sale:</h3>
            {user.itemToSell.length === 0 ?
              <p>You have not listed any kits yet.</p>
              :
              <div>
                {user.itemToSell.map(item => {
                  return (
                    <Link to={`/items/${item.id}`} key={item.id}>
                      <ItemCard item={item} />
                    </Link>
                  )
                })}
              </div>
            }
          </div>
        </div>
      )}

    </section>
  )
}

export default Profile