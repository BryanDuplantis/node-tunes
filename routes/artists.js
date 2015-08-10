var express = require('express');
// var ObjectID = require('mongodb').ObjectID;

var router = express.Router();

router.get('/', function (req, res) {
    res.render('templates/artists-index');
});

router.get('/new', function (req, res) {
  res.render('templates/artists-new');
});

router.post('/artists', function (req, res) {
  // var collection = global.db.collection('artists');

  // collection.save(req.body, function () {
  //     res.redirect('/artists')
  // });
});

module.exports = router;
