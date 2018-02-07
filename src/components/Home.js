import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div id="intro-text">Sushi, list, blah, blah</div>
      <Link to="/signup"><button>Sign Up</button></Link>
      <Link to="/login"><button>Log In</button></Link>
    </div>
  )
}

export default Home;
