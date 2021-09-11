import React from 'react'

import { getAllItems } from '../lib/api'

function ItemsIndex() {
  const [items, setItems] = React.useState(null)
  const isLoading = !items

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllItems()
        setItems(response.data)
      } catch (err) {
        console.log(err)
      } 
    }
    getData()
  }, [])

  console.log(items)
  return (
    <section className="Container">
      <h1>Swap/Shop</h1>
      <div className="card-deck">
        {isLoading && <p>...loading</p>}
        {items && items.map(item => {
          return (
            <div key={item.id}className="card">
              <div className="card-header">
                {item.teamName}
              </div>
              <img className="card-img-top" src={item.image} alt={item.playerName} />
              <div className="card-body">
                <h5 className="card-title">{item.playerName}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-text">{item.condition}</p>
                <p className="card-text">{item.price}</p>
              </div>
            </div>
          )
        })}
      </div>      
    </section>
    
  )
}

export default ItemsIndex