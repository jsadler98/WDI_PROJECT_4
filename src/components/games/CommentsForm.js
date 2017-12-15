import React from 'react';

const buttonStyling = {
  marginBottom: '20px',
  backgroundColor: '#45CB85',
  borderColor: '#45CB85'
};

const CommentsForm = ({ handleCommentSubmit, handleCommentChange, newComment }) => {
  return (
    <form onSubmit={handleCommentSubmit}>
      <div className="form-group">

        <textarea
          name="body"
          onChange={handleCommentChange}
          value={newComment.body}
          className="form-control"
          id="exampleTextarea"
          rows="3"></textarea>

        <br></br>
        <h1>Rate It</h1>
        <div className="row col-xs-2">
          <input
            placeholder="0"
            max="5"
            min="0"
            name="rating"
            type="number"
            onChange={handleCommentChange}
            value={newComment.rating}
            className="form-control"
            id="exampleTextarea"
          ></input>
          <br></br>
          <button style={buttonStyling} ><i className="fa fa-check" aria-hidden="true"></i></button>
        </div>
      </div>
    </form>
  );
};

export default CommentsForm;
