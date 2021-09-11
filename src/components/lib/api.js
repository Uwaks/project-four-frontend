import axios from 'axios'

const baseURL = '/api'

export function getAllItems() {
  return axios.get(`${baseURL}/items/`)
}

export function getSingleItem(itemId) {
  return axios.get(`${baseURL}/items/${itemId}`)
}