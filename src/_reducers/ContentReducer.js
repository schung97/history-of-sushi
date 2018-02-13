
// const content = (state = { category: '' }, action) => {
//   switch (action.type) {
//     case "SET_CURRENT_CATEGORY":
//       return { ...state, category: action.category }
//     default:
//       return state;
//   }
// }
const content = (state = { contents: [], questions: [] }, action) => {
  switch (action.type) {
    case "SET_CONTENTS_BY_RANK":
      return { ...state, contents: action.contents, questions: action.questions }
    default:
      return state;
  }
}

export default content;
