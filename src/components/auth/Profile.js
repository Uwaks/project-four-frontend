import React from 'react'

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
              <p>map through favorites here</p>
            }
          </div>
          <div className="row">
            <h3>Previous Purchases</h3>
            {user.itemBought.length === 0 ?
              <p>No purchases yet.</p>
              :
              <p>map through item bought here</p>
            }
          </div>
          <div className="row">
            <h3>Kits you have listed for sale:</h3>
            {user.itemToSell.length === 0 ?
              <p>You haven&apos;t listed any kits yet.</p>
              :
              <p>Map through the items for sale here</p>
            }
          </div>
        </div>
      )}

    </section>
  )
}

export default Profile