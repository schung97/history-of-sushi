import React from 'react';
import { Link } from 'react-router-dom';

const SignedOut = (props) => {
  return (
    <div>
      <ul>
        <li>firstname + lastname</li>
        <li>Sushi Knowledge:_____</li>
      </ul>
      <Link to="/login"><button>Sign Back In?</button></Link>
    </div>
  )
}

export default SignedOut;
