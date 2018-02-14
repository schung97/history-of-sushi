import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import IsAuthenticated from '../../IsAuthenticated';
// import { setCurrentQuestion } from '../../_actions/QuestionAction';
import { setNewSuggestions } from '../../_actions/RestaurantAction';

import { updateUser } from '../../_actions/AuthAction';
import { bindActionCreators } from 'redux';


import { userRankByNum } from '../helpermethods';


class Content extends React.Component {


  moveUpARank = () => {
    const ranks = ['Amateur', 'Basic', 'Above-Average', 'Show-off', 'Appreciation'];
    if (this.props.user.knowledge !== ranks[ranks.length - 1]) {
      const rankNum = userRankByNum(this.props.user.knowledge);
      const newRank = ranks[(rankNum + 1) % (ranks.length)];
      this.createSuggestions(newRank)
    } else {
      this.props.history.push(`/sushi-knowledge/${this.props.prevUrl}/suggestions`)
    }
  }

  createSuggestions = (newRank) => {
    // const ranks = ['Amateur', 'Basic', 'Above-Average', 'Show-off', 'Appreciation'];
    // const categories = ['Beginning', 'Rise of Sushi', 'Type', 'Etiquette'];
    const found = this.props.restaurants.filter( restaurant => restaurant.rank === newRank)
    const suggestions = found.map( sugg => sugg.id)
    // this.props.setNewSuggestions(found)
    this.props.updateUser(this.props.user, newRank, this.props.history, suggestions, this.props.prevUrl)
  }

  render() {

    const facts = this.props.content[0].facts.map( (content, i) => {
      return (
        <div key={i} className={`section-${i}`}>
          <p> --------{i}------------ </p>
          <p>{content.fact}</p>
        </div>
      )
    })

      return (
        <div className="sushi-knowledge-contents">
          {facts}
          <Link to={`/sushi-knowledge/${this.props.prevUrl}/suggestions`}><button onClick={ () => this.moveUpARank()}>Complete! Back to Profile</button></Link>
        </div>
      )
  }
}




const mapStateToProps = (state, prevProp) => {
  const split = prevProp.match.params.name.split('-').join(' ')
  const found = state.json.contents.filter( content => content.category === split )
  // console.log('content---router-props--checking', prevProp.match.params.name)
  // console.log('found', found)
  // console.log('content-restaruant--checking', state.restaurant.restaurants)

  return {
    prevUrl: prevProp.match.params.name,
    content: found,
    user: state.auth.currentUser,
    restaurants: state.restaurant.restaurants
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ updateUser, setNewSuggestions }, dispatch);
}

export default IsAuthenticated(withRouter(connect(mapStateToProps, mapDispatchToProps)(Content)));
