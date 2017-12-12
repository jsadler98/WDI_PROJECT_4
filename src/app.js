import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import 'bootstrap-css-only';
import './scss/style.scss';
import 'font-awesome/css/font-awesome.css';

import Navbar from './components/utility/Navbar';
import Routes from './components/utility/Routes';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="container">
          <header>
            <nav>
              <Navbar />
            </nav>
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
