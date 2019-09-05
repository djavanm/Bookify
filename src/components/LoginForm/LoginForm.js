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
  render() {
    const { existingUser } = this.state;
    return (
      <form>hi</form>
    )
  }
}




export default LoginForm;
