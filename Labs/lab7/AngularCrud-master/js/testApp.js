(function () {
	'use strict';
	var app = angular.module('testApp', [])
		.controller('myController', ['$scope', '$http', '$log', '$filter',
			// $scope is to display data in the view.
			// $http is to make GET call.
			// $log is to leave debug statements in the console.
			// $filter is to eliminate duplicates while editing.
			function ($scope, $http, $log, $filter) {
				$scope.heading = 'My Library';
				
				$scope.error = false;
				$scope.books = [];

				$http.get('/json/books.json').then(function (response) {
					// Success Handling
					$log.debug(response);
					$scope.books = response.data.books;
				}, function (response) {
					// Error Handling
					$log.debug(response);
					$scope.error = true;
				});

				$scope.edit = function (book) {
					
				};

				$scope.delete = function (book) {
					
				};

				$scope.new = function () {
					
					
					
				};

				$scope.submitNew = function () {
					
				};

				$scope.submitEdit = function () {
					
				};
			}
		]);
}());