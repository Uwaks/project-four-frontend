import { useParams } from 'react-router'

function ItemShow() {
  const { itemId } = useParams
  console.log(itemId)
  return (
    <h1> this is the item show page</h1>
  )
}

export default ItemShow