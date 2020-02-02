const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.get('/', scoresCtrl.highScores);

/*--- protected routes ---*/
router.use(require('../../config/auth'));
router.post('/', checkAuth, scoresCtrl.create);

module.exports = router;

/*--- helper function ---*/

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}
