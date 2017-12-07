import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import GamesIndex from './components/games/GamesIndex';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <h1></h1>
          <Route exact path="/games" component={ GamesIndex } />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
