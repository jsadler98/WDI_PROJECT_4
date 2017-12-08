import React from 'react';
import Axios from 'axios';

import GamesForm from './GamesForm';

class GamesNew extends React.Component {
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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange = ({ target: { name, value } }) => {
  const game = Object.assign({}, this.state.game, { [name]: value });
  this.setState({ game });
}

handleSubmit = (e) => {
  e.preventDefault();

  Axios
    .post('/api/games', this.state.game)
    .then(() => this.props.history.push('/games'))
    .catch(err => console.log(err));
}

render() {
  return (
    <GamesForm
      handleSubmit={ this.handleSubmit }
      handleChange={ this.handleChange }
      game={ this.state.game }
    />
  );
}
}


export default GamesNew;
