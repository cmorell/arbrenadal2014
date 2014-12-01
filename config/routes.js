var index = require('../app/controllers/index');

var twitter = require('../app/controllers/backend_twitter')

exports.init = function(app) {

	// Home route
	app.get('/', index.render);

	app.post('/twitter',twitter.pushMessage);
};