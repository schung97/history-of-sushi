
// ************ AuthenticationCheck API ************ //


// 1. ** login with username/pwd and get token
// return value => json: { user, jwt }
const login = fields => {
  return fetch('http://localhost:3000/api/v1/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(fields)
  }).then(res => res.json());
};


// 2. ** logged in, in every route decoding user's token
// return value = json: { id: current_user.id, username: current_user.username }
const getWithToken = url => {
 const token = localStorage.getItem('token')
 return fetch(url, {
   headers: { Authorization: token }
 }).then(res => res.json())
}

const getCurrentUser = () => {
 return getWithToken('http://localhost:3000/api/v1/current-user')
}


 // 3. ** export
export const Auth = { login, getCurrentUser };
