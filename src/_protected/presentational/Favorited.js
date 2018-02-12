import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FavoritedShow from './FavoritedShow';
import FavoritedList from './FavoritedList';
import { bindActionCreators } from 'redux';
import { showCurrentFav } from '../../_actions/PageAction'

class Favorited extends React.Component {
  // { this.props.favorites.map( (restaurant, i) => (<li key={i} onClick={() => this.handleClick(restaurant.restaurant)}>{restaurant.restaurant}</li>) ) }

  handleClick = restaurant => {
    console.log(restaurant)
    this.props.showCurrentFav(restaurant, this.props.favorites)
  }

  render () {
    if ( this.props.favorites === undefined ) {
      return ( <FavoritedList restaurants={"hi im here because of undefined"}/> )
    } else {
      return (
        <div className="favorited">
          <details>
            <summary>Favorited Restaurants</summary>
              <ul>
                <FavoritedList restaurants={this.props.favorites} handleClick={this.handleClick}/>
              </ul>
          </details>
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
export default connect(mapStateToProps, mapDispatchToProps)(Favorited);
