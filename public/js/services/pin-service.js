var App = angular.module('vettio');

App.service('pinService', function($http, $q) {
	
	// this.getPins = function() {
	// 	var dfd = $q.defer();
	// 	$http({
	// 		method: 'GET',
	// 		url: '/api/pins',
	// 	}).then(function(response) {
	// 		dfd.resolve(response.data);
	// 	});
	// 	return dfd.promise;
	// };	

		this.getPins = function() {
			// console.log("00001");
			var dfd = $q.defer();
			$http.get('/api/pins').then(function(response) {
				// console.log("00002");			
				dfd.resolve(response.data.reverse());
			}, function(err) {
				console.log(err);
				dfd.reject(err);
			});
			return dfd.promise;
		};	

		this.addPin = function(info) {
			var dfd = $q.defer();
			$http({
				method: "POST",
				url: "/api/pins",
				data: info
			}).then(function(response) {
				// console.log(response + "eeeeeeeeeeeee");
				dfd.resolve(response.data);
			}, function(err) {
				dfd.reject(err);
			})
			return dfd.promise;
		};

})