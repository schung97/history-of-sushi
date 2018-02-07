import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import UserPage from './UserPage';
import  SignedOut from './SignedOut';
import '../../css/Main.css';

const Main = (props) => {
  console.log("main", props.history)
  return (
    <main>
      <NavBar/>
      <Switch>
        <Route exact path="/profile" component={UserPage}/>
        <Route exact path="/signed-out" component={SignedOut}/>
      </Switch>
    </main>
  )
}

export default Main;
