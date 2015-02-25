var App = angular.module('vettio');

App.service('PublicService', function($http, $q) {

	this.getUserPublic = function(username) {
		var dfd = $q.defer();
		$http.get('/api/' + username).then(function(response) {
			console.log(response.data);
			dfd.resolve(response.data);
		}, function(err) {
			dfd.reject(err);
		});
		return dfd.promise;
	};


})

