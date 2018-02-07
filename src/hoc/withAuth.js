import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import * as Auth from '../actions/Authentication';
import * as Content from '../actions/Contents';
import * as Questionnaire from '../actions/Questionnaires';
import * as Suggestion from '../actions/Suggestions';
import * as User from '../actions/User';

const withAuth = WrappedComponent => {
  class AuthedComponent extends React.Component {
    state = {
      authCompleted: this.props.loggedIn
    }
    //
    // componentDidMount() {
    //   if (localStorage.getItem('token')) {
    //     this.props.fetchUser();
    //   } else {
    //     this.setState({ authCompleted: true})
    //   }
    // }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authCompleted: true})
      }
    }

    render() {
      console.log('HI FROM withAUTH', this.props)
      if (this.state.authCompleted) {
        return this.props.loggedIn ? (
          <WrappedComponent {...this.props} />
        ) : (
          <Redirect to='/login'/>
        );
      } else {
        return null;
      }
    }
  }

  const mapStateToProps = state => {
    console.log("map", state)
    return { loggedIn: !!state.Auth.user}
  }


  return connect(mapStateToProps, {Auth, Content, Questionnaire, Suggestion, User})(AuthedComponent);
}

export default withAuth;
