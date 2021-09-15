// import { Link } from 'react-router-dom'

function ItemCard({ item }) {

  
  return (
    // <Link key={item.id} to={`/items/${item.id}`}>
    <div className="card"> 
      <div className="card-header">
        {item.teamName}
      </div>
      <img className="card-img-top" src={item.image} alt={item.playerName} />
      <div className="card-body">
        <h5 className="card-title">{item.playerName}</h5>
        <p className="card-text">£{item.price}</p>
      </div>
    </div>  
    // </Link>       

    
    
  )
}

export default ItemCard