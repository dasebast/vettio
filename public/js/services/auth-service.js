var App = angular.module('vettio');

App.service('AuthService', function($q, $http) {

	this.login = function(email, password) {
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/auth',
			data: {
				email: email,
				password: password
			}
		}).then(function(response) {
			dfd.resolve(response.data);
		}).catch(function(err) {
			console.log("Error logging in.");
			dfd.reject(err);
		});
		return dfd.promise;
	};


	this.register = function(email,  password) {
		var dfd = $q.defer();
		$http({
			method: 'POST',
			url: '/api/register',
			data: {
				email: email,
				password: password
			}
		}).then(function(response) {
			console.log(response);
			dfd.resolve(response.data);

		});
		return dfd.promise;
	};


	this.getUser = function(userId){
		var dfd = $q.defer();
		$http.get("/api/getUserData/" + userId).then(function(data){
			dfd.resolve(data.data)
		}, function(err){
			dfd.reject(err)
		})
		return dfd.promise
	}
});