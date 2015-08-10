var express = require('express');

var artists = require('./routes/artists');

var app = express();

app.set('view engine', 'ejs');

app.locals.title = 'NodeTunes';

app.use('/artists', artists);

app.use(function (req, res) {
  res.status(403).send('Unauthorized!');
});

// pass 4 arguments to create an error handling middleware
app.use(function (req, res) {
  console.log('ERRRRRRRRRR', err.stack);
  res.status(500).send('My Bad');
});

var port = process.env.PORT || 2000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%d', host, port);
});
