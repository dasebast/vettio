var App = angular.module('vettio');

App.controller('DashCtrl', function($scope, pinService) {
	
	$scope.dash = "this is the dash view";

	$scope.hunger = "i am hungry";

	$scope.jones = {
		name: 'cannoli'
	};

	$scope.getPins = function() {
		console.log("pinssss");
		pinService.getPins().then(function(res) {
			$scope.pins = res;
			console.log($scope.pins);
		});
	};

});
