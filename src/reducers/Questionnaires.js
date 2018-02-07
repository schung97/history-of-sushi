
export default( state = { category: '', questions: [] }, action ) => {
  switch (action.type) {
    case "SET_QUESTIONS_BY_CATEGORY":
      return {}
    default:
      return state;
  }
}
