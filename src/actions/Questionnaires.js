import { Adapter } from '../api/root';

//** storing json to seperate object
export const setQuestionsByCategory = questions => {
  return {
    type: "SET_QUESTIONS_BY_CATEGORY",
    questions
  }
}
//** Aysnc Action Creators **
export const getQuestionsByCategory = () => {
  return dispatch => {
    Adapter.getAllContents().then( contents => {
      const questions = contents.map( content => {
        let q = {};
        q['name'] = content.name,
        q['questions'] = content.questionnaires
      });
      return dispatch(setQuestionsByCategory(questions))
    })
  }
}

//ie. [ {name: "Beginning", questions: [{q:, a:}, {q:, a:}, {q:, a:}]} ]
