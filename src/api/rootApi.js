const API_ROOT = 'http://localhost:3001/api/v1';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}


const getUser = (id) => {
  return fetch(`${API_ROOT}/users/${id}`).then(resp => resp.json());
}

const getCategories() => {
  return fetch(`${API_ROOT}/categories`).then(resp => resp.json())
}
