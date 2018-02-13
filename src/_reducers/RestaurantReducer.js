
const restaurant = ( state = { restaurants: {}, loading: true }, action ) => {
  switch (action.type) {
    case "SET_RESTAURANTS":
      return {...state, restaurants: action.restaurants ,loading: action.loading}
    case "SET_CURRENT_FAVORITE":
      return {...state, restaurants: action.restaurants ,loading: action.loading}
    default:
      return state;
  }
}
export default restaurant;
