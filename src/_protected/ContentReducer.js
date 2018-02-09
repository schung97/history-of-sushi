
const content = (state = { category: [], loaded: false }, action) => {
  switch (action.type) {
    case "SET_CONTENTS_AND_QUESTIONS_BY_CATEGORY":
      return {...state, category: action.category ,loaded: action.loaded}
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
