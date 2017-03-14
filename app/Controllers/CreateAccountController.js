(function() {

	var app = angular.module("firstAngularApp");

	var CreateAccountController = function($scope, $http, $location, $routeParams) {
		
		$scope.response = $routeParams.response;
		
		$scope.createAccount = function(username, password, cpassword, email, cemail) { 
			var emaildetails = "";
			if (email && cemail) {
				emaildetails = "&email=" + email + "&cemail=" + cemail;
			}
			return $http.get(
					"http://localhost:8080/createAccount?username=" + username
							+ "&password=" + password + "&cpassword="
							+ cpassword + emaildetails)
					.then(function(response) {
						if (response.data != "Successful") {
							$location.path("/createaccount/"+response.data);
						}
						else {
							$location.path("/accountcreated");							
						}
						return response.data;
						});
		};
	}

	app.controller("CreateAccountController", CreateAccountController);

}());