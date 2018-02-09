import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../_actions/AuthAction';
import { bindActionCreators } from 'redux';
import '../../css/NavBar.css';

const NavBar = (props) => {
  return (
    <nav>
      <li>History of Sushi</li>
      <li onClick={ () => props.logoutUser(props.history)}>Sign Out</li>
    </nav>
  )
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logoutUser }, dispatch);
}
export default connect(null, mapDispatchToProps)(NavBar);
