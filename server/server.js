
// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// Controllers
// var fruitCtrl = require('./controllers/fruitController.js')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('../client/'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('main.html', {root : '../client/html/'})
});


// app.get('/api/fruits', fruitCtrl.getFruits)
// app.post('/api/fruits', fruitCtrl.createFruits)


// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
