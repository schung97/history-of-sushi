import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';
import Delete from 'react-icons/lib/ti/times-outline';

import { deleteFavorite } from '../../_actions/AuthAction';
import { bindActionCreators } from 'redux';

const FavoritedShow = (props) => {

    if (!props.page) {
      return (<div> favorited show</div>)
    } else {
      return (
        <div>
          <img src={`${props.page.photos[0]}`} alt={`${props.page.restaurant}pic1`}/>
          <h1><Delete onClick={() => props.deleteFavorite(props.page.id, props.history)}/></h1>
          <dl><h2>{ props.page.restaurant }</h2></dl>
          <dl>{ props.page.price }</dl>
          <dl>Address: { props.page.address }</dl>
          <dl>Phone: { props.page.phone }</dl>
          <dl>Review Count: { props.page.review_count }</dl>
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
