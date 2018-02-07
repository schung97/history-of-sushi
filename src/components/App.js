import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchUser } from '../actions/Authentication';
import { bindActionCreators } from 'redux';
import Header from './Header';
import Home from './Home';
import SignUp from '../containers/SignUp';
import SignIn from '../containers/SignIn';
import MainContent from '../components/MainContent';
import Footer from './Footer';
// BrowserRouter is the router implementation for HTML5 browsers (vs Native).
// Link is your replacement for anchor tags.
// Route is the conditionally shown component based on matching a path to a URL.
// Switch returns only the first matching route rather than all matching routes.

import { connect } from 'react-redux';

import '../css/App.css';
class App extends React.Component {

  componentDidMount() {
     if (localStorage.getItem('token')) {
       this.props.fetchUser();
     } else {
       this.setState({ authCompleted: true})
     }
   }

  render() {
    console.log('APP', this.props)
    return (
      <Router>
        <div className="app">
          <Header/>

            <Switch>
              <Route exact path="/" render={Home}/>
              <Route exact path="/signup" component={SignUp}/>
              <Route exact path="/login" component={SignIn}/>

              <Route exact path="/profile" render={MainContent} />

            </Switch>
          <Footer/>
        </div>
      </Router>
    )
  }

}

const mapStateToProps = state => {
  return { state }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
