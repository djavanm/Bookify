import React, { Component } from 'react';
import { createUser } from '../../util/apiCalls';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUser } from '../../actions';
import { getFavorites } from '../../util/apiCalls'

class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      existingUser: true,
      name: '',
      email: '',
      password: '',
      error: ''
    }
  };

  toggleExisting = () => {
    this.setState({existingUser: !this.state.existingUser})
  };

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };

  submitUser = (e) => {
    e.preventDefault();
    const { setUser } = this.props;
    const { name, email, password } = this.state;
    const newUser = {
      name,
      email,
      password
    };
    this.clearFields();
    createUser(newUser, 'users')
      .then(data => data.id ? setUser(data) : null)
      .then(data => data.foundUser.id ? getFavorites(data.foundUser.id) : null)
      .catch(error => this.setState({error: 'Email has already been used'}))
  };

  loginUser = (e) => {
    e.preventDefault();
    const { setUser } = this.props;
    const { email, password } = this.state;
    const newUser = {
      email,
      password
    };
    this.clearFields();
    createUser(newUser, 'login')
      .then(data => data.id ? setUser(data) : null )
      .then(data => data.foundUser.id ? getFavorites(data.foundUser.id) : null)
      .then(data => console.log(data))
      .catch(error => this.setState({error: 'Email and password do not match'}))
  }

  clearFields = () => {
    this.setState({ name: '', email: '', password: ''})
  }

  render() {
    const { existingUser, email, name, password, error } = this.state;
    const btnText = existingUser ? 'Sign up' : 'Login'
    return (
      <div>
        <button onClick={this.toggleExisting}>{btnText}</button>
        { error && <p>{error}</p> }
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
        <button onClick={this.loginUser}>Login</button>
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
