import React from 'react';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import NavBar from './NavBar';
import MainContent from './MainContent';
import Footer from './Footer';
// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

import { connect } from 'react-redux';

import '../css/App.css';

const App = () => (
  <Router>
    <div className="app">
      <Header/>
      <NavBar/>
        <Switch>
          <Route exact path="/" render={Home}/>
          <MainContent/>
        </Switch>
      <Footer/>
    </div>
  </Router>
)

export default App;

// place navigations.
