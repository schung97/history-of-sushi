import React from 'react';
import { withRouter } from 'react-router-dom';

const link = {
  width: '200px',
  height: 'auto'
}
//withRouter to pass prop.history
const SuggestedList = (props) => {
  const restaurants = props.restaurants.map((restaurant, i) => {
    return (
      <ul onClick={() => props.handleClick(restaurant.restaurant, props.history)} key={i}>
        <img src={`${restaurant.photos[0]}`} alt={`${restaurant.restaurant}pic1`} style={link}/>
        <dl>{restaurant.restaurant}</dl>
        <dl>{restaurant.price}</dl>
      </ul>
    )
  })
  return ( <div className="dropdown-content">{restaurants}</div>)
}

export default withRouter(SuggestedList);
