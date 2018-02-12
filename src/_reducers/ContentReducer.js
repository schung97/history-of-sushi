
const content = (state = { current: []}, action) => {
  switch (action.type) {
    case "SET_CONTENT_BY_RANK":
      return { ...state, current: action.current }
    default:
      return state;
  }
}

export default content;
