import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../_public/AuthAction';
import { bindActionCreators } from 'redux';
import '../../css/NavBar.css';

const NavBar = (props) => {
  console.log('navbar', props.logoutUser)
  return (
    <nav>
      <li>History of Sushi</li>
      <li onClick={ () => props.logoutUser(props.history)}>Sign Out</li>
    </nav>
  )
}

// const mapStateToProps = state => {
//   // return {
//   //   username: state.AuthReducer.currentUser.user.username
//   // }
// }
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logoutUser }, dispatch);
}
export default connect(null,mapDispatchToProps)(NavBar);
