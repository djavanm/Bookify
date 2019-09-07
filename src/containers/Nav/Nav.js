import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { bindActionCreators } from 'redux';

const Nav = ({ currentUser, logoutUser }) => {
  return (
    <nav>
    <h1>Bookify</h1>
    { !currentUser && <Link to='/login'><button> SIGN IN </button></Link> }
    { currentUser && <button> Show Favorites </button> }
    { currentUser && <button onClick={logoutUser}>Logout</button> }
    { currentUser && <h2> { currentUser.name } </h2> }
    </nav>
  )
}

export const mapDispatchToProps = dispatch => (
  bindActionCreators({ logoutUser }, dispatch)
);

export default connect(null, mapDispatchToProps)(Nav);
