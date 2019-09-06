import React, { Component } from 'react';
import { createUser } from '../../util/apiCalls';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      existingUser: true,
      name: '',
      email: '',
      password: ''
    }
  };

  toggleExisting = () => {
    this.setState({existingUser: !this.state.existingUser})
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  submitUser = (e) => {
    const { setUser } = this.props;
    const { name, email, password } = this.state;
    e.preventDefault();
    const newUser = {
      name,
      email,
      password
    };
    createUser(newUser)
      .then(data => setUser(data))
      .catch(error => console.log(error))
  };

  render() {
    const { existingUser, email, name, password } = this.state;
    const btnText = existingUser ? 'Sign up' : 'Login'
    return (
      <div>
        <button onClick={this.toggleExisting}>{btnText}</button>
      {existingUser &&
      <form>
        <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={this.handleChange} />
        <input
        type="password" placeholder="Password"
        name="password"
        value={password}
        onChange={this.handleChange}/>
        <button>Login</button>
      </form>}
      {!existingUser &&
      <form>
        <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={this.handleChange} />
        <input
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={this.handleChange} />
        <input
        type="password"
        placeholder="Create a Password"
        name="password"
        value={password}
        onChange={this.handleChange} />
        <button onClick={this.submitUser}>Submit</button>
      </form>}
      </div>
    )
  }
};

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setUser }, dispatch)
);

export default connect(null, mapDispatchToProps)(LoginForm);
