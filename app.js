
/**
 * Module dependencies.
 */

var express = require('express')
var app = express();

var media = require('./media-api');

app.use(media);

app.listen(3000);
console.log('listening on port 3000');
