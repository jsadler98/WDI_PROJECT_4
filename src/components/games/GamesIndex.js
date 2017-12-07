import React from 'react';
import Axios from 'axios';

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
        {this.state.games.map(game => {
          return(
            <div key={game.id}>
              <img src={game.image}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GamesIndex;
