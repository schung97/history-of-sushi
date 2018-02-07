import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';


class ProtectedPage extends React.Component {

  render() {
    return (
      <div>
        <NavBar/>
        <MainContent/>
      </div>
    )
  }
}


export default withRouter(ProtectedPage);
