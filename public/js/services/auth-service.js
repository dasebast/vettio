var App = angular.module('vettio');

App.service('AuthService', function($q, $http) {

	this.login = function(newUser) {
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/auth',
			data: {
				email: newUser.email,
				password: newUser.password
			}
		}).then(function(response) {
			dfd.resolve(response.data);
		}).catch(function(err) {
			alert("Error logging in.");
			console.log("Error logging in.");
			dfd.reject(err);
		});
		return dfd.promise;
	};


	this.register = function(newUser) {
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/register',
			data: newUser
		}).then(function(response) {
			console.log(response);
			dfd.resolve(response.data);

		});
		return dfd.promise;
	};


	this.getLoggedInUser = function(userId){
		var dfd = $q.defer();
		$http.get("/api/getLoggedInUser").then(function(data){
			dfd.resolve(data.data)
		}, function(err){
			dfd.reject(err)
		})
		return dfd.promise
	}
});