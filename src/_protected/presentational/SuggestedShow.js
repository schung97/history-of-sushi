import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//

const SuggestedShow = (props) => {
  return (
    <details>
      <summary><h4>{ props.restaurant.restaurant }</h4></summary>
        <dl>Rating: { props.restaurant.rating }</dl>
        <dl>Reviews: { props.restaurant.review_count }</dl>
        <dl>Address: { props.restaurant.address }</dl>
    </details>
  )
}




// const mapStateToProps = state => {
//   return { suggestions: state.content.suggestions }
// }
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default SuggestedShow;
