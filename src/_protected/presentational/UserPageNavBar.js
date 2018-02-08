import React from 'react';
import { Link } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';
import '../../css/UserPageNavBar.css';

const UserPageNavBar = () => {
  return (
    <nav id="user-page-nav">
      <Link to="/profile"><li>PROFILE</li></Link>
      <Link to="/sushi-rank"><li>SUSHI RANK</li></Link>
    </nav>
  )
}

export default IsAuthenticated(UserPageNavBar);
