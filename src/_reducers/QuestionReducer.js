const initialState = {
  categoryName: '',
  currentQuestion: {},
  currentContent: {}
}

const question = (state = { currentQuestion: {} }, action) => {
  switch (action.type) {
    case "SET_CONTENT_BY_RANK":
      return {...state, currentContent: action.currentContent}
    case "SET_CURRENT_QUESTION":
      return {...state, currentQuestion: action.currentQuestion }
    default:
      return state;
  }
}

export default question;
