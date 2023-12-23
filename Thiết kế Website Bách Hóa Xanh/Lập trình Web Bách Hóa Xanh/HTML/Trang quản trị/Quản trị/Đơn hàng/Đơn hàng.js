angular.module('DonHangModule', [])
  .controller('OrderController', function ($scope) {
    $scope.validateProductId = function () {
      var productId = $scope.productId;
      if (!productId) {
        alert("Vui lòng nhập mã sản phẩm!");
        return false;
      }

      var productPrice = $scope.productPrice;
      var productQuantity = $scope.productQuantity;

      if (isNaN(productPrice) || isNaN(productQuantity)) {
        alert("Đơn giá và số lượng phải là số!");
        return false;
      }

      return true;
    };

    $scope.addOrder = function () {
      $scope.orderList = [];

      if (!$scope.validateProductId()) {
        return;
      }
    
      var productId = $scope.productId;
      var orderList = $scope.orderList;
      var found = false;
    
      for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].id === productId) {
          orderList[i].quantity += parseInt($scope.productQuantity);
          orderList[i].total = orderList[i].price * orderList[i].quantity;
          found = true;
          break;
        }
      }    
    
      if (!found) {
        var product = {
          id: $scope.productId,
        };
        
        $scope.orderList.push(product);
      }
    };

    $scope.editOrder = function () {
      if (!$scope.validateProductId()) {
        return;
      }
      var productId = $scope.productId;
      var orderList = $scope.orderList;

      for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].id === productId) {
          orderList[i].name = $scope.productName;
          orderList[i].quantity = $scope.productQuantity;
          orderList[i].total = $scope.productPrice * $scope.productQuantity;
          break;
        }
      }
    };

    $scope.deleteOrder = function () {
      if (!$scope.validateProductId()) {
        return;
      }

      var productId = $scope.productId;
      var orderList = $scope.orderList;

      for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].id === productId) {
          var confirmation = confirm("Bạn có chắc chắn muốn xóa sản phẩm này?");
          if (confirmation) {
            orderList.splice(i, 1);
            alert("Sản phẩm đã được xóa!");
          } else {
            alert("Hủy bỏ việc xóa sản phẩm.");
          }
          break;
        }
      }
    };

  });
