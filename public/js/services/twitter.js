//twitter service used for articles REST endpoint
angular.module('coap_server.twitter').factory("Twitter", ['$resource','$http', function($resource,$http) {
	var Twitter = $resource('twitter/:twitterId', {
		twitterId: '@id'
	}, {
		update: {
			method: 'PUT'
		}
	});

	Twitter.pushMessage = function(name, message){

		console.log("en el services name:"+name+ " y el mensaje:"+message);


		return $http.post('/twitter', {msg:message,name:name});
	};

	return Twitter;
}]);