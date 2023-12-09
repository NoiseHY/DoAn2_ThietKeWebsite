var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'Test2.html',
      controller: 'HomeController'
    })
    .when('/about', {
      templateUrl: 'Test 3.html',
      controller: 'AboutController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});

app.controller('HomeController', function($scope) {
    console.log('HomeController loaded');
    $scope.message = 'Welcome to the Home Page!';
  });
  
  app.controller('AboutController', function($scope) {
    console.log('AboutController loaded');
    $scope.message = 'Welcome to the About Page!';
  });
  