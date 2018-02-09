import React from 'react';
import { connect } from 'react-redux';
// import { Switch, Route } from 'react-router-dom';
import ContentInfo from '../presentational/ContentInfo';
import IsAuthenticated from '../../IsAuthenticated';
import { setCurrentQuestion } from '../QuestionAction';
import { bindActionCreators } from 'redux';
// import { getContentsAndQuestionsByCategory, getUserContents } from '../ContentAction';

const findContentByRank = (rank, categories) =>  {
  switch (rank) {
    case "Amateur":
      return categories[0];
    case "Basic":
      return categories[1];
    case "Above-Average":
      return categories[2];
    case "Show-off":
      return categories[3];
    case "Appreciation":
      return categories[4];
    default:
      return categories[5]
  }
}

const randomlyDisplay = (content, key) => {
  const randomly = content.sort(() => (.5 - Math.random()))
  const divs = randomly.map( (f, i) => (<div key={i}>{f[`${key}`]}</div>))
  return divs;
}
//
// const displayQuestion = contents => {
//   const randomIndex = Math.floor(Math.random() * contents.length)
//   const currentQuestion = contents[randomIndex];
//
// }

const Content = (props) => {
  const facts = props.content.facts;
  const questions = props.content.questions;
  const categories = props.content;
  const userRank = props.userRank;

//**** past this ****/
  const content = findContentByRank(userRank, categories)
    console.log(content)
    console.log('what is categories', content.category)

  console.log(randomlyDisplay(content.facts, 'fact'))

  return (
    <div>
    content
    {randomlyDisplay(content.facts, 'fact')}
    </div>
  )

}

const mapStateToProps = state => {
  return {
    content: state.content.category,
    userID: state.auth.currentUser.id,
    userRank: state.auth.currentUser.knowledge
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setCurrentQuestion }, dispatch);
}

export default IsAuthenticated(connect(mapStateToProps)(Content));
