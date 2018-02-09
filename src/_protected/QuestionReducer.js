
const question = (state = { currentQuestion: {} }, action) => {
  switch (action.type) {
    case "SET_CURRENT QUESTION":
      return {...state, favorites: action.favorites }
    case "SET_USER_FAVORITES":
      return {...state, favorites: action.favorites }
    default:
      return state;
  }
}

export default question;
