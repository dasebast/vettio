var App = angular.module('vettio');

App.directive('pinContainer', function() {
	return {
		restrict: 'E',
		scope: {
			pins: '=',
			// addPin: '&'
		},
		transclude: true,
		templateUrl: 'templates/pinContainer-directive-view.html',
		controller: function($scope, PublicService) {
			$scope.potato = 'pin container directive view';
			// $scope.pinInfo = PublicService.getUserPublic()
			// console.log($scope.pins);
		}
	}


});