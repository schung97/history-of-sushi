import React from 'react';
import UserPageNavBar from './UserPageNavBar';
import UserStatusPage from './UserStatusPage';
import UserGuidePage from './UserGuidePage';

const UserPage = () => {

  return (
    <div className="user-page">
      <UserPageNavBar />
      <UserStatusPage />
      <UserGuidePage />
    </div>
  )
}
export default UserPage;
