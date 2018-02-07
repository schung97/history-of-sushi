import { Adapter } from '../api/root';

export const setUserInfo = info => {
  return {
    type: "SET_USER_INFO",
    info
  }
}

export const setFavorited = () => {
  return {
    type: "SET_FAVORITED_RESTAURANTS"
  }
}

export const setSuggested = () => {
  return {
    type: "SET_SUGGESTED_RESTAURANTS"
  }
}


// ** Aysnc Action Creators **

export const getUserInfo = (id) => {
    return dispatch => {
      Adapter.getUserContents(id).then( user => {
        const info = user.map( u => {u.firstname, u.lastname, u.email, u.knowledge, u.avatar, u.joined_on})
        dispatch(setUserInfo(info))
    })
  }
}

export const getSuggested = (id) => {
    return dispatch => {
      Adapter.getUserContents(id).then( user => {
        const suggested = user.map( u => u.suggestions)
        dispatch(setSuggested(suggested))
    })
  }
}

export const getFavorited = (id) => {
    return dispatch => {
      Adapter.getUserContents(id).then( user => {
        const favorited = user.map( u => u.favorites)
        dispatch(setFavorited(favorited))
    })
  }
}
