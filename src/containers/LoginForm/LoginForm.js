import React, { Component } from 'react';


class LoginForm extends Component {
  constructor() {
    super()
    this.state = {
      existingUser: true,
      name: '',
      email: '',
      password: ''
    }
  }

  toggleExisting = () => {
    this.setState({existingUser: !this.state.existingUser})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

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
        <button>Submit</button>
      </form>}
      </div>
    )
  }
}

export default LoginForm;
