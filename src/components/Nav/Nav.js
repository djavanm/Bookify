import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ user }) => {
  return (
    <nav>
    <h1>Bookify</h1>
    { !user && <Link to='/login'><button> SIGN IN </button></Link> }
    { user && <button> Show Favorites </button> }
    { user && <h2> { user.name } </h2> }
    </nav>
  )
}

export default Nav;
