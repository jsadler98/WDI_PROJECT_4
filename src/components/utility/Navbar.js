import React                from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.removeToken();
    history.push('/games');
  }


  return(
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <a className="main-button">
        { !Auth.isAuthenticated() &&  <Link to="/login" className="standard-button">Login</Link>}
      </a>
      {' '}
      <a className="main-button">
        { !Auth.isAuthenticated() && <Link to="/register" className="standard-button">Register</Link>}
      </a>
      {' '}
      <a className="main-button">
        { Auth.isAuthenticated() && <a href="#" className="standard-button" onClick={logout}>Logout</a>}
      </a>
    </nav>
  );
};

export default withRouter(Navbar);
