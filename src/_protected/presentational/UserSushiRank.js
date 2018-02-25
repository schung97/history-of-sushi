import React from 'react';
import { intro , lorem_ipsum, amateur, basic, above, showoff, appreciation } from '../../text/Guide.js'
import Left from 'react-icons/lib/fa/angle-left';
import { Link } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';

const UserSushiRank = (props) => {
  return (
    <div>
      <section>
        <h3>{intro}</h3>
      </section>
      <details>
        <summary>Amateur</summary>
        {amateur}
      </details>
      <details>
        <summary>Basic</summary>
        {basic}
      </details>
      <details>
        <summary>Above Average</summary>
        {above}
      </details>
      <details>
        <summary>Show-off</summary>
        {showoff}
      </details>
      <details>
        <summary>Appreciation</summary>
        {appreciation}
      </details>
      <Link to="/profile"><Left size={48} /></Link>
    </div>
  )
}

export default IsAuthenticated(UserSushiRank);
