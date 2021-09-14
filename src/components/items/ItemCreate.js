import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { createItem } from '../lib/api'
import ImageUpload from '../common/ImageUpload'


function ItemCreate() {
  const initialState = {
    playerName: '',
    teamName: '',
    image: '',
    price: '',
    description: '',
    condition: '',
  }

  const history = useHistory()
  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)
  
  // const conditionOptions = [
  //   { value: 'good', label: 'Good' },
  //   { value: 'excellent', label: 'Excellent' },
  //   { value: 'veryGood', label: 'Very Good' },
  //   { value: 'mint', label: 'Mint' },
  //   { value: 'matchWorn', label: 'Match Worn' }
  // ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleUploadedImage = (imageURL) => {
    setFormData({ ...formData, image: imageURL })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await createItem(formData)
      history.push(`/items/${data.id}`)
    } catch (err) {
      setFormErrors(err.response.data.errors)
      alert('Sorry, you are not allowed to do that. Please, login.')
    }
  }

  return (
    <section>
      <h1>Sell Your Kit!</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="teamName">Team</label>
          <input 
            type="text" 
            className="form-control" 
            id="teamName"
            placeholder="Team"
            onChange={handleChange}
            name="teamName"
            value={formData.teamName}
          /> 
        </div>  
        <div className="form-group">
          <label htmlFor="playerName">Player Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="playerName"
            placeholder="Player Name - if none, state None. "
            onChange={handleChange}
            name="playerName"
            value={formData.playerName}
          /> 
        </div> 
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Form.Control  
            type="textarea" 
            as="textarea"
            rows={3}
            className="form-control textarea" 
            id="description"
            placeholder="Describe your kit."
            onChange={handleChange}
            name="description"
            value={formData.description}
          /> 
        </div>
        <div className="form-group">
          <label htmlFor="condition">Condition</label>
          <div>
            <Form.Check
              inline
              label="Good"
              name="condition"
              value="good"
              onChange={handleChange}
              checked={formData.condition === 'good'}
            />  
            <Form.Check
              inline
              label="Very Good"
              name="condition"
              value="veryGood"
              onChange={handleChange}
              checked={formData.condition === 'veryGood'}
            /> 
            <Form.Check
              inline
              label="Excellent"
              name="condition"
              value="excellent"
              onChange={handleChange}
              checked={formData.condition === 'excellent'}
            /> 
            <Form.Check
              inline
              label="Mint"
              name="condition"
              value="mint"
              onChange={handleChange}
              checked={formData.condition === 'mint'}
            />
            <Form.Check
              inline
              label="Match Worn"
              name="condition"
              value="matchWorn"
              onChange={handleChange}
              checked={formData.condition === 'matchWorn'}
            />  
          </div>             
        </div>
        <div className="form-group">
          <label htmlFor="image">Kit Image</label>
          <ImageUpload 
            value={formData.image}  
            onChange={handleUploadedImage}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input 
            type="number" 
            className="form-control" 
            id="price"
            placeholder="Price"
            onChange={handleChange}
            name="price"
            value={formData.price}
          /> 
        </div> 
        < div className="field">
          <Button variant="primary" type="submit" className="Button">
                Sell my kit!
          </Button>
        </div> 
      </form>
    </section>  
  )
}

export default ItemCreate