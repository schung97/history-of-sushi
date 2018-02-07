
import { Auth } from '../api/auth';
import { Adapter } from '../api/root';

export const authUser = auth => {
  return {
    type: "SET_AUTH_USER",
    auth
  }
}

export const unAuth = message => {
  return {
    type: "UNAUTHENTICATED",
    message
  }
}

export const setToken = (token, history) => {
  localStorage.setItem('token', token)
  history.push('./profile')
  return {
    type: "SET_TOKEN",
    token
  }
}

export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const logout = (history) => {
  localStorage.removeItem('token');
  history.push('./logged-out)')
  return { type: "REMOVE_TOKEN" }
}

//** Async Action Creator **
export const newUser = (formdata, history) => {
  return dispatch => {
    return Adapter.newUser(formdata).then(resp => {
      dispatch(authUser(resp.user))
      dispatch(setToken(resp.jwt, history))
    }).catch(error => dispatch(unAuth(error.message)))
    }
}
//*** Auth TOKEN **
export const loginUser = (fields, history) => {
  return dispatch => {
     Auth.login(fields).then(resp => {
      dispatch(setToken(resp.jwt, history))
      dispatch(setCurrentUser(resp.user))
    }).catch(error => dispatch(unAuth(error.message)))
  }
}

export const fetchUser = () => dispatch => {
 // dispatch({ type: "ASYNC_START" });
 Auth.getCurrentUser()
 .then(user => {
   dispatch({ type: "SET_CURRENT_USER", user})
 })
}
