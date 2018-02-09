
const initialState = {
  favorites: [],
  suggestions: [],
  loading: false
}


const user = (state = initialState , action) => {
  switch (action.type) {
    case "SET_CURRENT_USER":
      return {...state, favorites: action.user.favorites, suggestions: action.user.suggestions, loading: ( state.suggestions.length && state.favorites.length ) }
    case "SET_LOADING_TRUE":
      //use this when I start async action.
      return {...state, loading: true }
    default:
      return state;
  }
}

export default user;
