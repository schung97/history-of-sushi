import React from 'react';
import { connect } from 'react-redux'
import { withRouter, Route } from 'react-router-dom';
import * as Auth from '../actions/Authentication';
import * as Content from '../actions/Contents';
import * as Questionnaire from '../actions/Questionnaires';
import * as Suggestion from '../actions/Suggestions';
import * as User from '../actions/User';
import NavBar from '../components/NavBar';
import UserPage from './UserPage';
import SignedOut from './SignedOut';
import withAuth from '../hoc/withAuth'
import '../css/MainContent.css';

const MainContent = (props) => {

  return (
    <div className="ProtectedPage">
      <NavBar />
      <main>
        <UserPage />
      </main>
    </div>
  )
}
const mapStateToProps = () => {
  return {

  }
}
export default withRouter(withAuth(connect(mapStateToProps, {Auth, Content, Questionnaire, Suggestion, User})(MainContent)));
