import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';
import '../../css/SuggestionsShow.css';


// uncomment this when i figure this out.
// import { slideIndex, showSlides, currentSlide, plusSlides} from '../../styling';


import Heart from 'react-icons/lib/ti/heart-outline';
import { plusSlides} from '../../styling';
import { createFavoriteFromSuggestions } from '../../_actions/AuthAction';
import { bindActionCreators } from 'redux';




// const SuggestedShow = (props) => {
//   // slideIndex;
//   // showSlides(slideIndex)
//     if (props.page === undefined) {
//       return (<div> Suggestions</div>)
//     } else {
//       const photos = props.page.photos.map((photo, i) =>  {
//         return (
//           <div className="slide" key={i}>
//             <img src={`${photo}`} alt={`${props.page.restaurant}pic${i}`} style={{width: '100%'}}/>
//             <div className="image-number">{`${i + 1} / ${props.page.photos.length}`}</div>
//           </div> )
//       })
//       return (
//         <div className="slideshow">
//           {photos}
//           <dl>{ props.page.restaurant }</dl>
//           <dl>{ props.page.rating }</dl>
//           <dl>{ props.page.address }</dl>
//           <dl>{ props.page.phone }</dl>
//           <dl>{ props.page.review_count }</dl>
//           <dl>{ props.page.url }</dl>
//         </div>
//       )
//     }
//
// }

// slideIndex;
// showSlides(slideIndex)

const SuggestedShow = (props) => {
  // slideIndex;
  // showSlides(slideIndex)
console.log('suggested show', props)
    if (props.page === undefined) {
      return (<div> Suggestions</div>)
    } else {
      const photos = props.page.photos.map((photo, i) =>  {
        return (
          <div className="slide" key={i}>
            <img src={`${photo}`} alt={`${props.page.restaurant}pic${i}`} style={{width: '100%'}}/>
            <div className="image-number">{`${i + 1} / ${props.page.photos.length}`}</div>
          </div>  )
      })
      return (
        <div className="slideshow">
          {photos}
          <a className="prev" onClick={() => plusSlides(-1)}>back</a>
          <a className="next" onClick={() => plusSlides(1)}>next</a>
          <h1><Heart onClick={() => props.createFavoriteFromSuggestions(props.user.id, props.page.restaurant_id, props.page.id)}/></h1>
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
