import React from 'react';
// import { connect } from 'react-redux';
// // import { Switch, Route } from 'react-router-dom';
// import ContentInfo from '../presentational/ContentInfo';
// import IsAuthenticated from '../../IsAuthenticated';
// import { setCurrentQuestion } from '../../_actions/QuestionAction';
// import { bindActionCreators } from 'redux';
// // import { getContentsAndQuestionsByCategory, getUserContents } from '../JsonAction';
//
//
// //****  start: where should i put these code ****/
// // ==>moved to question action
// const findContentByRank = (rank, categories) =>  {
//   console.log('rank is? ', rank, categories)
//   switch (rank) {
//     case "Amateur":
//       return categories[0];
//     case "Basic":
//       return categories[1];
//     case "Above-Average":
//       return categories[2];
//       case "Show-off":
//       return categories[3];
//     case "Appreciation":
//       return categories[4];
//     default:
//       return categories[5]
//   }
// }
//
// const randomlyDisplay = (content, key) => {
//   const randomly = content.sort(() => (.5 - Math.random()))
//   const divs = randomly.map( (f, i) => (<div key={i}>{f[`${key}`]}</div>))
//   return divs;
// }
//
// // **** end: ***** //
//
// const displayQuestion = contents => {
//   dispatch => {
//     const randomIndex = Math.floor(Math.random() * contents.length)
//     const currentQuestion = contents[randomIndex];
//     dispatch(setCurrentQuestion(currentQuestion))
//     // return currentQuestion;
//   }
// }
//
//
// const Content = (props) => {
//
// //**** randomizing facts ****/
//   const content = findContentByRank(props.userRank, props.content)
//   console.log('what is categories::', content.category)
// //**** random question selector ****/
// console.log('what is questions?::', displayQuestion(content.questions))
//
// const facts = randomlyDisplay(content.facts, 'fact');
// displayQuestion(content.questions)
//     // QUESTION::::{question.question}::::QUESTION
//   return (
//     <div>
//     ____FACTS___
//     {facts}
//     </div>
//   )
//
// }
//
// const mapStateToProps = state => {
//   return {
//     content: state.content.category,
//     userID: state.auth.currentUser.id,
//     userRank: state.auth.currentUser.knowledge
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ setCurrentQuestion }, dispatch);
// }
//
// export default IsAuthenticated(connect(mapStateToProps, mapDispatchToProps)(Content));

const Content = () => {
  return (<div>contents</div>)

}
export default Content
