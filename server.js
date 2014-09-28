var express = require('express');
var app = express();

app.get('/api/data', function(req, res) {
	res.send(handleArgs(req.query));
});

var server = app.listen(3000, function() {
	console.log('Listening on port %d', server.address().port);
});

var handleArgs = function(params) {
	var json = {};
	for (key in params) {
		json[key] = params[key];
	}
	return json;
}