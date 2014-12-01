const coap        = require('coap')
, server      = coap.createServer({ type: 'udp6' });
parse = require('coap-packet').parse;

var twitter_const = require('./config/twitter');
var twitterAPI = require('node-twitter-api');


var twitter = new twitterAPI({
	consumerKey: twitter_const.consumerKey,
	consumerSecret: twitter_const.consumerSecret,
	callback: 'http://yoururl.tld/something'
});
server.on('request', function(req, res) {
	console.log("he rebut una peticó coap");
    console.log(JSON.stringify(req));

   
    var array_options = req.options;

   

    var first_argument = array_options[0].value.toString('ascii');

    var second_argument = array_options[1].value.toString('ascii');

    console.log("second_argument"+second_argument);
    var array_first = first_argument.split('=');
    var array_second = second_argument.split('=');

    var message="";

    for (var i = 1 ; i < array_first.length; i++) {
        message=message+array_first[i];
        if(i < array_first.length - 1 ){
            message = message + "="; 
        }
    }

    var name="";

    for (var i = 1 ; i < array_second.length; i++) {
        console.log("que valor tiene:"+array_second[i]);
        name=name+array_second[i];
        if(i < array_second.length - 1 ){
            name = name + "="; 
        }
    }

    console.log("message="+message);
    console.log("name="+name);


	var _status = name + ", "+message;


	twitter.statuses("update", {
        status: _status
    },
    twitter_const.accessToken,
    twitter_const.accessTokenSecret,
    function(error, data, response) {
        if (error) {
            // something went wrong
            console.log("error");
        } else {
            // data contains the data sent by twitter
            console.log("oks");
            res.end('Hello');
        }
    }
	);


})
server.listen(function() {
	console.log('server started')
})
