import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';
import CommentsForm from './CommentsForm';
import Video from '../utility/Video';

const tileStyle = {
  height: '500px'
};

const editButtonStyle = {
  backgroundColor: '#A9DEF9',
  borderColor: '#A9DEF9'
};

const deleteButtonStyle = {
  backgroundColor: '#F08A92',
  borderColor: '#F08A92'
};


class GamesShow extends React.Component {

  state = {

    game: {},

    videos: [],

    newComment: {
      body: '',
      rating: ''
    }

  }

  componentDidMount() {

    Axios
      .get(`/api/games/${this.props.match.params.id}`)
      .then( gameRes => {
        return Axios
          .get('https://www.googleapis.com/youtube/v3/search', {
            params: {
              q: gameRes.data.name,
              part: 'snippet',
              maxResults: 5,
              videoCategoryId: 20,
              key: 'AIzaSyD0A_FNlw-7B7MF8vEyi6LWR5GqNDHs1gc',
              type: 'video'
            }
          })
          .then(videoRes => {
            const videos = videoRes.data.items.map(video => video.id.videoId);
            this.setState({ game: gameRes.data, videos: videos }, () => console.log(this.state));
          });
      })
      .catch(err => console.log(err));
  }

  deleteGame = () => {
    Axios
      .delete(`/api/games/${this.props.match.params.id}`)
      .then(() => this.props.history.push('/games'))
      .catch(err => console.log(err));
  }


  handleCommentSubmit = (e) => {
    e.preventDefault();

    Axios
      .post(`/api/games/${this.props.match.params.id}/comments`, this.state.newComment, {
        headers: { Authorization: `Bearer ${Auth.getToken()}` }
      })
      .then(res => {
        const newComment = Object.assign({}, this.state.newComment, { body: '', rating: ''});
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
      <div>
        <div className="image col-md-6">
          <img style={tileStyle}  src={this.state.game.image} className="img-responsive" />
          <br></br>
          {this.state.videos.map(videoId => <Video key={videoId} videoId={videoId} />)}
        </div>
        <div className="col-md-6">
          <h1>{ this.state.game.name }</h1>
          <br></br>
          <h4>Developers: { this.state.game.developers}</h4>
          <br></br>
          <h4>Designer(s): { this.state.game.designers}</h4>
          <br></br>
          <h4>Description: { this.state.game.description}</h4>
          <br></br>
          <h4>Release Year: { this.state.game.releaseYear}</h4>
          { Auth.isAuthenticated() &&<a className="standard-button" onClick={this.deleteGame}>
            <button style={deleteButtonStyle}> Delete </button>
          </a>}
          {' '}
          { Auth.isAuthenticated() && <Link to={`/games/${this.state.game.id}/edit`} className="standard-button">
            <button style={editButtonStyle}>  Edit  </button>
          </Link>}
        </div>
        <br></br>
        <br></br>
        <div  className="col-md-6">
          <h1>Comments</h1>
          {this.state.game.comments && this.state.game.comments.map(comment =>
            <div key={comment.id}>
              <h3>{comment.body}</h3>
              <h4>Rating: {comment.rating}</h4>
              <light>User: {comment.createdBy.username}</light>
            </div>
          )}
          { Auth.isAuthenticated() && <h1>Leave a comment</h1>}
          { Auth.isAuthenticated() &&  <CommentsForm
            newComment={this.state.newComment}
            handleCommentSubmit={this.handleCommentSubmit}
            handleCommentChange={this.handleCommentChange}
          />}
        </div>
      </div>
    );
  }
}

export default GamesShow;
