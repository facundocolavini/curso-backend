const Router = require('express').Router;
const auth = require('../middlewares/auth');

const router = Router();

router.get('/', auth, (req, res) => {
  const { name } = req.session.user;

  res.render('nav', { name });
});

module.exports = router;
