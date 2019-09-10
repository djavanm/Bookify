import React, { Component } from 'react';
import { createUser } from '../../util/apiCalls';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUser, setFavorites, setGenres } from '../../actions';
import { getFavorites } from '../../util/apiCalls';
import PropTypes from 'prop-types';


export class LoginForm extends Component {
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
    const { setUser, setFavorites, setGenres } = this.props;
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
      .then(data => setFavorites(data.favorites))
      .then(data => setGenres(data.foundFavorites))
      .catch(error => this.setState({error: 'Email has already been used'}))
  };

  loginUser = (e) => {
    e.preventDefault();
    const { setUser, setFavorites, setGenres } = this.props;
    const { email, password } = this.state;
    const newUser = {
      email,
      password
    };
    this.clearFields();
    createUser(newUser, 'login')
      .then(data => data.id ? setUser(data) : null )
      .then(data => data.foundUser.id ? getFavorites(data.foundUser.id) : null)
      .then(data => setFavorites(data.favorites))
      .then(data => setGenres(data.foundFavorites))
      .catch(error => this.setState({error: 'Email and password do not match'}))
  }

  clearFields = () => {
    this.setState({ name: '', email: '', password: ''})
  }

  render() {
    const { existingUser, email, name, password, error } = this.state;
    const btnText = existingUser ? 'Sign up' : 'Login'
    return (
      <div className="login-info">
        <button className='login-btn switch-btn' onClick={this.toggleExisting}>{btnText}</button>
        {existingUser &&
      <form className="login-container">
        <p>Login to Favorite Books</p>
        <input
        className='login-input'
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={this.handleChange} />
        <input
        className='login-input'
        type="password" placeholder="Password"
        name="password"
        value={password}
        onChange={this.handleChange}/>
        <button className='login-btn' onClick={this.loginUser}>Login</button>
        {error && <p className="error-msg">{error}</p>}
      </form>}
      {!existingUser &&
      <form className="login-container">
        <p>Signup to Favorite Books</p>
        <input
        className='login-input'
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={this.handleChange} />
        <input
        className='login-input'
        type="text"
        placeholder="Email"
        name="email"
        value={email}
        onChange={this.handleChange} />
        <input
        className='login-input'
        type="password"
        placeholder="Create a Password"
        name="password"
        value={password}
        onChange={this.handleChange} />
        <button className='login-btn' onClick={this.submitUser}>Submit</button>
        {error && <p className="error-msg">{error}</p>}
      </form>}
      </div>
    )
  }
};


export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setUser, setFavorites, setGenres }, dispatch)
);

export default connect(null, mapDispatchToProps)(LoginForm);

LoginForm.propTypes = {
  setUser: PropTypes.func,
  setFavorites: PropTypes.func,
  setGenres: PropTypes.func
}
