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
        <div className="favorited drop-button">
          <h2>Favorited Restaurants</h2>
          <FavoritedList restaurants={this.props.favorites} handleClick={this.handleClick}/>
        </div>
      )
    }
  }

}

const mapStateToProps = state => {
  return { favorites: state.auth.currentUser.favorites }
}

export default IsAuthenticated(connect(mapStateToProps)(Favorited));
