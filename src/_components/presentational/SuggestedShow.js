import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IsAuthenticated from '../container/IsAuthenticated';

import Heart from 'react-icons/lib/ti/heart-outline';
import { plusSlides } from '../../styling';
import { createFavoriteFromSuggestions } from '../../_actions/AuthAction';
import { bindActionCreators } from 'redux';



const SuggestedShow = (props ) => {

  let style;
    if (props.page === undefined) {
      return (<div> Suggestions</div>)
    } else {
      const photos = props.page.photos.map((photo, i) =>  {
         style = {
          display: `${i === 0 ? 'block' : 'none' }`
        }
        return (
          <div className="slide" key={i} style={style}>
            <img src={`${photo}`} alt={`${props.page.restaurant}pic${i}`} style={{width: '100%'}}/>
            <div className="image-number">{`${i + 1} / ${props.page.photos.length}`}</div>
          </div>  )
      })

      return (
        <div className="slideshow">
          <div className="slides">
            {photos}
            <a className="prev" onClick={() => plusSlides(-1)}>back</a>
            <a className="next" onClick={() => plusSlides(1)}>next</a>
          </div>
          <h1><Heart onClick={() => props.createFavoriteFromSuggestions(props.user.id, props.page.restaurant_id, props.page.id, props.history)}/></h1>
          <dl>{ props.page.restaurant }</dl>
          <dl>{ props.page.rating }</dl>
          <dl>{ props.page.address }</dl>
          <dl>{ props.page.phone }</dl>
          <dl>{ props.page.review_count }</dl>
          <dl>{ props.page.url }</dl>
        </div>
      )
    }
}




const mapStateToProps = (state, prevProps) => {
  const suggestion = state.auth.currentUser.suggestions.find( s => s.id === Number(prevProps.match.params.suggestion_id))
  return {
    page: suggestion,
    user: state.auth.currentUser
  }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createFavoriteFromSuggestions }, dispatch);
}
export default IsAuthenticated(withRouter(connect(mapStateToProps, mapDispatchToProps)(SuggestedShow)));
