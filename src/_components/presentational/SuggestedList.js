import React from 'react';
import { withRouter, Link } from 'react-router-dom';


const link = {
  width: '200px',
  height: 'auto'
}


//withRouter to pass prop.history
const SuggestedList = (props) => {
  const restaurants = props.restaurants.map((restaurant, i) => {
    return (
      <Link to={`/suggestions/${restaurant.id}`} key={i}><ul>
        <img src={`${restaurant.photos[0]}`} alt={`${restaurant.restaurant}pic1`} style={link}/>
        <li>{restaurant.restaurant}</li>
        <li>{restaurant.price}</li>
      </ul></Link>
    )
  })
  return ( <div className="dropdown-content">{restaurants}</div>)
}

export default withRouter(SuggestedList);
