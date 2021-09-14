import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useParams, useHistory } from 'react-router-dom'

import { createComment } from '../lib/api'

function ItemComment() {
  const { itemId } = useParams()
  const history = useHistory()
  const [formData, setFormData] = React.useState(
    {
      text: '',
    }
  )

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await createComment(itemId, formData)
      console.log(formData.text)
      history.push(`/items/${itemId}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section>
      <h1>Comments</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="leave a comment">Leave a comment</label>
          <Form.Control
            type="textarea"
            as="textarea"
            rows={3}
            className="form-control textarea"
            id="comment"
            placeholder="What do you think of this kit?"
            onChange={handleChange}
            name="text"
            value={formData.text}
          />  
        </div>
        <div className="field">
          <Button 
            variant="primary"
            type="submit"
            className="Button"
          >
            Submit  
          </Button>   
        </div>
      </form>
    </section>
  )  
}

export default ItemComment