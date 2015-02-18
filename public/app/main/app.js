var App = angular.module('vettio', ["ngRoute"]);

App.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'app/templates/register/registerTmpl.html',
		controller: 'registerCtrl'
	})
	.otherwise('/');


});

