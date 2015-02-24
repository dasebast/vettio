var App = angular.module('vettio');

App.controller('PublicCtrl', function($scope, PublicService, publicPins) {

$scope.test = "test success: i am public ctrl";

$scope.userPublic = publicPins

	// $scope.getUserPublic = function() {
	// 	PublicService.getUserPublic().then(function(responseObject) {
	// 		$scope.userPublic = responseObject;
	// 	});
	// };

});