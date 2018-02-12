import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
// import ContentInfo from '../presentational/ContentInfo';
import IsAuthenticated from '../../IsAuthenticated';
import { setCurrentQuestion } from '../../_actions/QuestionAction';
import { setContentByRank } from '../../_actions/ContentAction';
import { bindActionCreators } from 'redux';
// import ContentDisplay from './ContentDisplay';


//import helper methods
import { findContentByRank, randomlySort, randomlySelectOne } from '../helpermethods';


class Content extends React.Component {

  componentDidMount() {
    const found = findContentByRank(this.props.userRank, this.props.contents)
    const randomlySorted = randomlySort(found.facts, 'fact')
    const questions = found.questions
    const randomQuestion = randomlySelectOne(questions)

    this.props.setContentByRank(randomlySorted)
    this.props.setCurrentQuestion(randomQuestion)
  }




render() {

  const facts = this.props.currentContents.map( (content, i) => (<li key={i}>{content.fact}</li>))

    return (
      <div className="sushi-knowledge-contents">
      FACTS_____
      {facts}

      <div>
      QUESTION _ DISPLAY
      {this.props.currentQuestion.question}
      ANSWER IS___ {this.props.currentQuestion.answer}
      </div>

      </div>
    )
  }

}



const mapStateToProps = state => {
  return {
    contents: state.json.contents,
    userID: state.auth.currentUser.id,
    userRank: state.auth.currentUser.knowledge,
    currentContents: state.content.current,
    currentQuestion: state.question.currentQuestion
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setCurrentQuestion, setContentByRank }, dispatch);
}

export default IsAuthenticated(connect(mapStateToProps, mapDispatchToProps)(Content));
