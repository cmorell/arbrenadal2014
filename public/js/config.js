//Setting up route
angular.module('coap_server').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'views/index.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
	]);
//Setting HTML5 Location Mode
angular.module('coap_server').config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix("!");
	}
	]);