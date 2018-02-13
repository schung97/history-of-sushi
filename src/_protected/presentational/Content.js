import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import ContentInfo from '../presentational/ContentInfo';
import IsAuthenticated from '../../IsAuthenticated';
import { setCurrentQuestion } from '../../_actions/QuestionAction';
// import { setContentByRank } from '../../_actions/ContentAction';
import { updateUser } from '../../_actions/AuthAction';
import { bindActionCreators } from 'redux';
import ContentDisplay from './ContentDisplay';


//import helper methods
// import { findContentByRank, randomlySort, randomlySelectOne } from '../helpermethods';
import { findContentByRank, userRankByNum } from '../helpermethods';


class Content extends React.Component {


  constructor(props) {
    super(props);

  }


  handleResponse = e => {
    e.target.value
  }

  moveUpARank = () => {
    const ranks = ['Amateur', 'Basic', 'Above-Average', 'Show-off', 'Appreciation'];
    const rankNum = userRankByNum(this.props.user.knowledge)
    const newRank = ranks[(rankNum + 1) % (ranks.length)];
    newRank >= 4 ? this.props.history.push('/profile') : this.props.updateUser(this.props.user, newRank, this.props.history)
    // return newRank;
  }

  render() {
    // console.log('content-users rank----', this.props.user.knowledge)
    // console.log('contents-category---=-', this.props.content.category)

    const facts = this.props.content.facts.map( (content, i) => {
      return (
        <div key={i} className={`section-${i}`}>
          <p> --------{i}-----{this.props.content.category}------- </p>
          <p>{content.fact}</p>
        </div>
      )
    })

      return (
        <div className="sushi-knowledge-contents">
          {facts}
          <button onClick={ () => this.moveUpARank()}>Complete! Back to Profile</button>
        </div>
      )
  }
}




const mapStateToProps = (state, prevProp) => {
  // const found = state.json.contents.filter( content => content.category === prevProp.match.params.category_name )
  // console.log('content---router-props--checking', prevProp.match.params.category_name)
  console.log('content---router-props--checking', prevProp)
  return {
    content: findContentByRank(state.auth.currentUser.knowledge, state.json.contents),
    user: state.auth.currentUser,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateUser }, dispatch);
}

export default IsAuthenticated(withRouter(connect(mapStateToProps, mapDispatchToProps)(Content)));
