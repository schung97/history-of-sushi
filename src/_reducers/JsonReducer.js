
const initialState  = {
  category: '',
  facts: [],
  questions: []
}

const json = (state = { category: [], loaded: false }, action) => {
  switch (action.type) {
    case "SET_CONTENTS_AND_QUESTIONS_BY_CATEGORY":
      return {...state, category: action.category ,loaded: action.loaded}
    case "SET_CONTENT_BY_RANK":
      return {...state, category: action.category ,loaded: action.loaded}

    default:
      return state;
  }
}

export default json;
