angular.module('AccountModule', [])
  .controller('AccountController', function ($scope) {
    $scope.validateaccountId = function () {
      var accountId = $scope.accountId;
      if (!accountId) {
        alert("Vui lòng nhập mã tài khoản !");
        return false;
      }


      return true;
    };
    $scope.orderList = [];
    $scope.addOrder = function () {

      if (!$scope.validateaccountId()) {
        return;
      }

      var account = {
        id: $scope.accountId,
        name: $scope.accountName,
        password: $scope.accountPassword
      };

      $scope.orderList.push(account);
    };

    $scope.editOrder = function () {
      var editedId = $scope.accountId;
      var orderList = $scope.orderList;
      var found = false;

      for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].id === editedId) {
          orderList[i].name = $scope.accountName;
          orderList[i].address = $scope.accountPassword;
          found = true;
          break;
        }
      }

      if (!found) {
        console.log('Không tìm thấy tài khoản để sửa.');
      }
    };


    $scope.deleteOrder = function () {
      if (!$scope.validateaccountId()) {
        return;
      }

      var accountId = $scope.accountId;
      var orderList = $scope.orderList;

      for (var i = 0; i < orderList.length; i++) {
        if (orderList[i].id === accountId) {
          var confirmation = confirm("Bạn có chắc chắn muốn xóa tài khoản này?");
          if (confirmation) {
            orderList.splice(i, 1);
            alert("tài khoản đã được xóa!");
          } else {
            alert("Hủy bỏ việc xóa tài khoản ");
          }
          break;
        }
      }
    };

  });
