import React from 'react';
import { connect } from 'react-redux';
import FavoritedShow from './FavoritedShow';
import { bindActionCreators } from 'redux';

const Favorited = (props) => {
  if ( props.favorites === undefined ) {
    return ( <FavoritedShow restaruant={"hi im here because of undefined"}/> )
  } else {
    return (
      <div className="favorited">
        <details>
          <summary>Favorited Restaurants</summary>
            { props.favorites.map( (s, i) => <FavoritedShow key={i} restaurant={s.restaurant}/> ) }
        </details>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { favorites: state.user.favorites }
}
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ makeNewUser }, dispatch);
// }
export default connect(mapStateToProps)(Favorited);
