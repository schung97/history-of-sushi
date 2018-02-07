import { Auth } from '../_api/auth';
import { Adapter } from '../_api/root';


//** Sign Up **//
export const makeNewUser = (formdata, history) => dispatch => {
  Adapter.newUser(formdata, history).then( user => {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push('/profile');
  })
}

// ** Async Log In Action Creators **//

// 1. (encode) return value => json: { user, jwt } , entire user obj
export const loginUser = (formdata, history) => dispatch => {
  Auth.login(formdata).then( user => {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push('/profile');
  });
};

// 2. (decode) return value = json: { id: current_user.id, username: current_user.username }
export const getCurrentUser = () => dispatch => {
 Auth.getCurrentUser()
 .then(user => {
   dispatch({ type: "SET_CURRENT_USER", user})
 })
};

// 3. clear localStorage
export const logoutUser = () => {
  localStorage.removeItem('token');
  return { type: 'LOGOUT_USER' };
};
