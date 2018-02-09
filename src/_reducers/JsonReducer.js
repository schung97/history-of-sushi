
// const initialState  = {
//   contents: [
//     { category: '',
//      facts: [],
//      questions: []}
//   ],
//   loading: false
// }

const json = (state = { contents: [], loading: true }, action) => {
  switch (action.type) {
    case "SET_CONTENTS_AND_QUESTIONS_BY_CATEGORY":
      return {...state, contents: action.contents ,loading: action.loading}
    default:
      return state;
  }
}

export default json;
