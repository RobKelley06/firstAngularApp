(function() {

	var app = angular.module("firstAngularApp");

	var LoginController = function($scope, $http, $location, $routeParams, $cookieStore) {
		
		$scope.response = $routeParams.response;
		
		$scope.login = function(username, password) { 

			return $http.get(
					"http://localhost:8080/login?username=" + username
							+ "&password=" + password)
					.then(function(response) {
						if (response.data != "Successful") {
							$location.path("/login/"+response.data);
						}
						else {
							$cookieStore.put("username",username);
							$location.path("/home");							
						}
						return response.data;
						});
		};
	}

	app.controller("LoginController", LoginController);

}());