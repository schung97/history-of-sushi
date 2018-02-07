import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './_public/presentational/Header';
import LandingPage from './_public/presentational/LandingPage';
import Main from './_protected/presentational/Main';
import Footer from './_public/presentational/Footer';
import './css/App.css';


const App = () => {
  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route component={LandingPage}/>
        <Route path="/user/profile" component={Main}/>
      </Switch>
      <Footer/>
    </div>
  )
}

export default App;
