﻿(function () {
	'use strict';
	var app = angular.module('testApp', [])
		.controller('myController', ['$scope', '$http', '$log', '$filter',
			// $scope is to display data in the view.
			// $http is to make GET call.
			// $log is to leave debug statements in the console.
			// $filter is to eliminate duplicates while editing.
			function ($scope, $http, $log, $filter) {
				$scope.heading = 'My Library';
				$scope.view = '';
				$scope.error = false;
				$scope.books = 
				    [
                        {
                            "title": "The Princess Bride",
                            "author": "William S. Goldman",
                            "pageCount": 512,
                            "starRating": 4.4
                        },
                        {
                            "title": "Friday Night Lights",
                            "author": "H. G. Bissinger",
                            "pageCount": 432,
                            "starRating": 3.7
                        },
                        {
                            "title": "A Game of Thrones",
                            "author": "George R. R. Martin",
                            "pageCount": 807,
                            "starRating": 4.8
                        },
                        {
                            "title": "Stranger in a Strange Land",
                            "author": "Robert A. Heinlein",
                            "pageCount": 525,
                            "starRating": 4.2
                        },
                        {
                            "title": "Harry Potter and the Goblet of Fire",
                            "author": "J. K. Rowling",
                            "pageCount": 757,
                            "starRating": 4.9
                        },
                        {
                            "title": "Starship Troopers",
                            "author": "Robert A. Heinlein",
                            "pageCount": 432,
                            "starRating": 4.9
                        }
				    ];

				//$http.get('/json/books.json').then(function (response) {
				//	// Success Handling
				//	$log.debug(response);
				//	$scope.books = response.data.books;
				//}, function (response) {
				//	// Error Handling
				//	$log.debug(response);
				//	$scope.error = true;
				//});

				$scope.edit = function (book) {
				    $scope.view = 'Edit';
				    $scope.editBook = book;
				    $scope.heading = 'Edit!';
				};

				$scope.delete = function (book) {
					
				};

				$scope.new = function () {
				    $scope.view = 'New';
				    $scope.newBook = {}; //open and closed brace is a new object
				    $scope.books.push($scope.newBook); //adding to end of array.  this is called 'push'.  we forgot scope.BOOKS!
				    $scope.heading = 'New Book!';
				};

				$scope.submitNew = function () {
				    for (var i = 0; i < $scope.books.length - 1; i++) {
				        if ($scope.newBook.title === $scope.books[i].title &&
                            $scope.newBook.author === $scope.books[i].author) {
				            $scope.books.splice($scope.books.length - 1, 1);
				            $scope.view = '';
				            $scope.heading = 'My Library';
				        }
				    }
				};

				$scope.submitEdit = function () {
					
				};
			}
		]);
}());