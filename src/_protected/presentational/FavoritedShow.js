import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//

const FavoritedShow = (props) => {
  return (
    <div className="favorited-show">
      <li>{ props.restaurant }</li>
    </div>
  )
}




// const mapStateToProps = state => {
//   return { suggestions: state.content.suggestions }
// }
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default FavoritedShow;
