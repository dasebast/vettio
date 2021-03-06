var App = angular.module('vettio');

App.directive('pinBox', function() {
	return {
		restrict: 'E',
		scope: {
			pin: '=', //bind to variable on parent controller, its dynamic, changes
			// getUserPublic: '&',
		},
		templateUrl: "templates/pinBox-directive-view.html"
	}
});


// the scope object above, lets you make up a scope property (or attribute on directive tag [bob in this case]) name, the @ copies the information from the controller of whatever you set the [bob] attribute name to in the directive html tag. then you put the scope property name [bob] in curly braces on the view to make the final connection {{bob}} from the controller data -> thru the directive -> to the view

// App.directive('pinMaker', function() {
// 	return {
// 		restrict: 'E',
// 		scope: {
// 			bob: '@'
// 		},
// 		link: function(scope, elem, attrs) {
			
// 		},
// 		templateUrl: "templates/pinMaker-directive-view.html"

// 	}
// })