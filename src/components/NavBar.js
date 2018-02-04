import React from 'react';
import { connect } from 'react-redux';
import '../css/NavBar.css';

const NavBar = (props) => {
  console.log('hey', props.nav[0])
  return (
    <nav>
      <li>History of Sushi</li>
      <li>Sign Out</li>
    </nav>
  )
}

const mapStateToProps = state => {
  return ({
    nav: state
  })
}
export default connect(mapStateToProps)(NavBar)
