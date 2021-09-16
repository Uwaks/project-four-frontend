import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import Select from 'react-select'
import { useHistory } from 'react-router-dom'

import { createItem } from '../lib/api'
import ImageUpload from '../common/ImageUpload'
import TeamOptions from '../common/TeamOptions'


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
  const [isError, setIsError] = React.useState(false)
  const teamOptions = TeamOptions()


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleUploadedImage = (imageURL) => {
    setFormData({ ...formData, image: imageURL })
    setFormErrors({ ...formErrors, image: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await createItem(formData)
      history.push(`/items/${data.id}`)
    } catch (err) {
      setIsError(true)
      setFormErrors(err.response.data)
    }
  }

  const handleSelect = (selected, name) => {
    const selectedItems = selected ? selected.value : []
    setFormData({ ...formData, [name]: selectedItems })
  }

  return (
    <Container className="form-container">
      <Row className="register-wrapper">
        <h1 className="comment-title">Sell your kit!</h1>
      </Row>
      <Row className="register-wrapper">
        <form onSubmit={handleSubmit} className="form-wrapper">
          <div className="form-group">
            <label htmlFor="teamName">Team</label>
            <Select
              options={teamOptions}
              // defaultValue={teamOptions[0]}
              onChange={selected =>
                handleSelect(selected, 'teamName')
              }
            />
          </div> 
          {formErrors && formErrors.teamName && (
            <p className="text-danger">Team name required</p>
          )} 
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
          {formErrors && formErrors.playerName && (
            <p className="text-danger">Player name required</p>
          )}
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
          {formErrors && formErrors.description && (
            <p className="text-danger">Description required</p>
          )}
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
          {formErrors && formErrors.condition && (
            <p className="text-danger">Condition required</p>
          )}
          <div className="form-group">
            <label htmlFor="image">Kit Pic</label>
            <ImageUpload 
              value={formData.image}  
              onChange={handleUploadedImage}
            />
          </div>
          {formErrors && formErrors.image && (
            <p className="text-danger">Image required</p>
          )}
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
          {formErrors && formErrors.price && (
            <p className="text-danger">Price required</p>
          )}
          {isError && (
            <p className="text-danger">You missed a required field</p>
          )}
          < div className="field">
            <Button 
              variant="secondary" 
              type="submit" 
              className="btn btn-block"
            >
                Sell my kit!
            </Button>
          </div> 
        </form>
      </Row>
    </Container>  
  )
}

export default ItemCreate