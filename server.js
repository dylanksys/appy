var express = require ('express');

var socool = require('../routers/socool');

var app = express();

app.use('/', socool);

app.listen(8000, function () {
	console.log('appy listening on port 8000');
};
