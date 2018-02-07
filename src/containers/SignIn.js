import React from 'react';
import Auth from '../api/root';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginUser } from '../actions/Authentication';
import '../css/SignIn-UpForm.css';

class SignIn extends React.Component {
  constructor() {
    super();

    this.state= {
      auth: {
        username: '',
        password: '',
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.loginUser(this.state, this.props.history)
  }

  handleChange = (e) => {
    this.setState({ auth: {...this.state.auth, [`${e.target.name}`]: e.target.value }}, () => console.log(this.state))
  }

  render() {

    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={this.state.auth.username}/>
        <input type="text" name="password" placeholder="Password" value={this.state.auth.password}/>
        <input type="submit" name="submit" value="Log In"/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loginUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignIn);
