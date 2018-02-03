fetch('http://localhost:3001/api/v1/users', {
  method: 'POST',
  body: JSON.stringify({
    user: {
      firstname: 'June',
      lastname: 'Park',
      username: 'june',
      password: '123456',
      password_confirmation: '123456',
      email: 'june@gmail.com',
      joined_on: 'February 2, 2018'
    }
  }),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(resp => resp.json()).then(console.log)

fetch('http://localhost:3001/api/v1/auth', {
  method: 'POST',
  body: JSON.stringify({ auth: {
    username: 'fish',
    password: '123456'
    }
  }),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}).then(resp => resp.json()).then(console.log)
