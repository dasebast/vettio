var App = angular.module('vettio');

App.controller('DashCtrl', function($scope, $timeout, pinService) {
	
	$scope.dash = "this is the dash view";

	$scope.hunger = "i am hungry";


	$scope.getPins = function() {
		console.log("pinssss");
		pinService.getPins().then(function(res) {
			$scope.pins = res;
			console.log($scope.pins.length);
		});
	};

	$scope.addPin = function() {
		// console.log($scope.pinForm);
		pinService.addPin($scope.pinForm).then(function(response) {
			console.log("why not working");
			$scope.getPins();
		});
	};

});
