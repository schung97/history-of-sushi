import React from 'react';
import { connect } from 'react-redux';
import FavoritedList from './FavoritedList';
import IsAuthenticated from '../container/IsAuthenticated';

class Favorited extends React.Component {

  render () {
    if ( !this.props.favorites) {
      return ( <FavoritedList restaurants={[]}/> )
    } else {
      return (
        <details className="favorited drop-button">
          <summary>Favorited Restaurants</summary>
          <FavoritedList restaurants={this.props.favorites} handleClick={this.handleClick}/>
        </details>
      )
    }
  }

}

const mapStateToProps = state => {
  return { favorites: state.auth.currentUser.favorites }
}

export default IsAuthenticated(connect(mapStateToProps)(Favorited));
