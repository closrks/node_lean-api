var express = require('express');
var app = module.exports = express();
var routes = require('./routes');

app.get('/media', routes.all);

app.get('/media/:id', routes.id);