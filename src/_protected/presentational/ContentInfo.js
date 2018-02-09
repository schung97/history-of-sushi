
// import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


// const ContentInfo = (props) => {
  // const facts = props.content.facts;
  // const questions = props.content.questions;
  // const category = props.content.category;

  // const renderQuestions = questions.map( (q, i) => (<div key={i}>{q.question}</div>))

  // const randomly = renderFacts.sort(() => (.5 - Math.random()))



  // const randomlyDisplay = (content, key) => {
  //   const divs = content.map( (f, i) => (<div key={i}>{f[`${key}`]}</div>))
  //   const randomly = divs.sort(() => (.5 - Math.random()))
  //   return randomly;
  // }

  // const randomlyDisplay = (content, key) => {
  //   const randomly = content.sort(() => (.5 - Math.random()))
  //   const divs = randomly.map( (f, i) => (<div key={i}>{f[`${key}`]}</div>))
  //   return divs;
  // }
  //
  // const displayQuestion = contents => {
  //   const randomIndex = Math.floor(Math.random() * contents.length)
  //   const currentQuestion = contents[randomIndex];
  //
  // }
// setInterval(() => randomlyDisplay(facts, 'fact'), 1000)
  // console.log(randomlyDisplay(facts, 'fact'))

  // return (
  //   <div>
  //   ` hello from content info ${category} ${randomlyDisplay(facts, 'fact')}`
  //   </div>
  // )

// }

// const mapStateToProps = state => {
//   return {}
// }
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
// export default ContentInfo;
