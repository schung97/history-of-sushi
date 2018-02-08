import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getContentsAndQuestionsByCategory, getUserContents } from './_protected/ContentAction';

// import Main from './_protected/presentational/Main';
import NavBar from './_protected/presentational/NavBar';
import UserPageNavBar from './_protected/presentational/UserPageNavBar';
import UserProfile from './_protected/presentational/UserProfile';
import UserSushiRank from './_protected/presentational/UserSushiRank';
import Content from './_protected/component/Content';

import SignUp from './_public/component/SignUp';
import SignIn from './_public/component/SignIn';
import SignedOut from './_public/presentational/SignedOut';
import Home from './_public/presentational/Home';
import Header from './_public/presentational/Header';
// import LandingPage from './_public/presentational/LandingPage';
import Footer from './_public/presentational/Footer';

import './css/App.css';
import './css/Main.css';
// import './css/LandingPage.css';

class App extends React.Component {

  componentDidMount() {
    this.props.getContentsAndQuestionsByCategory()
    // this.props.getUserContents(this.props.userID);
  }
//   { this.props.loggedIn ? <Main {...this.props} /> : <LandingPage {...this.props} /> }
          //<Redirect to="/" />
                  // <Route Main {...this.props} />
  render() {
    console.log('Is User Logged In?', this.props.loggedIn)
    const hide = this.props.location.pathname === '/sushi-knowledge';
    const show = this.props.location.pathname.indexOf('/sign') === 0;

    return (
      <div className="app">
        <Header/>



        <div className="main">
            { show ? (  <NavBar {...this.props}/> ) : null }
            { hide ? null : ( <UserPageNavBar /> ) }

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
  }

}

const mapStateToProps = state => {
  // contents and questions as props, only used for confirmation, get rid of later?
  return {
    loggedIn: state.auth.loggedIn ,
    userID: state.auth.currentUser,
    contents: state.content.contents,
    questions: state.content.questions
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getContentsAndQuestionsByCategory, getUserContents }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
