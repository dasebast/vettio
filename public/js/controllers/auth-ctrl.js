var App = angular.module('vettio');

App.controller('AuthCtrl', function($scope, $location, AuthService) {
	
	$scope.test = 'yolo';

	$scope.clickLogin = function() {
		AuthService.login($scope.newUser).then(function() {
			$location.path('/dash');
		}); //.catch(function(err) {
			//$scope.loginError = true;
		//});
	};

	$scope.clickRegister = function() {
		AuthService.register($scope.newUser).then(function() {
			$location.path('/dash');

			// console.log(response + "ctrl");
			// $scope.state = 'login';
			// $scope.registerSuccessful = true;
		}); //.catch(function(err) {
			// $scope.regError = true;
		// });
	};

	// $scope.changeState = function(newState) {
	// 	$scope.loginError = false;
	// 	$scope.regError = false;
	// 	$scope.state = newState;
	// };


});