import React, { Component } from 'react';
import Nav from '../../containers/Nav/Nav';
import BookContainer from '../../components/BookContainer/BookContainer';
import SearchForm from '../SearchForm/SearchForm';
import LoginForm from '../LoginForm/LoginForm';
import BookDetails from '../../components/BookDetails/BookDetails';
import { fetchOnLoad, postFavorite, deleteFavorite} from '../../util/apiCalls';
import { bindActionCreators } from 'redux';
import { setBooks, addFavorite, setFavorites, setGenres, addGenre } from '../../actions';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    fetchOnLoad()
      .then(data => this.props.setBooks(data))
      .catch(error => console.log(error))
  }

  toggleFavorite = (book, bool) => {
    const { currentUser, addFavorite, setFavorites, setGenres, addGenre} = this.props;
    if(!bool) {
      postFavorite(book, currentUser.id)
        .then(data => addFavorite(data))
        .then(data => addGenre(data.newFavorite.primary_genre_name))
        .catch(error => console.log(error))
    } else {
      deleteFavorite(currentUser.id, book.book_id)
        .then(data => setFavorites(data.favorites))
        .then(data => setGenres(data.foundFavorites))
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
      <Route exact path='/' render={() => <BookContainer all={true} toggleFavorite={this.toggleFavorite} /> } />
      <Route exact path='/my-collection' render={() => <Nav home={true} currentUser={currentUser}/>} />
      <Route exact path='/my-collection' render={() => <BookContainer all={false} toggleFavorite={this.toggleFavorite} /> } />
      <Route path='/book/:id' render={({ match }) => {
          let targetBook = this.props.currentBooks.find(book => book.book_id === parseInt(match.params.id));
          return <BookDetails {...targetBook} />
        }} />
      </main>
    )
  }
}

export const mapStateToProps = state => ({
  currentBooks: state.currentBooks,
  currentUser: state.currentUser,
  favorites: state.favorites
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ setBooks, addFavorite, setFavorites, setGenres, addGenre }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
