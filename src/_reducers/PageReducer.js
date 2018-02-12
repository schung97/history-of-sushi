
const page = (state = { show: { favorited: {}, suggested: {}}, loading: true }, action) => {
  switch (action.type) {
    case "SET_FAV_SHOW":
      return {...state, show: action.show, loading: !(Object.keys(action.show.favorited).length !== 0)}
    case "SET_SUGGEST_SHOW":
      return {...state, show: action.show, loading: !(Object.keys(action.show.suggested).length !== 0)}
    default:
      return state;
  }
}

export default page;
