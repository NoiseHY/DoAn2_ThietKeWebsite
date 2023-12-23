angular.module('ProductModule', [])
  .controller('ProductController', function ($scope) {
    $scope.validateProductId = function () {
      var productId = $scope.productId;
      if (!productId) {
        alert("Vui lòng nhập mã sản phẩm !");
        return false;
      }

      var productQuantity = $scope.productQuantity;
      var productPrice = $scope.productPrice;

      if (isNaN(productQuantity) || isNaN(productPrice)) {
        alert("Vui lòng nhập số vào đơn giá và số lượng  ");
        return false;
      }

      return true;
    };
    $scope.orderList = [];
    $scope.addOrder = function () {

      if (!$scope.validateProductId()) {
        return;
      }

      var product = {
        id: $scope.productId,
        name: $scope.productName,
        price: $scope.productPrice,
        quantity: $scope.productQuantity
      };

      $scope.orderList.push(product);
    };

    $scope.editOrder = function () {
      var editedId = $scope.productId;
      var orderList = $scope.orderList;
      var found = false;

      for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].id === editedId) {
          orderList[i].name = $scope.productName;
          orderList[i].address = $scope.productPrice;
          orderList[i].phone = $scope.productQuantity;
          found = true;
          break;
        }
      }

      if (!found) {
        console.log('Không tìm thấy sản phẩm  để sửa.');
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
          var confirmation = confirm("Bạn có chắc chắn muốn xóa sản phẩm  này?");
          if (confirmation) {
            orderList.splice(i, 1);
            alert("sản phẩm  đã được xóa!");
          } else {
            alert("Hủy bỏ việc xóa sản phẩm ");
          }
          break;
        }
      }
    };

  });
