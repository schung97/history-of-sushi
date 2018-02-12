
const page = (state = { show: { favorited: {}, suggested: {}} }, action) => {
  switch (action.type) {
    case "SET_FAV_SHOW":
      return {...state, show: action.show }
    default:
      return state;
  }
}

export default page;
