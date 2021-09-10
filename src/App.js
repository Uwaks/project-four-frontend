import React from 'react'
import axios from 'axios'

function App() {
  React.useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/api/items')
      console.log(response.data)
    }
    getData()
  }, [])

  return (
    <h1>This is the App</h1>
  )
}

export default App
