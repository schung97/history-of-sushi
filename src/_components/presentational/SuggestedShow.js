import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IsAuthenticated from '../container/IsAuthenticated';

import Heart from 'react-icons/lib/ti/heart-outline';
import Right from 'react-icons/lib/fa/angle-right';
import Left from 'react-icons/lib/fa/angle-left';
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
          <figure className="slide" key={i} style={style}>
            <img src={`${photo}`} alt={`${props.page.restaurant}pic${i}`}/>
            <figcaption className="image-number">{`${i + 1} / ${props.page.photos.length}`}</figcaption>
          </figure>  )
      })

      return (
        <div className="slideshow">
          <div className="big-container">
            <div className="slides">
              {photos}
              <a className="prev" onClick={() => plusSlides(-1)}><Left size={40}/></a>
              <a className="next" onClick={() => plusSlides(1)}><Right size={40}/></a>
            </div>
            <div className="container">
              <h1 className="hover"><Heart onClick={() => props.createFavoriteFromSuggestions(props.user.id, props.page.restaurant_id, props.page.id, props.history)}/></h1>

              <p className="restaurant-name">{ props.page.restaurant }</p>
              <p>Rating: { props.page.rating }</p>
              <p>Address: { props.page.address }</p>
              <p>Phone: { props.page.phone }</p>
              <p>Review Count: { props.page.review_count }</p>
              <a target="_blank" href={`${props.page.url}`}><p>Click for more info.</p></a>
            </div>
          </div>
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
