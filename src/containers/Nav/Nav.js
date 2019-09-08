import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, showGenreFilter, showAllFilter} from '../../actions';
import { bindActionCreators } from 'redux';

const Nav = ({ currentUser, logoutUser, home, genres, showGenreFilter, showAllFilter }) => {
  const currentGenres = genres.map((genre, index) => {
  return <button key={index+1} onClick={() => showGenreFilter(genre)}>{genre}</button>
  });
  const showAll = <button key={0} onClick={() => showAllFilter()}>Show All</button>;
  const allGenres = [showAll, ...currentGenres];
  return (
    <nav>
    <h1>Bookify</h1>
    { !currentUser && <Link to='/login'><button> SIGN IN </button></Link> }
    { currentUser && !home && <Link to='/my-collection'><button>Show Favorites</button></Link> }
    { currentUser && home && <Link to='/'><button>Search Audiobooks</button></Link> }
    { currentUser && <button onClick={logoutUser}>Logout</button> }
    { currentUser && <h2> { currentUser.name } </h2> }
    { currentUser && home && <div>{ allGenres }</div> }
    </nav>
  )
}
export const mapStateToProps = state => ({
  genres: state.genres
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ logoutUser, showGenreFilter, showAllFilter }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
