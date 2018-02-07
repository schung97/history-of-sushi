
import React from 'react';
import Suggested from '../presentational/Suggested';
import Favorited from '../presentational/Favorited';
import ExtraStuff from '../presentational/ExtraStuff';
import '../../css/UserProfile.css';

const UserProfile = (props) => {
console.log("UserProfile", props)
  return (
  <div className="user-profile">
    <div className="user-status">
      <img src="https://media.giphy.com/media/xUOwG7xTFIS7K5Z12o/giphy.gif" alt="default-pic"/>
      <ul className="user-rank">
        <li>Beginning</li>
        <li>Rise of Sushi</li>
        <li>Modern Evolution</li>
        <li>Type</li>
        <li>Etiquette</li>
        <li>Fun Fact</li>
      </ul>
    </div>
    <Suggested />
    <Favorited />
    <ExtraStuff />
</div>
  )
}
export default UserProfile;
