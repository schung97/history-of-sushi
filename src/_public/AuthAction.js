import { Auth } from '../_api/auth';
import { Adapter } from '../_api/root';


//** Sign Up **//
export const makeNewUser = (formdata, history) => dispatch => {
  Adapter.newUser(formdata, history).then( user => {
    localStorage.setItem('token', user.jwt)
    dispatch({ type: 'LOGGED_IN' })
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push('/profile');
  }).catch(error => dispatch({ error: error.message }))
}

// ** Async Log In Action Creators **//

// 1. (encode) return value => json: { user, jwt } , entire user obj
export const loginUser = (formdata, history) => dispatch => {
  Auth.login(formdata).then( user => {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push('/profile');
  }).catch(error => dispatch({ error: error.message }))
};

// 2. (decode) return value = json: { id: current_user.id, username: current_user.username }
export const getCurrentUser = () => dispatch => {
 Auth.getCurrentUser()
 .then( user => {
    dispatch({ type: "SET_CURRENT_USER", user, loggedIn: true })
 })
};

// 3. clear localStorage
export const logoutUser = history => {
  localStorage.removeItem('token');
  history.push('/signed-out');
  return { type: 'LOGOUT_USER' };
};
