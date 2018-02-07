import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import Header from './_public/presentational/Header';
import LandingPage from './_public/presentational/LandingPage';
import Main from './_protected/presentational/Main';
import Footer from './_public/presentational/Footer';
import IsAuthenticated from './_protected/IsAuthenticated';
import './css/App.css';

let count = 0
let ct = 0
const App = (props) => {

console.log(`app props loggedIn: ${count +=1}x`, props.loggedIn)
console.log(`app props history: ${ct +=1}x`, props.history)
  return (
    <div className="app">
      <Header/>
        { props.loggedIn ? <Main {...props} /> : <LandingPage {...props} /> }
      <Footer/>
    </div>
  )
}
const mapStateToProps = state => {
  console.log('maptoprops', state.AuthReducer.loggedIn)
  return { loggedIn: state.AuthReducer.loggedIn }
}
export default withRouter(connect(mapStateToProps)(App));
