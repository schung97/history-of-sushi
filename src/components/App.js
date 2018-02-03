import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';
// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

import { connect } from 'react-redux';

import '../css/App.css';

const App = () => (
  <Router>
    <div className="App">
      <Header/>
      <NavBar/>
      <MainContent/>
      <Footer/>
    </div>
  </Router>
)

export default App;

// place navigations.
