import React from 'react';
import LoginForm from '../LoginForm/LoginForm';

const Nav = ({ user }) => {
  return (
    <nav>
    <h1>Bookify</h1>
    { !user && <button> SIGN IN </button> }
    { user && <button> Show Favorites </button> }
    { user && <h2> { user.name } </h2> }
    </nav>
  )
}

export default Nav;
