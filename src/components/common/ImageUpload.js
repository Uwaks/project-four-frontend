import React from 'react'
import axios from 'axios'

const uploadURL = process.env.REACT_APP_CLOUDINARY_URL
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET

function ImageUpload({ value, onChange }) {
  const handleUpload = async (e) => {
    const data = new FormData()
    data.append('file', e.target.files[0])
    data.append('upload_preset', uploadPreset)
    const res = await axios.post(uploadURL, data)
    onChange(res.data.url)
  }

  return (
    <div className="form-group">
      {value && (
        <div style={{ width: '300px' }}>
          <img  
            src={value}
            alt="selected"
            style={{ width: '100%', height: 'auto' }}
          />  
        </div>
      )}
      {!value && (
        <div>
          <input 
            type="file" 
            className="form-control" 
            id="image"
            placeholder="Upload a pic of your kit"
            // onChange={handleChange}
            onChange={handleUpload}
            name="image"
            value={value.image}
          />
        </div>
      )}
    </div>
  )
}

export default ImageUpload