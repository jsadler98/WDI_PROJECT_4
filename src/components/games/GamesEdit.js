import React from 'react';
import Axios from 'axios';

import Auth      from '../../lib/Auth';
import GamesForm from './GamesForm';

class GamesEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      game: {
        name: '',
        image: '',
        developers: '',
        designers: '',
        description: '',
        releaseYear: ''
      }
    };
  }


  componentDidMount() {
    Axios
      .get(`/api/games/${this.props.match.params.id}`)
      .then(res => this.setState({ game: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const game = Object.assign({}, this.state.game, { [name]: value });
    this.setState({ game });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/games/${this.props.match.params.id}`, this.state.game, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.props.history.push(`/games/${res.data.id}`))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <GamesForm
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        game={this.state.game}
      />
    );
  }
}

export default GamesEdit;
