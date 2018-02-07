
export default (state = {}, action) => {
  switch (action.type) {
    case "SHOW_SUGGESTED_RESTAURANTS":
      return {}
    case "SHOW_FAVORITED_RESTAURANTS":
      return {}
    default:
      return state;
  }
}
