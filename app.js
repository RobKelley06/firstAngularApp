(function(){
  var app = angular.module("firstAngularApp", ["ngRoute", "ngCookies"]);
  app.config(function($routeProvider){
    $routeProvider
      .when("/login", {
        templateUrl: "/Templates/login.html",
        controller: "LoginController"
      })
      .when("/home", {
    	templateUrl: "/Templates/home.html",
    	controller: "HomeController"
      })
      
      .when("/login/:response", {
          templateUrl: "/Templates/login.html",
          controller: "LoginController"
        })
      .when("/createaccount", {
         templateUrl: "/Templates/createaccount.html",
         controller: "CreateAccountController"
      })
      .when("/createaccount/:response", {
          templateUrl: "/Templates/createaccount.html",
          controller: "CreateAccountController"
      })
      .when("/accountcreated", {
          templateUrl: "/Templates/accountcreated.html",
          controller: "CreateAccountController"
      })
      .otherwise({redirectTo:"/login"});
  });
  
}());