import React from 'react'
import { Form, Button, Container, Row } from 'react-bootstrap'
import Select from 'react-select'
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
  
  const teamOptions = [
    { value: 'Arsenal FC', label: 'Arsenal Football Club' },
    { value: 'Aston Villa FC', label: 'Aston Villa Football Club' },
    { value: 'Brentford FC', label: 'Brentford Football Club' },
    { value: 'Brighton & Hove FC', label: 'Brighton & Hove Albion Football Club' },
    { value: 'Burnley FC', label: 'Burnley Football Club' },
    { value: 'Chelsea FC', label: 'Chelsea Football Club' },
    { value: 'Crystal Palace FC', label: 'Crystal Palace Football Club' },
    { value: 'Everton FC', label: 'Everton Football Club' },
    { value: 'Leeds United FC', label: 'Leeds United Football Club' },
    { value: 'Leicester FC', label: 'Leicester City Football Club' },
    { value: 'Liverpool FC', label: 'Liverpool Football Club' },
    { value: 'Manchester City FC', label: 'Manchester City Football Club' },
    { value: 'Manchester United FC', label: 'Manchester United Football Club' },
    { value: 'Newcastle United FC', label: 'Newcastle United Football Club' },
    { value: 'Norwich City FC', label: 'Norwich City Football Club' },
    { value: 'Southampton FC', label: 'Southampton Football Club' },
    { value: 'Tottenham FC', label: 'Tottenham Hotspur Football Club' },
    { value: 'Watford FC', label: 'Watford Football Club' },
    { value: 'West Ham United FC', label: 'West Ham United Football Club' },
    { value: 'Wolverhampton FC', label: 'Wolverhampton Football Club' }
  ]

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
    console.log(formData)
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
      console.log(err.response.data.errors)
    }
  }

  const handleSelect = (selected, name) => {
    console.log('formData', formData.teamName)
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
              defaultValue={teamOptions[0]}
              onChange={selected =>
                handleSelect(selected, 'teamName')
              }
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
            <label htmlFor="image">Kit Pic</label>
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