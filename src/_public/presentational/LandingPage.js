import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
// import Main from '../../_protected/presentational/Main';
import SignUp from '../component/SignUp';
import SignIn from '../component/SignIn';
import SignedOut from './SignedOut';
import '../../css/LandingPage.css';

const LandingPage = (props) => {
  console.log("landingpage", props.history)
  return (
    <div id="landing-page">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/login" component={SignIn}/>
        <Route exact path="/signed-out" component={SignedOut}/>
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default LandingPage;
