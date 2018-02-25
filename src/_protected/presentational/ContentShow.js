import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';
import { userRankByNum } from '../helpermethods';



const ContentShow = (props) => {
// const categories = ['Beginning', 'Rise-of-Sushi', 'Type', 'Etiquette']

    if (props.new_suggestions.length === 0 ) {
      return ( <div>" new suggestions "</div>)
    } else {
      const suggestions = props.new_suggestions.map( (suggestion, i ) => (<div className="grid-item" key={i}> <img src={`${suggestion.photos[0]}`} alt={`${suggestion.name}pic1`}/> <dl>{ suggestion.name }</dl></div>) )

      return (
        <div>
          <div className="grid">
            {suggestions}
          </div>
          <Link to="/profile"><button>Go To Profile </button></Link>
        </div>
      )
    }

}




const mapStateToProps = (state, prevProps) => {

  const new_suggestions = state.restaurant.restaurants.filter( restaurant => restaurant.rank === state.auth.currentUser.knowledge)
  return {
    new_suggestions: new_suggestions
  }
}

export default IsAuthenticated(withRouter(connect(mapStateToProps)(ContentShow)));
