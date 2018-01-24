'use strict';

/**
 * @ngdoc function
 * @name webApp.controller:TeacherIndexCtrl
 * @description
 * # TeacherIndexCtrl
 * Controller of the webApp
 */
angular.module('webApp')
  .controller('TeacherIndexCtrl', function ($scope, $http, $state) {
    var self  = this;

    self.init = function () {
      var url = 'http://127.0.0.1:8080/Teacher/';                // 定义url
      $http.get(url)                                             // 发起get请求
        .then(function success (response) {
          console.log('success');
          console.log(response);
          $scope.list = response.data;                           // 成功，将请求到的数据赋给$scope
        }, function error (response) {
          console.log('error' + url);                            // 失败，打印错误信息
          console.log(response);
        });
    };

    self.delete = function (teacher) {
      var url = 'http://127.0.0.1:8080/Teacher/' + teacher.id;   // 拼接url
      $http.delete(url)
        .then(function success (response) {
          console.log('success');
          $state.reload();                                       // 成功，刷新页面
        }, function error (response) {
          console.log('error' + url);
          console.log(response);                                 // 失败，打印错误信息
        });
    };

    $scope.delete = self.delete;                                 // 将delete方法赋给$scope

    self.init();
  });
