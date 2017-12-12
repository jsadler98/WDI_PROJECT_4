import React from 'react';

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
      </div>
      <button> Post Comment </button>
    </form>
  );
};

export default CommentsForm;

{/* <label>Comment</label> */}
