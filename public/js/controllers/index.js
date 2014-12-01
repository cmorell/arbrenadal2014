angular.module('coap_server.system').controller('IndexController', ['$scope', 'Global', function ($scope, Global) {
	$scope.global = Global;
}]);