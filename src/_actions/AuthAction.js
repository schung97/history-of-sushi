import { Auth } from '../_api/auth';
import { Adapter } from '../_api/root';
import { getUserContents } from './JsonAction';


//** Sign Up **//
export const makeNewUser = (formdata, history) => dispatch => {
  Adapter.newUser(formdata).then( user => {
    console.log('from auth action', user)
    localStorage.setItem('token', user.jwt)
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push('/profile');
  }).catch(error => dispatch({ error: error.message }))
}

// ** Async Log In Action Creators **//

// 1. (encode) return value => json: { user, jwt } , entire user obj
export const loginUser = (formdata, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  Auth.login(formdata).then( user => {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_CURRENT_USER', user: user.user});

    history.push('/profile');
  }).catch(error => dispatch( { type: "ERROR", error: error.message } ))
};

// 2. (decode) return value = json: { id: current_user.id, username: current_user.username }
export const getCurrentUser = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  Auth.getCurrentUser()
    .then( user => {
      dispatch({ type: "SET_CURRENT_USER", user, loggedIn: true });
    })
    .catch(error => dispatch({ type: "ERROR", error: error.message }))
  };

// 3. clear localStorage
export const logoutUser = history => {
  localStorage.removeItem('token');
  history.push('/signed-out');
  return { type: 'LOGOUT_USER' };
};



// const getUserStuff = id => {
//    dispatch => {
//     Adapter.getUserContents(id).then( user => {
//       // const info = {
//       //   firstname: user.firstname,
//       //   lastname: user.lastname,
//       //   knowledge: user.knowledge
//       // }
//       // dispatch({ type: "SET_USER_INFO", info})
//       dispatch({ type: "SET_USER_FAVORITES", favorites: user.favorites })
//       debugger
//       dispatch({ type: w"SET_USER_SUGGESTIONS", suggestions: user.suggestions })
//     })
//   }
// }
