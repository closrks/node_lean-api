var express = require('express');
var app = module.exports = express();
var routes = require('./routes');

app.get('/media', routes.index);
app.get('/media/:id', routes.find);
app.post('/media', routes.insert);
app.put('/media/:id', routes.update);
app.delete('/wines/:id', routes.delete);