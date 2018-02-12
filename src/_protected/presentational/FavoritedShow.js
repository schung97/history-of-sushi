import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
//

const FavoritedShow = (props) => {
  return (
    <div>
      <img src={`${props.photos[0]}`} alt={`${props.restaurant}pic1`}/>
      <dl>{ props.restaurant }</dl>
      <dl>{ props.rating }</dl>
      <dl>{ props.address }</dl>
      <dl>{ props.phone }</dl>
      <dl>{ props.review_count }</dl>
      <dl>{ props.url }</dl>
    </div>
  )
}




const mapStateToProps = state => {
  return { page: state.page.show.favorited }
}
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default FavoritedShow;
