import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import 'bootstrap-css-only';
import './scss/style.scss';

import Navbar from './components/utility/Navbar';
import Routes from './components/utility/Routes';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <h1><Link to="/games">Gametastic</Link></h1>
            <nav>
              <Navbar />
            </nav>
            <h1></h1>
          </header>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
