import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';
// import { bindActionCreators } from 'redux';
//

const FavoritedShow = (props) => {

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




const mapStateToProps = (state, prevProps) => {
  const favorite = state.user.favorites.find( s => s.id === Number(prevProps.match.params.favorite_id))
  return { page: favorite }
}
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default IsAuthenticated(withRouter(connect(mapStateToProps)(FavoritedShow)));
