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
    <nav>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-left">
          <h1><Link to="/games">Gametastic</Link><i className="fa fa-gamepad" aria-hidden="true"></i></h1>
        </ul>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-right">
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
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
