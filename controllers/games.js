const Game = require('../models/game');
// const User = require('../models/user');


function gamesIndex(req, res, next) {
  Game
    .find()
    .populate('createdBy')
    .exec()
    .then(games => res.json(games))
    .catch(next);
}

function gamesCreate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Game
    .create(req.body)
    .then(game => res.status(201).json(game))
    .catch(next);
}

function gamesShow(req, res, next) {
  Game
    .findById(req.params.id)
    .populate('createdBy comments.createdBy')
    .exec()
    .then((game) => {
      if(!game) return res.notFound();
      res.json(game);
    })
    .catch(next);
}

function gamesUpdate(req, res, next) {

  if(req.file) req.body.image = req.file.filename;

  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.notFound();
      game = Object.assign(game, req.body);
      return game.save();
    })
    .then(game => res.json(game))
    .catch(next);
}

function gamesDelete(req, res, next) {
  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.notFound();
      return game.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

function gamesCommentCreate(req, res, next) {
  req.body.createdBy = req.currentUser;
  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.notFound();
      const comment = game.comments.create(req.body);
      game.comments.push(comment);
      return game.save();
    })
    .then(game => Game.populate(game, { path: 'createdBy comments.createdBy' }))
    .then(game => res.status(201).json(game))
    .catch(next);
}

function gamesUpvoteCreate(req, res, next) {
  Game
    .findById(req.params.id)
    .exec()
    .then((game) => {
      if(!game) return res.notFound();
      game.upvotes.addToSet(this.currentUser._id);

      return game.save();
    })
    .then(game =>  res.json(game))
    .catch(next);
}


module.exports = {
  index: gamesIndex,
  create: gamesCreate,
  show: gamesShow,
  update: gamesUpdate,
  delete: gamesDelete,
  commentCreate: gamesCommentCreate,
  upvoteCreate: gamesUpvoteCreate
};
