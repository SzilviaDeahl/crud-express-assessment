var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI || process.env.LOCAL);
var articles = db.get('articles');
var validator = require('../public/javascripts/validator.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  articles.find({}, function (err, record) {
  res.render('articles/index', { articles: record });
  });
});

router.get('/articles/new', function (req, res, next) {
  res.render('articles/new');
});

router.post('/articles', function (req, res, next) {
  console.log(req.body)
  var title = req.body.title;
  var url = req.body.url;
  var background = req.body.backgroundUrl;
  var excerpt = req.body.excerpt;
  var body = req.body.body;
  var errors = validator.inputValidator(title, excerpt);
  if (errors.length != 0){
    res.render('articles/index', {errors:errors})
  } else {
      articles.insert({
        title: title,
        url: url,
        background: background,
        excerpt: excerpt,
        body: body
    }).then(function (article) {
    res.redirect('/articles/'+ article._id)
  })
  }
});

router.get('/articles/:id', function (req, res, next) {
  articles.findOne({_id: req.params.id}, function (err, record) {
  res.render('articles/show', {article: record})
  });
});

router.get('/articles/:id/edit', function (req, res, next) {
  articles.findOne({_id: req.params.id}, function (err, record) {
    res.render('articles/edit', {article: record})
  });
});

router.post('/articles/:id/update', function (req, res, next) {
  var title = req.body.title;
  var url = req.body.url;
  var background = req.body.backgroundUrl;
  var excerpt = req.body.excerpt;
  var body = req.body.body;
  articles.update({_id: req.params.id}, {
    title: title,
    url: url,
    background: background,
    excerpt: excerpt,
    body: body
  });
  res.redirect('/')
});

router.post('/articles/:id/delete', function (req, res, next) {
  articles.remove({_id: req.params.id});
  res.redirect('/')
});



module.exports = router;
