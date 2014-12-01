angular.module('coap_server.twitter').controller('TwitterController', ['$scope', '$routeParams', '$location', 'Global', 'Twitter', function ($scope, $routeParams, $location, Global, Twitter) {
	$scope.global = Global;



	$scope.pushMessage = function() {
		console.log("hola:"+this.name +" tu mensaje es:"+this.missatge);

		Twitter.pushMessage(this.name,this.missatge).
		success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		}).
		error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		});
	};
	




}]);