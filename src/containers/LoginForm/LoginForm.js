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

  render() {
    const { existingUser } = this.state;
    const btnText = existingUser ? 'Sign up' : 'Login'
    return (
      <div>
        <button onClick={this.toggleExisting}>{btnText}</button>
      {existingUser &&
      <form>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <button>Login</button>
      </form>}
      {!existingUser &&
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Create a Password" />
        <button>Submit</button>
      </form>}
      </div>
    )
  }
}

export default LoginForm;
