import React, { Component } from 'react';
import '../../styles/App.css';
import Nav from '../Nav/Nav';
import BookContainer from '../BookContainer/BookContainer';
import SearchForm from '../SearchForm/SearchForm';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      user: null
    }
  }

  render() {
    const { user } = this.state;
    return (
      <main className='app'>
        <Nav user={user} />
        <SearchForm />
        <BookContainer />
      </main>
    )
  }
}

export default App;
