import React, { Component } from 'react';
import Nav from '../../containers/Nav/Nav';
import BookContainer from '../../components/BookContainer/BookContainer';
import SearchForm from '../SearchForm/SearchForm';
import LoginForm from '../LoginForm/LoginForm';
import { fetchOnLoad } from '../../util/apiCalls';
import { bindActionCreators } from 'redux';
import { setBooks } from '../../actions';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    fetchOnLoad()
      .then(data => this.props.setBooks(data))
      .catch(error => console.log(error))
  }

  toggleFavorite = (id, bool) => {
    // bool ? deleteFavorite(id) : addFavorite(id);
    console.log(bool);
  }

  render() {
    const { currentUser } = this.props;
    return (
      <main className='app'>
      <Route exact path='/login' render={() => currentUser ? <Redirect to='/' /> : <LoginForm /> } />
      <Route exact path='/' render={() => <Nav currentUser={currentUser}/>} />
      <Route exact path='/' render={() => <SearchForm /> } />
      <Route exact path='/' render={() => <BookContainer toggleFavorite={this.toggleFavorite}/> } />
      </main>
    )
  }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setBooks }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
