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
      dispatch({ type: "SET_CONTENTS_AND_QUESTION_BY_CATEGORY", contents, questions })
    })
  }
}


export const getUserContents = id => {
  return dispatch => {
    Adapter.getUserContents(id).then( user => {
      const info = {
        firstname: user.firstname,
        lastname: user.lastname,
        knowledge: user.knowledge
      }
      dispatch({ type: "SET_USER_INFO", info})
      dispatch({ type: "SET_USER_FAVORITES", favorites: user.favorites })
      dispatch({ type: "SET_USER_SUGGESTIONS", suggestions: user.suggestions })
    })
  }
}


// export const getFactsByCategory = () => {
//   return dispatch => {
//     Adapter.getAllContents().then( categories => {
//       const contents = [];
//       const questions = [];
//       categories.forEach( cat => {
//         contents.push({category: cat.name, facts: cat.contents })
//         questions.push({category: cat.name, questions: cat.questionnaires })
//       })
//       dispatch({ type: "SET_CONTENTS_AND_QUESTION_BY_CATEGORY", contents, questions })
//       dispatch({ type: "SET_FACTS_BY_CATEGORY", contents })
//       dispatch({ type: "SET_QUESTIONS_BY_CATEGORY", questions })
//     })
//   }
// }
