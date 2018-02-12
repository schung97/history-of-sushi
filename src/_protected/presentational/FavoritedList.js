import React from 'react';
import { withRouter, Link } from 'react-router-dom';


const FavoritedList = (props) => {
  const restaurant = props.restaurants.map((restaurant, i) => {
    return (<Link to={`/favorites/${restaurant.id}`}key={i}><ul>{restaurant.restaurant}</ul></Link>)
  } )
  return ( <div className="dropdown-content">{restaurant}</div> )
}

export default withRouter(FavoritedList);
