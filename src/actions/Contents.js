import { Adapter } from '../api/root';

export const setContentsByCategory = contents => {
  return {
    type: "SET_CONTENTS_BY_CATEGORY",
    contents
  }
}
//** Async Action Creators **
// ** returning a function
export const getFactsByCategory = () => {
  return dispatch => {
    Adapter.getAllContents().then( contents => {
      const facts = contents.map( content => {
        let c = {};
        c['name'] = content.name,
        c['contents'] = content.contents
      })
      dispatch(setContentsByCategory(facts))
    })
  }
}
