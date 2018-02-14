import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';
import { userRankByNum } from '../helpermethods';



const ContentShow = (props) => {
// const categories = ['Beginning', 'Rise-of-Sushi', 'Type', 'Etiquette']
const link = {
  width: `${(100 / props.new_suggestions.length)}%`,
  display: 'inline-block'
}
console.log('content show', props)

    if (props.new_suggestions.length === 0 ) {
      return ( <div>" new suggestions "</div>)
    } else {
      const suggestions = props.new_suggestions.map( (suggestion, i ) => (<div key={i} style={link}> <img src={`${suggestion.photos[0]}`} alt={`${suggestion.name}pic1`}/> <dl>{ suggestion.name }</dl></div> ) )
console.log('between suggestions from content show', suggestions)
      return (
        <div>
          {suggestions}
          <Link to="/profile"><button>Go To Profile </button></Link>
        </div>
      )
    }

}




const mapStateToProps = (state, prevProps) => {
  console.log('content show prevProps', prevProps)
  console.log('content show state.json.contents', state.json.contents)
  console.log('content show state.restaurants', state.restaurant.restaurants)
  console.log('content show currentUser.knowledge', state.auth.currentUser.knowledge)
// const category = location.pathname.split('/')[0]

  const new_suggestions = state.restaurant.restaurants.filter( restaurant => restaurant.rank === state.auth.currentUser.knowledge)
  return {
    new_suggestions: new_suggestions
  }
}

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ deleteFavorite }, dispatch);
// }

export default IsAuthenticated(withRouter(connect(mapStateToProps)(ContentShow)));
