import React, { Component } from 'react';
import Nav from '../../containers/Nav/Nav';
import BookContainer from '../../components/BookContainer/BookContainer';
import SearchForm from '../SearchForm/SearchForm';
import LoginForm from '../LoginForm/LoginForm';
import { fetchOnLoad, postFavorite, deleteFavorite} from '../../util/apiCalls';
import { bindActionCreators } from 'redux';
import { setBooks, addFavorite, setFavorites } from '../../actions';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    fetchOnLoad()
      .then(data => this.props.setBooks(data))
      .catch(error => console.log(error))
  }

  toggleFavorite = (book, bool) => {
    const { currentUser, addFavorite, setFavorites } = this.props;
    if(!bool) {
      postFavorite(book, currentUser.id)
        .then(data => addFavorite(data))
        .catch(error => console.log(error))
    } else {
      deleteFavorite(currentUser.id, book.book_id)
        .then(data => setFavorites(data.favorites))
        .catch(error => console.log(error))
    }
  }

  render() {
    const { currentUser } = this.props;
    return (
      <main className='app'>
      <Route exact path='/login' render={() => currentUser ? <Redirect to='/' /> : <LoginForm /> } />
      <Route exact path='/' render={() => <Nav currentUser={currentUser}/>} />
      <Route exact path='/' render={() => <SearchForm /> } />
      <Route exact path='/' render={() => <BookContainer toggleFavorite={this.toggleFavorite} /> } />
      </main>
    )
  }
}

export const mapStateToProps = state => ({
  currentUser: state.currentUser,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setBooks, addFavorite, setFavorites }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
