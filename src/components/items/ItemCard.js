

function ItemCard({ item }) {
  
  const handleClick = () => {
    console.log('clicked view')
  }
  
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
      <button className="btn-info" onClick={handleClick}>View</button>
    </div>     

    
    
  )
}

export default ItemCard