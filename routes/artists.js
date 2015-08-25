var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var router = express.Router();

// Gets all artists

router.get('/', function (req, res) {
  var collection = global.db.collection('artists');

  collection.find().toArray(function (err, artists) {
    var formattedArtists = artists.map(function(artist) {
      return {
        _id:     artist._id,
        artist:  artist.artist,
        genre:   artist.genre,
        album:   artist.album,
        bio:     artist.bio
      };
    });
    res.render('templates/artists-index', {artists: formattedArtists});
  });
});

router.get('/new', function (req, res) {
  res.render('templates/artists-new');
});

// Saves artists to database

router.post('/new', function (req, res) {
  var collection = global.db.collection('artists');

  collection.save(req.body, function(){
    res.redirect('/artists');
  });
});

// Searches for artists in database

router.get('/new', function (req, res) {
      db.collection('artists').find({artist: req.query.artist}).toArray(function (err, artist) {
      res.render('templates/artists-index', {artists: artist});
  });
})

// Deletes artists from database/page

router.post('/delete/:id', function (req, res) {
  var collection = global.db.collection('artists');
  collection.remove({_id: ObjectID(req.params.id)}, function() {
    res.redirect('/artists')
  })
});

module.exports = router;
