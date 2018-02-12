import React from 'react';
import { withRouter } from 'react-router-dom';


const FavoritedList = (props) => {
  const restaurant = props.restaurants.map((restaurant, i) => {
    return (<li onClick={() => props.handleClick(restaurant.restaurant, props.history)} key={i}>{restaurant.restaurant}</li>)
  } )
  return ( <div className="dropdown-content">{restaurant}</div> )
}

export default withRouter(FavoritedList);
