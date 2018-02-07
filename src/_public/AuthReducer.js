
const AuthReducer = (state = {}, action ) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      const { id, username } = action.user;
      return {...state, currentUser: { id, username }}
    case "LOGOUT_USER":
      return { ...state, currentUser: {} };
    default:
      return state;
  }
}

export default AuthReducer;
