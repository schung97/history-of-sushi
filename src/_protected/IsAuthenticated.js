import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { getCurrentUser } from '../_public/AuthAction';

const IsAuthenticated = ComposedComponent => {
  class AuthenticationCheck extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authCompleted: this.props.auth
      }
    }

    componentDidMount() {
      if (localStorage.getItem('token')) {
        console.log('componentDidMount true')
        this.props.getCurrentUser();
      } else {
        console.log('componentDidMount false')
        this.setState({ authCompleted: true });
      }
    }

    componentWillReceiveProps(nextProps) {
      console.log('will recieve nxt props', nextProps)
      if (nextProps.auth) {
        this.setState({ authCompleted: true });
      }
    }

    render() {
      console.log('authentication', this.props)
     if (this.state.authCompleted) {
       return this.props.loggedIn ? ( <ComposedComponent {...this.props}/> ) : ( <Redirect to="/" /> );
     } else {
       return null;
     }
   }

  }

  const mapStateToProps = state => {
    console.log('auth, map to props', state)
    return {
      auth: state.AuthReducer.loggedIn
    }
  }

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({  getCurrentUser }, dispatch);
  }

  return connect(mapStateToProps, mapDispatchToProps)(AuthenticationCheck);
}

export default IsAuthenticated;
