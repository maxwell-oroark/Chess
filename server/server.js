
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

//Better for grabbing static files
app.use(express.static(path.join(__dirname, '../client')))


// app.get('/', function(req, res){
//   res.sendFile('main.html', {root : '../client/html/'})
// });


// /** Database setup **/
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/chessData')
// Routes \\
app.use("/api", apiRoutes)

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})
