import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserPageNavBar from './UserPageNavBar';
import UserProfile from '../component/UserProfile';
import UserSushiRank from './UserSushiRank';

const UserPage = (props) => {
  console.log("im from userpage")
  return (
    <div className="user-page">
      <UserPageNavBar />
      <Switch>
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/sushi-rank" component={UserSushiRank}/>
      </Switch>
    </div>
  )
}
export default UserPage;
