import { Auth } from '../_api/auth';
import { Adapter } from '../_api/root';
// import { getUserContents } from './JsonAction';


//** Sign Up **//
export const makeNewUser = (formdata, history) => dispatch => {
  Adapter.newUser(formdata).then( user => {
    console.log('from auth action', user)
    localStorage.setItem('token', user.jwt)
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push("/profile");
  }).catch(error => dispatch({ error: error.message }))
}

// ** Async Log In Action Creators **//

// 1. (encode) return value => json: { user, jwt } , entire user obj
export const loginUser = (formdata, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  Auth.login(formdata).then( user => {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_CURRENT_USER', user: user.user});
    history.push("/profile");
  }).catch(error => dispatch( { type: "ERROR", error: error.message } ))
};

// 2. (decode) use case: refresh and content remains
export const getCurrentUser = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });
  Auth.getCurrentUser()
    .then( user => {
      // debugger
      // user.knowledge
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


// ***** TODO everything below move to another file** later ** //
///// ***** new favorite maker
export const createFavoriteFromSuggestions = (user_id, restaurant_id, suggestion_id, history) => {
  return dispatch => {
    Adapter.createFavorite({ user_id, restaurant_id, suggestion_id }).then( user => {
      dispatch({ type: "SET_CURRENT_USER", user })
      history.push('/profile')
    })
  }
}

///// ***** delete restaurant from fav
export const deleteFavorite = (id, history) => {
  return dispatch => {
    Adapter.deleteFavorite(id).then( user => {
      dispatch({ type: "SET_CURRENT_USER", user })
      history.push('/profile')
    })
  }
}

// *** update user ** //

// export const updateUser = ( userContent, newRank, history ) => {
//   const user = Object.assign(userContent, {knowledge: `${newRank}`})
//   // debugger
//   return dispatch => {
//     Adapter.updateUser(user).then( user => {
//       dispatch({ type: "SET_CURRENT_USER", user })
//       history.push('/profile')
//     })
//   }
// }

export const updateUser = ( userContent, newRank, history, suggestions ) => {
  const user = Object.assign(userContent, {knowledge: `${newRank}`, suggestions: suggestions})
  // debugger
  return dispatch => {
    Adapter.updateUser(user).then( user => {
      dispatch({ type: "SET_CURRENT_USER", user })
      history.push('/profile')
    })
  }
}

// export const createSuggestions = (user_id, restaurant_id, history) => {
//   return dispatch => {
//     Adapter.createFavorite({ user_id, restaurant_id, suggestion_id }).then( user => {
//       dispatch({ type: "SET_CURRENT_USER", user })
//       history.push('/profile')
//     })
//   }
// }
