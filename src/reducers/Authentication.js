
export default (state = {}, action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return { ...state, user: action.user }
    default:
      return state;
  }
}
