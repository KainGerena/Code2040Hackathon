var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/blm', function(req, res, next) {
  res.render('blm', {title: 'BlackLivesMatter' });
});

module.exports = router;
