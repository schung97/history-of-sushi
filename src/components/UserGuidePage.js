import React from 'react';
import { intro } from '../text/Guide.js'
import Left from 'react-icons/lib/fa/angle-left';

const UserGuidePage = () => {

  return (
    <div>
      <section>
        {intro}
      </section>
      <details>
        <summary>Amateur</summary>
        <summary>Basic</summary>
        <summary>Above Average</summary>
        <summary>Show-off</summary>
        <summary>Appreciation</summary>
      </details>
      <span><Left /></span><button>Begin</button>
    </div>
  )
}

export default UserGuidePage;
