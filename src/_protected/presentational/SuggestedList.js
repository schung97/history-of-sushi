import React from 'react';
import { withRouter, Link } from 'react-router-dom';
// import { Button, Header, Icon, Modal } from 'semantic-ui-react'

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
        <dl>{restaurant.restaurant}</dl>
        <dl>{restaurant.price}</dl>
      </ul></Link>
    )
  })
  return ( <div className="dropdown-content">{restaurants}</div>)
  // return (<Dropdown placeholder='Select Friend' fluid selection options={restaurants} />)
}

export default withRouter(SuggestedList);
