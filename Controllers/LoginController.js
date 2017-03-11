(function(){
  
  var app = angular.module("firstAngularApp");

  var LoginController = function($scope, $http) {

	    var login = function(username, password)  {
	      return $http.get("http://localhost:8080/login?username="+username+"&password="+password)
	        .then(function(response){
	          return response.data;
	        });
	    };
  }
  

  app.controller("LoginController", LoginController);

}());