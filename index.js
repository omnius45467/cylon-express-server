var express = require('express');
var routes = require('./routes');

var app = express();

app.use('/', routes);

app.listen(3000);
console.log('Serving over port 3000');