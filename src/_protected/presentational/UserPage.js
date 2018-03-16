
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Link } from 'react-router-dom';
import IsAuthenticated from '../../IsAuthenticated';
import Suggested from './Suggested';
import Favorited from './Favorited';
import UserProfile from './UserProfile';
import UserSushiRank from './UserSushiRank';
import FavoritedShow from './FavoritedShow';

const UserPage = (props) => {
console.log('userpage', props)
  return (

    <Switch>
      <Route exact path="/profile" component={UserProfile} />
      <Route exact path={`/${this.props.username}/sushi-rank`} component={UserSushiRank}/>
      <Route exact path={`/${this.props.username}/favorites`} component={FavoritedShow}/>
    </Switch>

  )
}
const mapStateToProps = state => {

  return {
    username: state.auth.currentUser.username,
  }
}
export default IsAuthenticated(UserPage);
