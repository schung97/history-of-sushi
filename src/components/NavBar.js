import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import '../css/NavBar.css';

const NavBar = () => {
  // console.log('hey', props.nav[0])
  return (
    <nav>
      <li>History of Sushi</li>
      <Link to="/signed-out"><li>Sign Out</li></Link>
    </nav>
  )
}

// const mapStateToProps = state => {
//   return ({
//     nav: state
//   })
// }
export default NavBar;
// export default connect(mapStateToProps)(NavBar)
  // <NavLink></NavLink>
