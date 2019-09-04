import React, { Component } from 'react';
import '../../styles/App.css';
import Nav from './components/Nav';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      user: null
    }
  }

  render() {
    return (
      <main className='app'>
        <Nav user={user} />
      </main>
    )
  }
}

export default App;
