var App = angular.module('vettio');

App.controller('DashCtrl', function($scope, $timeout, pinService) {
	
	$scope.dash = "this is the dash view";


	$scope.getPins = function() {
		// console.log("pinssss");
		pinService.getPins().then(function(res) {
			$scope.pins = res;
			console.log($scope.pins.length);
		});
	};

	$scope.addPin = function() {
		// console.log($scope.pinForm);
		pinService.addPin($scope.pinForm).then(function(response) {
			// reset form fields after submission
			$scope.pinForm.name = '';
			$scope.pinForm.image = '';
			$scope.pinForm.affiliate = '';
			$scope.pinForm.blurb = '';
			$scope.pinForm.coupon = '';
			$scope.pinForm.tags = '';
			// refresh current pins list
			$scope.getPins();
		});
	};

});
