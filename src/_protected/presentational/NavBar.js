import React from 'react';
import { connect } from 'react-redux';
import { logoutUser } from '../../_actions/AuthAction';
import { bindActionCreators } from 'redux';
import '../../css/NavBar.css';

const NavBar = (props) => {
  return (
    <nav>
      <ul>
        <li><div>History of Sushi</div></li>
        <li className="sign-out"><a onClick={ () => props.logoutUser(props.history)}>Sign Out</a></li>
      </ul>
    </nav>
  )
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logoutUser }, dispatch);
}
export default connect(null, mapDispatchToProps)(NavBar);
