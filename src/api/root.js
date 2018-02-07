import { API_ROOT } from './api.js';

const getUserContents = (id) => {
  return fetch(`${API_ROOT}/users/${id}`).then(resp => resp.json());
}

const getAllContents = () => {
  return fetch(`${API_ROOT}/categories`).then(resp => resp.json())
}

const newUser = (fields) => {
  return fetch('http://localhost:3000/api/v1/users', {
    method: 'POST',
    body: JSON.stringify((fields)),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then(response => response.json())
}

export const Adapter = { getUserContents, getAllContents, newUser };
