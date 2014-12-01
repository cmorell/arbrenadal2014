
var coap = require('coap') // or coap
exports.pushMessage = function(req, res){

	var message = req.body.msg;
	var name = req.body.name;

	var coap_request = coap.request({url:'coap://localhost/Matteo',method: 'POST',query:'message='+message+"&name="+name});
	coap_request.on('response', function(response) {
		response.pipe(process.stdout)
		response.on('end', function() {
			process.exit(0)
		})
	})
	coap_request.end(message);

	res.jsonp("1");




};