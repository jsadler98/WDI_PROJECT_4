const router = require('express').Router();
const games = require('../controllers/games');
const auth  = require('../controllers/auth');

router.route('/games')
  .get(games.index)
  .post(games.create);

router.route('/games/:id')
  .get(games.show)
  .put(games.update)
  .delete(games.delete);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.all('/*', (req, res) =>
  res.notFound());



module.exports = router;
