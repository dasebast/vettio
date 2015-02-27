var App = angular.module('vettio', ["ui.router"]);

App.config(function($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('auth', {
			url: '/',
			templateUrl: 'templates/auth-view.html',
			controller: 'AuthCtrl'
		})
		.state('dash', {
			url: '/dash',
			templateUrl: 'templates/dash-view.html',
			controller: 'DashCtrl'
			// resolve: {
			// 	user: function($route, AuthService){
			// 		return AuthService.getUser($route.current.params.id)
			// 	}
			// }
		})
		.state('username', {
			url: '/:username',
			templateUrl: 'templates/public-view.html',
			controller: 'PublicCtrl',
			resolve: {
				publicPins: function(PublicService, $stateParams) {
					return PublicService.getUserPublic($stateParams.username);
				}
			}
		})


});

// register
// dashboard route
// make a pin
// when they login it takes them to their dash

38645 - 29795