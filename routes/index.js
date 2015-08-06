var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI || process.env.LOCAL);
var articles = db.get('articles');
// var validator = require('../public/javascripts/validator.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  articles.find({}, function (err, record) {
  res.render('articles/index', { articles: record });
  });
});

router.get('/articles/new', function (req, res, next) {
  res.render('new')
});

router.get('/articles/edit', function (req, res, next) {
  // users.findOne({_id: })
  res.render('edit')
});

router.get('articles/show', function (req, res, next) {
  res.render('show')
});


module.exports = router;
