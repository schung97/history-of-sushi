import { Adapter } from './../_api/root';

export const getRestaurants = () => {
  return dispatch => {
    Adapter.getRestaurants().then( restaurants => {
      dispatch({ type: "SET_RESTAURANTS", restaurants, loading: false})
    })
  }
}


export const setNewSuggestions = suggestions => {
  return { type: "SET_NEW_SUGGESTIONS", suggestions, loading: false }
}
