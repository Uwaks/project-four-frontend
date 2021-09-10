import React from 'react'

import { getAllItems } from '../lib/api'

function ItemsIndex() {

  React.useEffect(() => {
    const getData = async () => {
      const response = await getAllItems()
      console.log(response.data)
    }
    getData()
  }, [])
  return (
    <h1>This is the Index Page</h1>
  )
}

export default ItemsIndex