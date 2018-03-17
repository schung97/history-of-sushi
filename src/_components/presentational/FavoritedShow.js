import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import IsAuthenticated from '../container/IsAuthenticated';
import Delete from 'react-icons/lib/ti/times-outline';

import { deleteFavorite } from '../../_actions/AuthAction';
import { bindActionCreators } from 'redux';

const FavoritedShow = (props) => {
    if (!props.page) {
      return (<ul> favorited show</ul>)
    } else {
      return (
        <ul>
          <img src={`${props.page.photos[0]}`} alt={`${props.page.restaurant}pic1`}/>
          <h1><Delete onClick={() => props.deleteFavorite(props.page.id, props.history)}/></h1>
          <li>{ props.page.restaurant }</li>
          <li>{ props.page.price }</li>
          <li>{ props.page.address }</li>
          <li>{ props.page.phone }</li>
          <li>{ props.page.review_count }</li>
          <li>{ props.page.url }</li>
        </ul>
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
