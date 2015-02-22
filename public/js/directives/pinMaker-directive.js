var App = angular.module('vettio');

App.directive('pinMaker', function() {
	return {
		restrict: 'E',
		scope: {},
		link: function(scope, elem, attrs) {
			scope.appName = "vettio";
		},
		templateUrl: "templates/pinMaker-directive-view.html"

	}
})

//revisit this