import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { getCurrentUser } from './_public/AuthAction';

const IsAuthenticated = ComposedComponent => {
  class AuthenticationCheck extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authCompleted: this.props.loggedIn
      }
    }

    componentDidMount() {
      if (localStorage.getItem('token')) {
        this.props.getCurrentUser()
      } else {
        this.setState({ authCompleted: true }, console.log('componentDidMount false'));
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.loggedIn) {
        this.setState({ authCompleted: true });
      }
    }

    render() {

     if (this.state.authCompleted) {
       return this.props.loggedIn ? ( <ComposedComponent {...this.props}/> ) : ( <Redirect to="/" /> );
     } else {
       return null;
     }
   }

  }

  const mapStateToProps = state => {
    return {
      loggedIn: state.auth.loggedIn
    }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({  getCurrentUser }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck);
}

export default IsAuthenticated;
