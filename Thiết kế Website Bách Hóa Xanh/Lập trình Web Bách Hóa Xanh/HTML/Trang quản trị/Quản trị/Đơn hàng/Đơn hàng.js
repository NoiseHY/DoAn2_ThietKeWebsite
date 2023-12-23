angular.module('DonHangModule', [])
  .controller('OrderController', function ($scope) {
    $scope.validateProductId = function () {
      var productId = $scope.productId;
      if (!productId) {
        alert("Vui lòng nhập mã đơn hàng!");
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

    $scope.orderList = [];

    $scope.addOrder = function () {
      if (!$scope.validateProductId()) {
        return;
      }

      var donhang = {
        id: $scope.productId,
        name: $scope.productName,
        price: $scope.productPrice,
        quantity: $scope.productQuantity
      };

      $scope.orderList.push(donhang);
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
          var confirmation = confirm("Bạn có chắc chắn muốn xóa đơn hàng này?");
          if (confirmation) {
            orderList.splice(i, 1);
            alert("Đơn hàng đã được xóa!");
          } else {
            alert("Hủy bỏ việc xóa đơn hàng");
          }
          break;
        }
      }
    };

  });
