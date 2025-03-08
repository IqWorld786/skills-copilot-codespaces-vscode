// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Parse POST data
app.use(bodyParser.json());

// Create a list of comments
var comments = [];

// Add a comment
app.post('/comments', function(req, res) {
  var comment = req.body.comment;
  comments.push(comment);
  res.send('Comment added');
});

// Get all comments
app.get('/comments', function(req, res) {
  res.send(comments);
});

// Start the server
var server = app.listen(3000, function() {
  console.log('Listening on port %d', server.address().port);
});