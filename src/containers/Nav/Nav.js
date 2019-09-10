import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, showGenreFilter, showAllFilter} from '../../actions';
import { bindActionCreators } from 'redux';
import { FaLeaf } from "react-icons/fa";

export const Nav = ({ currentUser, logoutUser, home, genres, showGenreFilter, showAllFilter }) => {
  const currentGenres = genres.map((genre, index) => {
  return <button className='nav-btn' key={index+1} onClick={() => showGenreFilter(genre)}>{genre}</button>
  });
  const showAll = <button className='nav-btn' key={0} onClick={() => showAllFilter()}>Show All</button>;
  const allGenres = [showAll, ...currentGenres];
  return (
    <>
    <nav>
      <h1 className='header-title'>Bookify <FaLeaf color='#07804B' size={40} /> </h1>
      <section className='nav-buttons'>
      { !currentUser && <Link to='/login'><button className='nav-btn'> SIGN IN </button></Link> }
      {currentUser && <h2 className='nav-welcome'> Welcome,<span className="user-name"> {currentUser.name}</span>  </h2> }
      { currentUser && !home && <Link className='link' to='/my-collection'><button className='nav-btn loggedIn-btn'>Show Favorites</button></Link> }
      { currentUser && home && <Link className='link' to='/'><button className='nav-btn'>Search Audiobooks</button></Link> }
      {currentUser && <button className='nav-btn loggedIn-btn' onClick={logoutUser}>Logout</button> }
      </section>
    </nav>
      {currentUser && home && <div className='all-genres'>{allGenres}</div>}
    </>
  )
}
export const mapStateToProps = state => ({
  genres: state.genres
})

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ logoutUser, showGenreFilter, showAllFilter }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
