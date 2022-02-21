var express = require('express');
var router = express.Router();

/* GET Responsive page. */
router.get('/', function(req, res, next) {
  res.render('responsive', { title: 'Responsive Web' });
});

module.exports = router;