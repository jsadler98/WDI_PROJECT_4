import React from 'react';

const GamesForm = ({handleSubmit, handleChange, game}) => {
  return (
    <form onSubmit={handleSubmit} className="col-md-6">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={game.name}  onChange={handleChange} required />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="image">Game Front Cover (Image)</label>
          <input
            type="text"
            className="form-control"
            id="image"
            name="image"
            value={game.image}
            onChange={handleChange} required />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="developers">Developers</label>
          <input
            type="text"
            className="form-control"
            id="developers"
            name="developers"
            value={game.developers}
            onChange={handleChange} required />
        </div>
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="designers">Designers</label>
        <input type="text"
          className="form-control"
          id="designers"
          name="designers"
          value={game.designers}
          onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="description">Description</label>
        <input type="text"
          className="form-control"
          id="description"
          name="description"
          value={game.description}
          onChange={handleChange} required />
      </div>
      <div className="col-md-6 mb-3">
        <label htmlFor="releaseYear">Release Year</label>
        <input type="number"
          className="form-control"
          id="releaseYear"
          name="releaseYear"
          value={game.releaseYear}
          onChange={handleChange} required />
      </div>
      <br></br>
      <br></br>
      <div>
        <button className="save-button">Save</button>
      </div>
      <br></br>
    </form>
  );
};

export default GamesForm;
