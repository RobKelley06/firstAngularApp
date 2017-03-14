(function() {
	
	var accountDetails = function($http, $cookieStore) {

		var getData = function() {
			var username = $cookieStore.get("username");
			return $http.get("http://localhost:8080/details?username="+username)
			.then(function(response) {
				return response.data;
			})
		}
		
		var setUsername = function(username) {
			$cookieStore.put("username",username);
		}
		

		return {
			getData: getData,
			setUsername: setUsername
		    
		};
		
	};
	

	var module = angular.module("firstAngularApp");
	module.factory("accountDetails", accountDetails);
	
}());