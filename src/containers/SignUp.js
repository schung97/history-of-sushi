import React from 'react';
import { Adapter } from '../api/root';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import { newUser } from '../actions/Authentication';
import '../css/SignIn-UpForm.css';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state= {
      user: {
        email: '',
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        password_confirmation: '',
      }
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.newUser(this.state, this.props.history)
  }

  handleChange = (e) => {
    this.setState({ user: {...this.state.user, [`${e.target.name}`]: e.target.value }})
  }

  render() {
    console.log("sign up, this.props",this.props)
    console.log("signup, action import", this.props.newUser)
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <input type="text" name="email" placeholder="Email" value={this.state.user.email}/>
        <input type="text" name="firstname" placeholder="Firstname" value={this.state.user.firstname}/>
        <input type="text" name="lastname" placeholder="Lastname" value={this.state.user.lastname}/>
        <input type="text" name="username" placeholder="Username" value={this.state.user.username}/>
        <input type="text" name="password" placeholder="Password" value={this.state.user.password}/>
        <input type="text" name="password_confirmation" placeholder="Password Confirmation" value={this.state.user.password_confirmation}/>
        <input type="submit" name="submit" value="Sign Up"/>
      </form>
    )
  }
}
const mapStatetoProps = (state) => {
  console.log("line 48", state.Auth)
  return {}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ newUser }, dispatch);
};

export default connect(null, mapDispatchToProps)(SignUp);
