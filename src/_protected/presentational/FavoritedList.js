import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';


const FavoritedList = (props) => {
  const restaurant = props.restaurants.map((restaurant, i) => (<li onClick={() => props.handleClick(restaurant.restaurant)} key={i}>{restaurant.restaurant}</li>))
  return ( <ul>{restaurant}</ul> )
}

export default FavoritedList;
