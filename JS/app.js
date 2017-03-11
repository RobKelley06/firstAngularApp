(function(){
  var app = angular.module("firstAngularApp", ["ngRoute"]);
  
  app.config(function($routeProvider){
    $routeProvider
      .when("/login", {
        templateUrl: "login.html",
        controller: "LoginController"
      })
      .when("/createaccount", {
         templateUrl: "createaccount.html",
         controller: "CreateAccountController"
      })
      .when("/createaccount/:response", {
          templateUrl: "createaccount.html",
          controller: "CreateAccountController"
      })
      .when("/accountcreated", {
          templateUrl: "accountcreated.html",
          controller: "CreateAccountController"
      })
      .otherwise({redirectTo:"/login"});
  });
  
}());