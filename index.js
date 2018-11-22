var express = require('express');
var app = express();

//app.get('/', function (req, res) {
  //res.send('Hello World v1.5.0!');
  //res.set(‘Content-Type’, ‘text/html’);
  //res.send(new Buffer(‘<h2>Test String</h2>’));
//});

app.get("/", function(req, res, next) {
  var msg = 'Hello World v1.8.2';
  var target = 'green'
  res.send('<body style="background:' + target + '; color: white; font-size:100px;">' + msg + '</body>');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening on port %s', port);
});
