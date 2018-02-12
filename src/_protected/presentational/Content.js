import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import ContentInfo from '../presentational/ContentInfo';
import IsAuthenticated from '../../IsAuthenticated';
import { setCurrentQuestion } from '../../_actions/QuestionAction';
import { setContentByRank } from '../../_actions/ContentAction';
import { bindActionCreators } from 'redux';
import ContentDisplay from './ContentDisplay';


//import helper methods
// import { findContentByRank, randomlySort, randomlySelectOne } from '../helpermethods';
import { findContentByRank, randomlySort } from '../helpermethods';


class Content extends React.Component {

  constructor(props) {
    super(props);
      const found = findContentByRank(this.props.userRank, this.props.contents)
      const randomlySorted = randomlySort(found.facts)
      const randomlySortedQuestions = randomlySort(found.questions)
      this.props.setContentByRank(randomlySorted, randomlySortedQuestions)

      this.state = {
        facts: randomlySorted,
        questions: randomlySortedQuestions,
        index: 0,
        numberOfQuestions: randomlySortedQuestions.length,
        completed: false
      }
  }


  handleResponse = e => {
    e.target.value
  }

  handleSubmit = e => {
    e.preventDefault()
  }
  // const facts = this.props.currentContents.map( (content, i) => (<li key={i}>{content.fact}</li>))
  render() {
    const { facts, questions, index, numberOfQuestions, completed } = this.state
    console.log('contents qusetionnaire', this.props)
    console.log('contents qusetionnaire STATE', this.state)


      return (
        <div className="sushi-knowledge-contents">
          Question...
          {
              completed ? ( <div>Completed!</div> )
              :
              ( <div>
                { index < questions.length ?
                  <ContentDisplay question={questions[index]} index={index} handleResponse={this.handleResponse} handleSubmit={this.handleSubmit}/>
                  : ''
                }
                </div>
              )
          }
        </div>
      )
  }
}
// ---- go back to this if it doesnt work out ---/
// render() {
// console.log('contents qusetionnaire', this.props)
//   const facts = this.props.currentContents.map( (content, i) => (<li key={i}>{content.fact}</li>))
//
//     return (
//       <div className="sushi-knowledge-contents">
//       FACTS_____
//       {facts}
//
//       <div>
//       QUESTION _ DISPLAY
//       {this.props.currentQuestion.question}
//       ANSWER IS___ {this.props.currentQuestion.answer}
//       </div>
//
//       </div>
//     )
//   }




const mapStateToProps = state => {
  return {
    contents: state.json.contents,
    userID: state.auth.currentUser.id,
    userRank: state.auth.currentUser.knowledge,
    // currentContents: state.content.current,
    // currentQuestion: state.question.currentQuestion
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setCurrentQuestion, setContentByRank }, dispatch);
}

export default IsAuthenticated(withRouter(connect(mapStateToProps, mapDispatchToProps)(Content)));
