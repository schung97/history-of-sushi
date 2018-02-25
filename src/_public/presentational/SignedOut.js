import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/SignedOut.css';

const SignedOut = () => {
  return (
    <div className="signout">
      <Link to="/signin"><button>Sign Back In?</button></Link>
    </div>
  )
}

export default SignedOut;
