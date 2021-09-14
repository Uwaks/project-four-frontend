import axios from 'axios'
import { getToken } from './auth'

const baseURL = '/api'

export function getHeaders() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// * ITEM Requests

export function getAllItems() {
  return axios.get(`${baseURL}/items/`)
}

export function getSingleItem(itemId) {
  return axios.get(`${baseURL}/items/${itemId}`)
}

export function createItem(formData) {
  return axios.post(`${baseURL}/items/new/`, formData, getHeaders())
}

export function createComment(id, formData) {
  return axios.post(`${baseURL}/items/${id}/comments/`, formData, getHeaders())
}

// * AUTH Requests

export function registerUser(formData) {
  return axios.post(`${baseURL}/auth/register/`, formData)
}

export function loginUser(formData) {
  return axios.post(`${baseURL}/auth/login/`, formData)
}

export function getUserProfile() {
  return axios.get(`${baseURL}/auth/profile/`, getHeaders())
}