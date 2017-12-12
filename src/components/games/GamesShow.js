import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';
import CommentsForm from './CommentsForm';

const tileStyle = {
  height: '500px'
};

class GamesShow extends React.Component {

  state = {

    game: {},

    newComment: {
      body: ''
    }

  }

  componentDidMount() {
    Axios
      .get(`/api/games/${this.props.match.params.id}`)
      .then( res => {
        console.log(res.data);
        this.setState({ game: res.data });
      })
      .catch(err => console.log(err));
  }

  deleteGame = () => {
    Axios
      .delete(`/api/games/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/games'))
      .catch(err => console.log(err));
  }

  deleteComment = () => {
    Axios
      .delete(`/api/games/${this.props.match.params.id}/{}`)
      .then(() => this.props.history.push(`/games/${this.props.match.params.id}`))
      .catch(err => console.log(err));
  }

  handleCommentSubmit = (e) => {
    e.preventDefault();

    Axios
      .post(`/api/games/${this.props.match.params.id}/comments`, this.state.newComment, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => {
        const newComment = Object.assign({}, this.state.newComment, { body: '' });
        this.setState({ game: res.data, newComment });
      })
      .catch(err => console.log(err));
  }

  handleCommentChange = ({ target: { name, value } }) => {
    const newComment = Object.assign({}, this.state.newComment, { [name]: value });
    this.setState({ newComment }, () => console.log(this.state));
  }

  render() {
    return(
      <div className="row">
        <div className="page-banner col-md-12">
        </div>
        <div className="image col-md-6">
          <img style={tileStyle}  src={this.state.game.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h3>{ this.state.game.name }</h3>
          <h4>{ this.state.game.developers}</h4>
          <h4>{ this.state.game.designers}</h4>
          <h4>{ this.state.game.description}</h4>
          <h4>{ this.state.game.releaseYear}</h4>
          { Auth.isAuthenticated() &&<a className="standard-button" onClick={this.deleteGame}>
           Delete
          </a>}
          {' '}
          { Auth.isAuthenticated() && <Link to={`/games/${this.state.game.id}/edit`} className="standard-button">
        Edit
          </Link>}
          {this.state.game.comments && this.state.game.comments.map(comment =>
            <div key={comment.id}>
              <h4>{comment.body}</h4>
              <h2>{comment.createdBy.username}</h2>
              <h2>{comment.rating}</h2>
            </div>
          )}
        </div>
        <CommentsForm
          newComment={this.state.newComment}
          handleCommentSubmit={this.handleCommentSubmit}
          handleCommentChange={this.handleCommentChange}
        />
      </div>
    );
  }
}

export default GamesShow;
