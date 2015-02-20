var App = angular.module('vettio', ["ngRoute"]);

App.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/auth-view.html',
		controller: 'AuthCtrl'
	})
	.when('/dash', {
		templateUrl: 'templates/dash-view.html',
		controller: 'DashCtrl'
		// resolve: {
		// 	user: function($route, AuthService){
		// 		return AuthService.getUser($route.current.params.id)
		// 	}
		// }
	})
	.otherwise('/');


});

// register
// dashboard route
// make a pin
// when they login it takes them to their dash