var express = require('express');
var ObjectID = require('mongodb').ObjectID;
var router = express.Router();

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

router.post('/new', function (req, res) {
  var collection = global.db.collection('artists');

  collection.save(req.body, function(){
    res.redirect('/artists');
  });
});

router.post('/delete/:id', function (req, res) {
  var collection = global.db.collection('artists');
  collection.remove({_id: ObjectID(req.params.id)}, function() {
    res.redirect('/artists')
  })
});

module.exports = router;
