import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getContentsAndQuestionsByCategory } from './_actions/JsonAction';

import NavBar from './_protected/presentational/NavBar';
import UserPageNavBar from './_protected/presentational/UserPageNavBar';
import UserProfile from './_protected/presentational/UserProfile';
import UserSushiRank from './_protected/presentational/UserSushiRank';
//** switch back if it becomes stateful **//
// import Content from './_protected/component/Content';
import Content from './_protected/presentational/Content';

import SignUp from './_public/component/SignUp';
import SignIn from './_public/component/SignIn';
import SignedOut from './_public/presentational/SignedOut';
import Home from './_public/presentational/Home';
import Header from './_public/presentational/Header';
import Footer from './_public/presentational/Footer';

import './css/App.css';
import './css/Main.css';

class App extends React.Component {

  componentDidMount() {
    this.props.getContentsAndQuestionsByCategory()
    // this.props.getUserContents(this.props.userID);
  }

  render() {
    console.log('Is User Logged In?', this.props.loggedIn)
    const showUserNavBar= this.props.loggedIn && this.props.location.pathname.indexOf('/sushi-knowledge') !== 0;
    const showNavBar = this.props.loggedIn;

    if (!this.props.loading) {

      return (
          <div className="app">
            <Header/>

            <div className="main">
                { showNavBar ? (  <NavBar {...this.props}/> ) : null }
                { showUserNavBar ? ( <UserPageNavBar /> ) :null }

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/signed-out" component={SignedOut}/>
                <Route exact path="/profile" component={UserProfile} />
                <Route exact path="/sushi-rank" component={UserSushiRank}/>
                <Route exact path="/sushi-knowledge" component={Content}/>
              </Switch>
            </div>

            <Footer/>

          </div>
        )
      } else {
        return (
          <div>L O A D I N G</div>
        )
      }

    }



}

const mapStateToProps = state => {

  return {
    loggedIn: state.auth.loggedIn ,
    // userID: state.auth.currentUser.id,
    loading: state.json.loading
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getContentsAndQuestionsByCategory }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
