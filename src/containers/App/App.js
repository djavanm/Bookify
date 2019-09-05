import React, { Component } from 'react';
import '../../styles/App.css';
import Nav from '../../components/Nav/Nav';
import BookContainer from '../../components/BookContainer/BookContainer';
import SearchForm from '../SearchForm/SearchForm';
import { fetchOnLoad } from '../../util/apiCalls';
import { bindActionCreators } from 'redux';
import { setBooks } from '../../actions';
import { connect } from 'react-redux';

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
        <Nav user={user} />
        <SearchForm />
        <BookContainer />
      </main>
    )
  }
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setBooks }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);
