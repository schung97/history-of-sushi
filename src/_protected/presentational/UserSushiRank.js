import React from 'react';
import { intro } from '../../text/Guide.js'
import Left from 'react-icons/lib/fa/angle-left';

const UserSushiRank = (props) => {
console.log("HELLOOOOO from sushi-rank", props.history)
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
        <summary>Show-off</summary>
      </details>
      <details>
        <summary>Appreciation</summary>
      </details>
      <span><Left /></span><button>Begin</button>
    </div>
  )
}

export default UserSushiRank;
