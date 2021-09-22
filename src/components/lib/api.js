import axios from 'axios'

import { baseURL } from '../../config'
import { getToken } from './auth'

// const baseURL = '/api'

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
  return axios.get(`${baseURL}/items/${itemId}/`)
}

export function createItem(formData) {
  return axios.post(`${baseURL}/items/new/`, formData, getHeaders())
}

// * COMMENT Requests

export function createComment(id, formData) {
  return axios.post(`${baseURL}/items/${id}/comments/`, formData, getHeaders())
}

// * FAVORITE/LIKE Request

export function likeItem(itemId) {
  return axios.post(`${baseURL}/items/${itemId}/like/`, null, getHeaders())
}

// * BOUGHT ITEM Request

export function boughtBy(itemId) {
  return axios.post(`${baseURL}/cart/checkout/`, itemId, getHeaders())
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