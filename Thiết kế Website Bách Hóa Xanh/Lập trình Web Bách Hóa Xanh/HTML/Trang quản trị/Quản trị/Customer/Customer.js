angular.module('CustomerModule', [])
  .controller('CustomerController', function ($scope) {
    $scope.validateProductId = function () {
      var customerId = $scope.customerId;
      if (!customerId) {
        alert("Vui lòng nhập mã khách hàng!");
        return false;
      }

      var customerNumber = $scope.customerNumber;

      if (isNaN(customerNumber)) {
        alert("Số điện thoại phải là số ");
        return false;
      }

      return true;
    };
    $scope.orderList = [];
    $scope.addOrder = function () {

      if (!$scope.validateProductId()) {
        return;
      }

      var customer = {
        id: $scope.customerId,
        name: $scope.customerName,
        address: $scope.customerAddress,
        phone: $scope.customerNumber
      };

      $scope.orderList.push(customer);
    };

    $scope.editOrder = function () {
      var editedId = $scope.customerId;
      var orderList = $scope.orderList;
      var found = false;

      for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].id === editedId) {
          orderList[i].name = $scope.customerName;
          orderList[i].address = $scope.customerAddress;
          orderList[i].phone = $scope.customerNumber;
          found = true;
          break;
        }
      }

      if (!found) {
        console.log('Không tìm thấy khách hàng để sửa.');
      }
    };


    $scope.deleteOrder = function () {
      if (!$scope.validateProductId()) {
        return;
      }

      var customerId = $scope.customerId;
      var orderList = $scope.orderList;

      for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].id === customerId) {
          var confirmation = confirm("Bạn có chắc chắn muốn xóa khách hàng này?");
          if (confirmation) {
            orderList.splice(i, 1);
            alert("Khách hàng đã được xóa!");
          } else {
            alert("Hủy bỏ việc xóa khách hàng");
          }
          break;
        }
      }
    };

  });
