const defaultState = { currentUser: {}, loading: false, loggedIn: false }

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case "ASYNC_START":
      return {...state, loading: true}
    case "SET_CURRENT_USER":
      return {...state, currentUser: action.user, loggedIn: true }
    case "LOGOUT_USER":
      return { currentUser: {}, loggedIn: false};
    case "ERROR":
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export default auth;
