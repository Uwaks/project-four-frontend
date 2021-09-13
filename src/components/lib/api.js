import axios from 'axios'

const baseURL = '/api'

// * ITEM Requests

export function getAllItems() {
  return axios.get(`${baseURL}/items/`)
}

export function getSingleItem(itemId) {
  return axios.get(`${baseURL}/items/${itemId}`)
}

// * AUTH Requests

export function registerUser(formdata) {
  return axios.post(`${baseURL}/auth/register/`, formdata)
}