angular.module('DonHangModule', [])
  .controller('OrderController', function ($scope) {
    $scope.validateProductId = function () {
      var productId = $scope.productId;
      if (!productId) {
        alert("Vui lòng nhập mã đơn hàng!");
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
        customer: $scope.productCustomer,
        time: $scope.productTime
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
          orderList[i].customer = $scope.productCustomer;
          orderList[i].time = $scope.productCustomer * $scope.productTime;
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
