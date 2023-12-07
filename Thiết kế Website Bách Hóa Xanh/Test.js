var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.courses = ["Math", "Science", "History", "English"];
    $scope.message = "Hello, AngularJS!";
});
