import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import UserPageNavBar from './UserPageNavBar';
import UserProfile from './UserProfile';
import UserGuidePage from './UserGuidePage';

const UserPage = (props) => {
  return (
    <div className="user-page">
      <UserPageNavBar />
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path="/sushi-rank" component={UserGuidePage}/>
    </div>
  )
}
export default withRouter(UserPage);
