import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getContentsAndQuestionsByCategory } from './_actions/JsonAction';
import { getRestaurants } from './_actions/RestaurantAction';

import NavBar from './_protected/presentational/NavBar';
import UserPageNavBar from './_protected/presentational/UserPageNavBar';
import UserProfile from './_protected/presentational/UserProfile';
import UserSushiRank from './_protected/presentational/UserSushiRank';
import FavoritedShow from './_protected/presentational/FavoritedShow';
import SuggestedShow from './_protected/presentational/SuggestedShow';


//** switch back if it becomes stateful **//
// import Content from './_protected/component/Content';
import Content from './_protected/presentational/Content';
// import ContentDisplay from './_protected/presentational/ContentDisplay';

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
    this.props.getContentsAndQuestionsByCategory();
    this.props.getRestaurants();
  }

  // shouldComponentUpdate(prevProp, nextState) {
  //   return true
  // }
  //
  // componentWillUpdate(prevProp, nextState) {
  //
  // }


  render() {
    console.log('Is User Logged In?', this.props.loggedIn)
    console.log('checking prop for prev', this.props)

    const showUserNavBar= this.props.loggedIn && this.props.location.pathname.indexOf('/sushi-knowledge') !== 0;
    const showNavBar = this.props.loggedIn;

    if (!this.props.loading1 && !this.props.loading2) {
      return (
          <div className="app">
            <Header/>

            <div className="main">
                { showNavBar ? (  <NavBar {...this.props}/> ) : null }
                { showUserNavBar ? ( <UserPageNavBar username={this.props.username}/> ) :null }

              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/signed-out" component={SignedOut}/>
                <Route exact path="/profile" component={UserProfile} />
                <Route exact path="/sushi-rank" component={UserSushiRank}/>
                <Route exact path="/sushi-knowledge" component={Content}/>
                <Route path="/favorites/:favorite_id" component={FavoritedShow} />
                <Route path="/suggestions/:suggestion_id" component={SuggestedShow} />
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

const mapStateToProps = (state, prevProp) => {

  return {
    loggedIn: state.auth.loggedIn ,
    userRank: state.auth.currentUser.knowledge,
    loading1: state.json.loading,
    loading2: state.restaruant.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getContentsAndQuestionsByCategory, getRestaurants }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
