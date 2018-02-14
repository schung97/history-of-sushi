import React from 'react';
import { intro , lorem_ipsum } from '../../text/Guide.js'
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
        {lorem_ipsum}
      </details>
      <details>
        <summary>Basic</summary>
        {lorem_ipsum}
      </details>
      <details>
        <summary>Above Average</summary>
        {lorem_ipsum}
      </details>
      <details>
        <summary>Show-off</summary>
        {lorem_ipsum}
      </details>
      <details>
        <summary>Appreciation</summary>
        {lorem_ipsum}
      </details>
      <Link to="/profile"><h2><Left /></h2></Link>
    </div>
  )
}

export default IsAuthenticated(UserSushiRank);
