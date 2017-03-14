(function() {

	var app = angular.module("firstAngularApp");

	var HomeController = function($scope, $routeParams, $cookies) {
		$scope.username = $cookies.get("username");
	}
	app.controller("HomeController", HomeController);

}());