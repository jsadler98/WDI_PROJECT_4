import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class GamesShow extends React.Component {

  state = {
    game: {}
  }

  componentDidMount() {
    Axios
      .get(`/api/games/${this.props.match.params.id}`)
      .then( res => this.setState({ game: res.data }))
      .catch(err => console.log(err));
  }

  deleteGame = () => {
    Axios
      .delete(`/api/games/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/games'))
      .catch(err => console.log(err));
  }

  render() {
    return(
      <div className="row">
        <div className="page-banner col-md-12">
        </div>
        <div className="image-tile col-md-6">
          <img src={this.state.game.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{ this.state.game.name }</h3>
          <h4>{ this.state.game.developers}</h4>
          <h4>{ this.state.game.designers}</h4>
          <h4>{ this.state.game.description}</h4>
          <h4>{ this.state.game.releaseYear}</h4>
        </div>
        { Auth.isAuthenticated() &&<a className="standard-button" onClick={this.deleteGame}>
         Delete
        </a>}
        {' '}
        { Auth.isAuthenticated() && <Link to={`/games/${this.state.game.id}/edit`} className="standard-button">
      Edit
        </Link>}
      </div>
    );
  }
}

export default GamesShow;
