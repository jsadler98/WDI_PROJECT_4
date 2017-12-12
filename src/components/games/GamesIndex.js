import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

const imageStyle = {
  height: '500px',
  width: '100%',
  borderRadius: '2px',
  padding: '4px',
  background: 'white',
  borderColor: 'green'
};

class GamesIndex extends React.Component {
  state = {
    games: []
  }

  componentWillMount() {
    Axios
      .get('/api/games')
      .then(res => this.setState({ games: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="page-banner col-md-12">
            { Auth.isAuthenticated() && <a className="main-button">
              <Link to="/games/new">
                Add Game
              </Link>
            </a>}
            <br></br>
            <br></br>
          </div>
          {this.state.games.map(game =>
            <div key={game.id} className="image-tile col-md-4 col-sm-6 col-xs-12">
              <Link to={`/games/${game.id}`}>
                <img style={imageStyle} src={game.image} className="img-responsive" />
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default GamesIndex;
