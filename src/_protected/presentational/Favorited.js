import React from 'react';
import { connect } from 'react-redux';

// ** files ** //
import FavoritedList from './FavoritedList';
import { bindActionCreators } from 'redux';
import { showCurrentFav } from '../../_actions/PageAction'
import IsAuthenticated from '../../IsAuthenticated';
import '../../css/DropdownBar.css';

class Favorited extends React.Component {

  handleClick = (restaurant, history) => {
    this.props.showCurrentFav(restaurant, this.props.favorites)
    history.push(`/favorites`)
  }

  render () {
    if ( this.props.favorites === undefined ) {
      return ( <FavoritedList restaurants={"hi im here because of undefined"}/> )
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
  return { favorites: state.user.favorites }
}
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ showCurrentFav }, dispatch);
}
export default IsAuthenticated(connect(mapStateToProps, mapDispatchToProps)(Favorited));
