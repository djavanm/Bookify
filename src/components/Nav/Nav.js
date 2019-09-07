import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser }) => {
  return (
    <nav>
    <h1>Bookify</h1>
    { !currentUser && <Link to='/login'><button> SIGN IN </button></Link> }
    { currentUser && <button> Show Favorites </button> }
    { currentUser && <h2> { currentUser.name } </h2> }
    </nav>
  )
}

export default Nav;
