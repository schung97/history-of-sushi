import { API_ROOT } from './api.js';

const getWithToken = url => {
 const token = localStorage.getItem('token')
 return fetch(url, {
   headers: { Authorization: token }
 }).then(res => res.json())
}

const getCurrentUser = () => {
 return getWithToken(`${API_ROOT}/current-user`)
}
const login = fields => {
  return fetch(`${API_ROOT}/auth`, {

    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(fields)
  }).then(res => res.json());
};


export const Auth = {
  login,
  getCurrentUser
};
