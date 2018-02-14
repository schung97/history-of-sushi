import React from 'react';
import { intro } from '../../text/Guide.js'
import Left from 'react-icons/lib/fa/angle-left';
import { Link } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';

const UserSushiRank = (props) => {
  return (
    <div>
      <section>
        {intro}
      </section>
      <details>
        <summary>Amateur</summary>
      </details>
      <details>
        <summary>Basic</summary>
      </details>
      <details>
        <summary>Above Average</summary>
      </details>
      <details>
        <summary>Show-Off</summary>
      </details>
      <details>
        <summary>Appreciation</summary>
      </details>
      <Link to="/profile"><h2><Left /></h2></Link>
      <Link to="/sushi-knowledge"><button>Begin</button></Link>
    </div>
  )
}

export default IsAuthenticated(UserSushiRank);
