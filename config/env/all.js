var path = require('path');
rootPath = path.normalize(__dirname + '/../..');
module.exports = {
	root: rootPath,
	app: {
	name: "coap_server",
	},
	port: process.env.PORT || 3000
}