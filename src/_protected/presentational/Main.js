import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NavBar from './NavBar';
import UserPage from './UserPage';
import UserSushiRank from './UserSushiRank'
import IsAuthenticated from '../../_protected/IsAuthenticated';
import { getCurrentUser, loginUser, logoutUser } from '../../_public/AuthAction';
import '../../css/Main.css';

const Main = (props) => {
  console.log("main", props)

  return (
    <main>
      <NavBar {...props}/>
      <Route exact path="/profile" component={UserPage}/>
      <Route exact path="/sushi-rank" component={UserSushiRank}/>
    </main>
  )
}

const mapStateToProps = state => {
  console.log('mapstatetoprop main', state)
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loginUser, getCurrentUser,logoutUser }, dispatch);
}

export default IsAuthenticated(connect(null, mapDispatchToProps)(Main));
