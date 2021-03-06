'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
  express = require('./config/express'),
  passport = require('./config/passport');

var db = mongoose();

var app = express();

var passport = passport();

app.listen(process.env.PORT);

console.log('Server running at ' + process.env.PORT + '/');

module.exports = app;