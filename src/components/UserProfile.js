import React from 'react';
import UserPageNavBar from './UserPageNavBar';
import Suggested from './Suggested';
import Favorited from './Favorited';
import ExtraStuff from './ExtraStuff';
import '../css/UserProfile.css';

const UserProfile = (props) => {
console.log("UserProfile-loggedin", props)
  return (
  <div className="user-profile">
    <Suggested/>
    <Favorited/>

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
    <ExtraStuff/>
</div>
  )
}
export default UserProfile;
