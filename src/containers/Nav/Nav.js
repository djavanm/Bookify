import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, showGenreFilter } from '../../actions';
import { bindActionCreators } from 'redux';

const Nav = ({ currentUser, logoutUser, home }) => {
  return (
    <nav>
    <h1>Bookify</h1>
    { !currentUser && <Link to='/login'><button> SIGN IN </button></Link> }
    { currentUser && !home && <Link to='/my-collection'><button>Show Favorites</button></Link> }
    { currentUser && home && <Link to='/'><button>Search Audobooks</button></Link> }
    { currentUser && <button onClick={logoutUser}>Logout</button> }
    { currentUser && <h2> { currentUser.name } </h2> }
    </nav>
  )
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ logoutUser, showGenreFilter }, dispatch)
);

export default connect(null, mapDispatchToProps)(Nav);
