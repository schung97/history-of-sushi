import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../_actions/AuthAction';


const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/sushi-rank">About</Link></li>
        <li className="sign-out"><a onClick={ () => props.logoutUser(props.history)}>Sign Out</a></li>
      </ul>
    </nav>
  )
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logoutUser }, dispatch);
}
export default connect(null, mapDispatchToProps)(NavBar);
