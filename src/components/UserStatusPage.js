import React from 'react';
import UserPageNavBar from './UserPageNavBar';
import '../css/UserStatusPage.css';

const UserStatusPage = () => {

  return (
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
  )
}
export default UserStatusPage;
