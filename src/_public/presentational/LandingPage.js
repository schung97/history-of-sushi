import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import SignUp from '../component/SignUp';
import SignIn from '../component/SignIn';
import '../../css/LandingPage.css';

const LandingPage = (props) => {
  console.log("landingpage", props)
  return (
    <div id="landing-page">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={SignIn}/>
      </Switch>
    </div>
  )
}

export default LandingPage;
