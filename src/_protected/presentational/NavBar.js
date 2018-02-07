import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import '../../css/NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <li>History of Sushi</li>
      <Link to="/signed-out"><li>Sign Out</li></Link>
    </nav>
  )
}

export default NavBar;
