import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';
import Delete from 'react-icons/lib/ti/times-outline';

import { deleteFavorite } from '../../_actions/AuthAction';
import { bindActionCreators } from 'redux';
 // ** TODO css butons later *** //
const FavoritedShow = (props) => {

    if (!props.page) {
      return (<div> favorited show</div>)
    } else {
      return (
        <div>
          <h1><Delete onClick={() => props.deleteFavorite(props.page.id, props.user.id)}/></h1>
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
  const favorite = state.auth.currentUser.favorites.find( s => s.id === Number(prevProps.match.params.favorite_id))
  return {
    page: favorite,
    user: state.auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ deleteFavorite }, dispatch);
}

export default IsAuthenticated(withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritedShow)));
