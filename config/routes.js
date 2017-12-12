const router = require('express').Router();
const games = require('../controllers/games');
const auth  = require('../controllers/auth');
// const comments = require('../controllers/comments');
const secureRoute = require('../lib/secureRoute');

router.route('/games')
  .get(games.index)
  .post(games.create);

router.route('/games/:id')
  .get(games.show)
  .put(games.update)
  .delete(games.delete);

router.route('/games/:id/comments')
  .post(secureRoute, games.commentCreate);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// router.route('/games/:id/comments/:commentId')
//   .delete(comments.delete);

router.all('/*', (req, res) =>
  res.notFound());

module.exports = router;
