import React, { Component } from 'react';
import '../../styles/App.css';
import Nav from '../Nav/Nav';
import BookContainer from '../BookContainer/BookContainer';
import SearchForm from '../SearchForm/SearchForm';
import { fetchOnLoad } from '../../util/apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      user: null
    }
  }

  componentDidMount() {
    fetchOnLoad()
    .then(data => this.setState({books: data.results}))
    .catch(error => console.log(error))
  }

  render() {
    const { user } = this.state;
    console.log(this.state.books)
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
