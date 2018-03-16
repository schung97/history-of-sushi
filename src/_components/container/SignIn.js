import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../_actions/AuthAction';
import { bindActionCreators } from 'redux';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

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
    this.setState({ auth: {...this.state.auth, [`${e.target.name}`]: e.target.value }})
  }

  render() {
    return (
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
        <h2>Login</h2>
        <input type="text" name="username" placeholder="username" value={this.state.auth.username}/>
        <input type="password" name="password" placeholder="password" value={this.state.auth.password}/>
        <input type="submit" name="submit" value="Login"/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ loginUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(SignIn);
