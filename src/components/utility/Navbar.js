import React                from 'react';
import { Link, withRouter } from 'react-router-dom';

import Auth from '../../lib/Auth';

const gamePadStyle = {
  position: 'relative',
  top: '-5px',
  left: '5%',
  transform: 'translate(-50%, 0)',
  fontSize: '40px',
  color: '#black',
  padding: '0 90px'
};

const Navbar = ({ history }) => {

  function logout(e) {
    e.preventDefault();

    Auth.removeToken();
    history.push('/');
  }

  return(
    <nav>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-nav navbar-left">
          <h1><Link to="/">Gametastic<i style={gamePadStyle} className="fa fa-gamepad" aria-hidden="true"></i></Link></h1>
        </ul>
      </div>
      <div className="navbar-collapse collapse">
        <ul className="nav navbar-right">
          <button className="main-button">
            { !Auth.isAuthenticated() &&  <Link to="/login" className="standard-button">Login</Link>}
          </button>
          {' '}
          <button className="main-button">
            { !Auth.isAuthenticated() && <Link to="/register" className="standard-button">Register</Link>}
          </button>
          {' '}
          <button className="main-button">
            { Auth.isAuthenticated() && <a href="#" className="standard-button" onClick={logout}>Logout</a>}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
