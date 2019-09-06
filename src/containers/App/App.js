import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import BookContainer from '../../components/BookContainer/BookContainer';
import SearchForm from '../SearchForm/SearchForm';
import LoginForm from '../LoginForm/LoginForm';
import { fetchOnLoad } from '../../util/apiCalls';
import { bindActionCreators } from 'redux';
import { setBooks } from '../../actions';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    fetchOnLoad()
      .then(data => this.props.setBooks(data.results))
      .catch(error => console.log(error))
  }

  render() {
    const { user } = this.state;
    return (
      <main className='app'>
      <Route exact path='/login' render={() => <LoginForm/>} />
      <Route exact path='/' render={() => <Nav user={user} />} />
      <Route exact path='/' render={() => <SearchForm /> } />
      <Route exact path='/' render={() => <BookContainer /> } />
      </main>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setBooks }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);
