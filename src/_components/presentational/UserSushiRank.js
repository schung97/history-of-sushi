import React from 'react';
import { intro , lorem_ipsum } from '../../text/Guide.js'
import IsAuthenticated from '../container/IsAuthenticated';

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
    </div>
  )
}

export default IsAuthenticated(UserSushiRank);
