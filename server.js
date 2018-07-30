const express = require('express');
const app = express();
const path = require('path');
const chalk = require('chalk');
const morgan = require('morgan');

//Static Routes
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(morgan('dev')) // logging

//Main App Route
app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));

//var express = require('express'),
  //app = express(),
  var port = process.env.PORT || 4141,
  mongoose = require('mongoose'),
  Task = require('./api/models/userModel'), //created model loading here
  bodyParser = require('body-parser');
  
//mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/testdb',{ useNewUrlParser: true });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/userRoutes'); //importing route
routes(app); //register the route


//app.listen(port);


//console.log('user list RESTful API server started on: ' + port);
app.listen(process.env.PORT || port, () => console.log(chalk.blue(`Listening intently on port ${port}`)));