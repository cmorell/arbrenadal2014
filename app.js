/**
* Module dependencies.
*/
var express = require('express');
var fs = require('fs');
/**
* Main application entry file.
* Please note that the order of loading is important.
*/
// Load Configurations
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/config');
var app = express();
//Initialize Express
require('./config/express')(app);
//Initialize Routes
require('./config/routes').init(app);
//Initialize Coap Server
require('./coap_server/app.js');

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);
//expose app
exports = module.exports = app;