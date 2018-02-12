
export const showCurrentFav = (name, restaurants) => {
  const favorited = restaurants.find( rest => rest.restaurant === name )
  return { type: "SET_FAV_SHOW", show: { favorited } }
}
