var express = require('express');
var router = express.Router();
var db = require('monk')(process.env.MONGOLAB_URI || 'localhost/mydb');
var users = db.get('users');

/* GET home page. */
router.get('/', function(req, res, next) {
  users.find({}, function (err, record) {
  res.render('index', { articles: record });
  })
});

router.get('/show', function (req, res, next) {
  res.render('show')
});

router.post('/show', function (req, res, next) {
  // if (checkbox===checked){
  //   title.style.color = white;
  // }
  res.render('show')
});



module.exports = router;
