import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

export default function(ComposedComponent) {
  class AuthenticationCheck extends React.Component {
    //will mount: invoked before render()
    componentWillMount() {
      if(!this.props.loggedIn) {
        browerHistory.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props}/>
    }

  }

  const mapStateToProps = state => {
    return { loggedIn: state }
  }

  return connect(mapStateToProps)(AuthenticationCheck);
}
