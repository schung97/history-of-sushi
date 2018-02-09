import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ContentInfo from '../presentational/ContentInfo';
import IsAuthenticated from '../../IsAuthenticated';
import { setCurrentQuestion } from '../../_actions/QuestionAction';
import { setContentByRank } from '../../_actions/ContentAction';
import { bindActionCreators } from 'redux';
import ContentDisplay from './ContentDisplay';



//  *** helper methods  *** //
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


const randomlySelectOne = content => {
  const randomIndex = Math.floor(Math.random() * content.length )
  return content[randomIndex]
}

///-TODO-----------------edit display later----------------//


class Content extends React.Component {




  render() {

  console.log('content start')

//-------------- all working correctly  --------------//

    const found = findContentByRank(this.props.userRank, this.props.contents)
    const fact_divs = randomlyDisplay(found.facts, 'fact') // might not need?
    const questions = found.questions

    const randomQuestion = randomlySelectOne(questions)
    console.log('random question', randomQuestion)

    //*** setting state ***//
    this.props.setContentByRank(found.facts)
    this.props.setCurrentQuestion(randomQuestion)
//-------------- all working correctly  --------------//


  console.log('content end')


    return (
      <div className="sushi-knowledge-contents">
      FACTS_____
      {fact_divs}
      QUESTION IS___ {randomQuestion.question}
      ANSWER IS___ {randomQuestion.answer}
      </div>
    )

  }

}



const mapStateToProps = state => {
  return {
    contents: state.json.contents,
    userID: state.auth.currentUser.id,
    userRank: state.auth.currentUser.knowledge
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setCurrentQuestion, setContentByRank }, dispatch);
}

export default IsAuthenticated(connect(mapStateToProps, mapDispatchToProps)(Content));
