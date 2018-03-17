import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { getContentsAndQuestionsByCategory } from './_actions/JsonAction';
import { getRestaurants } from './_actions/RestaurantAction';
import SignUp from './_components/container/SignUp';
import SignIn from './_components/container/SignIn';
import UserProfile from './_components/container/UserProfile';
import Content from './_components/container/Content';

import NavBar from './_components/presentational/NavBar';
import UserSushiRank from './_components/presentational/UserSushiRank';
import FavoritedShow from './_components/presentational/FavoritedShow';
import SuggestedShow from './_components/presentational/SuggestedShow';
import ContentShow from './_components/presentational/ContentShow';
import SignedOut from './_components/presentational/SignedOut';
import Home from './_components/presentational/Home';
import Header from './_components/presentational/Header';
import Footer from './_components/presentational/Footer';


class App extends React.Component {

  componentDidMount() {
    this.props.getContentsAndQuestionsByCategory();
    this.props.getRestaurants();
  }

  render() {

    const showUserNavBar= this.props.loggedIn && this.props.location.pathname.indexOf('/sushi-knowledge') !== 0;
    const showNavBar = this.props.loggedIn;

    if (!this.props.loading1 && !this.props.loading2) {
      return (
          <div className={ (window.location.pathname.replace(/^\/|\/.*|[^\w]/g, '') || 'index') + ' app' }>
            <Header/>
            <div className="main">
                { showNavBar ? (  <NavBar {...this.props}/> ) : null }
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/signed-out" component={SignedOut}/>
                <Route exact path="/profile" component={UserProfile} />
                <Route exact path="/sushi-rank" component={UserSushiRank}/>
                <Route exact path="/sushi-knowledge/:name/suggestions" component={ContentShow} />
                <Route path="/sushi-knowledge/:name" component={Content}/>
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

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn ,
    userRank: state.auth.currentUser.knowledge,
    loading1: state.json.loading,
    loading2: state.restaurant.loading,
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getContentsAndQuestionsByCategory, getRestaurants }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
