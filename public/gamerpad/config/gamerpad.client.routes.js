// Invoke 'strict' JavaScript mode
'use strict';


angular.module('gamerpad').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/', {
			templateUrl: 'gamerpad/views/gamerpad.client.view.html'
		}).
		otherwise({
			redirectTo: '/'
		});
	}
]); 
