
export const showCurrentFav = (name, restaurants) => {
  const favorited = restaurants.find( rest => rest.restaurant === name )
  localStorage.setItem('showFav', favorited.restaurant)
  return { type: "SET_FAV_SHOW", show: { favorited } }
}

export const showCurrentSuggestion = (name, restaurants) => {
  const suggested = restaurants.find( rest => rest.restaurant === name )
  localStorage.setItem('showSuggest', suggested.restaurant)
  return { type: "SET_SUGGEST_SHOW", show: { suggested } }
}

export const getCurrentSuggestion = () => {

}


export const createFavorite = () => {
  const createNew = {}
}
