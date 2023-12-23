var app = angular.module('myApp', ['ngRoute', 'DonHangModule'],);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/quan-ly-khach-hang', {
      templateUrl: 'Quản trị/Customer/Customer.html',
      controller: 'QuanLyKhachHangController',
      
    })
    .when('/quan-ly-dh', {
      templateUrl: 'Quản trị/Đơn hàng/Đơn hàng.html',
      controller: 'OrderController',
     
    })
    .when('/quan-ly-san-pham', {
      templateUrl: 'Quản trị/Product/Product.html',
      controller: 'QuanLySanPhamController',
      
    })
    .when('/admin', {
      templateUrl: 'Quản trị/Home/Home.html', 
      controller: 'QuanLyAdminController', 
      
    })
    .otherwise({
      redirectTo: '/admin'
    });
});


app.controller('QuanLySanPhamController', function ($scope, $location) {
  $scope.navigateToPageSP = function() {
    console.log('Clicked navigateToPageSP');
    $location.path('/quan-ly-san-pham');
  };
});

app.controller('QuanLyKhachHangController', function ($scope, $location) {
  $scope.navigateToPageKH = function() {
    console.log('Clicked navigateToPageKH');
    $location.path('/quan-ly-khach-hang');
  };
});

app.controller('QuanLyAdminController', function($scope, $location) {
  $scope.navigateToAdmin = function() {
    console.log('Clicked navigateToAdmin');
    $location.path('/quan-ly-admin');
  };
});

app.controller('QuanlyDHController', function($scope, $location){
  $scope.navigateToDH = function() {
    console.log('Clicked navigateToDH');
    $location.path('/quan-ly-dh');
  };
});



