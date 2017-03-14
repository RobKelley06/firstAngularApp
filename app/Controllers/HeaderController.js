(function() {

	var app = angular.module("firstAngularApp");

	var HomeController = function($scope, $routeParams, $cookieStore) {
		$scope.username = $cookieStore.get("username");
	}
	app.controller("HomeController", HomeController);

}());