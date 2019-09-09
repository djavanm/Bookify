import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, showGenreFilter, showAllFilter} from '../../actions';
import { bindActionCreators } from 'redux';
import { FaLeaf } from "react-icons/fa";

const Nav = ({ currentUser, logoutUser, home, genres, showGenreFilter, showAllFilter }) => {
  const currentGenres = genres.map((genre, index) => {
  return <button className='nav-btn' key={index+1} onClick={() => showGenreFilter(genre)}>{genre}</button>
  });
  const showAll = <button className='nav-btn' key={0} onClick={() => showAllFilter()}>Show All</button>;
  const allGenres = [showAll, ...currentGenres];
  return (
    <>
    <h1 className='header-title'>Bookify <FaLeaf color='black' size={40} /> </h1>

    <nav>
    <section className='nav-buttons'>
    { !currentUser && <Link to='/login'><button className='nav-btn'> SIGN IN </button></Link> }
    { currentUser && <h2 className='nav-welcome'> Welcome, { currentUser.name } </h2> }
    { currentUser && !home && <Link className='link' to='/my-collection'><button className='nav-btn'>Show Favorites</button></Link> }
    { currentUser && home && <Link className='link' to='/'><button className='nav-btn'>Search Audiobooks</button></Link> }
    { currentUser && <button className='nav-btn' onClick={logoutUser}>Logout</button> }
    </section>
    { currentUser && home && <div className='all-genres'>{ allGenres }</div> }
    </nav>
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
