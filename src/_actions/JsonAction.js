import { Adapter } from './../_api/root';

//** Async Action Creators **
// ** returning a function
export const getContentsAndQuestionsByCategory = () => {
  return dispatch => {
    Adapter.getAllContents().then( categories => {
      const contents = [];
      const questions = [];
      categories.forEach( cat => {
        contents.push({category: cat.name, facts: cat.contents })
        questions.push({category: cat.name, questions: cat.questionnaires })
      })
      const content = [];
      contents.forEach( cont => {
        let q = questions.find( c => c.category === cont.category )
        let test = Object.assign(cont, q);
        content.push(test);
      })
      dispatch({ type: "SET_CONTENTS_AND_QUESTIONS_BY_CATEGORY", contents: content, loading: false})
    })
  }
}
