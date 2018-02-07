import { Adapter } from '../api/root';

export default ( state = { category: '', contents: [] }, action ) => {
  switch (action.type) {
    case "SET_CONTENTS_BY_CATEGORY":

      return { ...state, category: category.name, contents: category.contents }
    default:
      return state;
  }
}
