
const content = (state = {}, action) => {
  switch (action.type) {
    case "SET_CONTENTS_AND_QUESTION_BY_CATEGORY":
      return {...state, contents: action.contents, questions: action.questions }
    case "SET_USER_INFO":
      return {...state, info: action.info }
    case "SET_USER_SUGGESTIONS":
      return {...state, suggestions: action.suggestions }
    case "SET_USER_FAVORITES":
      return {...state, favorites: action.favorites }
    default:
      return state;
  }
}

export default content;
