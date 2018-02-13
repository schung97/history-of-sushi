import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// ** files ** //
import FavoritedList from './FavoritedList';
import IsAuthenticated from '../../IsAuthenticated';
import '../../css/DropdownBar.css';

class Favorited extends React.Component {

  render () {
    if ( !this.props.favorites) {
      return ( <FavoritedList restaurants={[]}/> )
    } else {
      return (
        <div className="favorited">
          <button className="drop-button">Favorited Restaurants</button>
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
