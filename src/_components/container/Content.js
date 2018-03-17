import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Right from 'react-icons/lib/fa/angle-right';
import Left from 'react-icons/lib/fa/angle-left';

import { setNewSuggestions } from '../../_actions/RestaurantAction';
import { updateUser } from '../../_actions/AuthAction';

import IsAuthenticated from './IsAuthenticated';
import { userRankByNum } from '../helpermethods';
import { plusSlides } from '../../styling';

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

    this.props.updateUser(this.props.user, newRank, this.props.history, suggestions, this.props.prevUrl)
  }

  render() {
    const facts = this.props.content[0].facts.map( (content, i) => {
      const style = {
       display: `${i === 0 ? 'block' : 'none' }`
     }

      return (
        <div key={i} className="slide" id={`section-${i}`} style={style}>
          <p>{content.fact}</p>
        </div>
      )
    })
    // const lastIndex = document.getElementsByClassName('slide')[document.getElementsByClassName('slide').length - 1];
    // const slide = document.getElementById(`section-${lastIndex}`).id;
    // const show = {
    //   display: `${slide === `section-${lastIndex}` ? 'block' : 'none'}`,
    // }
      return (
        <div className="sushi-knowledge-contents">
        <div className="slides">
          {facts}
          <a className="prev" onClick={() => plusSlides(-1)}><Left size={40}/></a>
          <a className="next" onClick={() => plusSlides(1)}><Right size={40}/></a>
        </div>
          <Link to={`/sushi-knowledge/${this.props.prevUrl}/suggestions`}><button onClick={ () => this.moveUpARank()} >Complete! Back to Profile</button></Link>
        </div>
      )
  }
}

const mapStateToProps = (state, prevProp) => {
  const split = prevProp.match.params.name.split('-').join(' ')
  const found = state.json.contents.filter( content => content.category === split )

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
