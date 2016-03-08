
// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var apiRoutes = require('./routes/routes.js')
var path = require('path')

// Controllers
// var fruitCtrl = require('./controllers/fruitController.js')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//leveraging static to serve all content
// app.use(express.static(__dirname + '/../client/html'));
//Better for grabbing static files
app.use(express.static(path.join(__dirname, '../client')))

console.log(__dirname)
// app.get('/', function(req, res){
//   res.sendFile('main.html', {root : '../client/html/'})
// });


// /** Database setup **/
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/chessData')
// Routes \\
app.use("/api", apiRoutes)

app.get('/', function(req, res){
  console.log('/ route firing')
  res.sendFile('shell.html', {root : './client/html'})
});

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
