import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './_public/presentational/Header';
import LandingPage from './_public/presentational/LandingPage';
import Main from './_protected/presentational/Main';
import Footer from './_public/presentational/Footer';
import './css/App.css';




const App = () => {
  return (
    <div className="app">
      <Header/>
        <Route component={LandingPage}/>
        <Route component={Main}/>
      <Footer/>
    </div>
  )
}

export default App;
