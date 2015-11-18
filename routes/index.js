var express = require('express');
var router = express.Router();
var User = require('../models/user')
var Workout = require('../models/workout')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Shufflebod' });
});

module.exports = router;
