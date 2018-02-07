// const SET_CURRENT_USER = (user, bool) => {
//   return { type: "SET_CURRENT_USER", user, bool }
// }

const AuthReducer = (state = { loggedIn: false }, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {...state, currentUser: action.user , loggedIn: true }
    case "LOGOUT_USER":
      return { currentUser: {}, loggedIn: false};
    case "ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export default AuthReducer;
