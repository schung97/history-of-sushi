import React from 'react';
import { Link } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';
import '../../css/UserPageNavBar.css';

const UserPageNavBar = (props) => {
  return (
    <nav id="user-page-nav">
      <ul>
        <li><Link to="/profile">PROFILE</Link></li>
        <li><Link to="/sushi-rank">SUSHI RANK</Link></li>
      </ul>
    </nav>
  )
}

export default IsAuthenticated(UserPageNavBar);
