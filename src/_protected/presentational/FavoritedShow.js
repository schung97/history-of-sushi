import React from 'react';
import { connect } from 'react-redux';
import IsAuthenticated from '../../IsAuthenticated';
// import { bindActionCreators } from 'redux';
//

const FavoritedShow = (props) => {
console.log('fav', props)
    if (props.page === undefined) {
      return (<div> favorited show</div>)
    } else {
      return (
        <div>
          <img src={`${props.page.photos[0]}`} alt={`${props.page.restaurant}pic1`}/>
          <dl>{ props.page.restaurant }</dl>
          <dl>{ props.page.price }</dl>
          <dl>{ props.page.address }</dl>
          <dl>{ props.page.phone }</dl>
          <dl>{ props.page.review_count }</dl>
          <dl>{ props.page.url }</dl>
        </div>
      )
    }

}




const mapStateToProps = state => {
  return { page: state.page.show.favorited }
}
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default IsAuthenticated(connect(mapStateToProps)(FavoritedShow));
